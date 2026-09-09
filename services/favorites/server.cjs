const { createServer } = require('node:http');
const { createHmac, timingSafeEqual } = require('node:crypto');
const { DatabaseSync } = require('node:sqlite');

const ID = /^[1-9]\d{0,19}$/;
const MAX_FAVORITES = 200;
const SIGNED_FIELDS = ['signature', 'shop', 'timestamp', 'logged_in_customer_id', 'path_prefix'];
const hmac = (secret, value) => createHmac('sha256', secret).update(value).digest('hex');
function equalHex(actual, expected) {
  return typeof actual === 'string' && /^[a-f0-9]{64}$/.test(actual) && timingSafeEqual(Buffer.from(actual, 'hex'), Buffer.from(expected, 'hex'));
}
function failure(status, message) { return Object.assign(new Error(message), { status }); }

// Shopify signs decoded, sorted query pairs. Repeated non-reserved values join with commas.
function authenticate(params, { secret, shop, pathPrefix, now }) {
  if (SIGNED_FIELDS.some((key) => params.getAll(key).length !== 1)) throw failure(403, 'Invalid proxy request');
  const pairs = [...new Set(params.keys())].filter((key) => key !== 'signature')
    .map((key) => `${key}=${params.getAll(key).join(',')}`).sort().join('');
  if (!equalHex(params.get('signature'), hmac(secret, pairs))) throw failure(403, 'Invalid proxy request');
  if (params.get('shop') !== shop || params.get('path_prefix') !== pathPrefix) throw failure(403, 'Invalid proxy request');
  const timestamp = params.get('timestamp');
  if (!/^\d{10}$/.test(timestamp) || Math.abs(now() / 1000 - Number(timestamp)) > 300) throw failure(403, 'Expired proxy request');
  const customerId = params.get('logged_in_customer_id');
  if (!ID.test(customerId)) throw failure(401, 'Sign in required');
  return { shop, customerId };
}

function csrfToken(identity, secret, now) {
  const expires = Math.floor(now() / 1000) + 900;
  return `${expires}.${hmac(secret, `favorites:${identity.shop}:${identity.customerId}:${expires}`)}`;
}
function verifyCsrf(token, identity, secret, now) {
  if (typeof token !== 'string') return false;
  const [expires, digest, extra] = token.split('.');
  return extra === undefined && /^\d{10}$/.test(expires) && Number(expires) > now() / 1000
    && Number(expires) <= now() / 1000 + 900
    && equalHex(digest, hmac(secret, `favorites:${identity.shop}:${identity.customerId}:${expires}`));
}

function createFavoritesService({ secret, shop, databasePath, pathPrefix = '/apps/yarn-favorites', now = Date.now }) {
  if (!secret || secret.length < 24 || !/^[a-z0-9][a-z0-9-]*\.myshopify\.com$/.test(shop || '') || !databasePath) throw new Error('Favorites service configuration is incomplete');
  const db = new DatabaseSync(databasePath);
  db.exec(`PRAGMA journal_mode = WAL; PRAGMA busy_timeout = 5000;
    CREATE TABLE IF NOT EXISTS favorites (
      shop TEXT NOT NULL, customer_id TEXT NOT NULL, entity_type TEXT NOT NULL CHECK(entity_type IN ('project', 'product')),
      entity_id TEXT NOT NULL, created_at INTEGER NOT NULL,
      PRIMARY KEY (shop, customer_id, entity_type, entity_id)
    )`);
  const select = db.prepare('SELECT entity_type AS type, entity_id AS id FROM favorites WHERE shop = ? AND customer_id = ? ORDER BY created_at DESC, entity_type, entity_id');
  const add = db.prepare('INSERT OR IGNORE INTO favorites VALUES (?, ?, ?, ?, ?)');
  const remove = db.prepare('DELETE FROM favorites WHERE shop = ? AND customer_id = ? AND entity_type = ? AND entity_id = ?');
  const send = (res, status, data) => {
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store, private', 'X-Content-Type-Options': 'nosniff' });
    res.end(JSON.stringify(data));
  };
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://localhost');
      if (url.pathname === '/healthz' && req.method === 'GET') { send(res, 200, { ok: true }); return; }
      if (url.pathname !== '/favorites' && url.pathname !== '/favorites/') throw failure(404, 'Not found');
      if (!['GET', 'POST'].includes(req.method)) throw failure(405, 'Method not allowed');
      const identity = authenticate(url.searchParams, { secret, shop, pathPrefix, now });
      if (req.method === 'POST') {
        if (req.headers['content-type']?.split(';')[0].trim().toLowerCase() !== 'application/json') throw failure(415, 'JSON required');
        if (Number(req.headers['content-length']) > 4096) throw failure(413, 'Request too large');
        let bytes = 0;
        const chunks = [];
        for await (const chunk of req) {
          bytes += chunk.length;
          if (bytes > 4096) throw failure(413, 'Request too large');
          chunks.push(chunk);
        }
        let body;
        try { body = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch (_) { throw failure(400, 'Invalid JSON'); }
        if (!body || !verifyCsrf(body.csrfToken, identity, secret, now)) throw failure(403, 'Invalid request token');
        if (!['add', 'remove'].includes(body.action) || !['project', 'product'].includes(body.entity?.type) || typeof body.entity?.id !== 'string' || !ID.test(body.entity.id)) throw failure(400, 'Invalid favorite');
        // Account identity is always signed by Shopify; never accept an account ID in the body.
        if (Object.keys(body).some((key) => !['action', 'entity', 'csrfToken'].includes(key)) || Object.keys(body.entity).some((key) => !['type', 'id'].includes(key))) throw failure(400, 'Unexpected field');
        const args = [identity.shop, identity.customerId, body.entity.type, body.entity.id];
        db.exec('BEGIN IMMEDIATE');
        try {
          if (body.action === 'remove') remove.run(...args);
          else {
            const current = select.all(identity.shop, identity.customerId);
            if (current.length >= MAX_FAVORITES && !current.some((entity) => entity.type === body.entity.type && entity.id === body.entity.id)) throw failure(409, 'Favorite limit reached');
            add.run(...args, now());
          }
          db.exec('COMMIT');
        } catch (error) { db.exec('ROLLBACK'); throw error; }
      }
      send(res, 200, { authenticated: true, favorites: select.all(identity.shop, identity.customerId), csrfToken: csrfToken(identity, secret, now) });
    } catch (error) {
      send(res, error.status || 500, { authenticated: error.status === 401 ? false : undefined, error: error.status ? error.message : 'Service unavailable' });
    }
  });
  server.on('close', () => db.close());
  server.requestTimeout = 15000;
  return server;
}

if (require.main === module) {
  const server = createFavoritesService({ secret: process.env.SHOPIFY_API_SECRET, shop: process.env.SHOPIFY_SHOP, databasePath: process.env.FAVORITES_DATABASE_PATH, pathPrefix: process.env.SHOPIFY_PROXY_PATH });
  server.listen(Number(process.env.PORT || 3001), process.env.HOST || '127.0.0.1', () => process.stdout.write('Favorites service listening\n'));
  for (const signal of ['SIGTERM', 'SIGINT']) process.once(signal, () => server.close());
}
module.exports = { createFavoritesService };

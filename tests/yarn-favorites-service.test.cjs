const test = require('node:test');
const assert = require('node:assert/strict');
const { createHmac } = require('node:crypto');
const { mkdtempSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join } = require('node:path');
const { once } = require('node:events');
const { createFavoritesService } = require('../services/favorites/server.cjs');

const secret = 'test-only-favorites-secret-123456789';
const shop = 'test-shop.myshopify.com';
const fixedTime = 1788990000000;
function signedQuery(customer = '123', overrides = {}, extra = []) {
  const params = new URLSearchParams({ shop, logged_in_customer_id: customer, path_prefix: '/apps/yarn-favorites', timestamp: String(fixedTime / 1000), ...overrides });
  for (const pair of extra) params.append(...pair);
  const message = [...new Set(params.keys())].map((key) => `${key}=${params.getAll(key).join(',')}`).sort().join('');
  params.set('signature', createHmac('sha256', secret).update(message).digest('hex'));
  return params;
}
async function setup(t) {
  const directory = mkdtempSync(join(tmpdir(), 'yarn-favorites-'));
  let server;
  let base;
  const start = async () => {
    server = createFavoritesService({ secret, shop, databasePath: join(directory, 'favorites.sqlite'), now: () => fixedTime });
    server.listen(0, '127.0.0.1'); await once(server, 'listening');
    base = `http://127.0.0.1:${server.address().port}/favorites`;
  };
  const stop = async () => { const closed = once(server, 'close'); server.close(); server.closeAllConnections(); await closed; };
  await start();
  t.after(async () => { await stop(); rmSync(directory, { recursive: true, force: true }); });
  return {
    restart: async () => { await stop(); await start(); },
    get: (params = signedQuery()) => fetch(`${base}?${params}`),
    post: (body, params = signedQuery(), headers = {}) => fetch(`${base}?${params}`, { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: typeof body === 'string' ? body : JSON.stringify(body) }),
  };
}

test('favorites persist across clients and service restart, deduplicate and remove independently by entity type', async (t) => {
  const api = await setup(t);
  const first = await api.get();
  assert.equal(first.headers.get('cache-control'), 'no-store, private');
  const { csrfToken } = await first.json();
  const body = { action: 'add', entity: { type: 'project', id: '456' }, csrfToken };
  assert.equal((await api.post(body)).status, 200);
  assert.equal((await api.post(body)).status, 200);
  await api.post({ ...body, entity: { type: 'product', id: '456' } });
  await api.restart();
  assert.equal((await (await api.get()).json()).favorites.length, 2);
  assert.deepEqual((await (await api.get(signedQuery('999'))).json()).favorites, []);
  const deleted = await (await api.post({ ...body, action: 'remove' })).json();
  assert.deepEqual(deleted.favorites, [{ type: 'product', id: '456' }]);
  assert.equal((await api.post({ ...body, action: 'remove' })).status, 200);
});

test('rejects anonymous, forged, stale, future, cross-shop and ambiguous signed identities', async (t) => {
  const api = await setup(t);
  assert.equal((await api.get(signedQuery(''))).status, 401);
  const forged = signedQuery(); forged.set('logged_in_customer_id', '999');
  assert.equal((await api.get(forged)).status, 403);
  for (const overrides of [{ timestamp: String(fixedTime / 1000 - 301) }, { timestamp: String(fixedTime / 1000 + 301) }, { shop: 'other.myshopify.com' }, { path_prefix: '/apps/other' }]) assert.equal((await api.get(signedQuery('123', overrides))).status, 403);
  assert.equal((await api.get(signedQuery('123', {}, [['shop', shop]]))).status, 403);
  assert.equal((await api.get(signedQuery('123', {}, [['extra', 'one'], ['extra', 'two']]))).status, 200);
});

test('mutation requires account-bound CSRF, constrained JSON and rejects client-selected account IDs', async (t) => {
  const api = await setup(t);
  const { csrfToken } = await (await api.get()).json();
  const body = { action: 'add', entity: { type: 'product', id: '456' }, csrfToken };
  assert.equal((await api.post({ ...body, csrfToken: 'forged' })).status, 403);
  assert.equal((await api.post(body, signedQuery('999'))).status, 403);
  assert.equal((await api.post({ ...body, customerId: '999' })).status, 400);
  assert.equal((await api.post({ ...body, entity: { type: 'order', id: '456' } })).status, 400);
  assert.equal((await api.post({ ...body, entity: { type: 'product', id: '1 OR 1=1' } })).status, 400);
  assert.equal((await api.post('{')).status, 400);
  assert.equal((await api.post(body, signedQuery(), { 'Content-Type': 'text/plain' })).status, 415);
  assert.equal((await api.post(' '.repeat(5000))).status, 413);
  assert.deepEqual((await (await api.get()).json()).favorites, []);
});

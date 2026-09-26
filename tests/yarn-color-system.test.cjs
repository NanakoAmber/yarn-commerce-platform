const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync, readdirSync } = require('node:fs');
const { loadSource, resolveRoles, contrast, deltaE, outputs } = require('../scripts/color-tokens.cjs');

const read = path => readFileSync(path, 'utf8');
const source = loadSource();
const roles = resolveRoles(source);
const TOKENS = 'assets/yarn-design-tokens.css';

// Every stylesheet and Liquid style block that can consume --yarn-* roles.
const consumers = [
  ...readdirSync('assets').filter(f => f.endsWith('.css') && `assets/${f}` !== TOKENS).map(f => `assets/${f}`),
  ...readdirSync('sections').filter(f => f.endsWith('.liquid')).map(f => `sections/${f}`),
  ...readdirSync('snippets').filter(f => f.endsWith('.liquid')).map(f => `snippets/${f}`),
  'layout/theme.liquid',
].filter(path => /yarn/.test(path) || read(path).includes('--yarn-'));

const styleText = path => {
  const text = read(path).replace(/\/\*[\s\S]*?\*\//g, '');
  if (path.endsWith('.css')) return text;
  const blocks = [...text.matchAll(/\{%-?\s*(?:style|stylesheet)\s*-?%\}([\s\S]*?)\{%-?\s*end(?:style|stylesheet)\s*-?%\}|<style[^>]*>([\s\S]*?)<\/style>|style="([^"]*)"/g)];
  return blocks.map(m => m[1] || m[2] || m[3]).join('\n');
};
const declarations = css => [...css.matchAll(/([a-z-]+)\s*:\s*([^;{}]*)/g)].map(([, prop, value]) => ({ prop, value }));
const usedRoles = () => {
  const used = new Set();
  for (const path of consumers) for (const [, name] of read(path).matchAll(/var\(--yarn-([\w-]+)/g)) used.add(name);
  return used;
};

test('generated color outputs match design/tokens/colors.json', () => {
  for (const [path, expected] of outputs(source)) {
    assert.equal(read(path), expected, `${path} is stale: run npm run tokens`);
  }
});

test('only the token file writes color literals', () => {
  for (const path of consumers) {
    for (const { prop, value } of declarations(styleText(path))) {
      if (prop.startsWith('--') && !prop.startsWith('--yarn-')) continue;
      assert.doesNotMatch(value, /#[\da-f]{3,8}\b/i, `${path}: ${prop}: ${value.trim()} — use a --yarn-* role`);
      assert.doesNotMatch(value, /\b(?:rgba?|hsla?)\(\s*\d/i, `${path}: ${prop}: ${value.trim()} — use a --yarn-* role`);
    }
  }
});

test('every --yarn-* reference resolves to a definition in the token file', () => {
  const defined = new Set([...read(TOKENS).matchAll(/(--yarn-[\w-]+)\s*:/g)].map(m => m[1]));
  for (const path of consumers) {
    for (const [, variable] of read(path).matchAll(/var\((--yarn-[\w-]+)/g)) {
      assert.ok(defined.has(variable), `${path}: undefined ${variable}`);
    }
  }
});

test('declared text/background pairs meet their contrast minimum', () => {
  for (const [fg, bg, min] of source.contrast.pairs) {
    assert.ok(roles[fg] && roles[bg], `contrast pair references unknown role ${fg} / ${bg}`);
    const ratio = contrast(roles[fg].hex, roles[bg].hex);
    assert.ok(ratio >= min, `${fg} on ${bg}: ${ratio.toFixed(2)} < ${min}`);
  }
});

test('every role is consumed by a page, a Shopify color scheme or DESIGN.md components', () => {
  const used = usedRoles();
  for (const scheme of Object.values(source.schemes)) for (const [field, role] of Object.entries(scheme)) if (field !== 'name') used.add(role);
  for (const [, name] of read('DESIGN.md').matchAll(/\{colors\.([\w-]+)\}/g)) used.add(name);
  for (const name of Object.keys(roles)) assert.ok(used.has(name), `role ${name} is unused: remove it from colors.json`);
  for (const name of Object.keys(source.palette)) {
    assert.ok(Object.values(source.roles).some(role => role.value === name), `palette ${name} is not referenced by any role`);
  }
});

test('palette has no near-duplicate colors beyond the recorded P3 backlog', () => {
  const { minDeltaE, allow } = source.nearDuplicates;
  const key = (a, b) => [a, b].sort().join('|');
  const allowed = new Set(allow.map(([a, b]) => key(a, b)));
  const entries = Object.entries(source.palette);
  const found = new Set();
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      const distance = deltaE(entries[i][1], entries[j][1]);
      if (distance >= minDeltaE) continue;
      found.add(key(entries[i][0], entries[j][0]));
      assert.ok(allowed.has(key(entries[i][0], entries[j][0])), `${entries[i][0]} ≈ ${entries[j][0]} (ΔE ${distance.toFixed(1)}): merge them or pick a distinct value`);
    }
  }
  for (const pair of allowed) assert.ok(found.has(pair), `nearDuplicates.allow lists ${pair}, which is no longer near: remove it`);
});

test('DESIGN.md component color references resolve', () => {
  const components = read('DESIGN.md').split('\ncomponents:\n')[1].split('\n---')[0];
  assert.doesNotMatch(components, /#[\da-f]{3,8}\b/i, 'DESIGN.md components must reference {colors.*} roles');
  for (const [, name] of read('DESIGN.md').matchAll(/\{colors\.([\w-]+)\}/g)) {
    assert.ok(roles[name], `DESIGN.md references unknown color ${name}`);
  }
});

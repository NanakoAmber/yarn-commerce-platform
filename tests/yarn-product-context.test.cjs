const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { readContext } = require('../assets/yarn-product-context.js');
const origin = 'https://example.myshopify.com';
const base = { yarn_project: 'demo-pouch', yarn_project_title: '花片小袋', yarn_project_url: '/zh/pages/projects/demo-pouch', yarn_component: '花片线材' };
const url = (overrides = {}) => `${origin}/zh/products/yarn?${new URLSearchParams({ ...base, ...overrides })}`;

test('product navigation context preserves the exact source locale and component without fetching commerce data', () => {
  assert.deepEqual(readContext(url(), origin), { handle: 'demo-pouch', title: '花片小袋', url: '/zh/pages/projects/demo-pouch', component: '花片线材', reference: false });
  assert.equal(readContext(url({ yarn_project_kind: 'yarn_project.internal_finished' }), origin).reference, true);
});

test('ordinary product visits and invalid or off-site source URLs never show project context', () => {
  assert.equal(readContext(`${origin}/products/yarn`, origin), null);
  for (const overrides of [
    { yarn_project_url: 'https://evil.example/pages/projects/demo-pouch' },
    { yarn_project_url: '//evil.example/pages/projects/demo-pouch' },
    { yarn_project_url: 'javascript:alert(1)' },
    { yarn_project_url: '/zh/pages/projects/wrong-project' },
    { yarn_project: '../demo-pouch' },
    { yarn_project_title: '' },
    { yarn_project_title: 'x'.repeat(201) },
  ]) assert.equal(readContext(url(overrides), origin), null, JSON.stringify(overrides));
});

test('source query and fragment cannot be carried into the return link', () => {
  assert.equal(readContext(url({ yarn_project_url: '/zh/pages/projects/demo-pouch?redirect=https://evil.example#other' }), origin).url, '/zh/pages/projects/demo-pouch');
});

test('context labels are text, metadata cannot choose a Variant, and return links resolve Shopify truth in cart', () => {
  const source = fs.readFileSync('assets/yarn-product-context.js', 'utf8');
  assert.match(source, /link\.textContent = context\.title/);
  assert.match(source, /input\.value = value/);
  assert.doesNotMatch(source, /innerHTML|fetch\(|localStorage|sessionStorage|name = ['"]id['"]/);
  const productInfo = fs.readFileSync('assets/product-info.js', 'utf8');
  assert.match(productInfo, /currentUrl\.pathname === nextUrl\.pathname/);
  assert.match(productInfo, /if \(variantId\) nextUrl\.searchParams\.set\('variant', variantId\)/);
});

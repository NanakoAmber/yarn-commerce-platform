const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function setup(fetcher, valid = true, drawer = null) {
  const registry = new Map();
  const button = { textContent: 'Add', disabled: false };
  const status = { hidden: true };
  const cart = { hidden: true, href: 'https://example.myshopify.com/zh/cart' };
  const navigations = [];
  const form = {
    action: 'https://example.myshopify.com/zh/cart/add',
    reportValidity: () => valid,
    querySelector: () => button,
    addEventListener: (_, listener) => { form.submit = listener; },
  };
  class Element {
    dataset = { pending: 'Adding', success: 'Added', error: 'Rejected', uncertain: 'Check cart first' };
    querySelector(selector) { return ({ form, '[data-material-status]': status, '[data-material-cart]': cart })[selector]; }
  }
  vm.runInNewContext(fs.readFileSync('assets/yarn-project-detail.js', 'utf8'), {
    HTMLElement: Element,
    customElements: { get: (key) => registry.get(key), define: (key, value) => registry.set(key, value) },
    fetch: fetcher, FormData: class { constructor(value) { this.form = value; this.fields = {}; } append(key, value) { this.fields[key] = value; } },
    document: { querySelector: () => drawer },
    window: { location: { pathname: '/zh/pages/projects/demo', assign: (url) => navigations.push(url) } },
    AbortController, setTimeout: () => 1, clearTimeout: () => {},
  });
  const Purchase = registry.get('yarn-material-purchase');
  const element = new Purchase();
  element.connectedCallback();
  return { element, button, status, cart, form, navigations, submit: () => form.submit({ preventDefault() {} }) };
}

test('component purchase posts the current localized form exactly once and confirms success', async () => {
  let calls = 0;
  const ui = setup(async (url, options) => {
    calls++;
    assert.equal(url, 'https://example.myshopify.com/zh/cart/add.js');
    assert.equal(options.method, 'POST');
    assert.equal(options.body.form, ui.form);
    return { ok: true, status: 200, json: async () => ({ id: 123 }) };
  });
  await ui.submit();
  assert.equal(calls, 1);
  assert.equal(ui.status.textContent, 'Added');
  assert.equal(ui.cart.hidden, false);
  assert.equal(ui.button.disabled, false);
});

test('a Shopify rejection stays local, shows its explanation as text and permits correction', async () => {
  const ui = setup(async () => ({ ok: false, status: 422, json: async () => ({ description: 'Only 1 available' }) }));
  await ui.submit();
  assert.equal(ui.status.textContent, 'Rejected Only 1 available');
  assert.equal(ui.button.disabled, false);
  assert.equal(ui.cart.hidden, true);
});

test('successful adds refresh the existing theme drawer and icon from Shopify sections', async () => {
  let rendered;
  let active;
  const drawer = {
    getSectionsToRender: () => [{ id: 'cart-drawer' }, { id: 'cart-icon-bubble' }],
    setActiveElement: (button) => { active = button; },
    classList: { remove: () => {} },
    renderContents: (value) => { rendered = value; },
  };
  const response = { id: 123, sections: { 'cart-drawer': '<div>cart</div>', 'cart-icon-bubble': '<span>2</span>' } };
  const ui = setup(async (_, options) => {
    assert.equal(options.body.fields.sections, 'cart-drawer,cart-icon-bubble');
    assert.equal(options.body.fields.sections_url, '/zh/pages/projects/demo');
    return { ok: true, status: 200, json: async () => response };
  }, true, drawer);
  await ui.submit();
  assert.equal(active, ui.button);
  assert.equal(rendered, response);
  assert.equal(ui.status.textContent, 'Added');
});

test('missing cart sections or drawer render errors keep confirmed adds confirmed and open the cart', async () => {
  for (const sections of [null, { 'cart-drawer': '<div>cart</div>' }]) {
    const drawer = {
      getSectionsToRender: () => [{ id: 'cart-drawer' }],
      setActiveElement() {}, classList: { remove() {} },
      renderContents() { throw new Error('render failed'); },
    };
    const ui = setup(async () => ({ ok: true, status: 200, json: async () => ({ sections }) }), true, drawer);
    await ui.submit();
    assert.deepEqual(ui.navigations, [ui.cart.href]);
    assert.equal(ui.status.textContent, 'Added');
    assert.equal(ui.button.disabled, false);
    assert.equal(Boolean(ui.element.uncertain), false);
  }
});

test('ambiguous network, invalid JSON and server failures never silently retry an add', async () => {
  for (const result of [
    async () => { throw new Error('offline'); },
    async () => ({ ok: true, status: 200, json: async () => { throw new Error('bad JSON'); } }),
    async () => ({ ok: false, status: 503 }),
  ]) {
    let calls = 0;
    const ui = setup(async (...args) => { calls++; return result(...args); });
    await ui.submit();
    await ui.submit();
    assert.equal(calls, 1);
    assert.equal(ui.button.disabled, true);
    assert.equal(ui.status.textContent, 'Check cart first');
    assert.equal(ui.cart.hidden, false);
  }
});

test('double submit and invalid quantities do not send a second request', async () => {
  let calls = 0;
  let resolve;
  const ui = setup(() => { calls++; return new Promise((done) => { resolve = done; }); });
  const first = ui.submit();
  await ui.submit();
  assert.equal(calls, 1);
  assert.equal(ui.button.disabled, true);
  resolve({ ok: true, status: 200, json: async () => ({}) });
  await first;
  const invalid = setup(() => { calls++; }, false);
  await invalid.submit();
  assert.equal(calls, 1);
});

test('components use exact Variant truth, preserve project identity, and never gate project visibility', () => {
  const source = [
    'snippets/yarn-project-components.liquid',
    'snippets/yarn-project-component.liquid',
  ].map((path) => fs.readFileSync(path, 'utf8')).join('\n');
  for (const expression of ['component.variant.value', 'variant.available', 'variant.price', 'variant.id', 'variant.url', 'variant.quantity_rule.min', 'variant.quantity_rule.increment', 'variant.quantity_rule.max']) {
    assert.ok(source.includes(expression), expression);
  }
  assert.match(source, /component\.supply\.value == '本店提供' and variant != blank and variant\.product != blank/);
  assert.match(source, /name="properties\[_Project handle\]"/);
  assert.doesNotMatch(source, /selected_or_first_available_variant|name="items\[/);
  assert.doesNotMatch(fs.readFileSync('snippets/yarn-project-visible.liquid', 'utf8'), /components|materials|inventory|available/);
  const cart = fs.readFileSync('snippets/yarn-cart-project.liquid', 'utf8');
  assert.match(cart, /shop\.metaobjects\.yarn_project\[project_handle\]/);
  assert.match(cart, /render 'yarn-project-visible'/);
});

test('component presentation makes typed yarn primary without guessing legacy item types', () => {
  const list = fs.readFileSync('snippets/yarn-project-components.liquid', 'utf8');
  const item = fs.readFileSync('snippets/yarn-project-component.liquid', 'utf8');
  const detail = fs.readFileSync('sections/yarn-project-detail.liquid', 'utf8');
  assert.match(list, /component\.component_type\.value == '毛线'/);
  assert.match(list, /yp-components--yarn[\s\S]*mode: 'yarn'/);
  assert.match(list, /yp-components--supporting[\s\S]*unless component\.component_type\.value == '毛线'/);
  assert.match(item, /assign item_image = component\.image\.value[\s\S]*variant\.featured_image \| default: variant\.product\.featured_image/);
  assert.match(item, /yp-component--\{\{ mode \}\}/);
  assert.doesNotMatch(list, /component\.title[^\n]*(contains|downcase)/);
  assert.match(detail, /render 'yarn-project-components'/);
});

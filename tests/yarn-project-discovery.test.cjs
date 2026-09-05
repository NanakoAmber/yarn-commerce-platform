const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const section = fs.readFileSync('sections/yarn-project-discovery.liquid', 'utf8');
const card = fs.readFileSync('snippets/yarn-work-card.liquid', 'utf8');
const schema = JSON.parse(section.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
const index = JSON.parse(fs.readFileSync('templates/index.json', 'utf8').replace(/\/\*[\s\S]*?\*\//g, ''));
const source = fs.readFileSync('assets/yarn-project-discovery.js', 'utf8');
const context = { HTMLElement: class {}, customElements: { get: () => true }, URL };
vm.createContext(context);
const Discovery = vm.runInContext(source + '\nYarnProjectDiscovery', context);
const instance = () => {
  const view = new Discovery();
  view.dataset = { defaultType: 'kit' };
  view.queryInput = { value: '' };
  const values = { type: ['', 'kit', 'yarn', 'tool', 'finished', 'bundle'], project: ['', 'bag', 'shawl', 'blanket', 'toy', 'fan', 'gift'], quantity: ['', 'one-ball', 'large-ball'], season: ['', 'spring', 'summer', 'cold'], style: ['', 'gradient', 'flower', 'lace', 'sparkle'] };
  view.filters = Object.entries(values).map(([key, options]) => ({ dataset: { yarnFilter: key }, value: key === 'type' ? 'kit' : '', options: options.map(value => ({ value })) }));
  return view;
};

test('all literal and dynamic UI translations exist in the three section locales', () => {
  const keys = new Set([...`${section.split('{% schema %}')[0]}${card}`.matchAll(/'sections\.yarn-project-discovery\.([a-z_]+)'/g)].map(match => match[1]));
  for (const key of ['bag', 'shawl', 'blanket', 'toy', 'kit', 'yarn', 'tool', 'finished', 'bundle', 'fan', 'gift', 'quantity', 'season', 'style', 'one_ball', 'large_ball', 'spring', 'summer', 'cold', 'gradient', 'flower', 'lace', 'sparkle']) keys.add(key);
  for (const locale of ['en', 'zh-CN', 'ja']) {
    for (const key of keys) assert.ok(schema.locales[locale][key]?.trim(), `${locale}.${key}`);
    assert.deepEqual(Object.keys(schema.locales[locale]).sort(), Object.keys(schema.locales.en).sort());
    assert.match(schema.locales[locale].count, /\{shown\}/);
    assert.match(schema.locales[locale].count, /\{total\}/);
  }
});

test('homepage has exactly the three approved main sections; removed sections remain recoverable', () => {
  assert.deepEqual(index.order.filter(id => !index.sections[id].disabled), ['yarn-hero', 'project-discovery', 'line-support']);
  for (const id of ['yarn-purpose', 'starter-project', 'seasonal-edit', 'all-products']) assert.equal(index.sections[id].disabled, true);
  const products = index.sections['project-discovery'].settings.featured_products;
  assert.equal(new Set(products).size, 4);
  assert.match(section, /featured_handles contains product\.handle/);
  assert.match(card, /product\.featured_image/);
  assert.match(card, /product\.url/);
});

test('default state is kits and all project facets combine, never silently widen', () => {
  const view = instance();
  const candidate = { dataset: { yarnSearch: 'Flower shawl 花火', yarnType: 'kit', yarnProject: 'shawl', yarnQuantity: 'one-ball', yarnSeason: 'summer', yarnStyle: 'lace' } };
  assert.equal(view.matches(candidate, view.state()), true);
  view.filter('project').value = 'bag';
  assert.equal(view.matches(candidate, view.state()), false);
  view.filter('project').value = 'shawl';
  view.filter('quantity').value = 'one-ball';
  assert.equal(view.matches(candidate, view.state()), true);
  view.filter('season').value = 'cold';
  assert.equal(view.matches(candidate, view.state()), false);
});

test('search normalizes width, case and whitespace; every term must match', () => {
  const view = instance();
  assert.equal(view.normalize('  ＦＬＯＷＥＲ   花火 '), 'flower 花火');
  view.queryInput.value = 'flower 花火';
  assert.equal(view.matches({ dataset: { yarnType: 'kit', yarnSearch: 'Flower shawl 花火' } }, view.state()), true);
  assert.equal(view.matches({ dataset: { yarnType: 'kit', yarnSearch: 'Flower bag' } }, view.state()), false);
});

test('deep-link state restores valid values and ignores unknown values', () => {
  const view = instance();
  context.window = { location: { href: 'https://example.test/zh?discover_type=yarn&discover_project=toy&discover_style=invalid&discover_q=ABC' } };
  view.restore();
  assert.equal(view.filter('type').value, 'yarn');
  assert.equal(view.filter('project').value, 'toy');
  assert.equal(view.filter('style').value, '');
  assert.equal(view.queryInput.value, 'ABC');
});

test('filter updates preserve preview parameters and URL hash', () => {
  const view = instance();
  const urls = [];
  context.clearTimeout = () => {};
  context.window = { location: { href: 'https://example.test/zh?preview_theme_id=123#discover-products' }, history: { pushState: (_, __, url) => urls.push(url) } };
  view.closeAll = () => {};
  view.render = () => {};
  view.filter('project').value = 'bag';
  view.update('push');
  assert.equal(urls[0].searchParams.get('preview_theme_id'), '123');
  assert.equal(urls[0].searchParams.get('discover_project'), 'bag');
  assert.equal(urls[0].hash, '#discover-products');
});

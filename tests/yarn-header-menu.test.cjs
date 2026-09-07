const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const header = fs.readFileSync('sections/header.liquid', 'utf8');
const desktop = fs.readFileSync('snippets/yarn-header-menu.liquid', 'utf8');
const drawer = fs.readFileSync('snippets/yarn-header-drawer.liquid', 'utf8');
const wordmark = fs.readFileSync('snippets/yarn-wordmark.liquid', 'utf8');
const headerCss = fs.readFileSync('assets/yarn-header.css', 'utf8');
const schema = JSON.parse(header.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);

test('header keeps the Shopify menu enablement and exposes editable destination links', () => {
  const menuSettings = schema.settings.filter(setting => setting.type === 'link_list');
  assert.equal(menuSettings.length, 1);
  assert.equal(menuSettings[0].id, 'menu');
  assert.match(header, /assign navigation_menu = section\.settings\.menu/);
  assert.deepEqual(
    schema.settings.filter(setting => setting.type === 'url').map(setting => setting.id),
    ['finished_products_link', 'materials_link', 'contact_link']
  );
});

test('desktop and drawer render the same four localized visitor destinations', () => {
  for (const source of [desktop, drawer]) {
    for (const destination of ['home', 'finished', 'materials', 'contact']) {
      assert.match(source, new RegExp(`YarnHeader(?:Menu|Drawer)-${destination}`));
      assert.match(source, new RegExp(`${destination}_label \\| escape`));
      assert.match(source, new RegExp(`${destination}_url`));
    }
    assert.doesNotMatch(source, /navigation_menu\.links/);
  }
});

test('navigation labels and fallback routes match the approved locale semantics', () => {
  assert.match(header, /assign yarn_home_label = '首页'/);
  assert.match(header, /assign yarn_finished_label = '成品'/);
  assert.match(header, /assign yarn_materials_label = '原材料'/);
  assert.match(header, /assign yarn_contact_label = '联系方式'/);
  assert.match(header, /assign yarn_finished_url = routes\.search_url \| append: '\?q=tag%3A%E5%AE%8C%E6%88%90%E5%93%81'/);
  assert.match(header, /assign yarn_materials_url = routes\.search_url \| append: '\?q=tag%3A%E6%AF%9B%E7%B3%B8'/);
  assert.match(header, /assign yarn_contact_url = pages\['contact'\]\.url/);
});

test('mewool keeps the approved illustration and shortened lettering with an accessible name', () => {
  assert.match(wordmark, /alt="mewool"/);
  assert.match(wordmark, /mewool-logo-reference\.png/);
  assert.doesNotMatch(wordmark, /mewoolmew-logo-reference\.png/);
  assert.doesNotMatch(wordmark, /inline_asset_content|毛线工作室/);
  assert.match(wordmark, /width="1852"[\s\S]*height="849"/);
  assert.match(headerCss, /object-fit: cover/);
  assert.match(header, /assign yarn_brand_name = 'mewool'/);
  assert.match(header, /"name": \{\{ yarn_brand_name \| json \}\}/);
});

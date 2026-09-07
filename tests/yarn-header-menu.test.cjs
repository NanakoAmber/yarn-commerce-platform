const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const header = fs.readFileSync('sections/header.liquid', 'utf8');
const desktop = fs.readFileSync('snippets/yarn-header-menu.liquid', 'utf8');
const drawer = fs.readFileSync('snippets/yarn-header-drawer.liquid', 'utf8');
const wordmark = fs.readFileSync('snippets/yarn-wordmark.liquid', 'utf8');
const headerCss = fs.readFileSync('assets/yarn-header.css', 'utf8');
const schema = JSON.parse(header.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);

test('header has one Shopify menu setting and uses it for prototype navigation', () => {
  const menuSettings = schema.settings.filter(setting => setting.type === 'link_list');
  assert.equal(menuSettings.length, 1);
  assert.equal(menuSettings[0].id, 'menu');
  assert.match(header, /assign navigation_menu = section\.settings\.menu/);
  assert.doesNotMatch(header, /prototype_menu/);
  assert.match(header, /render 'yarn-header-menu', navigation_menu: navigation_menu/);
  assert.match(header, /render 'yarn-header-drawer', navigation_menu: navigation_menu/);
});

test('desktop and drawer render the same Shopify link tree with escaped labels and URLs', () => {
  for (const source of [desktop, drawer]) {
    assert.match(source, /for link in navigation_menu\.links/);
    assert.match(source, /for childlink in link\.links/);
    assert.match(source, /for grandchildlink in childlink\.links/);
    assert.match(source, /link\.title \| escape/);
    assert.match(source, /link\.url \| escape/);
    assert.match(source, /childlink\.title \| escape/);
    assert.match(source, /childlink\.url \| escape/);
    assert.match(source, /grandchildlink\.title \| escape/);
    assert.match(source, /grandchildlink\.url \| escape/);
  }
});

test('prototype navigation contains no locale, product-copy or tag-search overrides', () => {
  for (const source of [desktop, drawer]) {
    assert.doesNotMatch(source, /request\.locale|url_encode|tag:|routes\.search_url|routes\.all_products_collection_url/);
    assert.doesNotMatch(source, /新品|新着|New arrivals|编织套装|編み物キット/);
  }
});

test('MewoolMew uses the original cat-and-yarn mark and a readable text wordmark', () => {
  assert.match(wordmark, /MewoolMew/);
  assert.match(wordmark, /mewoolmew-cat-yarn-mark\.svg/);
  assert.doesNotMatch(wordmark, /yarn-stitch-mark\.svg|毛线工作室/);
  assert.match(headerCss, /ui-rounded/);
  assert.match(headerCss, /#bf5a38/i);
  assert.match(header, /assign yarn_brand_name = 'MewoolMew'/);
  assert.match(header, /"name": \{\{ yarn_brand_name \| json \}\}/);
});

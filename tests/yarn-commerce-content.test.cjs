const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const title = fs.readFileSync('snippets/yarn-product-title.liquid', 'utf8');
const description = fs.readFileSync('snippets/yarn-product-description.liquid', 'utf8');
const product = fs.readFileSync('sections/main-product.liquid', 'utf8');
const collapsible = fs.readFileSync('sections/collapsible-content.liquid', 'utf8');

test('product title and description use Shopify product fields without handle or locale maps', () => {
  assert.match(title, /product\.title/);
  assert.match(description, /product\.description/);

  for (const source of [title, description]) {
    assert.doesNotMatch(source, /product\.handle/);
    assert.doesNotMatch(source, /request\.locale/);
  }
});

test('main product block text stays editable through the trilingual settings pattern (Issue #55)', () => {
  assert.match(product, /render 'yarn-product-title', product: product/);
  assert.match(product, /render 'yarn-product-description', product: product/);
  assert.match(product, /capture block_text\s+render 'yarn-setting-text', settings: block\.settings, key: 'text'/);
  assert.match(product, /\{\{-?\s*block_text\s*-?\}\}/);
  assert.doesNotMatch(product, /block\.settings\.text contains '税込価格'/);
  assert.doesNotMatch(product, /Free shipping over|\u6ee19,900日元免运费/);
});

test('collapsible content keeps strings editable via trilingual settings with page fallbacks (Issue #55)', () => {
  assert.match(collapsible, /capture cc_heading\s+render 'yarn-setting-text', settings: section\.settings, key: 'heading'/);
  assert.match(collapsible, /capture row_heading\s+render 'yarn-setting-text', settings: block\.settings, key: 'heading'/);
  assert.match(collapsible, /row_heading \| default: block\.settings\.page\.title/);
  assert.match(collapsible, /capture row_body\s+render 'yarn-setting-text', settings: block\.settings, key: 'row_content'/);
  assert.match(collapsible, /block\.settings\.page\.content/);

  assert.doesNotMatch(collapsible, /request\.page_type/);
  assert.doesNotMatch(collapsible, /case forloop\.index/);
  assert.doesNotMatch(collapsible, /Free shipping|\u914d送与运费|Returns & exchanges/);
});

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
  assert.match(product, /assign block_text = block\.settings\.text/);
  assert.match(product, /block\.settings\.text_zh \| default: block_text/);
  assert.match(product, /block\.settings\.text_en \| default: block_text/);
  assert.match(product, /\{\{-?\s*block_text\s*-?\}\}/);
  assert.doesNotMatch(product, /block\.settings\.text contains '税込価格'/);
  assert.doesNotMatch(product, /Free shipping over|\u6ee19,900日元免运费/);
});

test('collapsible content keeps strings editable via trilingual settings with page fallbacks (Issue #55)', () => {
  assert.match(collapsible, /assign cc_heading = section\.settings\.heading/);
  assert.match(collapsible, /section\.settings\.heading_zh \| default: cc_heading/);
  assert.match(collapsible, /assign row_heading = block\.settings\.heading/);
  assert.match(collapsible, /block\.settings\.heading_zh \| default: row_heading/);
  assert.match(collapsible, /row_heading \| default: block\.settings\.page\.title/);
  assert.match(collapsible, /assign row_body = block\.settings\.row_content/);
  assert.match(collapsible, /block\.settings\.page\.content/);

  assert.doesNotMatch(collapsible, /request\.page_type/);
  assert.doesNotMatch(collapsible, /case forloop\.index/);
  assert.doesNotMatch(collapsible, /Free shipping|\u914d送与运费|Returns & exchanges/);
});

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

test('main product renders editable product and block content without language overrides', () => {
  assert.match(product, /render 'yarn-product-title', product: product/);
  assert.match(product, /render 'yarn-product-description', product: product/);
  assert.match(product, /\{\{-?\s*block\.settings\.text\s*-?\}\}/);
  assert.doesNotMatch(product, /block\.settings\.text contains '税込価格'/);
  assert.doesNotMatch(product, /Free shipping over|\u6ee19,900日元免运费/);
});

test('collapsible content preserves section and block settings in every locale and position', () => {
  assert.match(collapsible, /section\.settings\.heading/);
  assert.match(collapsible, /block\.settings\.heading \| default: block\.settings\.page\.title/);
  assert.match(collapsible, /block\.settings\.row_content/);
  assert.match(collapsible, /block\.settings\.page\.content/);

  assert.doesNotMatch(collapsible, /request\.page_type/);
  assert.doesNotMatch(collapsible, /request\.locale/);
  assert.doesNotMatch(collapsible, /case forloop\.index/);
  assert.doesNotMatch(collapsible, /Free shipping|\u914d送与运费|Returns & exchanges/);
});

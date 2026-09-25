const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');

const read = path => readFileSync(path, 'utf8');
const pick = read('snippets/yarn-pick-card.liquid');
const catalog = read('snippets/card-product.liquid');
const meta = read('snippets/yarn-card-meta.liquid');

test('cards prefer the operator card image and fall back to the product image', () => {
  assert.match(pick, /metafields\.yarn\.card_image\.value \| default: card_product\.featured_image/);
  assert.match(catalog, /metafields\.yarn\.card_image\.value \| default: card_product\.featured_media/);
});

test('card meta shows kind and a color count read from the product color option', () => {
  assert.match(pick, /render 'yarn-card-meta', meta_product: card_product/);
  assert.match(catalog, /render 'yarn-card-meta', meta_product: card_product/);
  assert.match(meta, /options_with_values/);
  assert.match(meta, /yx_color_count > 1/);
  for (const locale of ['ja', 'zh-CN', 'en.default']) {
    assert.match(read(`locales/${locale}.json`), /"card_color_count": "\{\{ count \}\}/, locale);
  }
});

test('homepage cards strike a price only when Shopify has a real compare-at price', () => {
  assert.match(pick, /\{%- if card_product\.compare_at_price > card_product\.price -%\}\s*<s class="yx-product-card__was">/);
  assert.doesNotMatch(pick, /yx-product-card__action|yx-badge/);
});

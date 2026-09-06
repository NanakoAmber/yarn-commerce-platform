const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const banner = fs.readFileSync('sections/main-collection-banner.liquid', 'utf8');

test('collection banner always renders Shopify collection content', () => {
  assert.match(banner, /\{\{-?\s*collection\.title \| escape\s*-?\}\}/);
  assert.match(banner, /\{\{\s*collection\.description\s*\}\}/);
  assert.doesNotMatch(banner, /collection\.handle|request\.locale|collection_heading|collection_intro/);
});

test('collection banner has no fixed catalog slogan or invented collection copy', () => {
  assert.doesNotMatch(banner, /YARN\s*·\s*KIT\s*·\s*TOOL\s*·\s*GIFT/);
  assert.doesNotMatch(banner, /すべての毛糸と編み物アイテム|全部毛线与编织商品|All yarns and knitting essentials/);
  assert.doesNotMatch(banner, /yarn-collection-eyebrow/);
});

test('collection image and merchant-controlled description setting remain intact', () => {
  assert.match(banner, /section\.settings\.show_collection_description/);
  assert.match(banner, /section\.settings\.show_collection_image and collection\.image/);
  assert.match(banner, /collection\.image \| image_url/);
});

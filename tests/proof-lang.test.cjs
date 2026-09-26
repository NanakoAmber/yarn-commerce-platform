const { test } = require('node:test');
const assert = require('node:assert/strict');
const { detectLeak } = require('../scripts/proof-lang.cjs');

test('Japanese page: flags simplified Chinese and English phrases, keeps Japanese and shared kanji', () => {
  assert.equal(detectLeak('毛糸を選ぶ', 'ja'), null);
  assert.equal(detectLeak('商品一覧', 'ja'), null);
  assert.equal(detectLeak('挑选毛线', 'ja'), 'zh');
  assert.equal(detectLeak('Add to cart', 'ja'), 'en');
  assert.equal(detectLeak('Mokomoko', 'ja'), null);
  assert.equal(detectLeak('50g / 120cm', 'ja'), null);
});

test('Chinese page: flags kana, Japanese-only kanji and English phrases', () => {
  assert.equal(detectLeak('挑一团好线', 'zh'), null);
  assert.equal(detectLeak('カートに追加', 'zh'), 'ja');
  assert.equal(detectLeak('検索', 'zh'), 'ja');
  assert.equal(detectLeak('SHOPPING GUIDE', 'zh'), 'en');
  assert.equal(detectLeak('联系 hello@example.com', 'zh'), null);
});

test('English page: flags any CJK text and names the likely source', () => {
  assert.equal(detectLeak('Pick a good yarn', 'en'), null);
  assert.equal(detectLeak('颜色', 'en'), 'zh');
  assert.equal(detectLeak('毛糸', 'en'), 'ja');
  assert.equal(detectLeak('商品', 'en'), 'zh/ja');
});

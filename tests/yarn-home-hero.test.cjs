const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const hero = fs.readFileSync('sections/yarn-hero.liquid', 'utf8');
const heroCss = fs.readFileSync('assets/yarn-hero-b.css', 'utf8');
const indexSource = fs.readFileSync('templates/index.json', 'utf8').replace(/^\/\*[\s\S]*?\*\//, '').trim();
const index = JSON.parse(indexSource);
const schema = JSON.parse(hero.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);

test('hero shows three clickable intent nodes using real raster assets (Issue #55)', () => {
  // 三来意:看编织包(作品原画)/挑毛线(毛线球原画)/带成品回家(与原型一致的花束插画)。
  for (const asset of ['mewool-hero-project-node-v2.png', 'mewool-hero-yarn-node.png', 'mewool-hero-finished-node.png']) {
    assert.match(hero, new RegExp(asset.replaceAll('.', '\\.')));
  }
  assert.doesNotMatch(hero, /mewool-hero-tools-node\.png/);
  assert.doesNotMatch(hero, /mewool-hero-tutorial-node\.png/);
  assert.match(hero, /yarn-hero__thread--desktop/);
  assert.equal((hero.match(/class="yarn-hero__node /g) || []).length, 3);
  // 每个节点都是链接,分别指向三个集合。
  for (const handle of ['knit-kits', 'yarn', 'finished-goods']) {
    assert.match(hero, new RegExp(`collections\\['${handle}'\\]\\.url`));
  }
  assert.match(heroCss, /\.yarn-hero--connected \.yarn-hero__thread/);
});

test('homepage activates the editable cottage section and preserves catalogue sections', () => {
  const home = index.sections['yarn-hero'];
  assert.equal(home.type, 'hitoami-home');
  assert.equal(home.block_order.length, 2);
  for (const id of home.block_order) {
    for (const key of ['heading', 'heading_zh', 'heading_en', 'cta', 'cta_zh', 'cta_en']) assert.ok(home.blocks[id].settings[key]);
  }
  for (const key of ['picks-yarn', 'picks-kits', 'picks-finished', 'content-pick']) assert.ok(index.order.includes(key));
});

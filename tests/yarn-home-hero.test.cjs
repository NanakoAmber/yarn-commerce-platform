const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const hero = fs.readFileSync('sections/yarn-hero.liquid', 'utf8');
const heroCss = fs.readFileSync('assets/yarn-hero-b.css', 'utf8');
const indexSource = fs.readFileSync('templates/index.json', 'utf8').replace(/^\/\*[\s\S]*?\*\//, '').trim();
const index = JSON.parse(indexSource);
const schema = JSON.parse(hero.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);

test('hero shows three clickable intent nodes using real raster assets (Issue #55)', () => {
  // 三来意:看编织包(作品原画)/挑毛线(毛线球原画)/带成品回家(已批准玩偶原画)。
  for (const asset of ['mewool-hero-project-node-v2.png', 'mewool-hero-yarn-node.png', 'yarn-category-toy-approved.png']) {
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

test('hero copy carries the yarn-first promise in all three languages', () => {
  const settings = index.sections['yarn-hero'].settings;
  assert.equal(settings.heading_zh, '挑一团好线');
  assert.match(settings.text_zh, /从一团线/);
  assert.match(settings.heading, /毛糸/);
  assert.match(settings.heading_en, /yarn/i);
  assert.equal(settings.flow_yarn_zh, '挑毛线');
  assert.equal(settings.flow_project_zh, '看编织包');
  assert.equal(settings.flow_tools_zh, '带成品回家');
});

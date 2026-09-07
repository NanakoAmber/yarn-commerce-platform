const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const hero = fs.readFileSync('sections/yarn-hero.liquid', 'utf8');
const heroCss = fs.readFileSync('assets/yarn-hero-b.css', 'utf8');
const indexSource = fs.readFileSync('templates/index.json', 'utf8').replace(/^\/\*[\s\S]*?\*\//, '').trim();
const index = JSON.parse(indexSource);
const schema = JSON.parse(hero.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);

test('discovery hero uses a concrete finished-work, yarn and tools photograph without notation overlays', () => {
  assert.match(hero, /assign textile_asset = 'yarn-hero-editorial\.png'/);
  assert.match(hero, /unless section\.settings\.discovery_layout[\s\S]*yarn-hero__notation/);
  assert.doesNotMatch(hero, /assign textile_asset = 'impeccable-b-hero-textile\.png'/);
  assert.match(heroCss, /\.yarn-hero--discovery \.yarn-hero__textile[^}]*object-position: 69% center/);
});

test('hero copy names the user value and the preparation details in all three languages', () => {
  const settings = Object.fromEntries(schema.settings.filter(setting => setting.id).map(setting => [setting.id, setting.default]));
  assert.equal(settings.heading_zh, '喜欢的作品，不该卡在选材料。');
  assert.match(settings.text_zh, /毛线、用量、工具与教程/);
  assert.equal(settings.heading, '作りたい気持ちを、材料選びで止めない。');
  assert.match(settings.text, /糸・使用量・道具・作り方/);
  assert.equal(settings.heading_en, "Don't let materials stall your next make.");
  assert.match(settings.text_en, /yarn, quantity, tools, and tutorial/);

  assert.equal(index.sections['yarn-hero'].settings.heading, settings.heading);
  assert.equal(index.sections['yarn-hero'].settings.text, settings.text);
});

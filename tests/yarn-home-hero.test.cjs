const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const hero = fs.readFileSync('sections/yarn-hero.liquid', 'utf8');
const heroCss = fs.readFileSync('assets/yarn-hero-b.css', 'utf8');
const indexSource = fs.readFileSync('templates/index.json', 'utf8').replace(/^\/\*[\s\S]*?\*\//, '').trim();
const index = JSON.parse(indexSource);
const schema = JSON.parse(hero.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);

test('hero shows four connected preparation nodes using real raster assets', () => {
  for (const asset of ['mewool-hero-project-node-v2.png', 'mewool-hero-yarn-node.png', 'mewool-hero-tools-node.png', 'mewool-hero-tutorial-node.png']) {
    assert.match(hero, new RegExp(asset.replaceAll('.', '\\.')));
  }
  assert.match(hero, /yarn-hero__thread--desktop/);
  assert.equal((hero.match(/class="yarn-hero__node /g) || []).length, 4);
  assert.match(heroCss, /\.yarn-hero--connected \.yarn-hero__thread/);
});

test('hero copy names the user value and the preparation details in all three languages', () => {
  const settings = Object.fromEntries(schema.settings.filter(setting => setting.id).map(setting => [setting.id, setting.default]));
  assert.equal(settings.heading_zh, '从喜欢的作品，\n开始你的手作。');
  assert.match(settings.text_zh, /毛线、用量、工具与教程/);
  assert.equal(settings.heading, '好きな作品から、\n手づくりを始めよう。');
  assert.match(settings.text, /毛糸・使用量・道具・作り方/);
  assert.equal(settings.heading_en, 'Start making from\na project you love.');
  assert.match(settings.text_en, /yarn, quantity, tools, and tutorial/);

  assert.equal(index.sections['yarn-hero'].settings.heading, settings.heading);
  assert.equal(index.sections['yarn-hero'].settings.text, settings.text);
  assert.equal(index.sections['yarn-hero'].settings.heading_zh, settings.heading_zh);
  assert.equal(index.sections['yarn-hero'].settings.flow_tutorial_zh, '看教程');
});

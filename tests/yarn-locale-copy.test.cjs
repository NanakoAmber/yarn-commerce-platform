const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

// 三语文案只有两条路：运营文案用 _zh / _en 设置，经 snippets/yarn-setting-text.liquid 取值；通用控件用 Theme locales。
const SNIPPET = 'snippets/yarn-setting-text.liquid';
const liquidFiles = ['sections', 'snippets', 'layout', 'blocks']
  .filter(dir => fs.existsSync(dir))
  .flatMap(dir => fs.readdirSync(dir).filter(name => name.endsWith('.liquid')).map(name => `${dir}/${name}`));
const withoutSchema = text => text.replace(/\{%-?\s*schema\s*-?%\}[\s\S]*?\{%-?\s*endschema\s*-?%\}/, '');

test('only the shared snippet switches copy by language', () => {
  for (const file of liquidFiles.filter(f => f !== SNIPPET)) {
    const text = withoutSchema(fs.readFileSync(file, 'utf8'));
    assert.doesNotMatch(text, /case\s+(request\.locale\.iso_code|req_locale)|when\s+'zh(-CN)?'/, `${file}: 用 render 'yarn-setting-text' 或 | t 取文案`);
  }
});

test('Liquid never reads _zh / _en settings directly', () => {
  for (const file of liquidFiles.filter(f => f !== SNIPPET)) {
    const text = withoutSchema(fs.readFileSync(file, 'utf8'));
    assert.doesNotMatch(text, /settings\.\w*_(zh|en)(_\w+)?\b/, `${file}: 经 yarn-setting-text 取译文`);
  }
});

test('every _zh setting has an _en partner in the same schema', () => {
  for (const file of liquidFiles) {
    const schema = (fs.readFileSync(file, 'utf8').match(/\{%-?\s*schema\s*-?%\}([\s\S]*?)\{%-?\s*endschema/) || [])[1];
    if (!schema) continue;
    const ids = new Set([...schema.matchAll(/"id"\s*:\s*"(\w+)"/g)].map(m => m[1]));
    for (const id of ids) {
      if (/_zh(_|$)/.test(id)) assert.ok(ids.has(id.replace(/_zh(_|$)/, '_en$1')), `${file}: ${id} 缺少英文设置`);
      if (/_en(_|$)/.test(id)) assert.ok(ids.has(id.replace(/_en(_|$)/, '_zh$1')), `${file}: ${id} 缺少中文设置`);
    }
  }
});

const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const read = path => readFileSync(path, 'utf8');
const targets = ['yarn-header.css', 'yarn-hero-b.css', 'yarn-project-rows.css', 'yarn-foundation.css', 'yarn-footer.css'];

test('homepage system roles have one loaded definition and every consumer reference resolves', () => {
  const tokens = read('assets/yarn-design-tokens.css');
  const definitions = new Set([...tokens.matchAll(/(--yarn-[\w-]+)\s*:/g)].map(match => match[1]));
  const layout = read('layout/theme.liquid');
  assert.ok(layout.indexOf("'yarn-design-tokens.css'") < layout.indexOf("'yarn-prototype.css'"));
  assert.doesNotMatch(read('assets/yarn-prototype.css'), /--yarn-[\w-]+\s*:/);
  for (const path of targets) {
    const css = read(`assets/${path}`);
    assert.doesNotMatch(css, /#[\da-f]{3,8}\b/i, `${path}: shared colors belong in tokens`);
    for (const [, variable] of css.matchAll(/var\((--yarn-[\w-]+)/g)) {
      assert.ok(definitions.has(variable), `${path}: undefined ${variable}`);
    }
  }
});

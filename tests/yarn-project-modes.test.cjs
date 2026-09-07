const { test } = require('node:test');
const assert = require('node:assert/strict');
const { initialMode, validQuantity } = require('../assets/yarn-project-modes.js');
const { matchesProject, urlWithState, stateFromSearch } = require('../assets/yarn-project-library.js');

test('an explicit supported mode wins; unsupported links fall back to the available path', () => {
  assert.equal(initialMode(['finished', 'materials'], '?project_mode=finished'), 'finished');
  assert.equal(initialMode(['finished', 'materials'], ''), 'materials');
  assert.equal(initialMode(['finished'], '?project_mode=materials'), 'finished');
  assert.equal(initialMode(['materials'], '?project_mode=finished'), 'materials');
  assert.equal(initialMode([], '?project_mode=finished'), undefined);
});

test('purchase filters intersect with search and category while dual mode matches either capability', () => {
  const both = { title: 'Blue basket', category: 'home', purchase: 'finished,materials' };
  assert.equal(matchesProject(both, { purchase: 'finished' }), true);
  assert.equal(matchesProject(both, { purchase: 'materials', q: 'blue', category: 'home' }), true);
  assert.equal(matchesProject(both, { purchase: 'materials', q: 'pink' }), false);
  assert.equal(matchesProject(both, { purchase: 'inspiration' }), false);
  assert.equal(matchesProject({ ...both, purchase: 'inspiration' }, { purchase: 'finished' }), false);
  const url = urlWithState('https://example.test/zh?preview_theme_id=34', { purchase: 'materials', q: 'blue' });
  assert.equal(url.searchParams.get('preview_theme_id'), '34');
  assert.equal(stateFromSearch(url.search).purchase, 'materials');
});

test('changing a variant normalizes quantity to Shopify min, step and max rules', () => {
  assert.equal(validQuantity(1, { min: 2, step: 2, max: 10 }), 2);
  assert.equal(validQuantity(5, { min: 2, step: 2, max: 10 }), 6);
  assert.equal(validQuantity(99, { min: 2, step: 2, max: 9 }), 8);
  assert.equal(validQuantity('invalid', { min: 3, step: 1, max: null }), 3);
});

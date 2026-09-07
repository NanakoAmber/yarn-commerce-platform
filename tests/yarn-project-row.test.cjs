const { test } = require('node:test');
const assert = require('node:assert/strict');
const { scrollState, YarnProjectRow } = require('../assets/yarn-project-row.js');

test('row controls follow scroll boundaries, including fractional-pixel browser rounding', () => {
  assert.deepEqual(scrollState(0, 1000, 1000), { overflowing: false, atStart: true, atEnd: true });
  assert.deepEqual(scrollState(0, 1000, 1280), { overflowing: true, atStart: true, atEnd: false });
  assert.deepEqual(scrollState(140, 1000, 1280), { overflowing: true, atStart: false, atEnd: false });
  assert.deepEqual(scrollState(279.5, 1000, 1280), { overflowing: true, atStart: false, atEnd: true });
});

test('next/previous move one visible group and respect reduced motion', () => {
  const row = new YarnProjectRow();
  const calls = [];
  const originalStyle = global.getComputedStyle;
  const originalMedia = global.matchMedia;
  row.track = {
    clientWidth: 1024,
    querySelector: () => ({ getBoundingClientRect: () => ({ width: 238 }) }),
    scrollBy: (options) => calls.push(options),
  };
  global.getComputedStyle = () => ({ columnGap: '24px' });
  global.matchMedia = () => ({ matches: true });
  try {
    row.move(1);
    row.move(-1);
    assert.deepEqual(calls, [{ left: 1048, behavior: 'auto' }, { left: -1048, behavior: 'auto' }]);
  } finally {
    global.getComputedStyle = originalStyle;
    global.matchMedia = originalMedia;
  }
});

test('a short row does not expose an unnecessary collapse state', () => {
  const row = new YarnProjectRow();
  row.track = { clientWidth: 1000, scrollWidth: 1000 };
  row.setExpanded(true);
  assert.equal(row.expanded, undefined);
});

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { CatMotion, threadPath, wrap } = require('../assets/hitoami-home.js');

test('cat can retarget in either direction without resetting position', () => {
  const cat = new CatMotion(354);
  cat.goTo(310);
  for (let i = 0; i < 50; i++) cat.step(16);
  const before = cat.x;
  assert.ok(before > 8);
  cat.goTo(90);
  assert.equal(cat.x, before);
  for (let i = 0; i < 500; i++) cat.step(16);
  assert.equal(cat.state, 'sleep');
  assert.ok(cat.x >= 8 && cat.x + 72 < 354);
  assert.ok(cat.ball >= 18 && cat.ball <= 342);
});

test('cat, ball and thread remain in their horizontal lane at narrow and wide widths', () => {
  for (const width of [284, 324, 354, 1014]) {
    const cat = new CatMotion(width);
    for (const target of [width * .8, width / 2, 80, width, -100]) {
      cat.goTo(target);
      for (let i = 0; i < 400; i++) {
        cat.step(16);
        assert.ok(Number.isFinite(cat.rotation));
        assert.ok(cat.x >= 0 && cat.x + 72 <= width);
        assert.ok(cat.ball >= 18 && cat.ball + 10 <= width);
        assert.ok(cat.frame >= 0 && cat.frame < 9);
      }
    }
  }
});

test('unrolled strand is anchored at the left and stops at the back of the ball', () => {
  for (const ball of [28, 88, 230, 990]) {
    const path = threadPath(ball);
    assert.match(path, /^M8 64/);
    assert.ok(path.endsWith(`${(ball - 8).toFixed(1)} 60`));
    const coordinates = [...path.matchAll(/[MLQ]([\d.]+)/g)].map(match => Number(match[1]));
    assert.ok(coordinates.every(x => x < ball));
  }
  assert.equal(wrap(-1, 4), 3);
  assert.equal(wrap(4, 4), 0);
});


test('nearby and rapid retargeting never make the cat walk against its facing direction', () => {
  const cat = new CatMotion(354);
  cat.x = 120; cat.ball = 190; cat.state = 'walk';
  for (const point of [177, 310, 90, 177, 300, 50]) {
    cat.goTo(point);
    for (let i = 0; i < 40; i++) {
      const before = cat.x;
      cat.step(16);
      if (cat.x !== before) assert.equal(Math.sign(cat.x - before), cat.direction);
    }
  }
});

test('each category has the same resting centre from either direction, including wraparound', () => {
  for (const width of [284, 354, 1014]) {
    const cat = new CatMotion(width);
    const centres = [width / 6, width / 2, width * 5 / 6];
    cat.goTo(centres[0], true);
    for (const index of [1, 2, 0, 2, 1, 0]) {
      const start = cat.x;
      cat.goTo(centres[index]);
      assert.equal(cat.direction, Math.sign(centres[index] - 36 - start));
      for (let i = 0; i < 250; i++) cat.step(16);
      assert.equal(cat.state, 'sleep');
      assert.ok(Math.abs(cat.x + 36 - centres[index]) < .01);
    }
  }
});

test('nonanimated selection and resize settle on the selected category, not the starting point', () => {
  const cat = new CatMotion(1014);
  cat.goTo(845, true);
  assert.equal(cat.x + 36, 845);
  cat.goTo(169);
  cat.step(40);
  cat.width = 354;
  cat.goTo(59, true);
  assert.equal(cat.x + 36, 59);
  assert.equal(cat.state, 'sleep');
  assert.equal(cat.frame, 0);
  assert.equal(cat.ball, cat.ballPosition());
});

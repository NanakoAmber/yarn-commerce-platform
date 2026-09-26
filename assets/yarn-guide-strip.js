// Guide strip: draws the hanging line on first view and rolls a yarn ball along it to the hovered or focused node.
// On desktop a line cat sleeps with the ball at the thread's start; it sits up while a node is active and the ball rolls home after.
(() => {
  const BESIDE = 20; // ball stops this far left of the node's hang point
  const DURATION = 900;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const easeOutBack = (t) => 1 + 2.2 * (t - 1) ** 3 + 1.2 * (t - 1) ** 2;

  const init = (root) => {
    if (root.dataset.guideReady) return;
    root.dataset.guideReady = 'true';
    const rail = root.querySelector('.yarn-guide__rail');
    const svg = root.querySelector('.yarn-guide__thread');
    const path = svg?.querySelector('.yarn-guide__ply-core');
    const ball = root.querySelector('.yarn-guide__ball');
    const cat = root.querySelector('.yarn-guide__cat');
    const nodes = root.querySelector('.yarn-guide__nodes');
    const items = [...root.querySelectorAll('.yarn-guide__item')];
    if (!rail || !path || !ball || !items.length) return;

    // Hide the line only at the moment it comes into view, so a missed observer never leaves it hidden.
    if (!reduceMotion && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        root.classList.add('is-armed');
        root.getBoundingClientRect();
        requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-drawn')));
      }, { threshold: 0.4 });
      observer.observe(root);
    }

    const total = path.getTotalLength();
    const scale = () => {
      const box = svg.getBoundingClientRect();
      return { sx: box.width / 1000, sy: box.height / 40 };
    };
    // Path x grows monotonically, so a binary search finds the length at a given x.
    const lengthAtX = (x) => {
      let lo = 0;
      let hi = total;
      for (let i = 0; i < 24; i++) {
        const mid = (lo + hi) / 2;
        if (path.getPointAtLength(mid).x < x) lo = mid;
        else hi = mid;
      }
      return (lo + hi) / 2;
    };
    // CSS width, not the bounding box: the ball rotates while rolling.
    const ballSize = () => parseFloat(getComputedStyle(ball).width) || 16;
    const hasCat = () => Boolean(cat) && getComputedStyle(cat).display !== 'none';
    const targetLength = (item) => {
      const dot = item.querySelector('.yarn-guide__dot');
      const railBox = rail.getBoundingClientRect();
      const dotBox = dot.getBoundingClientRect();
      const centerPx = dotBox.left + dotBox.width / 2 - railBox.left;
      return lengthAtX((centerPx - BESIDE) / scale().sx);
    };

    // Home: tucked against the sleeping cat's face; without the cat (mobile) the first node.
    const homeLength = () => (hasCat() ? lengthAtX((ballSize() / 2 + 1) / scale().sx) : targetLength(items[0]));

    let current = null;
    let spin = 0;
    let frame = null;
    const draw = (length) => {
      const { sx, sy } = scale();
      const size = ballSize();
      const point = path.getPointAtLength(Math.max(0, Math.min(total, length)));
      ball.style.setProperty('--ball-x', `${point.x * sx - size / 2}px`);
      ball.style.setProperty('--ball-y', `${point.y * sy - size + 2}px`);
      ball.style.setProperty('--ball-spin', `${spin}deg`);
    };
    const rollTo = (to) => {
      cancelAnimationFrame(frame);
      if (current === null || reduceMotion) {
        current = to;
        draw(to);
        return;
      }
      const from = current;
      const start = performance.now();
      const { sx } = scale();
      const size = ballSize();
      let last = from;
      const step = (now) => {
        const t = Math.min(1, (now - start) / DURATION);
        const length = from + (to - from) * easeOutBack(t);
        spin += (((length - last) * sx) / (Math.PI * size)) * 360;
        last = length;
        current = length;
        draw(length);
        if (t < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    let active = null;
    const wake = (item) => {
      active = item;
      root.classList.add('is-awake');
      rollTo(targetLength(item));
    };
    const rest = () => {
      if (!hasCat()) return; // without the cat the ball simply stays at the last node
      active = null;
      root.classList.remove('is-awake');
      rollTo(homeLength());
    };

    rollTo(homeLength());
    requestAnimationFrame(() => root.classList.add('has-ball'));
    items.forEach((item) => {
      item.addEventListener('pointerenter', () => wake(item));
      item.addEventListener('focusin', () => wake(item));
    });
    nodes?.addEventListener('pointerleave', rest);
    root.addEventListener('focusout', (event) => { if (!root.contains(event.relatedTarget)) rest(); });
    window.addEventListener('resize', () => {
      current = null;
      rollTo(active ? targetLength(active) : homeLength());
    });
  };

  const initAll = () => document.querySelectorAll('[data-yarn-guide]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAll);
  else initAll();
  document.addEventListener('shopify:section:load', initAll);
})();

/* Original nine-frame cat artwork; movement and the released strand share one clock. */
(() => {
  const clamp = (value, low, high) => Math.min(high, Math.max(low, value));
  const wrap = (value, length) => (value % length + length) % length;

  class CatMotion {
    constructor(width = 360) { this.reset(width); }
    reset(width) {
      Object.assign(this, { width, x: 8, ball: 88, rotation: 0, direction: 1, frame: 0, state: 'sleep', elapsed: 0, stride: 0, target: 8 });
    }
    goTo(point) {
      // If the new point is already beside the cat, settle in place instead of walking backwards.
      let target = this.x;
      if (point > this.x + 80) target = point - 80;
      else if (point < this.x - 12) target = point + 12;
      this.target = clamp(target, 8, this.width - 96);
      if (Math.abs(this.target - this.x) > .6) this.direction = Math.sign(this.target - this.x);
      if (this.state === 'sleep') { this.state = 'wake'; this.elapsed = 0; }
      else if (this.state !== 'wake') this.state = 'walk';
    }
    step(delta) {
      const dt = clamp(delta, 0, 40);
      this.elapsed += dt;
      if (this.state === 'wake') {
        this.frame = this.elapsed < 170 ? 1 : 2;
        if (this.elapsed >= 350) { this.state = 'walk'; this.elapsed = 0; }
      } else if (this.state === 'walk') {
        const distance = this.target - this.x;
        if (Math.abs(distance) < .6) {
          this.x = this.target; this.state = 'settle'; this.elapsed = 0; this.frame = 8;
        } else {
          this.stride += dt / 550;
          const cadence = .86 + .14 * Math.sin(this.stride * Math.PI * 2);
          this.x += Math.sign(distance) * Math.min(Math.abs(distance), Math.min(150, Math.max(35, Math.abs(distance) * 2.5)) * cadence * dt / 1000);
          this.frame = [3, 4, 5, 6, 7][Math.floor(this.stride % 1 * 5)];
        }
      } else if (this.state === 'settle' && this.elapsed > 650) {
        this.state = 'sleep'; this.frame = 0;
      }
      const before = this.ball;
      const targetBall = clamp(this.x + (this.direction === 1 ? 80 : -12), 18, this.width - 12);
      this.ball += (targetBall - this.ball) * (1 - Math.exp(-dt / 70));
      this.rotation += (this.ball - before) / (Math.PI * 20) * 360;
      return this.state !== 'sleep' || Math.abs(targetBall - this.ball) > .1;
    }
  }

  function threadPath(ball) {
    const end = Math.max(9, ball - 8);
    const points = ['M8 64'];
    for (let x = 18; x < end - 20; x += 10) {
      const y = 64 + 2.5 * Math.sin(x / 34) + 1.2 * Math.sin(x / 71);
      points.push(`L${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    points.push(`Q${Math.max(8, end - 12).toFixed(1)} 65 ${end.toFixed(1)} 60`);
    return points.join(' ');
  }

  if (typeof module !== 'undefined') module.exports = { CatMotion, threadPath, wrap };
  if (typeof window === 'undefined' || customElements.get('hitoami-home')) return;

  class HitoamiHome extends HTMLElement {
    connectedCallback() {
      this.abort = new AbortController();
      this.on = (element, name, fn, options = {}) => element?.addEventListener(name, fn, { ...options, signal: this.abort.signal });
      this.slides = [...this.querySelectorAll('[data-slide]')];
      this.pages = [...this.querySelectorAll('[data-page]')];
      this.categories = [...this.querySelectorAll('[data-category]')];
      this.index = 0;
      this.lane = this.querySelector('.hitoami-cat-lane');
      this.cat = this.querySelector('[data-cat]');
      this.ball = this.querySelector('[data-ball]');
      this.thread = this.querySelector('[data-thread]');
      this.motion = new CatMotion(this.lane.clientWidth);
      this.reduce = matchMedia('(prefers-reduced-motion: reduce)');
      this.visible = true;
      this.querySelector('.hitoami-controls')?.removeAttribute('hidden');
      this.on(this.querySelector('[data-previous]'), 'click', () => this.show(this.index - 1));
      this.on(this.querySelector('[data-next]'), 'click', () => this.show(this.index + 1));
      this.pages.forEach((button, index) => this.on(button, 'click', () => this.show(index)));
      this.on(this.querySelector('.hitoami-hero'), 'keydown', event => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key) || event.target.matches('input, textarea, select')) return;
        event.preventDefault(); this.show(this.index + (event.key === 'ArrowRight' ? 1 : -1));
      });
      const scene = this.querySelector('.hitoami-slides');
      this.on(scene, 'pointerdown', event => {
        if (!event.isPrimary || event.button !== 0 || event.target.closest('a,button')) return;
        this.drag = { id: event.pointerId, x: event.clientX, y: event.clientY };
      });
      this.on(window, 'pointerup', event => {
        if (!this.drag || event.pointerId !== this.drag.id) return;
        const dx = event.clientX - this.drag.x, dy = event.clientY - this.drag.y;
        this.drag = null;
        if (Math.abs(dx) >= 45 && Math.abs(dx) > Math.abs(dy) * 1.4) this.show(this.index + (dx < 0 ? 1 : -1));
      });
      for (const event of ['pointercancel', 'blur']) this.on(window, event, () => { this.drag = null; });
      this.categories.forEach(link => {
        const move = () => this.moveCat(link.getBoundingClientRect().left - this.lane.getBoundingClientRect().left + link.offsetWidth / 2);
        this.on(link, 'pointerenter', event => { if (event.pointerType !== 'touch') move(); });
        this.on(link, 'focus', move);
        // Links retain native activation; buying never waits for the decorative cat.
      });
      this.on(this.reduce, 'change', () => {
        this.stop(); this.motion.reset(this.lane.clientWidth); this.paint();
      });
      this.on(document, 'visibilitychange', () => {
        if (document.hidden) this.stop(); else if (this.visible) this.start();
      });
      this.observer = new IntersectionObserver(entries => {
        this.visible = entries[0].isIntersecting;
        if (this.visible && !document.hidden) this.start(); else this.stop();
      });
      this.observer.observe(this.lane);
      this.resize = new ResizeObserver(() => {
        this.stop(); this.motion.reset(this.lane.clientWidth); this.paint();
      });
      this.resize.observe(this.lane);
      this.on(document, 'shopify:block:select', event => {
        const index = this.slides.findIndex(slide => slide.dataset.blockId === event.detail.blockId);
        if (index >= 0) this.show(index, false);
      });
      this.show(0, false, true);
      this.paint();
    }
    disconnectedCallback() {
      this.stop(); this.abort?.abort(); this.observer?.disconnect(); this.resize?.disconnect();
    }
    show(index, animate = true, force = false) {
      if (!this.slides.length) return;
      const next = wrap(index, this.slides.length);
      if (next === this.index && !force) return;
      const previous = this.slides[this.index];
      if (previous.contains(document.activeElement)) this.querySelector('[data-next]')?.focus();
      this.index = next;
      this.slides.forEach((slide, position) => {
        const inactive = position !== next;
        slide.hidden = inactive; slide.inert = inactive;
      });
      this.pages.forEach((button, position) => {
        if (position === next) button.setAttribute('aria-current', 'true');
        else button.removeAttribute('aria-current');
      });
      const count = this.querySelector('[data-current]');
      if (count) count.textContent = String(next + 1).padStart(2, '0');
      this.querySelector('[data-slide-status]').textContent = this.slides[next].querySelector('.hitoami-heading').textContent;
      if (animate && !this.reduce.matches) {
        this.slides[next].animate([{ opacity: .45 }, { opacity: 1 }], { duration: 340, easing: 'ease-out' });
        // Independent of slide/category counts: a short forward step, then gently rewind at the edge.
        const nextPoint = this.motion.ball + this.lane.clientWidth * .28;
        this.moveCat(nextPoint > this.lane.clientWidth - 20 ? 88 : nextPoint);
      }
    }
    moveCat(point) {
      if (this.dataset.motion !== 'true' || this.reduce.matches) return;
      this.motion.goTo(point); this.start();
    }
    stop() { cancelAnimationFrame(this.raf); this.raf = null; this.lastTime = null; }
    start() {
      if (this.raf || this.reduce.matches || this.dataset.motion !== 'true' || !this.visible || document.hidden) return;
      const tick = time => {
        const moving = this.motion.step(this.lastTime ? time - this.lastTime : 16);
        this.lastTime = time; this.paint();
        this.raf = moving ? requestAnimationFrame(tick) : null;
        if (!moving) this.lastTime = null;
      };
      this.raf = requestAnimationFrame(tick);
    }
    paint() {
      const { x, direction, frame, ball, rotation } = this.motion;
      this.cat.style.left = `${x}px`;
      this.cat.style.transform = `scaleX(${direction})`;
      this.cat.style.backgroundPosition = `${(frame % 3) * 50}% ${Math.floor(frame / 3) * 50}%`;
      this.ball.style.left = `${ball - 10}px`;
      this.ball.style.transform = `rotate(${rotation}deg)`;
      this.thread.setAttribute('d', threadPath(ball));
    }
  }
  customElements.define('hitoami-home', HitoamiHome);
})();

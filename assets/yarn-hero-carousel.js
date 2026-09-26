// Homepage peek carousel: keeps the current slide centered with one neighbour on each side, looping.
(() => {
  const AUTOPLAY_MS = 6000;

  const offsetFor = (index, current, count) => {
    let offset = (((index - current) % count) + count) % count;
    if (offset > Math.floor(count / 2)) offset -= count;
    return offset;
  };

  const init = (root) => {
    if (root.dataset.carouselReady) return;
    const slides = [...root.querySelectorAll('.yarn-carousel__slide')];
    const dots = [...root.querySelectorAll('[data-carousel-go]')];
    const count = slides.length;
    if (count < 2) return;
    root.dataset.carouselReady = 'true';
    let current = 0;

    const render = () => {
      slides.forEach((slide, index) => {
        const offset = offsetFor(index, current, count);
        const previous = Number(slide.style.getPropertyValue('--offset'));
        // A slide wrapping from one side to the other must not animate across the viewport.
        slide.classList.toggle('is-jump', Math.abs(offset - previous) > 1);
        slide.style.setProperty('--offset', offset);
        const isCurrent = offset === 0;
        slide.classList.toggle('is-current', isCurrent);
        slide.setAttribute('aria-hidden', String(!isCurrent));
        const link = slide.querySelector('a');
        if (link) link.tabIndex = isCurrent ? 0 : -1;
      });
      dots.forEach((dot, index) => dot.setAttribute('aria-current', String(index === current)));
    };

    const go = (index) => {
      current = ((index % count) + count) % count;
      render();
    };

    root.querySelector('[data-carousel-prev]')?.addEventListener('click', () => go(current - 1));
    root.querySelector('[data-carousel-next]')?.addEventListener('click', () => go(current + 1));
    dots.forEach((dot) => dot.addEventListener('click', () => go(Number(dot.dataset.carouselGo))));

    // Clicking a peeking neighbour brings it to the center instead of following its link.
    slides.forEach((slide, index) => {
      slide.addEventListener('click', (event) => {
        if (offsetFor(index, current, count) === 0) return;
        event.preventDefault();
        go(index);
      });
    });

    root.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') go(current - 1);
      if (event.key === 'ArrowRight') go(current + 1);
    });

    // Horizontal swipe on touch and pen; vertical scrolling stays with the page.
    const viewport = root.querySelector('.yarn-carousel__viewport');
    let startX = null;
    let startY = null;
    viewport.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse') return;
      startX = event.clientX;
      startY = event.clientY;
    });
    viewport.addEventListener('pointerup', (event) => {
      if (startX === null) return;
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      startX = null;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(current + (dx < 0 ? 1 : -1));
    });
    viewport.addEventListener('pointercancel', () => { startX = null; });

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (root.dataset.autoplay === 'true' && !reduceMotion) {
      let paused = false;
      const pause = () => { paused = true; };
      const resume = () => { paused = false; };
      root.addEventListener('mouseenter', pause);
      root.addEventListener('mouseleave', resume);
      root.addEventListener('focusin', pause);
      root.addEventListener('focusout', resume);
      setInterval(() => { if (!paused && !document.hidden) go(current + 1); }, AUTOPLAY_MS);
    }
  };

  const initAll = () => document.querySelectorAll('[data-yarn-carousel]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAll);
  else initAll();
  document.addEventListener('shopify:section:load', initAll);
})();

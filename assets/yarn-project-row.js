(function () {
  function scrollState(left, width, total) {
    const maximum = Math.max(0, total - width);
    return { overflowing: maximum > 2, atStart: left <= 2, atEnd: left >= maximum - 2 };
  }

  const ElementBase = typeof HTMLElement === 'undefined' ? class {} : HTMLElement;
  class YarnProjectRow extends ElementBase {
    connectedCallback() {
      if (this.controller) return;
      this.track = this.querySelector('[data-row-track]');
      this.controls = this.querySelector('[data-row-controls]');
      this.previous = this.querySelector('[data-row-previous]');
      this.next = this.querySelector('[data-row-next]');
      this.expandButton = this.querySelector('[data-row-expand]');
      if (!this.track || !this.controls || !this.expandButton) return;
      this.controller = new AbortController();
      const options = { signal: this.controller.signal };
      this.previous.addEventListener('click', () => this.move(-1), options);
      this.next.addEventListener('click', () => this.move(1), options);
      this.track.addEventListener('scroll', () => this.refresh(), { ...options, passive: true });
      this.expandButton.addEventListener('click', () => this.setExpanded(!this.expanded), options);
      this.observer = new ResizeObserver(() => this.refresh());
      this.observer.observe(this.track);
      this.refresh();
    }

    disconnectedCallback() {
      this.controller?.abort();
      this.observer?.disconnect();
      this.controller = null;
    }

    move(direction) {
      const card = this.track.querySelector('.yp-card:not([hidden])');
      if (!card) return;
      const gap = parseFloat(getComputedStyle(this.track).columnGap) || 0;
      const step = card.getBoundingClientRect().width + gap;
      const page = Math.max(1, Math.floor((this.track.clientWidth + gap) / step));
      this.track.scrollBy({ left: direction * step * page, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }

    setExpanded(expanded) {
      if (!this.track) return;
      if (expanded && !this.expanded && this.track.scrollWidth <= this.track.clientWidth + 2) return;
      this.expanded = expanded;
      this.classList.toggle('yp-row--expanded', expanded);
      this.expandButton.setAttribute('aria-expanded', String(expanded));
      this.querySelector('[data-row-expand-label]').hidden = expanded;
      this.querySelector('[data-row-collapse-label]').hidden = !expanded;
      this.track.scrollLeft = 0;
      this.refresh();
    }

    refresh() {
      if (!this.track || this.hidden) return;
      const state = scrollState(this.track.scrollLeft, this.track.clientWidth, this.track.scrollWidth);
      this.controls.hidden = this.expanded || !state.overflowing;
      this.expandButton.hidden = !this.expanded && !state.overflowing;
      this.previous.disabled = state.atStart;
      this.next.disabled = state.atEnd;
      this.track.tabIndex = state.overflowing && !this.expanded ? 0 : -1;
    }
  }

  if (typeof customElements !== 'undefined' && !customElements.get('yarn-project-row')) customElements.define('yarn-project-row', YarnProjectRow);
  if (typeof module !== 'undefined' && module.exports) module.exports = { scrollState, YarnProjectRow };
})();

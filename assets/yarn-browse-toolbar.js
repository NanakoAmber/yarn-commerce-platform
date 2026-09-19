/* Native GET filters remain usable without JS; preserve active filters and preview state. */
(() => {
  function samePriceRange(current, range) {
    return ['filter.v.price.gte', 'filter.v.price.lte'].every((key) => {
      const active = current.get(key);
      const expected = range.get(key);
      if (active === null || expected === null) return active === expected;
      return Number.isFinite(Number(active)) && Number(active) === Number(expected);
    });
  }
  if (typeof module !== 'undefined') module.exports = { samePriceRange };
  if (typeof document === 'undefined') return;
  function connect(root) {
    root.querySelectorAll('[data-yx-toolbar]').forEach((bar) => {
      if (bar.dataset.connected) return;
      bar.dataset.connected = 'true';
      const current = new URLSearchParams(window.location.search);
      const priceKeys = ['filter.v.price.gte', 'filter.v.price.lte'];
      bar.querySelectorAll('[data-yx-chip]').forEach((chip) => {
        const range = new URLSearchParams(chip.dataset.yxParam);
        const active = samePriceRange(current, range);
        chip.classList.toggle('yx-chip--active', active);
        if (active) chip.setAttribute('aria-current', 'true');
        else chip.removeAttribute('aria-current');
        const next = new URLSearchParams(current);
        priceKeys.forEach((key) => next.delete(key));
        next.delete('page');
        range.forEach((value, key) => next.set(key, value));
        chip.href = window.location.pathname + (next.size ? '?' + next.toString() : '');
      });
      const filters = bar.querySelector('[data-yx-filters]');
      if (!filters) return;
      ['preview_theme_id', '_fd', 'pb', 'q', 'filter.v.price.gte', 'filter.v.price.lte'].forEach((key) => {
        if (!current.has(key) || filters.elements.namedItem(key)) return;
        const input = document.createElement('input');
        input.type = 'hidden'; input.name = key; input.value = current.get(key);
        filters.append(input);
      });
      bar.querySelector('[data-yx-sort]').addEventListener('change', () => filters.requestSubmit());
    });
  }
  connect(document);
  document.addEventListener('shopify:section:load', (event) => connect(event.target));
})();

/* The B homepage uses the same Shopify-rendered facets as the full catalogue.
 * Native selects are the no-JS fallback and single source of filter state. */
class YarnProjectDiscovery extends HTMLElement {
  connectedCallback() {
    if (this.abort) return;
    this.form = this.querySelector('[data-yarn-form]');
    this.queryInput = this.querySelector('[data-yarn-query]');
    this.filters = Array.from(this.querySelectorAll('[data-yarn-filter]'));
    this.cards = Array.from(this.querySelectorAll('[data-yarn-catalog-item]'));
    this.picks = Array.from(this.querySelectorAll('[data-yarn-pick]'));
    this.dropdowns = Array.from(this.querySelectorAll('[data-yarn-dropdown]'));
    this.resultCount = this.querySelector('[data-yarn-result-count]');
    this.empty = this.querySelector('[data-yarn-empty]');
    this.more = this.querySelector('[data-yarn-more]');
    this.related = this.querySelector('[data-yarn-related]');
    this.limit = Number(this.dataset.initialLimit) || 4;
    this.expanded = false;
    if (!this.form || !this.queryInput) return;
    this.abort = new AbortController();
    const listen = (target, event, handler) => target.addEventListener(event, handler, { signal: this.abort.signal });
    this.filters.forEach((filter) => listen(filter, 'change', () => this.update('push')));
    listen(this.form, 'submit', (event) => { event.preventDefault(); this.update('push'); });
    listen(this.queryInput, 'input', () => {
      clearTimeout(this.searchTimer);
      this.searchTimer = setTimeout(() => this.update('replace'), 250);
    });
    this.picks.forEach((pick) => listen(pick, 'click', (event) => {
      event.preventDefault();
      const filter = this.filter(pick.dataset.yarnPick);
      const value = pick.dataset.value;
      filter.value = filter.value === value && filter.dataset.yarnFilter === 'project' ? '' : value;
      this.update('push');
    }));
    this.querySelectorAll('[data-yarn-clear]').forEach((button) => listen(button, 'click', () => {
      this.queryInput.value = '';
      this.filters.forEach((filter) => { filter.value = this.defaultValue(filter); });
      this.update('push');
      this.queryInput.focus({ preventScroll: true });
    }));
    listen(this.more, 'click', () => { this.expanded = true; this.render(); });
    listen(this.related, 'click', () => { this.filter('type').value = 'yarn'; this.update('push'); });
    listen(window, 'popstate', () => { this.restore(); this.expanded = false; this.closeAll(); this.render(); });
    listen(document, 'click', (event) => {
      if (!this.dropdowns.some((dropdown) => dropdown.contains(event.target))) this.closeAll();
    });
    this.dropdowns.forEach((dropdown) => {
      const select = dropdown.querySelector('select');
      const trigger = dropdown.querySelector('[data-yarn-trigger]');
      const panel = dropdown.querySelector('[data-yarn-options]');
      panel.replaceChildren();
      Array.from(select.options).forEach((option) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.value = option.value;
        const label = document.createElement('span');
        label.textContent = option.textContent;
        const count = document.createElement('span');
        count.className = 'yarn-project-discovery__option-count';
        count.setAttribute('aria-hidden', 'true');
        button.append(label, count);
        listen(button, 'click', () => {
          select.value = option.value;
          this.update('push');
          trigger.focus({ preventScroll: true });
        });
        panel.append(button);
      });
      listen(trigger, 'click', () => {
        const open = trigger.getAttribute('aria-expanded') !== 'true';
        this.closeAll();
        this.toggle(dropdown, open);
      });
      listen(dropdown, 'keydown', (event) => {
        const buttons = Array.from(panel.querySelectorAll('button'));
        const index = buttons.indexOf(document.activeElement);
        if (event.key === 'Escape') {
          if (!panel.hidden) { event.preventDefault(); this.toggle(dropdown, false); trigger.focus(); }
        } else if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
          event.preventDefault();
          this.closeAll(dropdown);
          this.toggle(dropdown, true);
          const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 :
            event.key === 'ArrowDown' ? (index + 1) % buttons.length : (index - 1 + buttons.length) % buttons.length;
          buttons[next].focus();
        }
      });
      listen(dropdown, 'focusout', (event) => {
        if (!dropdown.contains(event.relatedTarget)) this.toggle(dropdown, false);
      });
      trigger.hidden = false;
      select.hidden = true;
    });
    this.restore();
    this.classList.add('is-ready');
    this.render();
  }

  disconnectedCallback() {
    this.abort?.abort();
    this.abort = null;
    clearTimeout(this.searchTimer);
  }

  filter(key) { return this.filters.find((filter) => filter.dataset.yarnFilter === key); }
  defaultValue(filter) { return filter.dataset.yarnFilter === 'type' ? this.dataset.defaultType : ''; }
  normalize(value) { return value.normalize('NFKC').toLocaleLowerCase().replace(/\s+/g, ' ').trim(); }
  state() {
    return Object.fromEntries([
      ['query', this.normalize(this.queryInput.value)],
      ...this.filters.map((filter) => [filter.dataset.yarnFilter, filter.value]),
    ]);
  }

  matches(card, state) {
    const search = this.normalize(card.dataset.yarnSearch || '');
    return state.query.split(' ').filter(Boolean).every((word) => search.includes(word)) &&
      this.filters.every((filter) => {
        const key = filter.dataset.yarnFilter;
        const attribute = `yarn${key[0].toUpperCase()}${key.slice(1)}`;
        return !state[key] || (card.dataset[attribute] || '').split(' ').includes(state[key]);
      });
  }

  update(mode) {
    clearTimeout(this.searchTimer);
    this.expanded = false;
    const url = new URL(window.location.href);
    const set = (key, value) => value ? url.searchParams.set(key, value) : url.searchParams.delete(key);
    set('discover_q', this.queryInput.value.trim());
    this.filters.forEach((filter) => set(`discover_${filter.dataset.yarnFilter}`, filter.value));
    if (url.href !== window.location.href) window.history[`${mode}State`]({}, '', url);
    this.closeAll();
    this.render();
  }

  restore() {
    const params = new URL(window.location.href).searchParams;
    this.queryInput.value = params.get('discover_q') || '';
    this.filters.forEach((filter) => {
      const key = `discover_${filter.dataset.yarnFilter}`;
      const value = params.has(key) ? params.get(key) : this.defaultValue(filter);
      filter.value = Array.from(filter.options).some((option) => option.value === value) ? value : this.defaultValue(filter);
    });
  }

  render() {
    const state = this.state();
    const active = Boolean(state.query || this.filters.some((filter) => filter.value !== this.defaultValue(filter)));
    const matching = this.cards.filter((card) => this.matches(card, state));
    const visible = active || this.expanded ? matching : matching.slice(0, this.limit);
    this.cards.forEach((card) => { card.hidden = !visible.includes(card); });
    this.picks.forEach((pick) => {
      const selected = state[pick.dataset.yarnPick] === pick.dataset.value;
      pick.classList.toggle('is-selected', selected);
      if (pick.tagName === 'BUTTON') pick.setAttribute('aria-pressed', String(selected));
      else if (selected) pick.setAttribute('aria-current', 'true');
      else pick.removeAttribute('aria-current');
    });
    this.dropdowns.forEach((dropdown) => {
      const select = dropdown.querySelector('select');
      const key = select.dataset.yarnFilter;
      dropdown.querySelector('[data-yarn-filter-label]').textContent = select.selectedOptions[0].textContent;
      dropdown.classList.toggle('is-selected', Boolean(select.value));
      dropdown.querySelectorAll('[data-yarn-options] button').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.value === select.value));
        const count = this.cards.filter((card) => this.matches(card, { ...state, [key]: button.dataset.value })).length;
        button.querySelector('.yarn-project-discovery__option-count').textContent = String(count);
      });
    });
    this.resultCount.textContent = this.resultCount.dataset.template.replace('{shown}', visible.length).replace('{total}', matching.length);
    this.empty.hidden = matching.length > 0;
    this.more.hidden = matching.length <= visible.length;
    this.querySelectorAll('[data-yarn-clear]').forEach((button) => { button.hidden = !active; });
    this.related.hidden = matching.length > 0 || state.type === 'yarn' || !this.cards.some((card) => this.matches(card, { ...state, type: 'yarn' }));
  }

  toggle(dropdown, open) {
    dropdown.querySelector('[data-yarn-trigger]').setAttribute('aria-expanded', String(open));
    dropdown.querySelector('[data-yarn-options]').hidden = !open;
  }
  closeAll(except) { this.dropdowns.forEach((dropdown) => { if (dropdown !== except) this.toggle(dropdown, false); }); }
}

if (!customElements.get('yarn-project-discovery')) customElements.define('yarn-project-discovery', YarnProjectDiscovery);

class YarnDiscovery extends HTMLElement {
  connectedCallback() {
    this.form = this.querySelector('[data-yarn-form]');
    this.queryInput = this.querySelector('[data-yarn-query]');
    this.filters = Array.from(this.querySelectorAll('[data-yarn-filter]'));
    this.cards = Array.from(this.querySelectorAll('[data-yarn-catalog-item]'));
    this.results = this.querySelector('[data-yarn-results]');
    this.resultCount = this.querySelector('[data-yarn-result-count]');
    this.emptyState = this.querySelector('[data-yarn-empty]');
    this.viewAll = this.querySelector('[data-yarn-view-all]');
    this.clearButtons = Array.from(this.querySelectorAll('[data-yarn-clear]'));
    this.initialLimit = Number.parseInt(this.dataset.initialLimit, 10) || this.cards.length;

    if (!this.form || !this.queryInput || !this.results || this.cards.length === 0) return;

    this.onSubmit = this.handleSubmit.bind(this);
    this.onFilterChange = this.handleFilterChange.bind(this);
    this.onSearchClear = this.handleSearchClear.bind(this);
    this.onClear = this.handleClear.bind(this);
    this.onPopState = this.handlePopState.bind(this);

    this.form.addEventListener('submit', this.onSubmit);
    this.filters.forEach((filter) => filter.addEventListener('change', this.onFilterChange));
    this.queryInput.addEventListener('search', this.onSearchClear);
    this.clearButtons.forEach((button) => button.addEventListener('click', this.onClear));
    window.addEventListener('popstate', this.onPopState);

    this.restoreControlsFromUrl();
    this.render();
  }

  disconnectedCallback() {
    if (!this.form) return;

    this.form.removeEventListener('submit', this.onSubmit);
    this.filters.forEach((filter) => filter.removeEventListener('change', this.onFilterChange));
    this.queryInput.removeEventListener('search', this.onSearchClear);
    this.clearButtons.forEach((button) => button.removeEventListener('click', this.onClear));
    window.removeEventListener('popstate', this.onPopState);

    if (this.renderFrame) cancelAnimationFrame(this.renderFrame);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.update('push');
  }

  handleFilterChange() {
    this.update('push');
  }

  handleSearchClear() {
    if (this.queryInput.value === '') this.update('push');
  }

  handleClear() {
    this.queryInput.value = '';
    this.filters.forEach((filter) => {
      filter.value = '';
    });
    this.update('push');
    this.queryInput.focus();
  }

  handlePopState() {
    const scrollPosition = { left: window.scrollX, top: window.scrollY };
    this.restoreControlsFromUrl();
    this.render();
    window.scrollTo(scrollPosition);
  }

  update(historyMode) {
    const scrollPosition = { left: window.scrollX, top: window.scrollY };
    this.updateUrl(historyMode);
    this.results.setAttribute('aria-busy', 'true');
    this.classList.add('is-updating');

    if (this.renderFrame) cancelAnimationFrame(this.renderFrame);
    this.renderFrame = requestAnimationFrame(() => {
      this.render();
      window.scrollTo(scrollPosition);
      this.results.setAttribute('aria-busy', 'false');
      this.classList.remove('is-updating');
    });
  }

  getState() {
    return {
      query: this.normalize(this.queryInput.value),
      type: this.getFilterValue('type'),
      project: this.getFilterValue('project'),
      quantity: this.getFilterValue('quantity'),
      season: this.getFilterValue('season'),
      style: this.getFilterValue('style'),
    };
  }

  getFilterValue(key) {
    return this.filters.find((filter) => filter.dataset.yarnFilter === key)?.value || '';
  }

  matches(card, state) {
    const queryTerms = state.query.split(' ').filter(Boolean);
    const searchableText = this.normalize(card.dataset.yarnSearch || '');
    const matchesQuery = queryTerms.every((term) => searchableText.includes(term));
    const matchesFilters = this.filters.every((filter) => {
      const key = filter.dataset.yarnFilter;
      const selectedValue = state[key];
      if (!selectedValue) return true;

      return (card.dataset[`yarn${this.capitalize(key)}`] || '').split(' ').includes(selectedValue);
    });

    return matchesQuery && matchesFilters;
  }

  render() {
    const state = this.getState();
    const active = Boolean(state.query || this.filters.some((filter) => filter.value));
    let visibleCount = 0;

    this.cards.forEach((card, index) => {
      const shouldShow = active ? this.matches(card, state) : index < this.initialLimit;
      card.hidden = !shouldShow;
      if (shouldShow) visibleCount += 1;
    });

    this.filters.forEach((filter) => filter.classList.toggle('is-active', Boolean(filter.value)));
    this.updateOptionCounts(state);
    this.updateResultCount(active, visibleCount);

    this.emptyState.hidden = !active || visibleCount > 0;
    this.clearButtons.forEach((button) => {
      if (!button.closest('[data-yarn-empty]')) button.hidden = !active;
    });
    if (this.viewAll) this.viewAll.hidden = active;
  }

  updateOptionCounts(state) {
    this.filters.forEach((filter) => {
      const key = filter.dataset.yarnFilter;

      Array.from(filter.options).forEach((option, index) => {
        if (index === 0) return;
        option.dataset.baseLabel ||= option.textContent.replace(/\s\(\d+\)$/, '');

        const candidateState = { ...state, [key]: option.value };
        const count = this.cards.filter((card) => this.matches(card, candidateState)).length;
        option.textContent = `${option.dataset.baseLabel} (${count})`;
        option.disabled = count === 0 && filter.value !== option.value;
      });
    });
  }

  updateResultCount(active, visibleCount) {
    const template = active ? this.resultCount.dataset.activeTemplate : this.resultCount.dataset.initialTemplate;
    this.resultCount.textContent = template
      .replace('{count}', String(visibleCount))
      .replace('{shown}', String(Math.min(this.initialLimit, this.cards.length)))
      .replace('{total}', String(this.cards.length));
  }

  restoreControlsFromUrl() {
    const params = new URL(window.location.href).searchParams;
    this.queryInput.value = params.get('discover_q') || '';

    this.filters.forEach((filter) => {
      const value = params.get(`discover_${filter.dataset.yarnFilter}`) || '';
      filter.value = Array.from(filter.options).some((option) => option.value === value) ? value : '';
    });
  }

  updateUrl(historyMode) {
    const url = new URL(window.location.href);
    const query = this.queryInput.value.trim();

    this.setUrlParam(url, 'discover_q', query);
    this.filters.forEach((filter) => {
      this.setUrlParam(url, `discover_${filter.dataset.yarnFilter}`, filter.value);
    });

    window.history[`${historyMode}State`]({}, '', url);
  }

  setUrlParam(url, key, value) {
    if (value) {
      url.searchParams.set(key, value);
    } else {
      url.searchParams.delete(key);
    }
  }

  normalize(value) {
    return value.normalize('NFKC').toLocaleLowerCase().replace(/\s+/g, ' ').trim();
  }

  capitalize(value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  }
}

if (!customElements.get('yarn-discovery')) {
  customElements.define('yarn-discovery', YarnDiscovery);
}

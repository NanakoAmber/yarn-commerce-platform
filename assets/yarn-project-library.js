(function () {
  const FILTER_NAMES = ['category', 'difficulty', 'tutorial', 'time', 'made_for', 'holiday', 'hook_size'];
  const DYNAMIC_FILTER_NAMES = ['made_for', 'holiday', 'hook_size'];
  const PARAM_PREFIX = 'project_';

  function normalizeText(value) {
    return String(value || '')
      .normalize('NFKD')
      .replace(/(\p{Script=Latin})\p{Mark}+/gu, '$1')
      .normalize('NFC')
      .toLocaleLowerCase()
      .replace(/\s+/g, ' ')
      .trim();
  }

  function timeMatches(minutes, bucket) {
    if (!bucket) return true;
    if (!/^\d+$/.test(String(minutes || ''))) return false;
    const value = Number(minutes);
    if (bucket === 'under60') return value < 60;
    if (bucket === '60to180') return value >= 60 && value <= 180;
    if (bucket === 'over180') return value > 180;
    return false;
  }

  function matchesProject(project, state) {
    const haystack = normalizeText(`${project.title || ''} ${project.summary || ''}`);
    const terms = normalizeText(state.q).split(' ').filter(Boolean);
    if (!terms.every((term) => haystack.includes(term))) return false;

    for (const name of FILTER_NAMES) {
      const selected = state[name] || '';
      if (!selected) continue;
      if (name === 'time') {
        if (!timeMatches(project.time, selected)) return false;
      } else if (name === 'tutorial') {
        const tutorials = String(project.tutorial || '').split(',').map((value) => value.trim()).filter(Boolean);
        if (!tutorials.includes(selected)) return false;
      } else if (String(project[name] || '') !== selected) {
        return false;
      }
    }
    return true;
  }

  function stateFromSearch(search) {
    const params = search instanceof URLSearchParams ? search : new URLSearchParams(search || '');
    return Object.fromEntries(['q', ...FILTER_NAMES].map((name) => [name, params.get(`${PARAM_PREFIX}${name}`) || '']));
  }

  function urlWithState(href, state) {
    const url = new URL(href);
    for (const name of ['q', ...FILTER_NAMES]) {
      const value = String(state[name] || '').trim();
      if (value) url.searchParams.set(`${PARAM_PREFIX}${name}`, value);
      else url.searchParams.delete(`${PARAM_PREFIX}${name}`);
    }
    return url;
  }

  function paginationUrl(value, currentHref) {
    const url = new URL(value, currentHref);
    const current = new URL(currentHref);
    const sectionId = url.searchParams.get('section_id');
    if (url.origin !== current.origin || url.pathname !== current.pathname || !sectionId) throw new Error('Invalid project pagination URL');
    url.searchParams.set('section_id', sectionId);
    url.hash = '';
    return url;
  }

  function uniqueSortedValues(projects, name) {
    const values = new Set(projects.map((project) => String(project[name] || '').trim()).filter(Boolean));
    return [...values].sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  }

  function projectFromCard(card) {
    return {
      title: card.dataset.title || '',
      summary: card.dataset.summary || '',
      category: card.dataset.category || '',
      difficulty: card.dataset.difficulty || '',
      tutorial: card.dataset.tutorial || '',
      time: card.dataset.time || '',
      made_for: card.dataset.madeFor || '',
      holiday: card.dataset.holiday || '',
      hook_size: card.dataset.hookSize || '',
    };
  }

  const ElementBase = typeof HTMLElement === 'undefined' ? class {} : HTMLElement;

  class YarnProjectLibrary extends ElementBase {
    connectedCallback() {
      if (this.connectionController) return;

      this.form = this.querySelector('form[data-project-filters]');
      this.queryInput = this.querySelector('input[name="q"]');
      this.selects = Object.fromEntries(FILTER_NAMES.map((name) => [name, this.querySelector(`select[name="${name}"]`)]));
      this.categoryButtons = Array.from(this.querySelectorAll('[data-project-category]'));
      this.clearButton = this.querySelector('[data-project-clear]');
      this.count = this.querySelector('[data-project-count]');
      this.empty = this.querySelector('[data-project-empty]');
      this.error = this.querySelector('[data-project-error]');
      this.retryButton = this.error?.querySelector('[data-project-retry]');
      this.loading = this.querySelector('[data-project-loading]');
      this.results = this.querySelector('[data-project-results]');
      this.nextLink = this.querySelector('a[data-project-next]');

      if (!this.form || !this.queryInput || !this.results || !this.count || !this.empty || !this.error || !this.loading || FILTER_NAMES.some((name) => !this.selects[name])) return;

      this.connectionGeneration = (this.connectionGeneration || 0) + 1;
      this.connectionController = new AbortController();
      const signal = this.connectionController.signal;
      const listen = (target, event, handler) => target?.addEventListener(event, handler, { signal });

      listen(this.form, 'submit', (event) => {
        event.preventDefault();
        if (this.loaded) this.update();
      });
      listen(this.form, 'change', () => {
        if (this.loaded) this.update();
      });
      listen(this.queryInput, 'input', () => {
        if (!this.loaded) return;
        clearTimeout(this.inputTimer);
        this.inputTimer = setTimeout(() => this.update(), 200);
      });
      this.categoryButtons.forEach((button) => listen(button, 'click', (event) => {
        event.preventDefault();
        if (!this.loaded) return;
        const value = button.dataset.projectCategory || '';
        this.selects.category.value = this.selects.category.value === value ? '' : value;
        this.update();
      }));
      listen(this.clearButton, 'click', (event) => {
        event.preventDefault();
        if (!this.loaded) return;
        this.queryInput.value = '';
        FILTER_NAMES.forEach((name) => { this.selects[name].value = ''; });
        this.update();
        this.queryInput.focus({ preventScroll: true });
      });
      listen(this.retryButton, 'click', (event) => {
        event.preventDefault();
        this.loadRemainingPages();
      });
      listen(window, 'popstate', () => {
        if (!this.loaded) return;
        this.restore();
        this.render();
      });

      this.cards = Array.from(this.results.querySelectorAll('article[data-project-card]'));
      this.projectIds = new Set(this.cards.map((card) => card.dataset.projectId).filter(Boolean));
      this.visitedPageUrls = new Set();
      this.nextPageUrl = this.nextLink?.href || '';
      this.loaded = false;
      this.countContainer = this.querySelector('[data-project-count-container]') || this.count.closest('.yp-count') || this.count;
      this.countContainer.hidden = true;
      this.empty.hidden = true;
      if (this.nextLink) this.nextLink.hidden = true;
      this.setFiltersDisabled(true);
      this.loadRemainingPages();
    }

    disconnectedCallback() {
      this.connectionGeneration = (this.connectionGeneration || 0) + 1;
      this.connectionController?.abort();
      this.connectionController = null;
      this.loadingTask = null;
      this.loaded = false;
      clearTimeout(this.inputTimer);
    }

    setFiltersDisabled(disabled) {
      Array.from(this.form.elements).forEach((control) => { control.disabled = disabled; });
    }

    setLoading(loading) {
      this.loading.hidden = !loading;
      if (this.retryButton) this.retryButton.disabled = loading;
    }

    validatedPageUrl(value) {
      return paginationUrl(value, window.location.href);
    }

    async loadRemainingPages() {
      const controller = this.connectionController;
      const generation = this.connectionGeneration;
      if (this.loadingTask?.generation === generation || this.loaded || !controller) return this.loadingTask?.promise;

      const task = { generation, promise: null };
      this.loadingTask = task;
      this.error.hidden = true;
      this.empty.hidden = true;
      this.countContainer.hidden = true;
      if (this.nextLink) this.nextLink.hidden = true;
      this.setLoading(true);
      this.setFiltersDisabled(true);

      const isCurrent = () => this.connectionGeneration === generation && this.connectionController === controller;
      task.promise = (async () => {
        try {
          while (this.nextPageUrl) {
            const url = this.validatedPageUrl(this.nextPageUrl);
            if (this.visitedPageUrls.has(url.href)) throw new Error('Project pagination loop');

            const response = await fetch(url.href, {
              credentials: 'same-origin',
              headers: { Accept: 'text/html' },
              signal: controller.signal,
            });
            if (!isCurrent()) return;
            if (!response.ok) throw new Error(`Project pagination failed: ${response.status}`);

            const responseText = await response.text();
            if (!isCurrent()) return;
            const documentPage = new DOMParser().parseFromString(responseText, 'text/html');
            const pageResults = documentPage.querySelector('[data-project-results]');
            if (!pageResults) throw new Error('Project pagination response is missing results');
            this.visitedPageUrls.add(url.href);

            const pageCards = Array.from(pageResults.querySelectorAll('article[data-project-card]'));
            for (const card of pageCards) {
              const id = card.dataset.projectId;
              if (id && this.projectIds.has(id)) continue;
              if (id) this.projectIds.add(id);
              this.results.append(document.importNode(card, true));
            }

            const followingLink = documentPage.querySelector('a[data-project-next]');
            this.nextPageUrl = followingLink?.getAttribute('href') || '';
          }

          if (!isCurrent()) return;
          this.cards = Array.from(this.results.querySelectorAll('article[data-project-card]'));
          this.loaded = true;
          if (this.nextLink) this.nextLink.hidden = true;
          this.populateDynamicOptions();
          this.restore();
          this.setFiltersDisabled(false);
          this.countContainer.hidden = false;
          this.render();
        } catch (error) {
          if (error.name === 'AbortError' || !isCurrent()) return;
          this.error.hidden = false;
        } finally {
          if (isCurrent()) {
            this.setLoading(false);
            if (this.loadingTask === task) this.loadingTask = null;
          }
        }
      })();

      return task.promise;
    }

    state() {
      return {
        q: this.queryInput.value,
        ...Object.fromEntries(FILTER_NAMES.map((name) => [name, this.selects[name].value])),
      };
    }

    populateDynamicOptions() {
      for (const name of DYNAMIC_FILTER_NAMES) {
        const select = this.selects[name];
        const firstOption = select.options[0];
        select.replaceChildren(firstOption);
        const projects = this.cards.map((card) => projectFromCard(card));
        for (const value of uniqueSortedValues(projects, name)) {
          const option = document.createElement('option');
          option.value = value;
          option.textContent = value;
          select.append(option);
        }
      }
    }

    restore() {
      const state = stateFromSearch(window.location.search);
      this.queryInput.value = state.q;
      FILTER_NAMES.forEach((name) => {
        const select = this.selects[name];
        select.value = Array.from(select.options).some((option) => option.value === state[name]) ? state[name] : '';
      });
      this.syncCategoryButtons();
    }

    syncCategoryButtons() {
      const selected = this.selects.category.value;
      this.categoryButtons.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.projectCategory === selected));
      });
    }

    update() {
      clearTimeout(this.inputTimer);
      const url = urlWithState(window.location.href, this.state());
      if (url.href !== window.location.href) window.history.replaceState({}, '', url);
      this.render();
    }

    render() {
      if (!this.loaded) return;
      const state = this.state();
      this.syncCategoryButtons();
      let visible = 0;
      for (const card of this.cards) {
        const matches = matchesProject(projectFromCard(card), state);
        card.hidden = !matches;
        if (matches) visible += 1;
      }
      this.count.textContent = String(visible);
      this.empty.hidden = visible !== 0;
    }
  }

  if (typeof customElements !== 'undefined' && !customElements.get('yarn-project-library')) {
    customElements.define('yarn-project-library', YarnProjectLibrary);
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      FILTER_NAMES,
      DYNAMIC_FILTER_NAMES,
      normalizeText,
      timeMatches,
      matchesProject,
      stateFromSearch,
      urlWithState,
      paginationUrl,
      uniqueSortedValues,
      YarnProjectLibrary,
    };
  }
})();

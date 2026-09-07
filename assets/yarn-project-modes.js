/* Mode selection is navigation state, not a purchase or saved making session. */
(function () {
  function initialMode(modes, search) {
    const requested = new URLSearchParams(search || '').get('project_mode');
    if (modes.includes(requested)) return requested;
    return modes.includes('materials') ? 'materials' : modes[0];
  }

  function validQuantity(value, variant) {
    const min = Number(variant.min) || 1;
    const step = Number(variant.step) || 1;
    const desired = Number.isFinite(Number(value)) ? Number(value) : min;
    let quantity = min + Math.max(0, Math.ceil((desired - min) / step)) * step;
    if (variant.max != null) quantity = Math.min(quantity, min + Math.floor((Number(variant.max) - min) / step) * step);
    return quantity;
  }

  if (typeof customElements !== 'undefined' && !customElements.get('yarn-project-modes')) {
    customElements.define('yarn-project-modes', class extends HTMLElement {
      connectedCallback() {
        if (this.controller) return;
        this.controller = new AbortController();
        const options = { signal: this.controller.signal };
        this.links = Array.from(this.querySelectorAll('[data-mode-link]'));
        this.panels = Array.from(this.querySelectorAll('[data-mode-panel]'));
        this.modes = this.panels.map((panel) => panel.dataset.modePanel);
        const switcher = this.querySelector('[data-mode-switcher]');
        if (switcher) switcher.setAttribute('role', 'tablist');
        this.links.forEach((link) => {
          link.setAttribute('role', 'tab');
          link.addEventListener('click', (event) => {
            event.preventDefault();
            this.select(link.dataset.modeLink, true);
          }, options);
          link.addEventListener('keydown', (event) => {
            if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
            event.preventDefault();
            const index = this.links.indexOf(link);
            const next = event.key === 'Home' ? 0 : event.key === 'End' ? this.links.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + this.links.length) % this.links.length;
            this.links[next].focus();
            this.select(this.links[next].dataset.modeLink, true);
          }, options);
        });
        window.addEventListener('popstate', () => this.select(initialMode(this.modes, window.location.search)), options);
        window.addEventListener('hashchange', () => this.showLinkedPanel(), options);
        this.select(initialMode(this.modes, window.location.search));
        this.showLinkedPanel();
      }

      disconnectedCallback() {
        this.controller?.abort();
        this.controller = null;
      }

      showLinkedPanel() {
        const hash = window.location.hash;
        if (!['#ProjectPrepare', '#ProjectTutorial', '#ProjectFinished'].includes(hash)) return;
        const target = this.querySelector(hash);
        const panel = target?.closest('[data-mode-panel]');
        if (panel?.hidden) {
          this.select(panel.dataset.modePanel);
          target.scrollIntoView({ block: 'start' });
        }
      }

      select(mode, updateUrl = false) {
        if (!this.modes.includes(mode)) return;
        this.dataset.selectedMode = mode;
        this.panels.forEach((panel) => {
          panel.hidden = panel.dataset.modePanel !== mode;
          if (this.links.length) {
            panel.setAttribute('role', 'tabpanel');
            panel.setAttribute('aria-labelledby', `ProjectMode-${panel.dataset.modePanel}`);
          }
        });
        this.links.forEach((link) => {
          const selected = link.dataset.modeLink === mode;
          link.setAttribute('aria-selected', String(selected));
          link.tabIndex = selected ? 0 : -1;
        });
        if (updateUrl) {
          const url = new URL(window.location.href);
          url.searchParams.set('project_mode', mode);
          if (['#ProjectPrepare', '#ProjectTutorial', '#ProjectFinished'].includes(url.hash)) url.hash = '';
          window.history.replaceState({}, '', url);
        }
      }
    });
  }

  if (typeof customElements !== 'undefined' && !customElements.get('yarn-project-purchase')) {
    customElements.define('yarn-project-purchase', class extends HTMLElement {
      connectedCallback() {
        if (this.controller) return;
        const data = this.querySelector('[data-purchase-variants]');
        if (!data) return;
        try { this.variants = JSON.parse(data.textContent); } catch { return; }
        this.controller = new AbortController();
        this.form = this.querySelector('form');
        this.quantity = this.form.querySelector('[name="quantity"]');
        this.button = this.form.querySelector('[type="submit"]');
        this.total = this.querySelector('[data-purchase-total]');
        this.details = this.querySelector('[data-purchase-details]') || document.getElementById(this.dataset.detailsId);
        this.form.addEventListener('change', (event) => this.update(event.target.name === 'id'), { signal: this.controller.signal });
        this.quantity.addEventListener('input', () => this.update(false), { signal: this.controller.signal });
        this.querySelector('yarn-material-purchase').addEventListener('purchase-settled', () => this.update(false), { signal: this.controller.signal });
        this.update(false);
      }

      disconnectedCallback() {
        this.controller?.abort();
        this.controller = null;
      }

      update(variantChanged) {
        const id = this.form.querySelector('[name="id"]:checked')?.value || this.form.querySelector('select[name="id"], [name="id"][type="hidden"]')?.value;
        const variant = this.variants.find((item) => String(item.id) === id);
        if (!variant) return;
        this.quantity.min = variant.min;
        this.quantity.step = variant.step;
        if (variant.max != null) this.quantity.max = variant.max;
        else this.quantity.removeAttribute('max');
        if (variantChanged) this.quantity.value = validQuantity(this.quantity.value, variant);
        const amount = Number(this.quantity.value);
        if (Number.isFinite(amount) && amount > 0) {
          this.total.textContent = new Intl.NumberFormat(this.dataset.locale || 'en', {
            style: 'currency', currency: this.dataset.currency || 'JPY',
          }).format(variant.price * amount / 100);
        }
        const purchase = this.querySelector('yarn-material-purchase');
        if (!purchase.busy) {
          this.button.disabled = !variant.available || Boolean(purchase.uncertain);
          this.button.textContent = variant.available ? this.dataset.availableLabel : this.dataset.soldOutLabel;
        }
        if (this.details) {
          const url = new URL(this.details.href, window.location.href);
          url.searchParams.set('variant', String(variant.id));
          this.details.href = url.href;
          const unitPrice = this.details.querySelector('[data-purchase-unit-price]');
          if (unitPrice) unitPrice.textContent = new Intl.NumberFormat(this.dataset.locale || 'en', {
            style: 'currency', currency: this.dataset.currency || 'JPY',
          }).format(variant.price / 100);
        }
      }
    });
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = { initialMode, validQuantity };
})();

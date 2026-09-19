/* Rich text remains readable without JavaScript. H3 headings become optional steps. */
if (!customElements.get('yarn-project-tutorial')) {
  customElements.define('yarn-project-tutorial', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.enhanced) return;
      this.dataset.enhanced = 'true';
      const content = this.querySelector('.metafield-rich_text_field') || this;
      let step;
      for (const node of Array.from(content.childNodes)) {
        if (node.nodeName === 'H3') {
          step = document.createElement('details');
          step.className = 'yp-tutorial-step';
          const summary = document.createElement('summary');
          summary.textContent = node.textContent;
          step.append(summary);
          node.replaceWith(step);
        } else if (node.nodeName === 'H2') {
          step = null;
        } else if (step) {
          step.append(node);
        }
      }
    }
  });
}

/* Progressive enhancement: each component is a separate, explicit purchase.
 * A native POST still works without JS. Never retry a possibly accepted request. */
if (!customElements.get('yarn-material-purchase')) {
  customElements.define('yarn-material-purchase', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.enhanced) return;
      this.dataset.enhanced = 'true';
      const form = this.querySelector('form');
      const button = form.querySelector('button[type="submit"]');
      const status = this.querySelector('[data-material-status]');
      const cart = this.querySelector('[data-material-cart]');
      const drawer = document.querySelector('cart-drawer');
      const label = button.textContent;
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (this.busy || this.uncertain || !form.reportValidity()) return;
        this.busy = true;
        button.disabled = true;
        button.textContent = this.dataset.pending;
        status.hidden = true;
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);
        let confirmed = false;
        try {
          const body = new FormData(form);
          if (drawer) {
            body.append('sections', drawer.getSectionsToRender().map((section) => section.id).join(','));
            body.append('sections_url', window.location.pathname);
            drawer.setActiveElement(button);
          }
          const response = await fetch(`${form.action}.js`, {
            method: 'POST', body, signal: controller.signal,
            headers: { Accept: 'application/json' },
          });
          // 4xx means Shopify rejected this add. 5xx / transport errors are ambiguous.
          if (!response.ok && response.status >= 500) throw new Error('uncertain');
          const result = await response.json();
          if (!response.ok) {
            status.textContent = `${this.dataset.error} ${typeof result.description === 'string' ? result.description : ''}`;
          } else {
            confirmed = true;
            status.textContent = this.dataset.success;
            cart.hidden = false;
            if (drawer && drawer.getSectionsToRender().every((section) => result.sections?.[section.id])) {
              drawer.classList.remove('is-empty');
              drawer.renderContents(result);
            } else if (drawer) {
              // The add succeeded but the drawer cannot be refreshed. Show the canonical cart.
              window.location.assign(cart.href);
            }
          }
        } catch {
          if (confirmed) {
            window.location.assign(cart.href);
          } else {
            this.uncertain = true;
            status.textContent = this.dataset.uncertain;
          }
          cart.hidden = false;
        } finally {
          clearTimeout(timeout);
          this.busy = false;
          button.disabled = Boolean(this.uncertain);
          button.textContent = label;
          status.hidden = false;
          this.dispatchEvent(new CustomEvent('purchase-settled'));
        }
      });
    }
  });
}

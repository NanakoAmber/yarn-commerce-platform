(function () {
  // URL values are navigation hints, never proof of compatibility or commerce truth.
  function readContext(href, origin) {
    try {
      const params = new URL(href, origin).searchParams;
      const handle = params.get('yarn_project') || '';
      const title = (params.get('yarn_project_title') || '').trim();
      const source = new URL(params.get('yarn_project_url') || '', origin);
      if (!/^[a-z0-9][a-z0-9_-]{0,254}$/.test(handle) || !title || title.length > 200) return null;
      if (source.origin !== origin || !source.pathname.endsWith(`/pages/projects/${handle}`)) return null;
      // Discard arbitrary source query/hash values; allow only the two known UI modes.
      const kind = params.get('yarn_project_kind');
      const mode = ['finished', 'materials'].includes(kind) ? kind : '';
      return {
        handle, title, url: source.pathname + (mode ? `?project_mode=${mode}` : ''),
        ...(mode ? { mode } : {}),
        component: (params.get('yarn_component') || '').slice(0, 200),
        reference: params.get('yarn_project_kind') === 'yarn_project.internal_finished',
      };
    } catch { return null; }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { readContext };
    return;
  }
  if (customElements.get('yarn-product-context')) return;
  customElements.define('yarn-product-context', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.enhanced) return;
      this.dataset.enhanced = 'true';
      const context = readContext(window.location.href, window.location.origin);
      if (!context) return;
      const product = this.closest('product-info');
      if (product?.dataset.productId !== this.dataset.productId) return;
      const link = this.querySelector('[data-project-return]');
      link.textContent = context.title;
      link.href = context.url;
      this.querySelector('[data-project-reference]').hidden = !context.reference;
      const properties = { Project: context.title, '_Project handle': context.handle };
      if (context.mode) properties['_Project mode'] = context.mode;
      if (context.component) properties.Component = context.component;
      if (context.reference) properties.Reference = this.querySelector('[data-project-reference]').textContent.trim();
      for (const form of product.querySelectorAll('product-form form')) {
        for (const [key, value] of Object.entries(properties)) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = `properties[${key}]`;
          input.value = value;
          form.append(input);
        }
      }
      this.hidden = false;
    }
  });
})();

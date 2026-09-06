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

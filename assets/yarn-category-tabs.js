// Home yarn categories (#114): accessible tabs. Arrow keys / Home / End move between tabs and only the selected tab is
// tabbable. In the theme editor, selecting a tab or category block shows the panel that holds it.
(() => {
  const select = (root, tab, focus) => {
    root.querySelectorAll('[role="tab"]').forEach((other) => {
      const on = other === tab;
      other.setAttribute('aria-selected', String(on));
      other.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(other.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
    });
    if (focus) {
      tab.focus();
      tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  };

  const init = (root) => {
    if (root.dataset.cattabsReady) return;
    root.dataset.cattabsReady = 'true';
    const tabs = [...root.querySelectorAll('[role="tab"]')];
    if (tabs.length < 2) return;
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => select(root, tab, false));
      tab.addEventListener('keydown', (event) => {
        const moves = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: tabs.length - 1 };
        if (!(event.key in moves)) return;
        event.preventDefault();
        select(root, tabs[(moves[event.key] + tabs.length) % tabs.length], true);
      });
    });
  };

  const initAll = () => document.querySelectorAll('[data-yarn-cattabs]').forEach(init);

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAll);
  else initAll();

  document.addEventListener('shopify:section:load', initAll);
  document.addEventListener('shopify:block:select', (event) => {
    const id = event.detail && event.detail.blockId;
    if (!id) return;
    const target = [...document.querySelectorAll('[data-yarn-cattabs] [data-block-id]')].find((el) => el.dataset.blockId === id);
    if (!target) return;
    const root = target.closest('[data-yarn-cattabs]');
    const panel = target.closest('[role="tabpanel"]');
    const tab = target.matches('[role="tab"]') ? target : panel && root.querySelector(`[aria-controls="${panel.id}"]`);
    if (tab) select(root, tab, false);
  });
})();

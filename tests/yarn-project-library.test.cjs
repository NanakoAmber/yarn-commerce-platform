const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const {
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
} = require('../assets/yarn-project-library.js');
const source = fs.readFileSync('assets/yarn-project-library.js', 'utf8');
const section = fs.readFileSync('sections/yarn-project-library.liquid', 'utf8');

test('only card-derived filters are marked dynamic', () => {
  assert.deepEqual(DYNAMIC_FILTER_NAMES, ['made_for', 'holiday', 'hook_size']);
  assert.deepEqual(uniqueSortedValues([
    { hook_size: '10mm' },
    { hook_size: '6mm' },
    { hook_size: '10mm' },
    { hook_size: '' },
  ], 'hook_size'), ['6mm', '10mm']);
});

test('homepage project filters expose four illustrated category shortcuts and a real search submit', () => {
  assert.equal((section.match(/data-project-category=/g) || []).length, 1, 'category shortcuts are rendered from one Liquid loop');
  for (const asset of ['impeccable-category-bag-plate.png', 'impeccable-category-scarf-plate.png', 'impeccable-b-category-blanket-plate.png', 'impeccable-category-doll-plate.png']) {
    assert.match(section, new RegExp(asset.replaceAll('.', '\\.')));
  }
  assert.match(section, /button type="submit"[^>]*>[\s\S]*icon-search\.svg/);
  assert.match(source, /categoryButtons/);
  assert.match(source, /dataset\.projectCategory/);
  assert.match(source, /selects\.category\.value/);
});

test('pagination accepts only same-origin section responses', () => {
  const current = 'https://example.test/zh/projects?preview_theme_id=42';
  assert.equal(paginationUrl('/zh/projects?page=2&section_id=project-library', current).origin, 'https://example.test');
  const normalized = paginationUrl('/zh/projects?page=2&section_id=project-library&section_id=duplicate#projects', current);
  assert.deepEqual(normalized.searchParams.getAll('section_id'), ['project-library']);
  assert.equal(normalized.hash, '');
  assert.throws(() => paginationUrl('/zh/projects?page=2', current), /Invalid project pagination URL/);
  assert.throws(() => paginationUrl('/projects?page=2&section_id=project-library', current), /Invalid project pagination URL/);
  assert.throws(() => paginationUrl('https://attacker.test/?section_id=project-library', current), /Invalid project pagination URL/);
});

const blankState = () => Object.fromEntries(['q', ...FILTER_NAMES].map((name) => [name, '']));
const project = {
  title: 'Café 收纳篮',
  summary: 'Soft COTTON basket for beginners',
  category: 'basket',
  difficulty: 'beginner',
  tutorial: '图文,视频',
  time: '180',
  made_for: 'home',
  holiday: 'spring',
  hook_size: '6mm',
};

test('search is case, Unicode-width and diacritic insensitive across title and summary', () => {
  assert.equal(normalizeText('ＣＡＦÉ'), 'cafe');
  assert.equal(normalizeText('が'), 'が');
  assert.equal(matchesProject(project, { ...blankState(), q: 'cafe COTTON 收纳' }), true);
  assert.equal(matchesProject(project, { ...blankState(), q: 'cafe wool' }), false);
});

test('browser implementation parses and imports server nodes without HTML string injection', () => {
  assert.match(source, /new DOMParser\(\)\.parseFromString/);
  assert.match(source, /document\.importNode\(card, true\)/);
  assert.doesNotMatch(source, /\.innerHTML\s*=/);
  assert.match(source, /typeof customElements !== 'undefined'/);
  assert.match(source, /if \(this\.connectionController\) return/);
  assert.match(source, /disconnectedCallback\(\)[\s\S]*\.abort\(\)/);
});

test('all selected filters intersect and tutorial matches a comma-separated capability', () => {
  const state = { ...blankState(), category: 'basket', difficulty: 'beginner', tutorial: '视频', made_for: 'home', hook_size: '6mm' };
  assert.equal(matchesProject(project, state), true);
  assert.equal(matchesProject(project, { ...state, holiday: 'winter' }), false);
  assert.equal(matchesProject({ ...project, tutorial: '图文' }, state), false);
});

test('unknown time never matches an active bucket and boundaries are exact', () => {
  assert.equal(timeMatches('', 'under60'), false);
  assert.equal(timeMatches('unknown', '60to180'), false);
  assert.equal(timeMatches('59', 'under60'), true);
  assert.equal(timeMatches('60', 'under60'), false);
  assert.equal(timeMatches('60', '60to180'), true);
  assert.equal(timeMatches('180', '60to180'), true);
  assert.equal(timeMatches('181', 'over180'), true);
  assert.equal(timeMatches('180', 'over180'), false);
  assert.equal(timeMatches('', ''), true);
});

test('project-prefixed query state round-trips while preserving unrelated params and hash', () => {
  const original = 'https://example.test/zh/projects?preview_theme_id=42&project_q=bag&project_category=home#library';
  const restored = stateFromSearch(new URL(original).searchParams);
  assert.equal(restored.q, 'bag');
  assert.equal(restored.category, 'home');
  assert.equal(restored.difficulty, '');

  const updated = urlWithState(original, { ...blankState(), q: '篮子', difficulty: 'easy' });
  assert.equal(updated.searchParams.get('preview_theme_id'), '42');
  assert.equal(updated.searchParams.get('project_q'), '篮子');
  assert.equal(updated.searchParams.get('project_difficulty'), 'easy');
  assert.equal(updated.searchParams.has('project_category'), false);
  assert.equal(updated.hash, '#library');
});

test('clearing state removes only project parameters', () => {
  const cleared = urlWithState('https://example.test/?keep=1&project_q=x&project_time=over180#results', blankState());
  assert.equal(cleared.searchParams.get('keep'), '1');
  assert.equal([...cleared.searchParams.keys()].some((key) => key.startsWith('project_')), false);
  assert.equal(cleared.hash, '#results');
});

function fakeLibrary(nextPageUrl = '') {
  const library = new YarnProjectLibrary();
  library.connectionGeneration = 1;
  library.connectionController = new AbortController();
  library.error = { hidden: false };
  library.empty = { hidden: false };
  library.countContainer = { hidden: false };
  library.nextLink = { hidden: false };
  library.loading = { hidden: true };
  library.retryButton = { disabled: false };
  library.form = { elements: [{ disabled: false }] };
  library.results = { querySelectorAll: () => [], append: () => {} };
  library.cards = [];
  library.projectIds = new Set();
  library.visitedPageUrls = new Set();
  library.nextPageUrl = nextPageUrl;
  library.loaded = false;
  library.populateDynamicOptions = () => {};
  library.restore = () => {};
  library.render = () => {};
  return library;
}

test('a library with no next page completes without retaining a resolved loading task', async () => {
  const library = fakeLibrary();
  await library.loadRemainingPages();
  assert.equal(library.loaded, true);
  assert.equal(library.loadingTask, null);
  assert.equal(library.loading.hidden, true);
  assert.equal(library.countContainer.hidden, false);
  assert.equal(library.form.elements[0].disabled, false);
});

test('a failed page leaves partial filtering disabled and can be retried', async () => {
  const originalFetch = global.fetch;
  const originalDOMParser = global.DOMParser;
  const originalWindow = global.window;
  const library = fakeLibrary('/zh/projects?page=2&section_id=library');
  global.window = { location: { href: 'https://example.test/zh/projects' } };
  library.validatedPageUrl = (value) => paginationUrl(value, global.window.location.href);

  try {
    global.fetch = async () => ({ ok: false, status: 503 });
    await library.loadRemainingPages();
    assert.equal(library.loaded, false);
    assert.equal(library.error.hidden, false);
    assert.equal(library.form.elements[0].disabled, true);
    assert.equal(library.countContainer.hidden, true);
    assert.equal(library.nextLink.hidden, true);

    global.fetch = async () => ({ ok: true, text: async () => '<section></section>' });
    global.DOMParser = class {
      parseFromString() {
        return {
          querySelector: (selector) => selector === '[data-project-results]' ? { querySelectorAll: () => [] } : null,
        };
      }
    };
    await library.loadRemainingPages();
    assert.equal(library.loaded, true);
    assert.equal(library.error.hidden, true);
    assert.equal(library.form.elements[0].disabled, false);
  } finally {
    global.fetch = originalFetch;
    global.DOMParser = originalDOMParser;
    global.window = originalWindow;
  }
});

test('an aborted old generation cannot clear a newer connection task or loading state', async () => {
  const originalFetch = global.fetch;
  const library = fakeLibrary('/zh/projects?page=2&section_id=library');
  library.validatedPageUrl = () => new URL('https://example.test/zh/projects?page=2&section_id=library');

  try {
    global.fetch = (_, options) => new Promise((resolve, reject) => {
      options.signal.addEventListener('abort', () => reject(Object.assign(new Error('aborted'), { name: 'AbortError' })));
    });
    const oldPromise = library.loadRemainingPages();
    library.disconnectedCallback();

    library.connectionController = new AbortController();
    const newTask = { generation: library.connectionGeneration, promise: Promise.resolve() };
    library.loadingTask = newTask;
    library.loading.hidden = false;
    await oldPromise;

    assert.equal(library.loadingTask, newTask);
    assert.equal(library.loading.hidden, false);
  } finally {
    global.fetch = originalFetch;
  }
});

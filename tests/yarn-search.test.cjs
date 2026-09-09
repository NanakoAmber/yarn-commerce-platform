const test = require('node:test');
const assert = require('node:assert/strict');
const { stateFromSearch, queryState, urlWithState, matchesEntity, paginationUrl } = require('../assets/yarn-search.js');
const { endpointUrl } = require('../assets/yarn-favorites.js');
const project = { type: 'project', id: '1', title: '交叉针收纳篮', summary: '桌面上的篮子', category: '家居', purchase: 'finished,materials' };
const yarn = { type: 'product', id: '2', title: '雪尼尔线', summary: '适合编织收纳篮子', category: '', purchase: 'materials' };
const hook = { type: 'product', id: '3', title: '4mm 钩针', summary: '竹制钩针', category: '', purchase: 'materials', associatedProject: project };

test('basket results match each entity own copy and do not inherit a related project match', () => {
  const state = queryState('篮子');
  assert.equal(matchesEntity(project, state), true);
  assert.equal(matchesEntity(yarn, state), true);
  assert.equal(matchesEntity(hook, state), false);
  assert.equal(matchesEntity(yarn, { ...state, category: 'home', purchase: 'materials' }), true);
  assert.equal(matchesEntity(yarn, { ...state, purchase: 'finished' }), false);
  assert.equal(matchesEntity({ ...yarn, category: 'bag' }, { ...state, category: 'home' }), false);
});

test('new keyword clears browse restrictions while URL round trips preserve filters and preview', () => {
  const href = 'https://example.com/zh/search?browse=projects&category=home&purchase=finished&project_q=old&page_a=2&section_id=s&preview_theme_id=42';
  const next = urlWithState(href, queryState('cotton'));
  assert.equal(next.searchParams.get('preview_theme_id'), '42');
  for (const key of ['browse', 'category', 'purchase', 'project_q', 'page_a', 'section_id']) assert.equal(next.searchParams.has(key), false);
  const filtered = { ...queryState('篮子'), category: 'home', purchase: 'materials' };
  assert.deepEqual(stateFromSearch(urlWithState(next.href, filtered).search), filtered);
  assert.deepEqual(stateFromSearch('?category=invalid&purchase=invalid&browse=invalid'), queryState(''));
});

test('favorites filter keys keep projects and products with identical IDs distinct', () => {
  const state = { ...queryState(''), browse: 'favorites' };
  assert.equal(matchesEntity(project, state, new Set(['product:1'])), false);
  assert.equal(matchesEntity(project, state, new Set(['project:1'])), true);
});

test('pagination cannot leave the localized route or section and retains draft preview', () => {
  const href = 'https://example.com/zh/search?q=basket&preview_theme_id=42';
  assert.equal(paginationUrl('?page_a=2&section_id=s', href, 's').searchParams.get('preview_theme_id'), '42');
  for (const target of ['https://evil.example/zh/search?section_id=s', '/search?section_id=s', '?section_id=other']) assert.throws(() => paginationUrl(target, href, 's'));
});

test('favorites endpoint must stay on the shop proxy path without credential-bearing query strings', () => {
  const href = 'https://shop.example/zh/search';
  assert.equal(endpointUrl('/apps/yarn-favorites', href).origin, 'https://shop.example');
  for (const value of ['', 'https://evil.example/apps/favorites', '/admin', '/apps/favorites?token=secret']) assert.throws(() => endpointUrl(value, href));
});

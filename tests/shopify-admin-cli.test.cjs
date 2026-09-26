const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseArgs, isMutation, summarizeCoverage } = require('../scripts/shopify-admin.cjs');

test('mutations are detected even after comments, queries are not', () => {
  assert.equal(isMutation('# change title\n mutation { productUpdate { userErrors { message } } }'), true);
  assert.equal(isMutation('mutation Rename($id: ID!) { a }'), true);
  assert.equal(isMutation('{ shop { name } }'), false);
  assert.equal(isMutation('query { mutationLog }'), false);
});

test('write flag and variables parse without swallowing the query', () => {
  const opts = parseArgs(['--write', '-f', 'x.graphql', '--vars', '{"first":5}', 'summary']);
  assert.equal(opts.write, true);
  assert.equal(opts.file, 'x.graphql');
  assert.deepEqual(opts.vars, { first: 5 });
  assert.deepEqual(opts.positional, ['summary']);
});

test('coverage counts only non-empty source fields and ignores outdated translations', () => {
  const nodes = [
    { translatableContent: [{ key: 'title', value: '毛线' }, { key: 'body_html', value: '' }], translations: [{ key: 'title', value: '毛糸', outdated: false }] },
    { translatableContent: [{ key: 'title', value: 'A' }, { key: 'body_html', value: 'B' }], translations: [{ key: 'title', value: 'a', outdated: false }] },
    { translatableContent: [{ key: 'title', value: 'C' }], translations: [{ key: 'title', value: 'c', outdated: true }] },
    { translatableContent: [{ key: 'title', value: '' }], translations: [] },
  ];
  assert.deepEqual(summarizeCoverage(nodes), { total: 3, full: 1, partial: 1, none: 1 });
});

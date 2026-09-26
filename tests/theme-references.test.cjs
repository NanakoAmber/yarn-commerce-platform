const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { scan } = require('../scripts/theme-references.cjs');

test('every section, snippet and asset is referenced by a live file (or listed in KEEP with a reason)', () => {
  const { unreferenced } = scan();
  assert.deepEqual(unreferenced, [], `删除或引用这些文件：\n${unreferenced.join('\n')}`);
});

test('reference walk follows templates, render chains, JS section fetches and image sidecars', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'theme-refs-'));
  const write = (file, text) => {
    fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
    fs.writeFileSync(path.join(root, file), text);
  };
  write('layout/theme.liquid', "{{ 'app.js' | asset_url }}{% sections 'header-group' %}");
  write('sections/header-group.json', '{"sections":{"h":{"type":"header"}}}');
  write('sections/header.liquid', "{% render 'logo' %}");
  write('snippets/logo.liquid', "{{ 'logo.png' | asset_url }}");
  write('assets/app.js', "fetch(`?section_id=cart-drawer`)");
  write('sections/cart-drawer.liquid', 'cart');
  write('assets/logo.png', '');
  write('assets/logo.png.source.json', '{}');
  write('templates/index.json', '{"sections":{}}');
  write('sections/orphan.liquid', "{% render 'orphan-part' %}");
  write('snippets/orphan-part.liquid', "{{ 'orphan.css' | asset_url }}");
  write('assets/orphan.css', '');

  assert.deepEqual(scan(root).unreferenced, ['assets/orphan.css', 'sections/orphan.liquid', 'snippets/orphan-part.liquid']);
  fs.rmSync(root, { recursive: true, force: true });
});

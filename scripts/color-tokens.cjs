#!/usr/bin/env node
// Generates every color output from design/tokens/colors.json.
// `node scripts/color-tokens.cjs` writes; `--check` only reports drift.
const { readFileSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const root = join(__dirname, '..');
const paths = {
  source: join(root, 'design/tokens/colors.json'),
  css: join(root, 'assets/yarn-design-tokens.css'),
  settings: join(root, 'config/settings_data.json'),
  design: join(root, 'DESIGN.md'),
};
const BEGIN = '/* BEGIN generated colors — edit design/tokens/colors.json, then run npm run tokens */';
const END = '/* END generated colors */';

const loadSource = () => JSON.parse(readFileSync(paths.source, 'utf8'));

function resolveRoles(source) {
  const roles = {};
  for (const [name, role] of Object.entries(source.roles)) {
    const hex = source.palette[role.value];
    if (!hex) throw new Error(`role ${name}: unknown palette color ${role.value}`);
    roles[name] = { ...role, hex, css: role.alpha === undefined ? hex : rgba(hex, role.alpha) };
  }
  return roles;
}

const channels = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
const rgba = (hex, alpha) => `rgba(${channels(hex).join(', ')}, ${alpha})`;

function luminance(hex) {
  const [r, g, b] = channels(hex).map(v => v / 255).map(v => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}
function lab(hex) {
  const [r, g, b] = channels(hex).map(v => v / 255).map(v => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  const f = t => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const x = f((0.4124 * r + 0.3576 * g + 0.1805 * b) / 0.95047);
  const y = f(0.2126 * r + 0.7152 * g + 0.0722 * b);
  const z = f((0.0193 * r + 0.1192 * g + 0.9505 * b) / 1.08883);
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}
const deltaE = (a, b) => Math.hypot(...lab(a).map((v, i) => v - lab(b)[i]));

function cssBlock(source) {
  const roles = resolveRoles(source);
  const lines = [BEGIN, ':root {'];
  for (const [name, role] of Object.entries(roles)) {
    lines.push(`  --yarn-${name}: ${role.css}; /* ${role.value}${role.alpha === undefined ? '' : ` @ ${role.alpha}`} · ${role.use} */`);
  }
  lines.push('}', END);
  return lines.join('\n');
}

function buildCss(source, current) {
  const start = current.indexOf(BEGIN);
  const end = current.indexOf(END);
  if (start < 0 || end < start) throw new Error('yarn-design-tokens.css: generated color markers missing');
  return current.slice(0, start) + cssBlock(source) + current.slice(end + END.length);
}

function buildSettings(source, current) {
  const roles = resolveRoles(source);
  const i = current.indexOf('{');
  const data = JSON.parse(current.slice(i));
  const schemes = data.current.color_schemes;
  for (const [id, scheme] of Object.entries(source.schemes)) {
    if (!schemes[id]) throw new Error(`settings_data.json: missing ${id}`);
    for (const [field, role] of Object.entries(scheme)) {
      if (field === 'name') continue;
      if (!roles[role]) throw new Error(`${id}.${field}: unknown role ${role}`);
      schemes[id].settings[field] = roles[role].hex;
    }
  }
  return current.slice(0, i) + JSON.stringify(data, null, 2) + (current.endsWith('\n') ? '\n' : '');
}

function buildDesign(source, current) {
  const roles = resolveRoles(source);
  const lines = current.split('\n');
  const start = lines.indexOf('colors:');
  let end = start + 1;
  while (end < lines.length && /^\s/.test(lines[end])) end++;
  if (start < 0) throw new Error('DESIGN.md: colors: block missing');
  const block = ['colors:', ...Object.entries(roles).map(([name, role]) => `  ${name}: "${role.css}"`)];
  return [...lines.slice(0, start), ...block, ...lines.slice(end)].join('\n');
}

function outputs(source = loadSource()) {
  return [
    [paths.css, buildCss(source, readFileSync(paths.css, 'utf8'))],
    [paths.settings, buildSettings(source, readFileSync(paths.settings, 'utf8'))],
    [paths.design, buildDesign(source, readFileSync(paths.design, 'utf8'))],
  ];
}

module.exports = { paths, loadSource, resolveRoles, contrast, deltaE, outputs };

if (require.main === module) {
  const check = process.argv.includes('--check');
  const stale = [];
  for (const [path, next] of outputs()) {
    if (readFileSync(path, 'utf8') === next) continue;
    stale.push(path.replace(root + '/', ''));
    if (!check) writeFileSync(path, next);
  }
  if (check && stale.length) {
    console.error(`Color outputs are stale: ${stale.join(', ')}. Run npm run tokens.`);
    process.exit(1);
  }
  console.log(stale.length ? `${check ? 'Stale' : 'Updated'}: ${stale.join(', ')}` : 'Color outputs up to date.');
}

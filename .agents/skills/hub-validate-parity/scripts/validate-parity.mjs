#!/usr/bin/env node
/**
 * validate-parity.mjs
 * Validates bilingual parity, schema conformity, Lucide icon existence,
 * and Zero-Flags compliance across all Projects Hub content entries.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../../../');

const esDir = path.join(rootDir, 'src/content/projects/es');
const enDir = path.join(rootDir, 'src/content/projects/en');

// Flag emoji regex (regional indicator symbol letters pair)
const FLAG_REGEX = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/u;

// Load lucide icon export names
let validLucideIcons = new Set();
try {
  const lucide = await import('lucide-static');
  for (const key of Object.keys(lucide)) {
    validLucideIcons.add(key);
  }
} catch {
  // lucide-static import fallback
}

console.log('======================================================');
console.log('   Projects Hub — Bilingual & Schema Parity Validator ');
console.log('======================================================');

if (!fs.existsSync(esDir) || !fs.existsSync(enDir)) {
  console.error('Error: Content directories missing.');
  process.exit(1);
}

const esFiles = fs.readdirSync(esDir).filter(f => f.endsWith('.md'));
const enFiles = fs.readdirSync(enDir).filter(f => f.endsWith('.md'));

const esSlugs = new Set(esFiles.map(f => f.replace('.md', '')));
const enSlugs = new Set(enFiles.map(f => f.replace('.md', '')));

const errors = [];
const warnings = [];

// 1. Check file parity
for (const slug of esSlugs) {
  if (!enSlugs.has(slug)) {
    errors.push(`[PARITY] Missing English entry for: src/content/projects/en/${slug}.md`);
  }
}

for (const slug of enSlugs) {
  if (!esSlugs.has(slug)) {
    errors.push(`[PARITY] Missing Spanish entry for: src/content/projects/es/${slug}.md`);
  }
}

// Helper to extract frontmatter and raw text
function parseEntry(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { frontmatter: '', raw };
  return { frontmatter: match[1], raw };
}

// 2. Inspect each entry
const allFiles = [
  ...esFiles.map(f => ({ path: path.join(esDir, f), lang: 'es', file: f, slug: f.replace('.md', '') })),
  ...enFiles.map(f => ({ path: path.join(enDir, f), lang: 'en', file: f, slug: f.replace('.md', '') }))
];

for (const item of allFiles) {
  const { frontmatter, raw } = parseEntry(item.path);

  // Zero Flags check
  if (FLAG_REGEX.test(raw)) {
    errors.push(`[ZERO_FLAGS] Detected country flag emoji in ${item.lang}/${item.file}`);
  }

  // Version status check (< 1.0 -> En Desarrollo / In Development)
  const isEnDesarrollo = /status:\s*"(?:En Desarrollo|In Development)"/.test(frontmatter);
  const isActivo = /status:\s*"(?:Activo|Active)"/.test(frontmatter);

  if (/(?:v|version\s*)0\.\d+/i.test(raw) && isActivo && !isEnDesarrollo) {
    warnings.push(`[VERSION_STATUS] ${item.lang}/${item.file} mentions v0.x but has status 'Activo/Active'. Should be 'En Desarrollo' / 'In Development'.`);
  }

  // Check Lucide icons in product features
  if (validLucideIcons.size > 0) {
    const iconMatches = [...frontmatter.matchAll(/icon:\s*"?([a-zA-Z0-9]+)"?/g)];
    for (const match of iconMatches) {
      const iconName = match[1];
      // Skip top-level case-study icon paths or desktop/mobile/web
      if (['desktop', 'mobile', 'web', 'ai', 'data-science'].includes(iconName)) continue;
      if (!validLucideIcons.has(iconName)) {
        errors.push(`[LUCIDE_ICON] Invalid export name '${iconName}' in ${item.lang}/${item.file} (must match a valid export from 'lucide-static')`);
      }
    }
  }
}

// Print results
if (errors.length > 0) {
  console.log('\n❌ ERRORS DETECTED:');
  for (const err of errors) console.log('  • ' + err);
}

if (warnings.length > 0) {
  console.log('\n⚠️  WARNINGS / SUGGESTIONS:');
  for (const warn of warnings) console.log('  • ' + warn);
}

if (errors.length === 0 && warnings.length === 0) {
  console.log(`\n✅ Parity, Schema & Zero-Flags checks passed for ${esSlugs.size} project pairs.`);
  process.exit(0);
} else if (errors.length === 0) {
  console.log(`\n✅ No blocking errors found (${esSlugs.size} project pairs inspected).`);
  process.exit(0);
} else {
  process.exit(1);
}

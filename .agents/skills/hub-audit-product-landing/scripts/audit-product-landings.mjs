#!/usr/bin/env node

/**
 * audit-product-landings.mjs
 *
 * Audits all Projects Hub product landing pages (product block in src/content/projects/{es,en}/*.md)
 * for SEO compliance, content completeness, Lucide icon validity, and upstream binary/platform alignment.
 *
 * ZERO HARDCODED PATHS: dynamically resolves relative to process.cwd() or REPOS_DIR.
 */

import fs from 'node:fs';
import path from 'node:path';

const CWD = process.cwd();
const REPOS_DIR = process.env.REPOS_DIR ? path.resolve(process.env.REPOS_DIR) : path.resolve(CWD, '..');
const ES_DIR = path.join(CWD, 'src', 'content', 'projects', 'es');
const EN_DIR = path.join(CWD, 'src', 'content', 'projects', 'en');

const FLAG_REGEX = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/u;

// Load valid Lucide icon exports
let validLucideIcons = new Set();
try {
  const lucide = await import('lucide-static');
  for (const key of Object.keys(lucide)) {
    validLucideIcons.add(key);
  }
} catch {
  // Lucide fallback
}

const EXTERNAL_SHOWCASE_PROJECTS = new Set([
  'anacatalina-mcp', // Live FastAPI / FastMCP server with native interactive browser showcase on Cloud Run
  'anacatalina-cv',  // Canonical curriculum website (cv.ana-catalina.com)
  'emotion-finder',   // Full-stack FastHTML/HTMX web application on Vercel
  'life-tracker-analytics', // Streamlit / Python data app
]);
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return null;
  return { frontmatter: match[1], body: match[2] };
}

function extractField(fm, fieldName) {
  const match = fm.match(new RegExp(`^${fieldName}:\\s*["']?([^"'\r\n]+)["']?`, 'm'));
  return match ? match[1].trim() : null;
}

function extractProductBlock(fm) {
  const match = fm.match(/product:\s*\r?\n([\s\S]*?)(?=\r?\n[a-zA-Z0-9_-]+:|$)/);
  if (!match) return null;
  return match[1];
}

function extractProductTagline(prodFm) {
  const match = prodFm.match(/tagline:\s*["']?([^"'\r\n]+)["']?/);
  return match ? match[1].trim() : null;
}

function extractProductIntro(prodFm) {
  const match = prodFm.match(/intro:\s*["']?([^"'\r\n]+)["']?/);
  return match ? match[1].trim() : null;
}

function extractFeatures(prodFm) {
  const features = [];
  const featureMatches = [...prodFm.matchAll(/-\s*icon:\s*["']?([^"'\r\n]+)["']?\s*\r?\n\s*title:\s*["']?([^"'\r\n]+)["']?\s*\r?\n\s*text:\s*["']?([^"'\r\n]+)["']?/g)];
  for (const m of featureMatches) {
    features.push({ icon: m[1], title: m[2], text: m[3] });
  }
  return features;
}

function extractSnippets(prodFm) {
  const snippets = [];
  const lines = prodFm.split(/\r?\n/);
  let inSnippets = false;
  let current = null;
  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*codeSnippets:\s*$/.test(line)) {
      inSnippets = true;
      continue;
    }
    if (inSnippets && /^\s*[a-zA-Z0-9_-]+:\s*/.test(line) && !line.startsWith('    ') && !line.startsWith('  -')) {
      inSnippets = false;
      if (current) snippets.push(current);
      current = null;
      continue;
    }
    if (inSnippets) {
      const titleMatch = line.match(/^\s*-\s*title:\s*["']?([^"'\r\n]+)["']?/);
      if (titleMatch) {
        if (current) snippets.push(current);
        current = { title: titleMatch[1], language: '', code: '' };
        inCodeBlock = false;
        continue;
      }
      const langMatch = line.match(/^\s*language:\s*["']?([^"'\r\n]+)["']?/);
      if (langMatch && current) {
        current.language = langMatch[1];
        continue;
      }
      if (/^\s*code:\s*\|?\s*$/.test(line)) {
        inCodeBlock = true;
        continue;
      }
      const inlineCodeMatch = line.match(/^\s*code:\s*["']?([^"'\r\n]+)["']?/);
      if (inlineCodeMatch && current && !inCodeBlock) {
        current.code = inlineCodeMatch[1];
        continue;
      }
      if (inCodeBlock && current) {
        if (/^\s{8,}/.test(line)) {
          current.code += (current.code ? '\n' : '') + line.trim();
        } else if (line.trim() === '') {
          // empty line in block
        } else {
          inCodeBlock = false;
        }
      }
    }
  }
  if (current) snippets.push(current);
  return snippets;
}

function extractFaq(prodFm) {
  const faq = [];
  const matches = [...prodFm.matchAll(/question:\s*["']?([^"'\r\n]+)["']?\s*\r?\n\s*answer:\s*["']?([^"'\r\n]+)["']?/g)];
  for (const m of matches) {
    faq.push({ question: m[1], answer: m[2] });
  }
  return faq;
}

function extractPlatforms(prodFm) {
  const match = prodFm.match(/platforms:\s*\[([^\]]*)\]/);
  if (!match) return [];
  return match[1].split(',').map(s => s.replace(/["']/g, '').trim()).filter(Boolean);
}

function getUpstreamBinaries(repoName) {
  const repoPath = path.join(REPOS_DIR, repoName);
  if (!fs.existsSync(repoPath)) return [];
  const pkgPath = path.join(repoPath, 'package.json');
  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      if (typeof pkg.bin === 'string') {
        return [pkg.name.replace(/^@[^/]+\//, '')];
      } else if (typeof pkg.bin === 'object' && pkg.bin !== null) {
        return Object.keys(pkg.bin);
      }
    } catch {
      // ignore
    }
  }
  return [];
}

export function auditLandings() {
  if (!fs.existsSync(ES_DIR) || !fs.existsSync(EN_DIR)) {
    console.error('Error: Projects directories not found.');
    process.exit(1);
  }

  const esFiles = fs.readdirSync(ES_DIR).filter(f => f.endsWith('.md'));
  const issues = [];
  const warnings = [];
  const passing = [];

  const outputJson = process.argv.includes('--json');
  if (!outputJson) {
    console.log('======================================================');
    console.log('    Projects Hub — Product Landing & SEO Auditor      ');
    console.log('======================================================\n');
  }

  for (const file of esFiles) {
    const slug = file.replace(/\.md$/, '');
    const esPath = path.join(ES_DIR, file);
    const enPath = path.join(EN_DIR, file);

    const esRaw = fs.readFileSync(esPath, 'utf8');
    const enRaw = fs.existsSync(enPath) ? fs.readFileSync(enPath, 'utf8') : null;

    const esParsed = parseFrontmatter(esRaw);
    const enParsed = enRaw ? parseFrontmatter(enRaw) : null;

    if (!esParsed) continue;

    const status = extractField(esParsed.frontmatter, 'status') || 'Activo';
    const isArchived = status === 'Archivado' || status === 'Archived';
    const title = extractField(esParsed.frontmatter, 'title') || slug;
    const websiteUrl = extractField(esParsed.frontmatter, 'websiteUrl');
    const type = extractField(esParsed.frontmatter, 'type') || 'desktop';

    const esProd = extractProductBlock(esParsed.frontmatter);
    const enProd = enParsed ? extractProductBlock(enParsed.frontmatter) : null;

    // Check 1: Non-archived software tools should have product landings unless they are external showcases
    if (!isArchived && !esProd) {
      if (!EXTERNAL_SHOWCASE_PROJECTS.has(slug) && ['desktop', 'mobile', 'ai'].includes(type)) {
        warnings.push({
          slug,
          category: 'MISSING_PRODUCT',
          message: `Active ${type} project lacks a product landing block (Pastel-Tech /p/${slug}/)`,
        });
      }
      continue;
    }

    if (!esProd) continue;

    // Check 2: Bilingual Parity for Product Block
    if (!enProd) {
      issues.push({
        slug,
        category: 'PARITY',
        message: `Spanish entry has product block but English entry (${file}) is missing it.`,
      });
      continue;
    }

    const esTagline = extractProductTagline(esProd);
    const enTagline = extractProductTagline(enProd);
    const esIntro = extractProductIntro(esProd);
    const enIntro = extractProductIntro(enProd);

    // Check 3: SEO Tagline & Title Length
    if (!esTagline || !enTagline) {
      issues.push({ slug, category: 'SEO_TAGLINE', message: 'Missing tagline in product block.' });
    } else {
      const fullTitleEs = `${title} — ${esTagline}`;
      const fullTitleEn = `${title} — ${enTagline}`;
      if (fullTitleEs.length > 70) {
        warnings.push({
          slug,
          category: 'SEO_TITLE_LENGTH',
          message: `ES Title is ${fullTitleEs.length} chars (optimal: 30-65 chars). Google may truncate in SERPs.`,
        });
      }
      if (fullTitleEn.length > 70) {
        warnings.push({
          slug,
          category: 'SEO_TITLE_LENGTH',
          message: `EN Title is ${fullTitleEn.length} chars (optimal: 30-65 chars). Google may truncate in SERPs.`,
        });
      }
    }

    // Check 4: SEO Meta Description (Intro) Length
    if (!esIntro || !enIntro) {
      issues.push({ slug, category: 'SEO_META_DESC', message: 'Missing intro in product block.' });
    } else {
      if (esIntro.length < 50 || esIntro.length > 200) {
        warnings.push({
          slug,
          category: 'SEO_DESC_LENGTH',
          message: `ES Meta Description (intro) is ${esIntro.length} chars (recommended: 100-160 chars).`,
        });
      }
      if (enIntro.length < 50 || enIntro.length > 200) {
        warnings.push({
          slug,
          category: 'SEO_DESC_LENGTH',
          message: `EN Meta Description (intro) is ${enIntro.length} chars (recommended: 100-160 chars).`,
        });
      }
    }

    // Check 5: Zero Flags Policy in Product Text
    if (FLAG_REGEX.test(esProd) || FLAG_REGEX.test(enProd)) {
      issues.push({
        slug,
        category: 'ZERO_FLAGS',
        message: 'Detected country flag emoji inside product frontmatter block.',
      });
    }

    // Check 6: Lucide Icons Validity & Feature Parity
    const esFeatures = extractFeatures(esProd);
    const enFeatures = extractFeatures(enProd);

    if (esFeatures.length !== enFeatures.length) {
      issues.push({
        slug,
        category: 'FEATURE_PARITY',
        message: `Feature count mismatch: ES has ${esFeatures.length} features, EN has ${enFeatures.length}.`,
      });
    }

    if (esFeatures.length < 3) {
      warnings.push({
        slug,
        category: 'LOW_FEATURE_COUNT',
        message: `Has only ${esFeatures.length} features (recommended: at least 3-6).`,
      });
    }

    if (validLucideIcons.size > 0) {
      for (const feat of [...esFeatures, ...enFeatures]) {
        if (!validLucideIcons.has(feat.icon)) {
          issues.push({
            slug,
            category: 'LUCIDE_ICON',
            message: `Invalid Lucide icon "${feat.icon}" in feature "${feat.title}".`,
          });
        }
      }
    }

    // Check 7: Upstream CLI Binary Alignment
    const upstreamBins = getUpstreamBinaries(slug);
    if (upstreamBins.length > 0) {
      const snippets = extractSnippets(esProd);
      if (snippets.length > 0) {
        // Check if any snippet mentions obsolete/missing binary
        const allCode = snippets.map(s => s.code).join('\n');
        // If upstream defines 'ami', code should not only mention 'amiga-ia-setup'
        for (const bin of upstreamBins) {
          const hasBin = allCode.includes(bin);
          if (!hasBin) {
            warnings.push({
              slug,
              category: 'CLI_BINARY_ALIGNMENT',
              message: `Upstream package exports binary "${bin}", but it is not mentioned in product codeSnippets.`,
            });
          }
        }
      }
    }

    // Check 8: Restrictive/Obsolete Phrasing Check
    const platforms = extractPlatforms(esProd);
    const hasDesktopPlatform = platforms.some(p => /desktop|windows|mac|linux/i.test(p));
    if (hasDesktopPlatform && (/solo de cli|solo para terminal|only a cli/i.test(esIntro) || /solo de cli|solo para terminal|only a cli/i.test(enIntro))) {
      warnings.push({
        slug,
        category: 'OBSOLETE_PHRASING',
        message: 'Product copy states it is "only CLI / solo terminal", but platforms include desktop.',
      });
    }

    // Check 9: FAQ Completeness
    const faqs = extractFaq(esProd);
    if (faqs.length < 2) {
      warnings.push({
        slug,
        category: 'LOW_FAQ_COUNT',
        message: `Has ${faqs.length} FAQ items (recommended: at least 2).`,
      });
    }

    // Check 10: Canonical Subdomain
    if (!websiteUrl || !websiteUrl.startsWith('https://')) {
      warnings.push({
        slug,
        category: 'SEO_CANONICAL',
        message: `websiteUrl "${websiteUrl}" is missing or non-HTTPS.`,
      });
    }

    passing.push(slug);
  }

  if (outputJson) {
    console.log(JSON.stringify({ issues, warnings, passing }, null, 2));
    return issues.length === 0 ? 0 : 1;
  }

  // Reporting
  if (issues.length > 0) {
    console.log('❌ SEO & PRODUCT BLOCK ISSUES DETECTED:');
    for (const iss of issues) {
      console.log(`  • [${iss.slug}] ${iss.category}: ${iss.message}`);
    }
    console.log('');
  }

  if (warnings.length > 0) {
    console.log('⚠️  SEO & PRODUCT CONTENT SUGGESTIONS / DRIFT:');
    for (const w of warnings) {
      console.log(`  • [${w.slug}] ${w.category}: ${w.message}`);
    }
    console.log('');
  }

  console.log(`✅ Audited ${passing.length} product landing pages.`);

  if (issues.length === 0) {
    console.log('✨ All product landings meet structural, SEO, and Lucide standards.');
    return 0;
  }
  return 1;
}

if (process.argv[1] && import.meta.url.endsWith(path.basename(process.argv[1]))) {
  const exitCode = auditLandings();
  process.exit(exitCode);
}

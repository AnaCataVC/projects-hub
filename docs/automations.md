# Automation Architecture & Operational Guide

This document describes the complete automation ecosystem, quality gates, and synchronization workflows implemented in **Projects Hub** (`projects.ana-catalina.com`).

---

## 1. Overview & Architecture

Projects Hub relies on a layered automation model spanning three domains:
1. **CI/CD & GitOps (`.github/`, `.githooks/`):** Continuous integration pipelines, concurrency-managed builds, scheduled repository drift detection, automated dependency updates, and local pre-push git hooks.
2. **Development & Quality Scripts (`package.json`, `src/__tests__/`):** Unified verification commands and automated invariant test suites enforcing bilingual parity, asset integrity, subdomain routing, and the Zero-Flags rule.
3. **Autonomous Portfolio Synchronization (`.agents/`):** Path-agnostic repository auditing and subagent orchestration (`portfolio-auditor`) to synchronize sibling and remote GitHub repositories with the showcase catalog.

---

## 2. CI/CD Workflows & GitOps

### 2.1 Continuous Integration (`.github/workflows/ci.yml`)
Triggered on every `push` to `main` and on all `pull_request` events:
- **Runtime:** Ubuntu Latest with Node.js 22 LTS and deterministic `npm ci` lockfile installation.
- **Least-Privilege Permissions:** Scoped strictly to `contents: read`.
- **Concurrency Control:** Groups runs by `${{ github.workflow }}-${{ github.ref }}` with `cancel-in-progress: true` to automatically abort superseded workflow runs on rapid pushes.
- **5-Stage Quality Gate:**
  1. `npm ci` — Deterministic dependency installation.
  2. `npm run type-check` — Astro & TypeScript strict static analysis (`astro check`).
  3. `npm run lint` — ESLint 10 flat-config verification across `.astro`, `.ts`, and `.mjs` automation scripts.
  4. `npm run test` — Vitest 4 headless component, schema, routing, and portfolio integrity suites.
  5. `npm run build` — Production static site generation (`astro build`).

### 2.2 Weekly Portfolio Drift Audit (`.github/workflows/portfolio-drift.yml`)
Triggered automatically every Monday at `12:00 UTC` (`cron: "0 12 * * 1"`) or manually via `workflow_dispatch`:
- Checks out the full git history (`fetch-depth: 0`) so review timestamps can be accurately resolved from commit history.
- Executes `.agents/skills/portfolio-sync-audit/scripts/audit-projects.mjs` against the public GitHub repositories of `AnaCataVC`.
- Generates a structured Markdown summary directly in `$GITHUB_STEP_SUMMARY`, listing:
  - **New Unindexed Repositories:** Projects created on GitHub that do not yet have an entry in `src/content/projects/`.
  - **Pending Portfolio Updates:** Active or in-development projects with upstream commits newer than their portfolio review mark (`lastUpdated` or last commit timestamp), complete with direct GitHub comparison links (`/compare/<sha>...HEAD`).

### 2.3 Automated Dependency Maintenance (`.github/dependabot.yml`)
Configured for weekly checks every Monday across two ecosystems:
- **`npm` (`/`)**: Groups `minor` and `patch` updates into a single consolidated Pull Request (capped at 5 open PRs) to minimize CI noise while keeping Astro 7, Tailwind CSS v4, and Vitest 4 current.
- **`github-actions` (`/`)**: Monitors third-party workflow actions (`actions/checkout`, `actions/setup-node`) for security and runtime updates.

### 2.4 Local Pre-Push Git Hook (`.githooks/pre-push`)
Versioned native Git hook that intercepts `git push` operations locally and runs:
1. `npm run lint`
2. `npm run type-check`
3. `npm test`

To activate the versioned hooks directory on a fresh clone, run:
```bash
npm run prepare-hooks
```

---

## 3. Package Scripts & Automated Quality Gates

| Script Command | Underlying Execution | Purpose |
| :--- | :--- | :--- |
| `npm run dev` | `astro dev` | Starts the local development server on `http://localhost:4321`. |
| `npm run verify` | `npm run lint && npm run type-check && npm test && npm run build` | **Single-command full quality gate.** Runs linter, TypeScript/Astro checker, Vitest suites, and production build sequentially. |
| `npm run audit:projects` | `node .agents/skills/portfolio-sync-audit/scripts/audit-projects.mjs` | Audits sibling local folders (`..`) and remote GitHub repositories (`AnaCataVC`) for unindexed projects or stale case studies. |
| `npm run prepare-hooks` | `git config core.hooksPath .githooks` | Binds the local repository's Git hooks path to the versioned `.githooks/` directory. |
| `npm run lint` | `eslint .` | Lints all project source files and `.agents/` scripts. |
| `npm run type-check` | `astro check` | Validates Astro templates, Content Collections schemas, and TypeScript types. |
| `npm test` | `vitest run` | Executes all automated test suites once. |
| `npm run build` | `astro build` | Compiles static production output into `dist/`. |

---

## 4. Automated Contract & Invariant Test Suites (`src/__tests__/`)

The Vitest test runner enforces four architectural contracts on every test run:

1. **`portfolio-integrity.test.ts` (Bilingual Parity, Zero-Flags & Asset Integrity):**
   - Verifies strict 1:1 filename parity between `src/content/projects/es/*.md` and `src/content/projects/en/*.md`.
   - Enforces the **Zero Country Flags Rule** (`/[\u{1F1E6}-\u{1F1FF}]{2}/u`), ensuring no regional flag emojis appear in any Markdown entry.
   - Enforces the **Path Privacy Invariant**, guaranteeing no local workstation paths (`C:\Users\...`, `/Users/...`, `/home/...`) leak into content files.
   - Verifies that every `icon` path and `product.screenshots[]` image referenced in frontmatter physically exists inside `public/`.
2. **`product-pages.test.ts` (Subdomain Routing & CTA Contract):**
   - Cross-checks `vercel.json` host rewrites against `src/content/projects/{es,en}/*.md` to guarantee every routed `<slug>.ana-catalina.com` subdomain has a built, non-archived bilingual `product` block.
   - Verifies every product landing defines a valid `downloadUrl` call-to-action.
   - Ensures `Archivado` / `Archived` projects do not link to defunct live URLs (`websiteUrl` or `liveAppUrl`).
3. **`content-schema.test.ts` (Content Collection Schema Validation):**
   - Validates Zod schema defaults, required properties, and allowed enum values for `status` and `type`.
4. **`component-render.test.ts` & `terminal-logic.test.ts` (UI & Console State Machine):**
   - Validates server-side Astro component rendering via `astro/container` and pure terminal tree navigation/search helpers.

---

## 5. Autonomous Portfolio Synchronization Pipeline

### 5.1 Multi-Account Safe Audit (`audit-projects.mjs`)
The script `.agents/skills/portfolio-sync-audit/scripts/audit-projects.mjs` operates with zero hardcoded paths:
- Resolves local sibling repositories from `..` (or `$env:REPOS_DIR`).
- Automatically resolves and scopes the `GH_TOKEN` for `AnaCataVC` via `gh auth token -u AnaCataVC --hostname github.com` before invoking `gh repo list`, preventing silent authentication mismatches when the workstation's global GitHub CLI is switched to a secondary work account.
- Filters out third-party forks (`isFork: true`) and infrastructure repositories (`projects-hub`, `anacatalina-homepage`, `antigravity-config`).
- Computes each entry's review date as `max(frontmatter.lastUpdated, git log -1 commit timestamp)` and generates a GitHub `/compare/<sha>...HEAD` URL when upstream commits are newer.

### 5.2 Agentic Orchestration (`portfolio-auditor`)
When `npm run audit:projects` reports new or updated repositories, the `portfolio-auditor` agent (`.agents/agents/portfolio-auditor.md`) coordinates with `.agents/skills/portfolio-sync-audit/` and `.agents/skills/project-entry-update/` to:
1. Copy updated vector/raster application icons into `public/project-icons/`.
2. Author or refresh symmetric Spanish (`es`) and English (`en`) case studies and product blocks.
3. Update `lastUpdated` to the current review date (`YYYY-MM-DD`).
4. Run `npm run verify` to confirm zero regressions across lint, types, tests, and build.
5. Commit in English using Conventional Commits, push to `origin main`, and verify remote GitHub Actions completion.

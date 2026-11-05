---
name: hub-project-entry-update
description: >-
  Creates or updates a single Projects Hub entry (both es and en files) from its source
  repository, including its case study, product landing page, and Vercel subdomain setup.
  Use when asked to update, refresh or add one specific project entry, or when hub-portfolio-sync-audit
  flags a NEW PROJECT or PENDING UPDATE.
tools: run_command, manage_task, view_file, write_to_file, replace_file_content, search_web, read_url_content
allowed-tools: Bash, Read, Grep, Glob, Write, Edit, run_command, view_file, replace_file_content, write_to_file
---

# Skill: Update a Single Project Entry

Input: a project id (`<project-id>`, the markdown filename without `.md`), the diff link printed by `npm run audit:projects` when there is one, and its source repository, resolved relative to the workspace (sibling folder `..` or `$env:REPOS_DIR`). Never hardcode absolute paths.

## Mandatory Dual-Layer Verification Gate (Anti-Omission Invariant)

Every project synchronization MUST explicitly audit and update **BOTH** layers. Never conclude an update by touching only the case study while ignoring the product landing page:

```text
┌────────────────────────────────────────────────────────────────────────┐
│  LAYER 1: Case Study ("Ficha Técnica" — /<slug> and /en/<slug>)        │
│  - frontmatter: title, description, technologies, type, status         │
│  - problem, solution, learnings (bounded, architectural, SSOT in repo) │
│  - lastUpdated: YYYY-MM-DD (both es and en)                            │
├────────────────────────────────────────────────────────────────────────┤
│  LAYER 2: Product Landing Page ("Pastel-Tech Landing" — product block) │
│  - tagline (punchy, 30-65 chars with title for SEO)                    │
│  - intro (value proposition, 100-160 chars for SEO meta description)   │
│  - features (>= 3, valid Lucide icons, no duplicate concepts)          │
│  - platforms (strictly match runtime targets: Desktop, Mobile, CLI)    │
│  - codeSnippets (verify upstream package.json 'bin' / Cargo binaries!) │
│  - faq (>= 2, clear user-facing Q&As)                                  │
│  - catalog / links / downloadUrl (valid actionable CTAs)               │
└────────────────────────────────────────────────────────────────────────┘
```

## Steps

1. **Read the source.** Start from the diff link: it shows exactly what changed since the entry was last reviewed. Then inspect:
   - Repository's `README.md` and manifest (`package.json`, `Cargo.toml`, `.csproj`, `pyproject.toml`).
   - Recent history (`git log -n 10 --oneline`).
   - **Upstream Binaries & Commands:** In `package.json`, inspect `bin` to see what command names the package actually exports (e.g. `ami` alongside `amiga-ia-setup`).
   - **Runtime Surface Shifts:** Check whether the software added Desktop GUI support (e.g., Claude Desktop alongside CLI) or mobile apps, ensuring copy never makes obsolete restrictive claims (e.g., saying "solo para CLI / only a CLI").
2. **Determine `status` from version:** If the project's version is `< 1.0` (e.g., `v0.3`, `0.x.y`), its `status` MUST be `"En Desarrollo"` (`es`) / `"In Development"` (`en`), NEVER `"Activo"` / `"Active"`. Only projects at `>= 1.0.0` (or unversioned live production systems) use `"Activo"` / `"Active"`.
3. **Asset & Icon Synchronization (New or Updated Assets):**
   - Identify the source icon (`icon.svg`, `icon.png`, or `assets/icon.{svg,png}`, `public/icon.{svg,png}`). Prefer SVG vector icons when available.
   - Copy the icon autonomously using PowerShell:
     ```powershell
     Copy-Item -Path "..\<repo-name>\assets\icon.png" -Destination "public\project-icons\<project-id>-icon.png" -Force
     ```
     *(Use `.svg` extension if the source asset is vector).*
   - For a new entry, create both `src/content/projects/es/<project-id>.md` and `src/content/projects/en/<project-id>.md` with every field in `src/content.config.ts`.
4. **Edit both languages in the same change (Layer 1 - Case Study).** `es` and `en` must stay in parity. Keep the UI high-level (problem, solution, learnings); technical detail belongs in the repo's README, which is the source of truth. Keep entries bounded and scannable; if the upstream change is minor, do not inflate the copy unnecessarily.
5. **Set `lastUpdated`** to today's date (`YYYY-MM-DD`) in both files whenever the entry's content changes.
6. **Product Landing Page & SEO Verification (Layer 2 - Mandatory Product Block):**
   - **Evaluate Product Landing Need:** Every active or in-development application, tool, or CLI suite MUST offer a rich, Pastel-Tech end-user landing page (`product` block) unless it is explicitly an archived experiment or a sub-library.
   - **SEO & Executive Messaging (CEO / SERP Guidelines):**
     - `tagline`: Concise, punchy. When combined with `${title} — ${tagline}`, total length should stay within **30–65 characters** so search engines do not truncate it.
     - `intro`: Direct, user-centric value proposition. Total length should be **100–160 characters** for optimal SERP meta description preview.
     - `features`: Minimum 3 features with valid exports from `lucide-static`.
     - `platforms`: Explicitly list all supported targets (`Claude Desktop`, `Claude Code CLI`, `Windows 11`, `Android`, etc.).
     - `codeSnippets`: Must reflect modern binaries (e.g. `ami` instead of legacy scripts) and actual executable workflows.
     - `faq`: Minimum 2 FAQ items explaining user integration and capabilities.
     - `downloadUrl` and `downloadLabel`: Direct actionable CTA.
   - **Configure Canonical Subdomain & CTA:**
     - Set `websiteUrl: "https://<project-id>.ana-catalina.com"` in frontmatter.
     - Set `websiteActionText: "Ver Página"` (`es`) / `"Visit Page"` (`en`).
   - **Provision Subdomain in Vercel & Map Host Routes:**
     1. **Map Routes in `vercel.json`:** Verify if `routes` in `vercel.json` contains host mappings for `<project-id>.ana-catalina.com`. If missing, insert the host routes at the start of `routes`:
        ```json
        {
          "src": "^/$",
          "has": [{ "type": "host", "value": "<project-id>.ana-catalina.com" }],
          "dest": "/p/<project-id>/index.html"
        },
        {
          "src": "^/en/?$",
          "has": [{ "type": "host", "value": "<project-id>.ana-catalina.com" }],
          "dest": "/p/<project-id>/en/index.html"
        }
        ```
     2. **Attach Domain in Vercel:** Run via `run_command`:
        ```powershell
        vercel domains add <project-id>.ana-catalina.com projects-hub
        ```
     3. **Retrieve Dedicated CNAME Record:** Run via `run_command`:
        ```powershell
        vercel domains verify <project-id>.ana-catalina.com
        ```
        Extract the assigned CNAME target hash (e.g. `<hash>.vercel-dns-017.com.`).
     4. **Remind / Report DNS Record:** Always provide the user with the exact Namecheap record details:
        - **Type:** `CNAME Record`
        - **Host:** `<project-id>`
        - **Target / Value:** `<hash>.vercel-dns-017.com`
7. **No country flag emojis** anywhere in the entry, SEO metadata, or UI.

## Quality Gate & Verification

```powershell
npm run audit:landings
npm run validate:parity
npm run lint
npm run type-check
npm test
npm run build
```

## Git Commit, Push & CI Verification

```powershell
gh auth switch -u AnaCataVC --hostname github.com 2>$null
git add .
git commit -m "feat(projects): sync <project-id> case study, product page, and domain"
git push origin main
gh run list --limit 3
```
Confirm the GitHub Actions deployment workflow completes with `conclusion: success`.

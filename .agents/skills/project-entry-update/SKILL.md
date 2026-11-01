---
name: project-entry-update
description: >-
  Creates or updates a single Projects Hub entry (both es and en files) from its source
  repository, including its case study, product landing page, and Vercel subdomain setup.
  Use when asked to update, refresh or add one specific project entry, or when portfolio-sync-audit
  flags a NEW PROJECT or PENDING UPDATE.
tools: run_command, manage_task, view_file, write_to_file, replace_file_content, search_web, read_url_content
allowed-tools: Bash, Read, Grep, Glob, Write, Edit, run_command, view_file, replace_file_content, write_to_file
---

# Skill: Update a Single Project Entry

Input: a project id (`<project-id>`, the markdown filename without `.md`), the diff link printed by `npm run audit:projects` when there is one, and its source repository, resolved relative to the workspace (sibling folder `..` or `$env:REPOS_DIR`). Never hardcode absolute paths.

## Steps

1. **Read the source.** Start from the diff link: it shows exactly what changed since the entry was last reviewed. Then inspect the repository's `README.md` and manifest (`package.json`, `Cargo.toml`, `.csproj`, `pyproject.toml`) and its recent history (`git log -n 10 --oneline`). Note version bumps, architectural shifts, new features and key learnings.
2. **Determine `status` from version:** If the project's version is `< 1.0` (e.g., `v0.3`, `0.x.y`), its `status` MUST be `"En Desarrollo"` (`es`) / `"In Development"` (`en`), NEVER `"Activo"` / `"Active"`. Only projects at `>= 1.0.0` (or unversioned live production systems) use `"Activo"` / `"Active"`.
3. **Asset & Icon Synchronization (New or Updated Assets):**
   - Identify the source icon (`icon.svg`, `icon.png`, or `assets/icon.{svg,png}`, `public/icon.{svg,png}`). Prefer SVG vector icons when available.
   - Copy the icon autonomously using PowerShell:
     ```powershell
     Copy-Item -Path "..\<repo-name>\assets\icon.png" -Destination "public\project-icons\<project-id>-icon.png" -Force
     ```
     *(Use `.svg` extension if the source asset is vector).*
   - For a new entry, create both `src/content/projects/es/<project-id>.md` and `src/content/projects/en/<project-id>.md` with every field in `src/content.config.ts` (`title`, `description`, `icon`, `technologies`, `categories`, `type`, `status`, `problem`, `solution`, `learnings`).
4. **Edit both languages in the same change.** `es` and `en` must stay in parity. Keep the UI high-level (problem, solution, learnings); technical detail belongs in the repo's README, which is the source of truth. Keep entries bounded and scannable; if the upstream change is minor, do not inflate the copy unnecessarily.
5. **Set `lastUpdated`** to today's date (`YYYY-MM-DD`) in both files whenever the entry's content changes. It is shown on the case-study page, so a stale date misleads readers. Do not touch it for pure formatting changes. If the source changed but the entry needs no content change, still set `lastUpdated` in both files: it is also the review mark the audit compares against, so skipping it leaves the entry flagged forever.
6. **Product Landing Page & Subdomain Provisioning (Mandatory URL Check):**
   - **Evaluate Product Landing Need:** Every active or in-development application, tool, or CLI suite should offer a rich, Pastel-Tech end-user landing page (`product` block) unless it is explicitly an archived experiment or a sub-library.
   - **Author/Update Bilingual Product Block:** Provide `tagline`, `intro`, `features` (with valid `lucide-static` icon names), `platforms`, `downloadUrl` (mandatory CTA), `downloadLabel`, `links`, `catalog`, `codeSnippets`, and `faq`. Do not place version numbers in marketing copy (they go stale).
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
7. **No country flag emojis** anywhere in the entry or UI.

## Quality Gate & Verification

```powershell
npm run lint; npm run type-check; npm test; npm run build
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

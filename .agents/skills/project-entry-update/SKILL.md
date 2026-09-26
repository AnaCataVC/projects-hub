---
name: project-entry-update
description: >-
  Creates or updates a single Projects Hub entry (both es and en files) from its source
  repository. Use when asked to update, refresh or add one specific project entry, or when
  portfolio-sync-audit flags a NEW PROJECT or PENDING UPDATE.
allowed-tools: Bash, Read, Grep, run_command, view_file, replace_file_content, write_to_file
---

# Skill: Update a Single Project Entry

Input: a project id (`<project-id>`, the markdown filename without `.md`), the diff link printed by `npm run audit:projects` when there is one, and its source repository, resolved relative to the workspace (sibling folder `..` or `$env:REPOS_DIR`). Never hardcode absolute paths.

## Steps

1. **Read the source.** Start from the diff link: it shows exactly what changed since the entry was last reviewed. Then inspect the repository's `README.md` and manifest (`package.json`, `Cargo.toml`, `.csproj`, `pyproject.toml`) and its recent history (`git log -n 10 --oneline`). Note version bumps, architectural shifts, new features and key learnings.
2. **New entry only:** copy the primary icon (`assets/icon.png` or `public/icon.png`) to `public/project-icons/<project-id>-icon.png` and create both `src/content/projects/es/<project-id>.md` and `src/content/projects/en/<project-id>.md` with every field in `src/content.config.ts` (`title`, `description`, `icon`, `technologies`, `categories`, `type`, `status`, `problem`, `solution`, `learnings`).
3. **Edit both languages in the same change.** `es` and `en` must stay in parity. Keep the UI high-level (problem, solution, learnings); technical detail belongs in the repo's README, which is the source of truth.
4. **Set `lastUpdated`** to today's date (`YYYY-MM-DD`) in both files whenever the entry's content changes. It is shown on the case-study page, so a stale date misleads readers. Do not touch it for pure formatting changes. If the source changed but the entry needs no content change, still set `lastUpdated` in both files: it is also the review mark the audit compares against, so skipping it leaves the entry flagged forever.
5. **Product page:** if the entry has a `product` block, update it too (new features, download link, platforms) — it is the public landing on the project's subdomain. Adding one for the first time follows "Product Landing Pages" in `AGENTS.md`. No version numbers in its copy.
6. **No country flag emojis** anywhere in the entry.

## Verification

```powershell
npm run lint; npm run type-check; npm test; npm run build
```

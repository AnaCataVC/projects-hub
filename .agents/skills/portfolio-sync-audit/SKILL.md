---
name: portfolio-sync-audit
description: >-
  Audits local sibling repositories and remote GitHub repositories to identify new projects
  or recent code updates, and synchronize them with the Projects Hub portfolio.
tools: run_command, manage_task, view_file, write_to_file, replace_file_content, search_web, read_url_content
allowed-tools: Bash, Read, Grep, Glob, Write, Edit, run_command, view_file, replace_file_content, write_to_file
---

# Skill: Portfolio Synchronization & Repository Auditor

This skill provides a standardized, path-agnostic procedure for scanning developer repositories, detecting newly initiated projects, and flagging existing projects that have received recent updates or releases so they can be reflected in the **Projects Hub** portfolio.

## Key Principles & Path Privacy

1. **Zero Absolute Paths:** Never hardcode absolute system paths (such as `C:\Users\...` or `/home/...`). All operations MUST resolve repositories relative to the current workspace root (e.g., sibling folder `..` or `$env:REPOS_DIR`).
2. **Automated Fork Filtering:** Exclude third-party forks (`isFork: true` in GitHub API) to focus strictly on personal projects.
3. **Bilingual Parity:** Every project in the portfolio must have matching entries in both `src/content/projects/es/` and `src/content/projects/en/`.
4. **Zero Flags Policy:** Language navigation and documentation MUST NEVER contain country flag emojis.
5. **Autonomous Lifecycle:** Perform the entire pipeline autonomously: audit discovery, asset copying, bilingual case study updates, test suite validation, commit, push, and remote CI verification.

---

## Workflow Steps

### 1. Run the Dynamic Repository Audit Script

Execute the Node.js audit utility from the project root:

```powershell
npm run audit:projects
```

Or run with JSON output for automated agent parsing:

```powershell
node .agents/skills/portfolio-sync-audit/scripts/audit-projects.mjs --json
```

### 2. Interpret Audit Results

The script categorizes all discovered repositories into these groups:

- 🌟 **NEW PROJECT:** A local repository in `..` or a GitHub repository owned by the user that lacks a corresponding Markdown file in `src/content/projects/es/<project-id>.md`.
- 🔄 **PENDING UPDATE:** An active or in-development entry whose source repo has a commit newer than the entry's review date — the later of its `lastUpdated` and the last git commit of its `es` file — or that lacks its `en` file. Each one prints a diff link to what changed since that review.
- ✅ **UP TO DATE:** A monitored entry reviewed after the source's last commit.
- 📦 **NOT MONITORED:** Archived entries (`Archivado`/`Archived`), frozen on purpose.

### 3. Synchronize Flagged Projects & Assets

For each **NEW PROJECT** and **PENDING UPDATE**:
- Copy or synchronize the application icon into `public/project-icons/<project-id>-icon.{png|svg}` using PowerShell `Copy-Item`.
- Run the `project-entry-update` skill (`.agents/skills/project-entry-update/SKILL.md`) with that project's id and, for a PENDING UPDATE, its diff link. It owns the per-entry procedure, including bilingual parity and the `lastUpdated` date.

### 4. Quality Gate Verification

Before committing any changes:
```powershell
npm run audit:projects
npm run lint
npm run type-check
npm test
npm run build
```
Ensure all schema constraints, Vitest unit tests, and production static site generation succeed cleanly.

### 5. Git Commit, Push & CI Verification

```powershell
gh auth switch -u AnaCataVC --hostname github.com 2>$null
git add .
git commit -m "feat(portfolio): sync <project-id> case study and assets"
git push origin main
gh run list --limit 3
```
Confirm the GitHub Actions deployment workflow finishes with `conclusion: success`.

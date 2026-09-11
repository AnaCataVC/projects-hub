---
name: portfolio-sync-audit
description: >-
  Audits local sibling repositories and remote GitHub repositories to identify new projects
  or recent code updates, and synchronize them with the Projects Hub portfolio.
allowed-tools: Bash, Read, Grep, run_command, view_file, replace_file_content, write_to_file
---

# Skill: Portfolio Synchronization & Repository Auditor

This skill provides a standardized, path-agnostic procedure for scanning developer repositories, detecting newly initiated projects, and flagging existing projects that have received recent updates or releases so they can be reflected in the **Projects Hub** portfolio.

## Key Principles & Path Privacy

1. **Zero Absolute Paths:** Never hardcode absolute system paths (such as `C:\Users\...` or `/home/...`). All operations MUST resolve repositories relative to the current workspace root (e.g., sibling folder `..` or `$env:REPOS_DIR`).
2. **Automated Fork Filtering:** Exclude third-party forks (`isFork: true` in GitHub API) to focus strictly on personal projects.
3. **Bilingual Parity:** Every project in the portfolio must have matching entries in both `src/content/projects/es/` and `src/content/projects/en/`.
4. **Zero Flags Policy:** Language navigation and documentation MUST NEVER contain country flag emojis.

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

The script categorizes all discovered repositories into three status groups:

- 🌟 **NEW PROJECT:** A local repository in `..` or a GitHub repository owned by the user that lacks a corresponding Markdown file in `src/content/projects/es/<project-id>.md`.
- 🔄 **PENDING UPDATE:** An existing project whose latest commit or release date is newer than the portfolio markdown documentation or within a recent active timeframe.
- ✅ **UP TO DATE:** A project whose portfolio entry is synchronized with recent activity.

### 3. Synchronize New Projects

For each **NEW PROJECT**:
1. Inspect the sibling repository's `README.md`, `package.json`, `Cargo.toml`, or `.csproj` to extract its domain, architecture, and tech stack.
2. If available, copy its primary application icon (`assets/icon.png` or `public/icon.png`) to `public/project-icons/<project-id>-icon.png`.
3. Create bilingual content collection entries:
   - `src/content/projects/es/<project-id>.md`
   - `src/content/projects/en/<project-id>.md`
4. Ensure all required frontmatter fields defined in `src/content.config.ts` are present (`title`, `description`, `icon`, `technologies`, `categories`, `type`, `status`, `problem`, `solution`, `learnings`).

### 4. Synchronize Updated Projects

For each **PENDING UPDATE**:
1. Review recent commits (`git log -n 5 --oneline`) in the sibling repository.
2. Note version bumps, architectural shifts, new features, or key learnings.
3. Update both `es` and `en` versions in `src/content/projects/` preserving established technical accuracy and concise formatting.

### 5. Quality Gate Verification

Before finalizing any changes:
```powershell
npm run audit:projects
npm run type-check
npm test
npm run build
```
Ensure all schema constraints, Vitest unit tests, and production static site generation succeed cleanly.

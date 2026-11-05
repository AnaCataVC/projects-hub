---
name: hub-validate-parity
description: >-
  Audits and enforces bilingual parity, schema conformity, Lucide icon export validity,
  and Zero-Flags compliance across all Projects Hub content entries in src/content/projects/.
tools: run_command, manage_task, view_file, write_to_file, replace_file_content
allowed-tools: Bash, Read, Grep, Glob, Write, Edit, run_command, view_file, replace_file_content, write_to_file
---

# Skill: Validate Portfolio Parity, Schema & Icons (`hub-validate-parity`)

This skill performs a fast, automated audit across all Markdown files in `src/content/projects/es/` and `src/content/projects/en/` to guarantee bilingual parity, Zod schema conformity, Lucide icon export validity, and adherence to the Zero-Flags policy.

## Audit Checks

1. **Bilingual Parity:**
   - Every file in `src/content/projects/es/<slug>.md` MUST have an identical counterpart in `src/content/projects/en/<slug>.md`.
   - Slugs must match exactly between languages.
2. **Zero-Flags Policy:**
   - No country flag emojis (e.g. `🇺🇸`, `🇪🇸`, `🇨🇱`) may exist anywhere in frontmatter or body copy.
3. **Version Status Integrity:**
   - Projects whose semantic version is strictly less than 1.0 (e.g. `v0.1.0`, `v0.3`, `0.x`) MUST be assigned `status: "En Desarrollo"` (in Spanish) and `status: "In Development"` (in English), NEVER `"Activo"` / `"Active"`.
4. **Lucide Icon Exports:**
   - For all features declared inside the `product` block, `icon` must be a valid named export in `lucide-static` (e.g., `BellRing`, `Cpu`, `ShieldCheck`).
5. **Product Block & CTA Symmetry:**
   - If a project contains a `product` block in Spanish, it must also have one in English with matching feature counts and download action links.

---

## Execution

Run the parity audit script from the repository root:

```powershell
node .agents/skills/hub-validate-parity/scripts/validate-parity.mjs
```

Or execute as part of standard local quality verification:
```powershell
npm run lint; npm run type-check; npm test; npm run build
```

## Remediation Protocol
- If a missing language file is detected: scaffold the missing counterpart using `hub-project-entry-update`.
- If a flag emoji is found: replace with clean text links (`[English](#english) | [Español](#español)`), ISO codes (`EN`, `ES`), or neutral icons (`🌐`).
- If an invalid Lucide icon is detected: look up the correct PascalCase export name in `lucide-static`.
- If an active project has a `< 1.0` version: change `status` to `"En Desarrollo"` / `"In Development"`.

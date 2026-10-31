---
title: "Projects Hub — Interactive Terminal"
description: "The portfolio you're looking at right now: a Unix terminal simulated entirely client-side, navigated by keyboard or fuzzy search, with no backend."
lastUpdated: 2026-10-31
icon: "/project-icons/projects-hub-icon.svg"
githubUrl: "https://github.com/AnaCataVC/projects-hub"
liveAppUrl: "https://projects.ana-catalina.com"
isLiveApp: true
technologies: ["Astro 7", "TypeScript", "Tailwind CSS v4", "Zod", "Vitest", "GitHub Actions", "Vercel"]
categories: ["Portfolio", "Frontend", "GitOps", "Testing"]
type: "web"
status: "Active"
problem: "A static card grid doesn't communicate interaction design craft, nor does it provide a dedicated space to detail systems architecture, technical learnings, and the real motivations behind each project without cluttering the view. Furthermore, keeping a multi-repository showcase in sync with actively developed projects typically suffers from manual toil and documentation drift."
solution: "A dual-interface architecture born to satisfy my curiosity: a client-side Unix terminal to browse the catalog by keyboard or search, paired with Bento case studies that deep-dive into systems architecture and design decisions. It serves as the ecosystem's Single Source of Truth (SSOT) for software deliverables, backed by a 5-layer CI pipeline, path-agnostic local/remote repository auditing (audit-projects.mjs), automated weekly drift detection in GitHub Actions, and bilingual invariant quality gates (Zero-Flags and asset verification)."
learnings:
  - "Simulating a Unix filesystem 100% client-side — no backend — with keyboard navigation, breadcrumbs and 'find'-style incremental search."
  - "Extracting the terminal's pure logic (parsing, matching, tree-flattening) into a separate module so it can be unit-tested with Vitest without simulating the DOM."
  - "Designing a bilingual Content Collections (Zod) schema as the single source of truth for every project write-up."
  - "Multi-Account Scoped Repository Auditing & Drift Detection (GitOps): Path-agnostic scanning across sibling directories (..) and GitHub API with scoped token isolation (AnaCataVC) to prevent silent authentication mismatches in shared sessions, coupled with a weekly workflow comparing review timestamps against commit history."
  - "Contract Integrity Quality Gates & Native Pre-Push Hook: Automated Vitest suites enforcing strict 1:1 bilingual file parity, Zero-Flags policy, filesystem path privacy, and physical asset existence, executed locally before git push."
websiteActionText: "View Live Portfolio"
---

### A terminal, not a card grid

This portfolio replaces the usual card grid with a **simulated Unix terminal**: an in-memory folder tree (`~/projects`, `~/about`, `~/help`) navigated with arrow keys, `Enter` and `Backspace`, or by typing any text to jump between matches with their breadcrumb.

*   **100% client-side, no real shell:** there's no backend or process behind it — the menu tree and search are plain TypeScript running in the browser.
*   **Pure, tested logic:** parsing, search matching and tree-flattening live in a module isolated from the DOM, covered by Vitest tests.
*   **Animated launch:** running a project types out a fake command (`./launch <id> --gui`) with a typewriter effect before transitioning to its technical write-up.

### Content as code

Every project — including this one — is an **Astro Content Collections** entry: a Markdown file with frontmatter validated by a Zod schema, in both Spanish and English. The terminal serializes that data at build time and groups it by category on the fly, client-side.

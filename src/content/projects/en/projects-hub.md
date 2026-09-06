---
title: "Projects Hub — Interactive Terminal"
description: "The portfolio you're looking at right now: a Unix terminal simulated entirely client-side, navigated by keyboard or fuzzy search, with no backend."
icon: "/project-icons/projects-hub-icon.svg"
githubUrl: "https://github.com/AnaCataVC/projects-hub"
liveAppUrl: "https://projects.ana-catalina.com"
isLiveApp: true
technologies: ["Astro 7", "TypeScript", "Tailwind CSS v4", "Zod", "Vitest", "Vercel"]
categories: ["Portfolio", "Frontend", "UX/UI", "Testing"]
type: "web"
status: "Active"
problem: "A static card grid doesn't communicate that its builder can design experiences beyond the generic, nor does it leave room for each project's technical detail without cluttering the main view."
solution: "A dual interface: a Unix terminal simulated entirely client-side to browse the catalog by keyboard or incremental search, which animates a transition when a project is 'launched' and lands on a full technical write-up generated from Astro Content Collections."
learnings:
  - "Simulating a Unix filesystem 100% client-side — no backend — with keyboard navigation, breadcrumbs and 'find'-style incremental search."
  - "Extracting the terminal's pure logic (parsing, matching, tree-flattening) into a separate module so it can be unit-tested with Vitest without simulating the DOM."
  - "Designing a bilingual Content Collections (Zod) schema as the single source of truth for every project write-up."
websiteActionText: "View Live Portfolio"
---

### A terminal, not a card grid

This portfolio replaces the usual card grid with a **simulated Unix terminal**: an in-memory folder tree (`~/projects`, `~/about`, `~/help`) navigated with arrow keys, `Enter` and `Backspace`, or by typing any text to jump between matches with their breadcrumb.

*   **100% client-side, no real shell:** there's no backend or process behind it — the menu tree and search are plain TypeScript running in the browser.
*   **Pure, tested logic:** parsing, search matching and tree-flattening live in a module isolated from the DOM, covered by Vitest tests.
*   **Animated launch:** running a project types out a fake command (`./launch <id> --gui`) with a typewriter effect before transitioning to its technical write-up.

### Content as code

Every project — including this one — is an **Astro Content Collections** entry: a Markdown file with frontmatter validated by a Zod schema, in both Spanish and English. The terminal serializes that data at build time and groups it by category on the fly, client-side.

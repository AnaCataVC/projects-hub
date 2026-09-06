# AGENTS.md — AI Agent Guidelines & Architecture Manual

## Project: Ana-Catalina | Projects Hub

## Overview
**Projects Hub** (`projects.ana-catalina.com`) is Ana-Catalina's centralized portfolio and high-performance applications directory. Built as an interactive, keyboard-driven console/terminal interface paired with rich Bento-style GUI case studies, it showcases engineering work spanning desktop systems, native mobile applications, AI agents, and web tools.

---

## Tech Stack & Architecture

- **Framework:** [Astro 7](https://astro.build/) (Static Site Generation / Zero JS by default)
- **Runtime:** Node.js `>= 22.12.0` (LTS)
- **Bundler & Compiler:** Vite + Astro Rust Compiler
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (managed directly via `@tailwindcss/vite` plugin)
- **Content Management:** Astro Content Collections (`glob` loader + Zod schema in `src/content.config.ts`)
- **Typography:** JetBrains Mono (Console/Code), Outfit (Headings), Inter (Body)
- **Testing & Quality:** Vitest 4 (`astro/container` component tests) + ESLint 10 + TypeScript Strict
- **CI / Automation:** GitHub Actions (`.github/workflows/ci.yml`) on Node.js 22 LTS
- **Deployment:** Vercel (with `@astrojs/sitemap` and `@vercel/analytics`)

---

## Console Navigation & Categorization Model

The interactive terminal (`src/pages/index.astro`) simulates a Unix-style tree filesystem:

```text
~/projects-hub/
├── 📁 help/                 # Interactive guide and keyboard shortcuts
├── 📁 about/                # Developer background, goals, and AI-assisted workflow
└── 📁 proyectos/            # (or ~/projects in EN) Categorized projects directory
    ├── ▶ data-science/      # Data science, statistics, and analytics
    ├── ▶ ai-and-agents/     # AI systems, LLM agents, and MCP servers
    ├── ▶ software-engineering/ # Desktop, mobile, and web applications
    └── ▶ archived/          # Historical projects (Proyectos anteriores)
```

### Key Navigation Behaviors
1. **Tree Exploration:** Seamless navigation using `[↑]` `[↓]`, entering folders or executing actions with `[Enter]` or `[→]`, and returning with `[←]`, `[Backspace]` or the virtual `..` folder item.
2. **Instant Search (`❯ find`):** Real-time filter typing in the prompt. Matches display full hierarchical lineage (e.g., `proyectos / data-science / ⚡ ./life-tracker-analytics.sh`) and can be launched immediately with `[Enter]`.
3. **Dual Interface:** Selecting any active script executes a transition animation (`./launch <id> --gui`) to the dedicated high-level case study page (`src/layouts/ProjectLayout.astro`).

---

## Content Collections Schema (`src/content.config.ts`)

Every project entry in `src/content/projects/{es,en}/*.md` must conform to the Zod schema:

```ts
{
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  githubUrl: z.string().optional(),
  liveAppUrl: z.string().optional(),
  websiteUrl: z.string().optional(),
  isLiveApp: z.boolean().default(false),
  technologies: z.array(z.string()).default([]),
  categories: z.array(z.string()).default([]),
  type: z.enum(["desktop", "mobile", "web", "ai", "data-science"]).default("desktop"),
  status: z.enum(["En Desarrollo", "Archivado", "Activo", "In Development", "Archived", "Active"]).default("Activo"),
  problem: z.string().optional(),
  solution: z.string().optional(),
  learnings: z.array(z.string()).default([]),
  websiteActionText: z.string().optional()
}
```

---

## Design and Development Standards (Project Rules)

1. **Aesthetic & Micro-interactions:** Maintain a modern, clean, and appealing aesthetic ("Premium Design"). Prioritize smooth transitions, subtle console glowing states, and responsive fluid layouts.
2. **Internationalization (i18n):** Full bilingual parity in Spanish (`es`) and English (`en`).
   - Every language toggle interaction must synchronize with `localStorage.setItem('lang', 'es' | 'en')`.
   - Client-side language redirection must ONLY occur if a saved preference exists in `localStorage`. Never redirect based on `navigator.language` on first visit (preserves search engine indexing).
3. **Zero-JS SEO & Structured Data:**
   - Structured JSON-LD payloads (`@type: WebSite`, `Person`, and `SoftwareApplication`) must be generated server-side in `.astro` components via `<script type="application/ld+json" set:html={...}></script>`.
   - Never use client-side runtime libraries for SEO tag generation.
4. **Architectural SSOT (No Technical Docs in UI):**
   - Do NOT render or duplicate deep technical documentation or setup guides inside the portfolio UI.
   - The GitHub repository's `README.md` is the industry standard Single Source of Truth (SSOT) for technical details and architecture. The UI remains focused on high-level problem, solution, and key learnings.
5. **Cross-Project Visual Consistency (Header & Toggles):**
   - Header Layout: absolute positioning at `top-0 left-0 w-full` (with `pointer-events-none`), wrapping a container of `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` and `h-16` (64px) height with `flex items-center justify-between` and `pointer-events-auto` for child actions.
   - Language Toggle Dimensions: pill buttons styled with `w-10 sm:w-12 h-7 sm:h-8` and `text-[11px] sm:text-xs font-medium`.
6. **Mobile Performance & Touch Optimization:**
   - Touch Detection: Always use hardware pointer media queries (`@media (pointer: coarse)` for touch and `@media (pointer: fine)` for mouse/keyboard).
   - In detail pages, ensure clean scroll performance by clearing GPU boot animations (`animate-gui-boot`) client-side after mounting.
7. **Tailwind CSS v4 Integration:**
   - Tailwind is strictly loaded via `@tailwindcss/vite` in `astro.config.mjs`. Do NOT create legacy `postcss.config.mjs` or `tailwind.config.js` files.
8. **Commits Language Requirement:**
   - STRICTLY English for both the commit title (`feat: ...`, `fix: ...`) and the body text.
9. **Dev Server Fallback (Windows):**
   - If `npm run dev` encounters silent socket issues on Windows, the verified static fallback is `npm run build` followed by `npx serve dist -l 4321`.
10. **Runtime Engine Requirement (Node.js 22+):**
   - Astro 7 strictly requires Node.js `>= 22.12.0`. All local development environments, CI workflows, and container runtimes must use Node 22 LTS or newer to execute type-checking (`astro check`) and production builds.


<p align="center">
  <img src="icon.svg" alt="projects-hub Logo" width="120" />
</p>

# Projects Hub | Ana-Catalina

[English](README.md) | [Español](README.es.md)

[![Astro](https://img.shields.io/badge/Astro-7.0-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Demo-projects.ana--catalina.com-emerald.svg)](https://projects.ana-catalina.com)

---

### 1. Project Overview & Philosophy
**Projects Hub** (`projects.ana-catalina.com`) is the centralized applications directory and software engineering portfolio for **Ana-Catalina**. It serves as an interactive gateway to showcase 15 multiplatform projects across desktop systems, native mobile applications, AI agent frameworks, and web tools.

The hub features a **Dual Interface Architecture**: an interactive, keyboard-driven Unix-style terminal console paired with rich, responsive Bento-style GUI case study viewports.

**Development Philosophy:** All showcased projects and this hub itself are built using **AI-Assisted workflows**. This paradigm accelerates implementation and refactoring, allowing deeper focus on systems architecture, UX/UI refinement, state management, and real-world problem solving.

---

### 2. Key Features

- 📟 **Interactive Unix-Style Console:** Virtual filesystem tree (`~/help`, `~/about`, `~/projects`) with full keyboard navigation (`[↑]`, `[↓]`, `[Enter]`, `[←]`, `[Backspace]`) and touch adaptation.
- ⚡ **Instant Search (`❯ find`):** Real-time substring filter displaying matching scripts across all categories with breadcrumb lineage.
- 🛍️ **Product Landing Pages:** End-user landing for each project, generated from the same content collection and served on its own subdomain (`<project>.ana-catalina.com`) through host routes in `vercel.json`.
- 🎨 **Bento GUI Case Studies:** Seamless transition (`./launch <id> --gui`) to deep-dive case studies presenting the core problem, architectural solution, tech stack badges, and key engineering learnings.
- 🌐 **Full Bilingual Parity (i18n):** Complete parity between English and Spanish with persistent `localStorage` synchronization and zero hydration flash.
- 🚀 **Zero-JS SEO & Semantic Web:** Automated sitemaps via `@astrojs/sitemap`, Open Graph / Twitter cards, dynamic canonical URLs, and server-side Schema.org (`WebSite`, `Person`, `SoftwareApplication`) JSON-LD payloads.
- 🌙 **Modern Pastel Design System:** Theme-adaptive pastel palette (Lilac, Pink, Blue, Mint), fluid glassmorphism, responsive typography (`JetBrains Mono`, `Outfit`, `Inter`), and dark/light mode toggle.

---

### 3. Showcase Catalog (15 Projects)

| Category | Projects | Core Technologies |
| :--- | :--- | :--- |
| 🖥️ **Desktop & AI Systems** | **Amiga IA**, **Claude Desktop Tools**, **Screen Health Guardian**, **System Core Monitor**, **Work Activity Panel**, **Workspace Companion** | C#, .NET, WPF, WinUI 3, Rust, PowerShell, AI Agent Protocols |
| 📱 **Native Mobile** | **Meds Reminder**, **Prima Focus**, **Rest Your Eyes** | Kotlin, Jetpack Compose, Material Design 3, Room, AlarmManager |
| 🌐 **Web & Data Analytics** | **Identity Map**, **Life Tracker Analytics**, **My CV**, **Plot This** | Astro 7, React 19, Tailwind CSS v4, Dexie.js, Python, NetworkX |
| 🤖 **AI Agents & Tools** | **Anacatalina MCP**, **Emotion Finder** | Model Context Protocol, Python, AI/ML |

---

### 4. Tech Stack

- **Framework:** [Astro 7](https://astro.build/) (Static Site Generation / Zero JS by default)
- **Runtime:** [Node.js](https://nodejs.org/) v22.12.0+ (LTS)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Content Engine:** Astro Content Collections (`glob` loader + Zod schema in `src/content.config.ts`)
- **Testing & Quality:** [Vitest 4](https://vitest.dev/) (`astro/container` component tests) + [ESLint 10](https://eslint.org/) + TypeScript Strict
- **CI / Automation:** GitHub Actions (`.github/workflows/ci.yml`) on Node.js 22 LTS
- **Typography:** JetBrains Mono (Terminal & Code), Outfit (Headings), Inter (Body)
- **Deployment & Analytics:** Vercel + `@astrojs/sitemap` + `@vercel/analytics`

---

### 5. Repository Structure

```text
projects-hub/
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated 5-stage CI workflow (Node 22 LTS)
├── docs/
│   └── DESIGN_SYSTEM.md         # Color tokens, typography, and UI guidelines
├── public/
│   ├── project-icons/           # High-resolution application badges
│   └── favicon.svg              # Vector brand icon
├── src/
│   ├── __tests__/               # Vitest suites (content schema, component rendering, terminal logic)
│   ├── components/              # Reusable Astro components (ThemeToggle, LanguageToggle, etc.)
│   ├── content/
│   │   └── projects/            # Bilingual Markdown case studies (15 en / 15 es)
│   │       ├── en/
│   │       └── es/
│   ├── layouts/
│   │   ├── Layout.astro         # Base HTML head, meta tags, and JSON-LD
│   │   ├── ProjectLayout.astro  # Bento GUI case study page layout
│   │   └── ProductLayout.astro  # Product landing page layout (served on project subdomains)
│   ├── pages/
│   │   ├── index.astro          # Interactive Terminal Console & Tree UI
│   │   ├── [...project].astro   # Dynamic route generator for case studies
│   │   └── p/[...path].astro    # Product landing routes (/p/<slug>/, /p/<slug>/en/)
│   ├── styles/
│   │   └── global.css           # Tailwind v4 theme variables & animations
│   ├── utils/                   # Pure terminal navigation & categorization helpers
│   ├── content.config.ts        # Content Collections schema validation
│   └── env.d.ts                 # TypeScript global window definitions
├── AGENTS.md                    # AI Agent steering & architectural standards
├── astro.config.mjs             # Astro & Vite plugin configuration
├── eslint.config.js             # ESLint 10 flat configuration
├── package.json
├── tsconfig.json                # Strict TypeScript configuration
├── vitest.config.ts             # Vitest test runner configuration
└── README.md
```

---

### 6. Local Development

#### Prerequisites
- [Node.js](https://nodejs.org/) (v22.12.0+ LTS — required by Astro 7)
- `npm`

#### Installation
```bash
# Clone the repository
git clone https://github.com/AnaCataVC/projects-hub.git
cd projects-hub

# Install dependencies deterministically
npm ci
```

#### Running the Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

#### Running Tests & Code Quality Checks
```bash
# Run unit tests
npm test

# Run static type checking & linter
npm run type-check
npm run lint
```

#### Building for Production
```bash
# Build static production artifacts
npm run build

# Preview production build locally
npm run preview

# Windows fallback preview (if preview port encounters socket constraints)
npx serve dist -l 4321
```

---

### 7. Key Learnings & Engineering Takeaways

- **Astro 7 & Rust Compiler:** Leveraging the strict Rust-based compiler for HTML integrity, rapid hot-module replacement, and zero-JS static payload generation.
- **Node.js 22 LTS Runtime Requirement:** Managing framework engine constraints where Astro 7 strictly enforces Node.js `>= 22.12.0`, requiring alignment across developer machines, container setups, and GitHub Actions runners.
- **Automated 5-Layer CI Quality Gate:** Architecting a headless GitHub Actions pipeline that validates locks (`npm ci`), types (`astro check`), linting (`eslint`), unit tests (`vitest`), and builds (`astro build`) in under 30 seconds before merging or deploying to production.
- **Deterministic Dependency Management:** Enforcing committed lockfiles (`package-lock.json`) coupled with `npm ci` in clean Linux runners to eliminate version drift and peer-dependency inconsistencies.
- **Headless Component Testing via `astro/container`:** Validating server-rendered markup, prop injection, and DOM attributes in Vitest without incurring browser spin-up overhead.
- **Tailwind CSS v4 Integration:** Utilizing the first-class `@tailwindcss/vite` plugin with native `@theme` CSS custom properties, eliminating legacy PostCSS boilerplate.
- **Pure Terminal State Machine:** Implementing Unix-like folder navigation, history tracking, dynamic search indexing, and touch-pointer branch switches without third-party UI dependencies.
- **Zero-JS SEO Architecture:** Injecting rich Schema.org structured data directly at build time to maintain top-tier Lighthouse scores and perfect search crawler indexability.

---

### 8. Live Demo
🚀 **Production Hub:** [https://projects.ana-catalina.com](https://projects.ana-catalina.com)

---


---

## License

This project is licensed under the ISC License. See [LICENSE](LICENSE) for details.


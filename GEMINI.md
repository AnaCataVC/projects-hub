# Project: Ana-Catalina | Projects Hub

## Overview
Projects Hub is Ana-Catalina's personal portfolio and central directory of projects and applications. It currently features a bilingual design (English/Spanish) and serves as the gateway to projects like "My CV Template".

## Current Tech Stack
- **Structure:** HTML5
- **Styling:** Vanilla CSS (CSS Variables, animations, and micro-interactions)
- **Logic:** Vanilla JavaScript (for language switching)
- **Typography:** Outfit (Google Fonts)
- **Deployment:** Configured for Vercel

## Migration Analysis: Should we use Astro?

**Conclusion: Yes, migrating this project to Astro is highly recommended.**

### Reasons:
1. **Ideal for Content Sites:** Astro shines in projects like portfolios, blogs, and hubs, where speed and static content are the priority.
2. **Componentization without Bloat:** We can split the code into reusable components (e.g., `<ProjectCard />`, `<LanguageToggle />`, `<Header />`) while maintaining near-zero JavaScript bundle sizes ("Zero JS by default").
3. **Scalability and Maintenance:** As you add more projects, maintaining a single `index.html` file will become cumbersome. With Astro, we can use content collections or Markdown/MDX files to render projects dynamically.
4. **Islands Architecture:** The language toggle button can remain an isolated interactive component without affecting the performance of the rest of the static page.
5. **Future-Proof:** If a future project requires embedding a complex interactive component from React, Svelte, or Vue into this Hub, Astro allows native integration.

## Design and Development Standards (Project Rules)
- Maintain a modern, clean, and appealing aesthetics ("Premium Design").
- Prioritize subtle animations (micro-interactions) and smoothness.
- Ensure full responsiveness (Mobile-first).
- Strict use of CSS variables for the color palette.
- Every new feature must support internationalization (i18n) in ES and EN.
- **External sub-applications:** If an external project (Vite, React, Astro, etc.) is to be embedded or routed within this Hub using Vercel rewrites (e.g., `/identity-map`), the external project MUST be compiled with relative paths for its assets (e.g., `base: './'` in Vite) to prevent 404 errors.
- **Mobile Performance & Scrolling:** In content-heavy views, avoid complex Flexbox layouts with dynamic heights coupled with GPU animations if they cause scrolling issues on touch devices. Switch to `display: block`, inject generous bottom padding (e.g., `pb-24`), and remove animation classes (e.g., `animate-gui-boot`) via client-side JS after loading.
- **Touch Device Detection:** Do not rely on screen-width breakpoints to toggle touch help. Use hardware pointer capability media queries: `@media (pointer: coarse)` for touch devices and `@media (pointer: fine)` for mouse/keyboard.
- **Local Redirection Cleanup:** When converting any external routing into a dynamic local Astro route in the Hub, make sure to delete any residual rewrite/redirection rules in `vercel.json` to prevent infinite network redirect loops on the server.
- **Astro Dev Server Fallback (Windows):** If `npm run dev` reports it's running but the connection is refused at `localhost:4321` (silent background crash), the standard workaround for visual verification is to execute `npm run build` followed by `npx serve dist -l 4321` to run a synchronous static server.
- **Astro 7 Rust Compiler:** The new `.astro` compiler is extremely strict with HTML syntax. Always ensure opening and closing tags match perfectly, otherwise the build will fail immediately.
- **TailwindCSS v4 Integration:** In this Vite 8 environment, TailwindCSS is strictly managed via the Vite plugin (`@tailwindcss/vite` in `astro.config.mjs`). Do not attempt to configure or create legacy PostCSS files (`postcss.config.mjs`).
- **Commits Language Requirement:** STRICTLY English. This applies to BOTH the commit title (e.g., `feat: ...`) AND the detailed commit body/description. Do not let the conversational language (Spanish) bleed into the commit messages.

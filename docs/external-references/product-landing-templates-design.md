# Research & Design Blueprint: Modern Dynamic Product Landing Templates

## Context & Motivation
The static product landing pages (`/p/<slug>/` and `<slug>.ana-catalina.com`) built into Projects Hub migrated from standalone marketing landing pages (specifically the high-impact Amiga IA landing page). During the transition to static generation within `ProductLayout.astro`, the pages adopted a very subdued "Pastel-Tech" aesthetic that flattened their contrast and visual dynamism.

The goal is to restore the vibrancy, high-tech SaaS feel, and visual energy of the original Amiga IA landing while adhering strictly to the Ana-Catalina Design System (`docs/DESIGN_SYSTEM.md`), zero-JS/static Astro constraints, and responsive ergonomics.

---

## 1. Visual Forensic: Amiga IA Landing vs. Current ProductLayout

| Dimension | Ex Amiga IA Landing (`amiga-ia/index.html`) | Current `ProductLayout.astro` | Target Hybrid ("Cool & Unified") |
| :--- | :--- | :--- | :--- |
| **Atmospheric Background** | Deep `bg-slate-950` with vibrant screen-blended ambient light orbs (`blur-[100px]`, `mix-blend-screen`, fuchsia/indigo). | Flat `#fdfbff` (light) / `#1e1a2b` (dark) with static watermark `PoppyBackground.astro`. | Multi-layered atmosphere: Subtle ambient glow orbs (pastel glow in light mode, neon-soft in dark mode) + unobtrusive Poppy watermark. |
| **Hero Typography** | High-contrast gradient text clipping (`bg-clip-text text-transparent bg-gradient-to-r`). | Monochromatic solid text (`font-bold text-4xl sm:text-6xl`). | Bold Outfit headline with signature gradient text clip on key value propositions. |
| **Status Badge** | Pulsing pill badge with live beacon dot (`bg-green-400 animate-pulse`) and micro-copy. | Plain text platform string at bottom of hero. | Interactive-feel pill badge above headline displaying platform / status beacon. |
| **Hero CTAs** | Glowing primary CTA (`shadow-lg shadow-brand-purple/20`) + glassmorphic secondary button (`backdrop-blur-md bg-white/5 border-white/10`). | Flat gradient button + solid white/dark card button. | High-performance interactive pills with radial/diffuse hover glows, micro-interactions, and lucide icons. |
| **Feature Cards** | Translucent glassmorphism (`glass-card`, `backdrop-blur-sm`, colored border accents like `border-blue-500/20 hover:border-blue-500/50`). | Solid opaque boxes (`bg-white` or `bg-[#2a243d]`, flat border `border-slate-100`). | Modern glass-like cards with ambient border highlights on hover and colored icon badge capsules. |
| **Code / Quick Start** | Sleek terminal container (`bg-black/60 backdrop-blur-xl border border-white/10`, terminal copy actions, mono font highlights). | Raw preformatted block (`<pre class="bg-[#2a243d]">`). | Polished DevTools / Terminal card with window dots, syntax color accents, and instant copy interaction. |
| **Header & Language** | Sliding pill toggle with smooth pill slide indicator (`transform 300ms`). | Plain text tags (`px-2.5 py-1`). | Unified pill toggle matching Projects Hub header standards with smooth state indication. |

---

## 2. Key Design Pillars for the New Templates

### A. "Glow & Glass" Depth Architecture
- **Light Theme:** Pristine slate-50 canvas with ultra-soft pastel ambient orbs (lilac, rose, cyan) at 20-30% opacity, paired with crisp white glassmorphism (`bg-white/70 backdrop-blur-md border border-slate-200/60`).
- **Dark Theme:** Deep slate-950 canvas with jewel-tone ambient gradients (purple, indigo, fuchsia, cyan) and dark translucent glass cards (`bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-purple-500/30`).
- **Poppy Unification:** Preserve `PoppyBackground.astro` as the signature watermark at `opacity-[0.03]` in light and `opacity-[0.05]` in dark mode, anchoring brand continuity with the homepage and console.

### B. Adaptive Accent Theming per Product Archetype
All product pages must share a common visual grammar, typography, and layout structure (ensuring modularity and code reuse), while dynamically inheriting an **Accent Aura** based on `entry.data.type` or frontmatter:
1. **AI / Agéntico (`type: "ai"`):** Electric Fuchsia & Cosmic Purple (`from-pink-500 via-purple-500 to-indigo-500`).
2. **Desktop Systems & Monitors (`type: "desktop"`):** Hyper Cyan & Tech Indigo (`from-cyan-400 via-blue-500 to-indigo-600`).
3. **Productivity & Utilities (`type: "web"` / `tools`):** Pastel Lilac & Sunset Orange (`from-purple-400 via-indigo-500 to-amber-400`).
4. **Health, Focus & Timers:** Mint Fresh & Emerald Aura (`from-emerald-400 via-teal-500 to-cyan-500`).

### C. Zero-Dependency & Pure CSS Micro-Animations
- GPU-accelerated CSS animations (`fadeIn`, `pulseGlow`, `shimmer`).
- Zero external client runtime libraries; everything rendered server-side in Astro with minimal inline hydration for theme toggle and code copying.

---

## 3. Technical Constraints & Verification Invariants
1. **Static Generation Parity:** Must work with Astro 7 SSG and `@tailwindcss/vite` (Tailwind v4).
2. **Host Routing & SEO:** Preserves canonical tags, host rewrites (`vercel.json`), JSON-LD structured data, and bilingual parity (`/p/<slug>/` and `/p/<slug>/en/`).
3. **Automated Test Compatibility:** All existing tests in `src/__tests__/product-pages.test.ts` must pass without regressions.

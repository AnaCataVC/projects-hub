# Projects Hub | Ana-Catalina

[![Astro](https://img.shields.io/badge/Astro-7.0-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Demo-projects.ana--catalina.com-emerald.svg)](https://projects.ana-catalina.com)

[English](#english) | [Español](#español)

---

<a name="english"></a>
## English

### 1. Project Overview & Philosophy
**Projects Hub** (`projects.ana-catalina.com`) is the centralized applications directory and software engineering portfolio for **Ana-Catalina**. It serves as an interactive gateway to showcase 12 multiplatform projects across desktop systems, native mobile applications, AI agent frameworks, and web tools.

The hub features a **Dual Interface Architecture**: an interactive, keyboard-driven Unix-style terminal console paired with rich, responsive Bento-style GUI case study viewports.

**Development Philosophy:** All showcased projects and this hub itself are built using **AI-Assisted workflows**. This paradigm accelerates implementation and refactoring, allowing deeper focus on systems architecture, UX/UI refinement, state management, and real-world problem solving.

---

### 2. Key Features

- 📟 **Interactive Unix-Style Console:** Virtual filesystem tree (`~/help`, `~/about`, `~/projects`) with full keyboard navigation (`[↑]`, `[↓]`, `[Enter]`, `[←]`, `[Backspace]`) and touch adaptation.
- ⚡ **Instant Search (`❯ find`):** Real-time substring filter displaying matching scripts across all categories with breadcrumb lineage.
- 🎨 **Bento GUI Case Studies:** Seamless transition (`./launch <id> --gui`) to deep-dive case studies presenting the core problem, architectural solution, tech stack badges, and key engineering learnings.
- 🌐 **Full Bilingual Parity (i18n):** Complete parity between English and Spanish with persistent `localStorage` synchronization and zero hydration flash.
- 🚀 **Zero-JS SEO & Semantic Web:** Automated sitemaps via `@astrojs/sitemap`, Open Graph / Twitter cards, dynamic canonical URLs, and server-side Schema.org (`WebSite`, `Person`, `SoftwareApplication`) JSON-LD payloads.
- 🌙 **Modern Pastel Design System:** Theme-adaptive pastel palette (Lilac, Pink, Blue, Mint), fluid glassmorphism, responsive typography (`JetBrains Mono`, `Outfit`, `Inter`), and dark/light mode toggle.

---

### 3. Showcase Catalog (12 Projects)

| Category | Projects | Core Technologies |
| :--- | :--- | :--- |
| 🖥️ **Desktop & AI Systems** | **Amiga IA**, **Screen Health Guardian**, **Simple PC Monitor**, **Work Activity Panel**, **Workspace Companion** | C#, .NET, WPF, WinUI 3, Rust, PowerShell, AI Agent Protocols |
| 📱 **Native Mobile** | **Meds Reminder**, **Prima Focus**, **Rest Your Eyes** | Kotlin, Jetpack Compose, Material Design 3, Room, AlarmManager |
| 🌐 **Web & Data Analytics** | **Identity Map**, **Life Tracker Analytics**, **My CV**, **Plot This** | Astro 7, React 19, Tailwind CSS v4, Dexie.js, Python, NetworkX |

---

### 4. Tech Stack

- **Framework:** [Astro 7](https://astro.build/) (Static Site Generation / Zero JS by default)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Content Engine:** Astro Content Collections (`glob` loader + Zod schema in `src/content.config.ts`)
- **Typography:** JetBrains Mono (Terminal & Code), Outfit (Headings), Inter (Body)
- **Deployment & Analytics:** Vercel + `@astrojs/sitemap` + `@vercel/analytics`

---

### 5. Repository Structure

```text
projects-hub/
├── docs/
│   └── DESIGN_SYSTEM.md         # Color tokens, typography, and UI guidelines
├── public/
│   ├── project-icons/           # High-resolution application badges
│   └── favicon.svg              # Vector brand icon
├── src/
│   ├── components/              # Reusable Astro components (ThemeToggle, LanguageToggle, etc.)
│   ├── content/
│   │   └── projects/            # Bilingual Markdown case studies (12 en / 12 es)
│   │       ├── en/
│   │       └── es/
│   ├── layouts/
│   │   ├── Layout.astro         # Base HTML head, meta tags, and JSON-LD
│   │   └── ProjectLayout.astro  # Bento GUI case study page layout
│   ├── pages/
│   │   ├── index.astro          # Interactive Terminal Console & Tree UI
│   │   └── [...project].astro   # Dynamic route generator for case studies
│   ├── styles/
│   │   └── global.css           # Tailwind v4 theme variables & animations
│   └── content.config.ts        # Content Collections schema validation
├── AGENTS.md                    # AI Agent steering & architectural standards
├── astro.config.mjs             # Astro & Vite plugin configuration
├── package.json
└── README.md
```

---

### 6. Local Development

#### Prerequisites
- [Node.js](https://nodejs.org/) (v18.17.0+ or v20+)
- `npm`

#### Installation
```bash
# Clone the repository
git clone https://github.com/AnaCataVC/projects-hub.git
cd projects-hub

# Install dependencies
npm install
```

#### Running the Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

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
- **Tailwind CSS v4 Integration:** Utilizing the first-class `@tailwindcss/vite` plugin with native `@theme` CSS custom properties, eliminating legacy PostCSS boilerplate.
- **Pure Terminal State Machine:** Implementing Unix-like folder navigation, history tracking, dynamic search indexing, and touch-pointer branch switches without third-party UI dependencies.
- **Zero-JS SEO Architecture:** Injecting rich Schema.org structured data directly at build time to maintain top-tier Lighthouse scores and perfect search crawler indexability.

---

### 8. Live Demo
🚀 **Production Hub:** [https://projects.ana-catalina.com](https://projects.ana-catalina.com)

---

<a name="español"></a>
## Español

### 1. Descripción del Proyecto y Filosofía
**Projects Hub** (`projects.ana-catalina.com`) es el directorio centralizado de aplicaciones y portafolio de ingeniería de software de **Ana-Catalina**. Funciona como un portal interactivo para explorar 12 proyectos multiplataforma en áreas de sistemas de escritorio, aplicaciones móviles nativas, frameworks de agentes de IA y herramientas web.

El hub cuenta con una **Arquitectura de Interfaz Dual**: una consola de terminal interactiva estilo Unix operada por teclado, combinada con vistas de estudio de caso estilo Bento detalladas y responsivas.

**Filosofía de Desarrollo:** Todos los proyectos presentados y este mismo hub han sido construidos mediante **flujos de trabajo asistidos por IA**. Este paradigma acelera la implementación y refactorización, permitiendo un enfoque primordial en la arquitectura del sistema, el refinamiento de la experiencia de usuario (UX/UI), la gestión de estado y la resolución de problemas reales.

---

### 2. Características Principales

- 📟 **Consola Interactiva Estilo Unix:** Árbol de sistema de archivos virtual (`~/help`, `~/about`, `~/proyectos`) con navegación completa por teclado (`[↑]`, `[↓]`, `[Enter]`, `[←]`, `[Retroceso]`) y adaptación táctil.
- ⚡ **Búsqueda Instantánea (`❯ find`):** Filtro de subcadenas en tiempo real que localiza scripts en todas las categorías mostrando la ruta jerárquica completa.
- 🎨 **Estudios de Caso GUI Bento:** Transición fluida (`./launch <id> --gui`) hacia fichas técnicas que exponen el problema central, la solución arquitectónica, tecnologías utilizadas y aprendizajes clave.
- 🌐 **Paridad Bilingüe Total (i18n):** Equivalencia exacta entre español e inglés con sincronización persistente en `localStorage` y cero parpadeo de hidratación.
- 🚀 **SEO Cero-JS y Web Semántica:** Generación automatizada de sitemaps vía `@astrojs/sitemap`, tarjetas Open Graph / Twitter, URLs canónicas dinámicas y esquemas JSON-LD de Schema.org (`WebSite`, `Person`, `SoftwareApplication`) generados en el servidor.
- 🌙 **Sistema de Diseño Pastel Moderno:** Paleta pastel adaptable a temas (Lila, Rosa, Azul, Menta), glassmorphism fluido, tipografía responsiva (`JetBrains Mono`, `Outfit`, `Inter`) y selector de modo claro/oscuro.

---

### 3. Catálogo de Proyectos (12 Proyectos)

| Categoría | Proyectos | Tecnologías Principales |
| :--- | :--- | :--- |
| 🖥️ **Escritorio y Sistemas de IA** | **Amiga IA**, **Screen Health Guardian**, **Simple PC Monitor**, **Work Activity Panel**, **Workspace Companion** | C#, .NET, WPF, WinUI 3, Rust, PowerShell, Protocolos de Agentes de IA |
| 📱 **Móvil Nativo** | **Meds Reminder**, **Prima Focus**, **Rest Your Eyes** | Kotlin, Jetpack Compose, Material Design 3, Room, AlarmManager |
| 🌐 **Web y Analítica de Datos** | **Identity Map**, **Life Tracker Analytics**, **My CV**, **Plot This** | Astro 7, React 19, Tailwind CSS v4, Dexie.js, Python, NetworkX |

---

### 4. Tecnologías Utilizadas

- **Framework:** [Astro 7](https://astro.build/) (Generación de Sitio Estático / Cero JS por defecto)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) mediante `@tailwindcss/vite`
- **Gestor de Contenido:** Colecciones de Contenido de Astro (`glob` loader + validación Zod en `src/content.config.ts`)
- **Tipografía:** JetBrains Mono (Terminal y Código), Outfit (Encabezados), Inter (Cuerpo)
- **Despliegue y Métricas:** Vercel + `@astrojs/sitemap` + `@vercel/analytics`

---

### 5. Estructura del Repositorio

```text
projects-hub/
├── docs/
│   └── DESIGN_SYSTEM.md         # Tokens de color, tipografía y lineamientos de UI
├── public/
│   ├── project-icons/           # Íconos de aplicación en alta resolución
│   └── favicon.svg              # Ícono vectorial de marca
├── src/
│   ├── components/              # Componentes Astro reutilizables (ThemeToggle, LanguageToggle, etc.)
│   ├── content/
│   │   └── projects/            # Fichas técnicas Markdown bilingües (12 es / 12 en)
│   │       ├── es/
│   │       └── en/
│   ├── layouts/
│   │   ├── Layout.astro         # Encabezado HTML base, meta tags y JSON-LD
│   │   └── ProjectLayout.astro  # Estructura visual para estudios de caso Bento
│   ├── pages/
│   │   ├── index.astro          # Consola Terminal Interactiva e interfaz de árbol
│   │   └── [...project].astro   # Generador dinámico de rutas para estudios de caso
│   ├── styles/
│   │   └── global.css           # Variables de tema y animaciones de Tailwind v4
│   └── content.config.ts        # Validación de esquemas de Colecciones de Contenido
├── AGENTS.md                    # Directrices y estándares de arquitectura para agentes de IA
├── astro.config.mjs             # Configuración de integración de Astro y Vite
├── package.json
└── README.md
```

---

### 6. Desarrollo Local

#### Requisitos Previos
- [Node.js](https://nodejs.org/) (v18.17.0+ o v20+)
- `npm`

#### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/AnaCataVC/projects-hub.git
cd projects-hub

# Instalar dependencias
npm install
```

#### Iniciar el Servidor de Desarrollo
```bash
npm run dev
```
Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

#### Compilación para Producción
```bash
# Compilar artefactos estáticos de producción
npm run build

# Previsualizar la compilación de producción localmente
npm run preview

# Previsualización alternativa en Windows (en caso de restricciones de socket)
npx serve dist -l 4321
```

---

### 7. Aprendizajes Destacados y Decisiones Técnicas

- **Astro 7 y Compilador Rust:** Aprovechamiento del compilador estricto basado en Rust para garantizar integridad HTML, recarga rápida en caliente y entrega de sitios con cero JavaScript innecesario.
- **Integración de Tailwind CSS v4:** Uso del plugin de primera clase `@tailwindcss/vite` junto a variables CSS personalizadas nativas `@theme`, eliminando configuraciones obsoletas de PostCSS.
- **Máquina de Estado para la Terminal Pura:** Implementación de navegación de carpetas, historial de búsqueda dinámica y compatibilidad con interfaces táctiles y de ratón sin dependencias pesadas de terceros.
- **Arquitectura SEO Cero-JS:** Inyección de esquemas estructurados de Schema.org directamente durante el tiempo de compilación para maximizar los puntajes de rendimiento en Lighthouse e indexación.

---

### 8. Enlace de Despliegue (Live Demo)
🚀 **Hub en Producción:** [https://projects.ana-catalina.com](https://projects.ana-catalina.com)


# Contract: MCP Landing & Server Unification

## 1. Scope & System Overview
This contract formally defines the behavioral and structural requirements for unifying the Model Context Protocol (MCP) showcase and server into `anacatalina-mcp` and removing its product landing block from `projects-hub`, while keeping its technical case study and direct demo links.

---

## 2. Repositories & Target Components

### Component A: `projects-hub` (Portfolio Directory)
- **Target Files:**
  - `src/content/projects/es/anacatalina-mcp.md`
  - `src/content/projects/en/anacatalina-mcp.md`

#### Behavioral & Schema Invariants:
1. **No Product Landing Generation:** The YAML frontmatter MUST NOT define a `product:` object. Neither `/p/anacatalina-mcp/` nor `/p/anacatalina-mcp/en/` shall be generated.
2. **Technical Case Study Linkage:**
   - `websiteUrl` MUST remain `"https://mcp.ana-catalina.com/"`.
   - `websiteActionText` MUST be set to `"Servidor MCP & Demo"` (in `es`) and `"MCP Server & Demo"` (in `en`).
   - `lastUpdated` MUST be updated to `2026-10-04`.
   - `status` MUST remain `"Activo"` (es) / `"Active"` (en).
   - Case study markdown body MUST reference the interactive web demo and client connection endpoint hosted at `https://mcp.ana-catalina.com/`.
3. **Quality Gates:**
   - `npm test` MUST pass with 100% green tests (including `product-pages.test.ts` and `content-schema.test.ts`).
   - `npm run type-check` (`astro check`) MUST report 0 errors.
   - `npm run lint` (`eslint .`) MUST report 0 warnings or errors.

---

### Component B: `anacatalina-mcp` (Server & Web Showcase)
- **Target Files:**
  - `server.py`
  - `templates/index.html`

#### Public Interfaces & Endpoints:
1. **Endpoint `GET /` (Content-Negotiated Root):**
   - **Scenario 1: Browser Navigation (`Accept: text/html` present)**
     - **Status Code:** `200 OK`
     - **Content-Type:** `text/html; charset=utf-8` (or Starlette `HTMLResponse`)
     - **Body:** Must return the complete showcase HTML template (`get_showcase_html()`).
     - **Prohibited:** MUST NOT return a `301` or `302` redirect to `projects.ana-catalina.com`.
   - **Scenario 2: Machine / Client Inspection (`Accept: application/json` or absent/non-html)**
     - **Status Code:** `200 OK`
     - **Content-Type:** `application/json`
     - **Body Schema:**
       ```json
       {
         "name": "Ana-Catalina Interactive Portfolio MCP",
         "status": "healthy",
         "version": "1.4.0",
         "mcp_endpoint": "/mcp",
         "health_endpoint": "/health",
         "web_showcase": "/demo",
         "demo_endpoint": "/demo"
       }
       ```

2. **Endpoint `GET /demo`:**
   - **Status Code:** `200 OK`
   - **Content-Type:** `text/html; charset=utf-8`
   - **Body:** Showcase HTML template (`get_showcase_html()`).

3. **Endpoints `/mcp` & `/health`:**
   - Transport and tools registration MUST remain strictly intact and operational.

#### Frontend UI Specifications (`templates/index.html`):
1. **Visual System & Aesthetics:**
   - Modern Pastel-Tech / Cosmic Aura theme aligned with Projects Hub:
     - Typography: Headings in `Outfit`, body text in `Inter`, code/specs in `JetBrains Mono`.
     - Dark canvas palette (`#0b0f19` / `#111827`) with soft violet/lavender/fuchsia glowing accents and subtle glassmorphism cards (`backdrop-blur`).
2. **Navigation Header:**
   - Brand logo / title linking to `https://ana-catalina.com/`.
   - Navigation link to the Case Study / Ficha Técnica: `https://projects.ana-catalina.com/anacatalina-mcp` (or `/en/anacatalina-mcp`).
   - Symmetric bilingual toggle (`ES` / `EN`) adhering to Zero Flags rule.
   - Dark / Light theme toggle with persistence in `localStorage`.
3. **Hero Section:**
   - Mascot avatar (`/icon.png`).
   - Live status pill: green pulsing ping dot + text `Live en Google Cloud Run • Streamable HTTP Activo`.
   - Executive title and summary.
   - Primary action buttons:
     - "Conectar Asistente (MCP)" (smooth scroll to configuration section).
     - "Ver Ficha Técnica" (link to Projects Hub).
     - "GitHub" (link to repo).
4. **Interactive Feature 1: MCP Client Configurator:**
   - Tabbed view:
     - `Cursor & Windsurf (mcp.json)`: valid JSON snippet with `"url": "https://mcp.ana-catalina.com/mcp"`.
     - `Claude.ai (Conector Web)`: setup instructions for custom web connector.
     - `Gemini (gemini.com)`: Connected Apps instructions.
     - `cURL / CLI Health`: valid cURL command testing `tools/list`.
   - One-click copy button with visual feedback ("Copiado!" / "Copied!").
5. **Interactive Feature 2: Official MCP 9 Tools Catalog:**
   - Responsive grid displaying all 9 tools:
     `obtener_experiencia`, `obtener_stack_tecnologico`, `obtener_proyectos_destacados`, `evaluar_fit_puesto`, `buscar_en_curriculum`, `obtener_educacion`, `obtener_contacto`, `obtener_perfil`, `obtener_resumen_ejecutivo`.
   - Tool names in monospace styling.
6. **Interactive Feature 3: Curated Benchmark Scenarios (Fit Evaluation):**
   - 4 selectable benchmark chips: Senior Data Scientist, Logistics Specialist, AI Agents Engineer, Pop Singer (negative test).
   - Reactive result display showing match score percentage, matching technology tags, and verified strengths.

---

## 3. Automated Test Verification Criteria
- **`projects-hub`:**
  - `npm test` runs all Vitest component and schema tests, resulting in 100% pass.
  - `npm run type-check` returns exit code 0.
  - `npm run lint` returns exit code 0.
- **`anacatalina-mcp`:**
  - Automated tests validating:
    - Root route content negotiation: `Accept: text/html` returns 200 HTML without redirect.
    - Root route JSON discovery: `Accept: application/json` returns 200 JSON payload.
    - `/demo` returns 200 HTML.
    - `pytest tests/` passes 100%.

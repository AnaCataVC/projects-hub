---
title: "Amiga IA"
description: "Ecosistema integral de 14 subagentes autónomos, hooks de seguridad sin estado y 25 skills declarativas portátiles con instalación selectiva por packs de dominio e invariantes de ingeniería reforzadas. 100% compatible con Antigravity (Gemini), Claude Code y OpenAI Codex."
lastUpdated: 2026-11-05
icon: "/project-icons/ami-icon.png"
githubUrl: "https://github.com/AnaCataVC/amiga-ia"
websiteUrl: "https://amiga-ia.ana-catalina.com"
isLiveApp: false
technologies: ["Subagent Orchestration", "Agent Skills", "Delimited Block Protocol", "Cleanroom TDD", "Empirical Benchmarks", "Release Automation", "PowerShell", "Node.js"]
categories: ["IA", "Agentes", "Productividad", "Developer Tools"]
type: "ai"
status: "Activo"
problem: "La degradación en bases de código grandes al depender de instrucciones imperativas paso a paso, junto al consumo elevado de tokens al acumular contexto repetitivo en asistentes de IA genéricos."
solution: "Un ecosistema agéntico unificado de 14 subagentes autónomos y 25 skills declarativas con instalación selectiva por dominio e invariantes reforzadas, dotado de un compilador nativo para el tri-ecosistema (Antigravity, Claude Code y OpenAI Codex), protocolo de bloques delimitados, TDD Cleanroom Doble Ciego y suite de benchmarks empíricos deterministas."
learnings:
  - "Evaluación Empírica de Benchmarks Agénticos (ADR-004, ADR-012): Validación offline determinista que evidencia -44.75% (-2.973 tokens) en sobrecarga de contexto por turno, 0% de sesgo de confirmación en TDD Cleanroom y 100% de precisión y exhaustividad en auditorías de repositorio."
  - "Distribución Idempotente de Reglas de IA: Diseño del protocolo de bloques delimitados para inyectar y sincronizar directivas de agentes en proyectos sin sobreescribir configuraciones locales ni generar residuos."
  - "Compuertas de Verificación en Automatización de Releases: Implementación de validaciones en vivo para compilar y comprobar la existencia de binarios y assets antes de publicar releases oficiales."
  - "IA Agéntica vs. Prompts Pasivos: Migrar hacia subagentes autónomos que razonan sobre objetivos globales y coordinan revisiones en paralelo es exponencialmente más resistente y escalable que la ingeniería de prompts tradicional."
  - "Compilador Semántico Tri-Ecosistema: Traducción automatizada desde Markdown canónico hacia formatos nativos de Anthropic Claude Code (~/.claude/), Google Antigravity (~/.gemini/config/) y OpenAI Codex (~/.agents/ y ~/.codex/)."
websiteActionText: "Ver Página"
product:
  tagline: "Un equipo de agentes de IA para ayudarte a programar mejor"
  intro: "Subagentes especializados, reglas claras y herramientas en Markdown para planificar código, revisar cambios y lanzar versiones con orden en Claude Code, Antigravity y OpenAI Codex."
  features:
    - icon: "Bot"
      title: "Suite de Subagentes Autónoma"
      text: "Subagentes especializados razonan, descubren skills y coordinan auditorías de repositorio, revisiones de PR y lanzamientos en paralelo, sin instrucciones paso a paso."
    - icon: "Zap"
      title: "Sin Estado y Alta Eficiencia"
      text: "Diseñado para máxima economía de tokens, con deduplicación de hooks externos y lectura bajo demanda para un historial ultrarresistente y veloz."
    - icon: "Layers"
      title: "Orquestación en Paralelo"
      text: "Agentes descentralizados coordinan flujos multi-habilidad concurrentes, ejecutando auditorías de deuda técnica, dependencias y arquitectura en simultáneo."
    - icon: "Shield"
      title: "Controles Previos al Push"
      text: "Realiza pruebas de seguridad, consistencia de datos e interceptación de hooks antes de cualquier push al remoto."
    - icon: "Package"
      title: "Packs de Dominio y CLI ami"
      text: "Activa solo lo que necesitas: packs integrados ('essential', 'data', 'ui') y extensiones runtime ('claude-mods') con activación instantánea y 100% offline."
    - icon: "Stethoscope"
      title: "Asistente de Instalación y Diagnóstico"
      text: "El wizard CLI interactivo (`ami` o `amiga-ia-setup`) permite configurar la suite completa o packs selectivos para Antigravity, Claude Code y OpenAI Codex, con verificación de salud mediante ami doctor."
  platforms: ["Claude Code", "Antigravity (Gemini)", "OpenAI Codex"]
  downloadUrl: "https://www.npmjs.com/package/@anacatavc/amiga-ia"
  downloadLabel: "Instalar vía NPM"
  links:
    - label: "Explorar Herramientas"
      url: "#catalog"
    - label: "Inicio Rápido"
      url: "#quick-start"
  catalog:
    title: "Capacidades (Por Utilidad)"
    items:
      - title: "ami-cleanroom-arbiter"
        description: "Árbitro maestro de Cleanroom TDD. Congela contratos de interfaz y coordina builder y tester aislados a doble ciego."
        tags: ["ami-orchestrate-cleanroom", "Contract-First Design", "Adversarial QA"]
      - title: "ami-data-scientist"
        description: "Orquestador maestro para análisis exploratorio, optimización SQL, auditorías y dashboards ejecutivos."
        tags: ["ami-build-dashboard", "ami-optimize-sql"]
      - title: "ami-ui-builder"
        description: "Especialista maestro en UI y prototipado. Construye mockups interactivos, prototipos de interfaz y documentación visual sin saturar el contexto principal."
        tags: ["ami-prototype-ui", "ami-audit-ui-consistency", "Interactive Prototypes"]
      - title: "ami-tech-lead"
        description: "Tech Lead Maestro. Orquesta planificación de proyectos, arquitectura inicial y diseño de estrategias."
        tags: ["ami-architect-project", "ami-plan-feature", "ami-stress-test-idea", "ami-design-test-strategy", "ami-debug-issue"]
      - title: "ami-pr-reviewer"
        description: "Orquesta revisiones estructuradas de PRs de compañeros usando subagentes en paralelo."
        tags: ["ami-review-peer-pr", "ami-analyze-pr-comments", "ami-review-self-pr"]
      - title: "ami-pr-publisher"
        description: "Automatiza la creación, revisión de conflictos y auto-revisión crítica de tus propios Pull Requests."
        tags: ["ami-review-self-pr", "ami-plan-commits", "ami-detect-pr-conflicts", "ami-create-tests"]
      - title: "ami-repo-auditor"
        description: "Orquesta auditorías de salud, dependencias, detección de agentes y automatizaciones, y generación de pruebas faltantes."
        tags: ["ami-discover-ai-agents", "ami-discover-automations", "ami-scan-tech-debt", "ami-analyze-dependencies", "ami-audit-quality"]
      - title: "ami-doc-architect"
        description: "Orquestador maestro para documentación, investigación de contexto y extracción de lecciones."
        tags: ["ami-manage-docs", "ami-research-context"]
      - title: "ami-release-manager"
        description: "Orquesta el ciclo de lanzamiento, cálculo semántico de etiquetas de versión y notas de lanzamiento."
        tags: ["ami-prepare-release"]
      - title: "ami-push-assistant"
        description: "Realiza pruebas de seguridad, consistencia de datos e interceptación de hooks antes del push."
        tags: ["Git Pre-Flight Guards", "Real-time Debug Linter"]
      - title: "ami-expert-council"
        description: "Crea un panel de subagentes dinámicos para debatir, analizar y refinar ideas arquitectónicas."
        tags: ["Dynamic Parallel Subagents"]
  codeSnippets:
    - title: "Instalación Universal con CLI ami"
      language: "bash"
      code: |
        npm install -g @anacatavc/amiga-ia
        ami # o: amiga-ia-setup
    - title: "Gestión Modular de Packs de Dominio"
      language: "bash"
      code: |
        ami list
        ami add data
        ami add ui
        ami add claude-mods
    - title: "Diagnóstico y Salud del Sistema"
      language: "bash"
      code: |
        ami doctor
  faq:
    - question: "¿Cómo funciona la nueva CLI ami y los packs de dominio?"
      answer: "La CLI `ami` (alias oficial de `amiga-ia-setup`) organiza las 39 capacidades en paquetes declarativos ('essential', 'data', 'ui') y extensiones runtime ('claude-mods'). La activación o desactivación es instantánea, 100% offline y no requiere descargas adicionales."
    - question: "¿En qué motores de IA puedo usar Amiga IA?"
      answer: "Amiga IA compila nativamente para Google Antigravity (Gemini), Anthropic Claude Code y OpenAI Codex, adaptando sus reglas, subagentes y skills al formato requerido por cada herramienta."
---

### Arquitectura Técnica y Orquestación

**Amiga IA** transforma la asistencia de programación con Inteligencia Artificial, superando las limitaciones de los prompts imperativos mediante una **malla de 14 subagentes especializados y autónomos** (`ami-tech-lead`, `ami-repo-auditor`, `ami-push-assistant`, entre otros) respaldada por **25 skills declarativas bajo demanda**. Cada subagente asume un rol delimitado con herramientas específicas y compuertas de seguridad.

*   **Adaptador Universal & Multi-Motor:** Inyección de guardarraíles sin estado y compilación portátil de habilidades con compatibilidad nativa entre Antigravity (Gemini), Claude Code y OpenAI Codex. Incluye un wizard CLI (`amiga-ia-setup`) con instalación modular por packs de dominio e invariantes de ingeniería reforzadas.
*   **Protocolo de Bloques Delimitados:** Motor de sincronización idempotente que actualiza reglas globales en múltiples repositorios sin sobreescribir configuraciones locales ni dejar residuos.
*   **Aislamiento Cleanroom Doble Ciego:** Flujo de TDD desacoplado (`ami-cleanroom-arbiter`) donde el implementador y el autor de pruebas operan sobre contratos de interfaz sellados, erradicando el sesgo de confirmación.

### Optimización, Benchmarks y Compuertas de Calidad

*   **Validación con Benchmarks Empíricos:** Evaluación offline determinista que valida una reducción del **44.75% (-2.973 tokens/turno)** en sobrecarga de contexto, 0% de defectos escapados en Cleanroom TDD y precisión y exhaustividad perfectas ($F_1 = 1.00$) en detección de fallos de repositorio.
*   **Protocolo Anti-Alucinación:** Automatización de flujos de release con compuertas en vivo que compilan, testean y verifican hashes de binarios antes de permitir la publicación en GitHub.

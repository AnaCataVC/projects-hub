---
title: "Amiga IA"
description: "Ecosistema integral de subagentes autónomos, hooks de seguridad sin estado y 22 skills declarativas portátiles. 100% compatible con Antigravity (Gemini), Claude Code y OpenAI Codex."
lastUpdated: 2026-10-26
icon: "/project-icons/ami-icon.png"
githubUrl: "https://github.com/AnaCataVC/amiga-ia"
websiteUrl: "https://amiga-ia.ana-catalina.com"
isLiveApp: false
technologies: ["Subagent Orchestration", "Agent Skills", "Delimited Block Protocol", "Release Automation", "PowerShell", "Node.js"]
categories: ["IA", "Agentes", "Productividad", "Developer Tools"]
type: "ai"
status: "Activo"
problem: "La degradación en bases de código grandes al depender de instrucciones imperativas paso a paso, junto al consumo elevado de tokens al acumular contexto repetitivo en asistentes de IA genéricos."
solution: "Un ecosistema agéntico unificado de subagentes autónomos y skills declarativas, dotado de un protocolo de bloques delimitados para distribución limpia de directivas y compuertas estrictas de verificación en compilación de releases."
learnings:
  - "Distribución Idempotente de Reglas de IA: Diseño del protocolo de bloques delimitados para inyectar y sincronizar directivas de agentes en proyectos sin sobreescribir configuraciones locales ni generar residuos."
  - "Compuertas de Verificación en Automatización de Releases: Implementación de validaciones en vivo para compilar y comprobar la existencia de binarios y assets antes de publicar releases oficiales."
  - "IA Agéntica vs. Prompts Pasivos: Migrar hacia subagentes autónomos que razonan sobre objetivos globales y coordinan revisiones en paralelo es exponencialmente más resistente y escalable que la ingeniería de prompts tradicional."
  - "Optimización de Tokens de Sistema (ADR-004): Reducción verificada del 36.3% al compactar el adaptador universal y desacoplar lógica en scripts independientes."
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
    - icon: "Stethoscope"
      title: "Asistente de Instalación y Diagnóstico"
      text: "Un wizard interactivo configura skills y subagentes para Antigravity, Claude Code y OpenAI Codex, deja elegir tu motor de shell preferido, y un comando doctor verifica la salud del sistema."
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
        description: "Orquesta auditorías de salud, dependencias, depuración y generación de pruebas faltantes."
        tags: ["ami-scan-tech-debt", "ami-analyze-dependencies", "ami-audit-quality"]
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
    - title: "Instalación Universal y Selección de Motor"
      language: "bash"
      code: |
        npm install -g @anacatavc/amiga-ia
        amiga-ia-setup
    - title: "Salud del Sistema y Alertas Legacy"
      language: "bash"
      code: |
        amiga-ia-setup doctor
---

### Arquitectura Técnica y Orquestación

**Amiga IA** transforma la asistencia de programación con Inteligencia Artificial, superando las limitaciones de los prompts imperativos mediante una **malla de subagentes especializados y autónomos** (`ami-tech-lead`, `ami-repo-auditor`, `ami-push-assistant`, entre otros). Cada subagente asume un rol delimitado con herramientas específicas y compuertas de seguridad.

*   **Adaptador Universal & Multi-Motor:** Inyección de guardarraíles sin estado y compilación portátil de habilidades con compatibilidad nativa entre Antigravity (Gemini), Claude Code y OpenAI Codex.
*   **Protocolo de Bloques Delimitados:** Motor de sincronización idempotente que actualiza reglas globales en múltiples repositorios sin sobreescribir configuraciones locales.

### Optimización y Compuertas de Calidad

*   **Reducción de Consumo de Tokens:** El desacoplamiento de directivas en *skills declarativas bajo demanda* redujo la carga de contexto inicial en un **36.3%**.
*   **Protocolo Anti-Alucinación:** Automatización de flujos de release con compuertas en vivo que compilan, testean y verifican hashes de binarios antes de permitir la publicación en GitHub.

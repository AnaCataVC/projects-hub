---
title: "Cute Agents Desk"
icon: "/project-icons/cute-agents-desk-icon.png"
description: "Panel de control y despacho de escritorio para coordinar agentes de IA de línea de comandos (Claude Code y Antigravity CLI) en repositorios locales con aislamiento por Git Worktrees."
lastUpdated: 2026-09-24
githubUrl: "https://github.com/AnaCataVC/cute-agents-desk"
websiteUrl: "https://cute-agents-desk.ana-catalina.com"
isLiveApp: false
technologies: ["Electron 44", "Node.js", "node-pty", "Claude Code", "Antigravity CLI", "Git Worktrees", "ES Modules", "Pastel-Tech CSS"]
categories: ["IA", "Agentes", "Windows", "Desktop", "Developer Tools"]
type: "ai"
status: "En Desarrollo"
problem: "La fricción y falta de visibilidad al correr múltiples sesiones de agentes CLI (Claude Code, agy) en paralelo, el riesgo de que muten la misma rama de código simultáneamente y la ausencia de un canal estructurado de delegación entre un agente coordinador y sus workers."
solution: "Un panel de escritorio en Electron 44 sin paso de compilación que levanta coordinadores autónomos sobre terminales PTY reales, canaliza peticiones mediante un buzón estructurado worker-coordinador, aísla tareas de escritura en Git Worktrees independientes y monitorea tokens, estados y flujos en tiempo real con diseño Pastel-Tech."
learnings:
  - "Aislamiento de Hooks Multi-Motor: Normalización de eventos entre Claude Code (--settings en snake_case con denegación de tools de escritura) y Antigravity CLI (.agents/hooks.json en camelCase con lista blanca estricta de tools de lectura)."
  - "Canal de Retorno vía PTY: Implementación de un buzón donde el worker reporta eventos al coordinador directamente escribiendo en su terminal interactiva PTY (spawn-request, bloqueado, terminado), evitando llamadas de red innecesarias."
  - "Cero Build & Protocolo app:// en Electron: Carga de módulos ES nativos a través de un esquema app:// personalizado que preserva orígenes seguros y elimina la necesidad de bundlers o servidores HTTP locales."
  - "Aislamiento por Git Worktrees: Desacoplamiento de tareas de escritura en árboles de trabajo temporales fuera del directorio principal para prevenir condiciones de carrera y colisiones de estado en repositorios compartidos."
  - "Programador de Tareas como DAG con Cuotas Reales: Un scheduler propio limita la concurrencia global y por conversación, detecta ciclos de dependencia (DFS) y aborta en cascada, mientras consulta directamente `claude -p /usage` y `agy -p /usage` para telemetría en vivo del consumo real de suscripción (porcentaje semanal, ventanas de 5h, fecha de reinicio)."
  - "Visualización Radial de Flujos: Grafo SVG hub-and-spoke (`ui/boss-graph.js`) que ubica al coordinador en el centro y a los workers orbitando en un anillo, con arcos animados representando dependencias y transferencias de contexto, y estados fantasma para tareas encoladas o abortadas antes de que empiecen a correr."
websiteActionText: "Ver Página Web"
product:
  tagline: "Un escritorio local para tus agentes CLI"
  intro: "Despacho concurrente de Claude Code y Antigravity CLI con aislamiento atómico por Git Worktrees, delegación autónoma por buzón de disco y telemetría de estados en tiempo real, sin exponer puertos ni sockets a la red."
  features:
    - icon: "Bot"
      title: "Coordinador Autónomo CLI"
      text: "Un agente CLI real decide en cuántas sesiones paralelas se divide el trabajo y delega escribiendo en colas JSON vigiladas en disco. No hay lógica de servidor tomando decisiones por él."
    - icon: "GitBranch"
      title: "Aislamiento por Git Worktrees"
      text: "Cada tarea en modo escritura corre en su propio git worktree efímero con rama dedicada, manteniendo tu checkout principal 100% limpio."
    - icon: "Cpu"
      title: "Doble Motor Nativo"
      text: "Soporte integrado para claude (Claude Code) y agy (Antigravity CLI), con captura de ciclo de vida mediante hooks de proceso sin depender de escaneos frágiles de texto."
    - icon: "Users"
      title: "Gobernanza Multicuenta GitHub"
      text: "Mapeo estricto de repositorios locales vinculados a perfiles. Previene autoría cruzada o fugas entre proyectos personales y laborales en la misma máquina."
    - icon: "Gauge"
      title: "Control de Cuotas y Paralelismo"
      text: "El scheduler impone topes de concurrencia antes de cualquier spawn, con advertencias preventivas al 80% y corte automático al 100% de la cuota."
    - icon: "GitPullRequest"
      title: "Pipeline Seguro de PRs"
      text: "Al completar una tarea, el sistema hace commit y push con las credenciales de la cuenta activa y crea automáticamente un Pull Request en borrador."
  platforms: ["Windows 10", "Windows 11"]
  downloadUrl: "https://github.com/AnaCataVC/cute-agents-desk/releases/latest"
  downloadLabel: "Descargar para Windows"
---

### Despacho Local de Agentes y Orquestación Multi-Motor

**Cute Agents Desk** es una aplicación de escritorio para Windows diseñada para despachar, coordinar y supervisar agentes de Inteligencia Artificial que operan directamente sobre la terminal y los repositorios del sistema:

*   **Coordinadores Autónomos CLI:** Cada tarea levanta un agente coordinador real que evalúa la solicitud, divide el trabajo en subtareas paralelas y genera sesiones secundarias (workers) mediante un protocolo de buzón local (`spawn-request`), manteniendo control integral de la ejecución sin requerir servidores intermedios en la nube.
*   **Compatibilidad Multi-Motor (Claude Code & Antigravity):** Soporte nativo para motores `claude` y `agy`. Cada motor cuenta con su propio adaptador de hooks sin estado para telemetría precisa de herramientas invocadas, límites de tokens y detección de bloqueos en vivo.
*   **Terminales PTY Reales (`node-pty`):** Entorno saneado de pseudoterminal que ejecuta las CLIs en subprocesos aislados, garantizando la preservación de credenciales y previniendo interferencias con comandos `--resume`.

### Aislamiento de Espacios de Trabajo y Seguridad Concurrente

*   **Aislamiento en `git worktree`:** Las sesiones en modo escritura operan en árboles de trabajo de Git creados dinámicamente fuera del checkout principal. Esto evita que múltiples agentes modifiquen los mismos archivos concurrentemente, permitiendo revisiones y purgas seguras antes de consolidar cambios.
*   **Modo Lectura con Guardarraíles Estrictos:** Capa de intercepción que deniega tools de escritura en Claude (`Edit`, `Write`, `NotebookEdit`) y restringe a una lista blanca de tools seguras en Antigravity para inspección pasiva sin riesgo de mutación.
*   **Arquitectura Zero-Build & Pastel-Tech:** Interfaz reactiva modular en ES Modules puros cargados bajo el protocolo seguro `app://`, estilizada con tokens CSS de diseño Pastel-Tech y animaciones de estado en SVG accesibles con soporte para `prefers-reduced-motion`.

> **Nota**: El proyecto se encuentra actualmente en desarrollo activo con sus fases de despacho, buzón, hooks y worktrees completamente verificadas en vivo mediante suites de pruebas automatizadas.

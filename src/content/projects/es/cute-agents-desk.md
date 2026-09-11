---
title: "Cute Agents Desk"
icon: "/project-icons/cute-agents-desk-icon.png"
description: "Panel de control y despacho de escritorio para coordinar agentes de IA de línea de comandos (Claude Code y Antigravity CLI) en repositorios locales con aislamiento por Git Worktrees."
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
websiteActionText: "Ver Repositorio"
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

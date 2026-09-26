---
title: "Workspace Companion"
description: "Micro-herramienta flotante nativa para Windows (System Tray y Spotlight) para gestionar Git Worktrees, lanzadores desacoplados de IDEs y terminales, y alternancia de cuentas de GitHub CLI en 1 clic."
lastUpdated: 2026-09-24
icon: "/project-icons/workspace-companion-icon.png"
githubUrl: "https://github.com/AnaCataVC/workspace-companion"
websiteUrl: "https://workspace-companion.ana-catalina.com"
isLiveApp: false
technologies: ["Rust", "Tauri v2", "Svelte 5", "TypeScript", "Tailwind CSS", "Git Porcelain Protocol", "GitHub CLI"]
categories: ["Developer Tools", "Productividad", "Windows"]
type: "desktop"
status: "Activo"
problem: "Fricción constante al trabajar con múltiples ramas en paralelo con Git Worktrees, limpiar carpetas huérfanas sin perder cambios y cambiar de identidad en GitHub CLI entre cuentas personales y corporativas."
solution: "Una micro-aplicación de escritorio residente en el System Tray (<40 MB RAM) con ventana Spotlight que ofrece descubrimiento recursivo de Git worktrees, lanzadores independientes para IDEs y terminales, conmutación de cuentas GitHub CLI en 1 clic, limpieza masiva de ramas con guardas de seguridad, y resolución en 1 clic de worktrees sucios o bloqueados con notificaciones Toast."
learnings:
  - "Lanzadores Duales Independientes (ADR-0004): Resolución directa de ejecutables GUI (VS Code, Antigravity, Cursor, Windsurf) y consolas (Windows Terminal, Git Bash, AGY CLI) sin ventanas parpadeantes."
  - "Limpiador Seguro de Worktrees Huérfanos: Algoritmo de poda con pre-flight dirty checks, prevención de falsos positivos en el worktree raíz y notificaciones Toast nativas de Windows."
  - "Limpiador Masivo de Ramas Git (ADR-0006): Limpieza de ramas locales con selección múltiple que distingue guardas de seguridad omitidas de fallos reales de git, mostrando el estado de merge y remoto directamente en la vista de worktrees."
  - "Resolución de Worktrees Sucios y Bloqueados: Acciones de Stash en 1 clic y Descarte con doble confirmación, además de un flujo de Forzar Desbloqueo y Eliminar para worktrees bloqueados por procesos de agentes externos."
  - "Gestión de Git Worktrees en Árbol: Parser de protocolo Porcelain en hilos secundarios con dock a 1 clic para alternar ramas y conmutación de cuentas GitHub CLI."
  - "Interfaces Reactivas Ultraligeras con Svelte 5 (Runes) y Tauri v2 con anclaje dinámico a la barra de tareas y memoria inferior a 35 MB."
websiteActionText: "Ver Página"
product:
  tagline: "Git Worktrees al instante, multi-cuenta"
  intro: "El panel de bandeja del sistema ultraligero y sin parpadeos diseñado para desarrolladores en Windows. Cambia de rama, limpia worktrees huérfanos y alterna identidades de GitHub en milisegundos."
  features:
    - icon: "Terminal"
      title: "Cero Parpadeo de Consola"
      text: "Las ejecuciones de Git y GitHub CLI en segundo plano corren con flags Win32 de bajo nivel que evitan ventanas emergentes, para que nunca más veas una consola parpadear."
    - icon: "UserCog"
      title: "Cambio de Identidad GitHub en 1 Clic"
      text: "Alterna sin fricción entre perfiles personales y corporativos de GitHub CLI. La detección automática de contexto asocia la carpeta activa con la identidad correcta."
    - icon: "Trash2"
      title: "Limpiador Seguro de Worktrees Huérfanos"
      text: "Detecta worktrees cuya rama remota fue eliminada o mergeada. Incluye verificaciones obligatorias de estado sucio antes de actuar, para evitar pérdida accidental de datos."
    - icon: "Search"
      title: "Ventana Flotante Spotlight"
      text: "Vive silenciosamente en la bandeja del sistema de Windows consumiendo menos de 40 MB de RAM. Aparece junto a la barra de tareas al activarse y se oculta sola al perder el foco."
    - icon: "Code2"
      title: "Lanzamiento Multi-Editor en 1 Clic"
      text: "Detecta automáticamente IDEs instalados como VS Code, Cursor, Windsurf, Neovim y Windows Terminal. Abre cualquier worktree en tu editor favorito con un clic."
    - icon: "GitBranch"
      title: "Parsing del Protocolo Git Porcelain"
      text: "El parsing determinista de la salida legible por máquina de git worktree list maneja repos bare, estados bloqueados y HEADs desacoplados en cualquier instalación de Git localizada."
  platforms: ["Windows 11"]
  downloadUrl: "https://github.com/AnaCataVC/workspace-companion/releases"
  downloadLabel: "Descargar para Windows"
---

### Arquitectura Rust & Tauri v2 con Svelte 5

**Workspace Companion** combina la seguridad de memoria de **Rust** con la reactividad de **Svelte 5 (Runes)** sobre **Tauri v2**:

*   **Motor Git Porcelain en Rust:** Parser de salida estructurada (`git worktree list --porcelain`) que ejecuta comandos asíncronos en subprocesos con el flag `CREATE_NO_WINDOW`, eliminando cualquier parpadeo de consolas en Windows.
*   **Ventana Flotante Spotlight & System Tray:** Interfaz con atajo global anclada al área de notificación de la barra de tareas, con un consumo ligero inferior a **40 MB de RAM**.

### Lanzadores Duales y Poda Segura de Worktrees

*   **Lanzadores Desacoplados de IDE y Terminal (ADR-0004):** Lanzamiento en 1 clic de editores (VS Code, Antigravity IDE, Cursor) y consolas de desarrollo con resolución directa de binarios y conmutación ágil de identidades en GitHub CLI (`gh auth switch`).
*   **Poda de Huérfanos y Notificaciones Toast:** Detección de ramas remotas eliminadas con salvaguarda *dirty check*, prevención estricta de falsos positivos en la raíz del repositorio y alertas Toast nativas del sistema.

### Limpiador Masivo de Ramas y Resolución de Conflictos en Worktrees

*   **Limpiador Masivo de Ramas (ADR-0006):** Limpieza de ramas locales con selección múltiple que distingue guardas de seguridad omitidas de fallos reales de git, con estado de merge y remoto expuesto directamente en la lista de worktrees.
*   **Resolución de Worktrees Sucios y Bloqueados:** Acciones de Stash en 1 clic y Descarte con doble confirmación en el selector de ramas, más un flujo de Forzar Desbloqueo y Eliminar en el borrado masivo para worktrees bloqueados por procesos de agentes externos.

> **Nota**: Puedes explorar el código fuente, consultar las Decisiones de Arquitectura (ADRs) y compilar la aplicación para Windows desde el repositorio en GitHub.

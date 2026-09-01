---
title: "Workspace Companion"
description: "Micro-herramienta flotante nativa para Windows (System Tray y Spotlight) para gestionar Git Worktrees en árbol jerárquico, escaneo recursivo y alternancia de cuentas de GitHub CLI en 1 clic."
descriptionEn: "Ultra-lightweight native Windows system tray and Spotlight floating utility to manage Git Worktrees with hierarchical trees, recursive scanning, and 1-click GitHub CLI switching."
icon: "/project-icons/workspace-companion-icon.png"
githubUrl: "https://github.com/AnaCataVC/workspace-companion"
websiteUrl: "https://workspace-companion.ana-catalina.com"
isLiveApp: false
technologies: ["Rust", "Tauri v2", "Svelte 5", "TypeScript", "Tailwind CSS", "Git Porcelain Protocol"]
categories: ["Desktop", "Developer Tools", "Productividad", "Windows", "Rust"]
type: "desktop"
status: "Activo"
problem: "Fricción constante al trabajar con múltiples ramas en paralelo con Git Worktrees, limpiar carpetas huérfanas sin perder cambios y cambiar de identidad en GitHub CLI entre cuentas personales y corporativas."
solution: "Una micro-aplicación de escritorio residente en la bandeja del sistema (<40 MB RAM) con ventana flotante estilo Spotlight, gestión híbrida de worktrees en árbol con dock a 1 clic, escáner recursivo de repositorios y eliminación segura por lotes con comprobación de estado sucio (dirty check)."
learnings:
  - "Gestión híbrida de Git Worktrees mediante vista de árbol jerárquico, filtros multifacéticos y dock a 1 clic para conmutación fluida entre entornos."
  - "Eliminación segura por lotes de worktrees huérfanos con salvaguardas pre-flight estrictas (dirty check) para evitar pérdida accidental de código sin confirmar."
  - "Escaneo recursivo de repositorios locales y persistencia dinámica de configuración sin parpadeos de consola Win32 (CREATE_NO_WINDOW en Rust)."
  - "Construcción de interfaces reactivas ultraligeras con Svelte 5 (Runes) y Tauri v2 con posicionamiento automático en la barra de tareas."
websiteActionText: "Ver Página"
---

### Arquitectura Rust & Tauri v2 con Svelte 5

**Workspace Companion** combina la seguridad de memoria de **Rust** con la velocidad reactiva de **Svelte 5 (Runes)** dentro del framework **Tauri v2**:

*   **Motor Git Porcelain en Rust:** Parser de salida estructurada (`git worktree list --porcelain`) que ejecuta comandos asíncronos en subprocesos con el flag `CREATE_NO_WINDOW`, evitando cualquier parpadeo de consolas cmd/PowerShell en Windows.
*   **Gestor Flotante Spotlight & System Tray:** Interfaz con atajo global que posiciona la ventana automáticamente sobre el área de notificación de la barra de tareas, con un consumo de memoria inferior a **35 MB de RAM**.

### Salvaguardas Pre-Flight y Conmutación de Identidad

*   **Dirty Check & Eliminación Segura:** Algoritmo de seguridad que valida el estado del árbol de trabajo (`git status --porcelain`) antes de permitir la poda o borrado de worktrees, impidiendo la pérdida accidental de código sin commitear.
*   **Conmutador de Cuentas GitHub CLI:** Integración con `gh auth switch` para alternar perfiles personales y corporativos al instante con detección automática según el directorio activo.

> **Nota**: Puedes explorar el código fuente, consultar las Decisiones de Arquitectura (ADRs) y compilar la aplicación para Windows desde el repositorio en GitHub.

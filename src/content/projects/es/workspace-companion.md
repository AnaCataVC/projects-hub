---
title: "Workspace Companion"
description: "Micro-herramienta flotante nativa para Windows (System Tray y Spotlight) para gestionar Git Worktrees, lanzadores desacoplados de IDEs y terminales, y alternancia de cuentas de GitHub CLI en 1 clic."
descriptionEn: "Ultra-lightweight native Windows system tray and Spotlight utility to manage Git Worktrees, decoupled IDE/terminal launchers, and 1-click GitHub CLI switching."
icon: "/project-icons/workspace-companion-icon.png"
githubUrl: "https://github.com/AnaCataVC/workspace-companion"
websiteUrl: "https://workspace-companion.ana-catalina.com"
isLiveApp: false
technologies: ["Rust", "Tauri v2", "Svelte 5", "TypeScript", "Tailwind CSS", "Git Porcelain Protocol"]
categories: ["Desktop", "Developer Tools", "Productividad", "Windows"]
type: "desktop"
status: "Activo"
problem: "Fricción constante al trabajar con múltiples ramas en paralelo con Git Worktrees, limpiar carpetas huérfanas sin perder cambios y cambiar de identidad en GitHub CLI entre cuentas personales y corporativas."
solution: "Una micro-aplicación de escritorio residente en el System Tray (<35 MB RAM) con ventana Spotlight que ofrece gestión de worktrees en árbol, lanzadores independientes para IDEs y terminales, escáner recursivo de repositorios y poda segura de ramas huérfanas con notificaciones Toast."
learnings:
  - "Lanzadores Duales Independientes (ADR-0004): Resolución directa de ejecutables GUI (VS Code, Antigravity, Cursor, Windsurf) y consolas (Windows Terminal, Git Bash, AGY CLI) sin ventanas parpadeantes."
  - "Limpiador Seguro de Worktrees Huérfanos: Algoritmo de poda con pre-flight dirty checks, prevención de falsos positivos en el worktree raíz y notificaciones Toast nativas de Windows."
  - "Gestión de Git Worktrees en Árbol: Parser de protocolo Porcelain en hilos secundarios con dock a 1 clic para alternar ramas y conmutación de cuentas GitHub CLI."
  - "Interfaces Reactivas Ultraligeras con Svelte 5 (Runes) y Tauri v2 con anclaje dinámico a la barra de tareas y memoria inferior a 35 MB."
websiteActionText: "Ver Página"
---

### Arquitectura Rust & Tauri v2 con Svelte 5

**Workspace Companion** combina la seguridad de memoria de **Rust** con la reactividad de **Svelte 5 (Runes)** sobre **Tauri v2**:

*   **Motor Git Porcelain en Rust:** Parser de salida estructurada (`git worktree list --porcelain`) que ejecuta comandos asíncronos en subprocesos con el flag `CREATE_NO_WINDOW`, eliminando cualquier parpadeo de consolas en Windows.
*   **Ventana Flotante Spotlight & System Tray:** Interfaz con atajo global anclada al área de notificación de la barra de tareas, con un consumo ligero inferior a **35 MB de RAM**.

### Lanzadores Duales y Poda Segura de Worktrees

*   **Lanzadores Desacoplados de IDE y Terminal (ADR-0004):** Lanzamiento en 1 clic de editores (VS Code, Antigravity IDE, Cursor) y consolas de desarrollo con resolución directa de binarios y conmutación ágil de identidades en GitHub CLI (`gh auth switch`).
*   **Poda de Huérfanos y Notificaciones Toast:** Detección de ramas remotas eliminadas con salvaguarda *dirty check*, prevención estricta de falsos positivos en la raíz del repositorio y alertas Toast nativas del sistema.

> **Nota**: Puedes explorar el código fuente, consultar las Decisiones de Arquitectura (ADRs) y compilar la aplicación para Windows desde el repositorio en GitHub.

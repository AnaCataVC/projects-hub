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

> **Nota**: Puedes explorar el código fuente, consultar las Decisiones de Arquitectura (ADRs) y compilar la aplicación para Windows desde el repositorio en GitHub.

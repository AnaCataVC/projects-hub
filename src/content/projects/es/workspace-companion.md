---
title: "Workspace Companion"
description: "Micro-herramienta flotante nativa para Windows (System Tray y Spotlight) para gestionar Git Worktrees en paralelo y alternar cuentas de GitHub CLI en 1 clic."
descriptionEn: "Ultra-lightweight native Windows system tray and Spotlight floating utility to manage parallel Git Worktrees and switch GitHub CLI profiles in 1 click."
icon: "/project-icons/workspace-companion-icon.png"
githubUrl: "https://github.com/AnaCataVC/workspace-companion"
websiteUrl: "https://workspace-companion.ana-catalina.com"
isLiveApp: false
technologies: ["Rust", "Tauri v2", "Svelte 5", "TypeScript", "Tailwind CSS", "Git Porcelain Protocol"]
categories: ["Desktop", "Developer Tools", "Productividad", "Windows", "Rust"]
status: "Activo"
problem: "Fricción constante al trabajar con múltiples ramas en paralelo con Git Worktrees, limpiar carpetas huérfanas sin perder cambios y cambiar de identidad en GitHub CLI entre cuentas personales y corporativas."
solution: "Una micro-aplicación de escritorio residente en la bandeja del sistema (<40 MB RAM) con ventana flotante estilo Spotlight, dashboard de worktrees activos, detector/limpiador seguro con comprobación de estado sucio (dirty check) y conmutador instantáneo de perfiles de GitHub CLI sin parpadeos de consola Win32."
learnings:
  - "Eliminación de parpadeos de terminales negras en Windows al invocar CLI en segundo plano mediante flags Win32 (CREATE_NO_WINDOW = 0x08000000) en Rust."
  - "Procesamiento seguro del protocolo Git Porcelain (git worktree list --porcelain) manejando repositorios bare, estados locked y detached heads."
  - "Implementación de salvaguardas pre-flight contra pérdida de datos antes de permitir la eliminación de carpetas de worktree huérfanas."
  - "Construcción de interfaces reactivas ultraligeras con Svelte 5 (Runes) y Tauri v2 con posicionamiento automático en la barra de tareas."
websiteActionText: "Ver Página"
---

> **Nota**: Puedes explorar el código fuente, consultar las Decisiones de Arquitectura (ADRs) y compilar la aplicación para Windows desde el repositorio en GitHub.

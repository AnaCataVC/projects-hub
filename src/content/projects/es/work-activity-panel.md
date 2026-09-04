---
title: "Work Activity Panel"
icon: "/project-icons/work-activity-panel-icon.png"
description: "Aplicación de escritorio nativa para Windows 11 que optimiza la jornada laboral: auto-inicia herramientas, reconcilia Google Calendar en tiempo real, respalda en Google Drive y actualiza la app in-place."
descriptionEn: "Native Windows 11 desktop application designed to streamline daily work routines: auto-launches work tools, reconciles Google Calendar in real-time, backs up to Google Drive, and updates in-place."
githubUrl: "https://github.com/AnaCataVC/work-activity-panel"
websiteUrl: "https://work-activity-panel.ana-catalina.com"
isLiveApp: false
technologies: ["WinUI 3", ".NET 9", "C#", "Fluent Design", "Windows App SDK", "Google Drive Sync", "iCalendar RFC 5545", "GitHub Releases API"]
categories: ["Desktop", "Productividad", "Windows", "Automatización"]
type: "desktop"
status: "Activo"
problem: "Fricción diaria al abrir herramientas de trabajo manualmente, desincronización de agendas, pérdida de respaldos locales y falta de visibilidad sobre archivos de contexto de IA no versionados en proyectos."
solution: "Una aplicación nativa en WinUI 3 y .NET 9 con fondos Mica que automatiza Slack y Granola, reconcilia eventos mutados de Google Calendar con cabeceras anti-caché, respalda en Google Drive con Fast-Path Hash Cache diferido y se auto-actualiza vía GitHub Releases."
learnings:
  - "Sincronización Acelerada con Google Drive: Motor de respaldo con Fast-Path Hash Cache diferido y escaneo por lotes de contextos de IA sin versionar con filtro de secretos."
  - "Auto-Actualizador In-App: Detección y descarga en segundo plano de releases oficiales vía GitHub Releases API con progreso en vivo y ejecución Inno Setup."
  - "Motor iCalendar RFC 5545 Resiliente: Parser de deserialización con reconciliación in-place de eventos mutados, normalización de zonas horarias y extracción de enlaces de reunión."
  - "Arquitectura Nativa WinUI 3 (.NET 9): Patrón MVVM con CommunityToolkit, fondos Mica nativos y mitigación de fallos de arranque mediante volcados de diagnóstico."
websiteActionText: "Visitar Sitio"
---

### Arquitectura WinUI 3 (.NET 9) y Automatización de Jornada

**Work Activity Panel** es una aplicación de escritorio nativa diseñada para Windows 11 con **Windows App SDK** y **WinUI 3**:

*   **Patrón MVVM & Fluent Design:** Arquitectura desacoplada mediante `CommunityToolkit.Mvvm`, fondos translúcidos **Mica** nativos y automatización horaria para abrir Slack e iniciar Granola 5 minutos antes de cada reunión.
*   **Auto-Actualizador In-App Integrado:** Sistema de actualización que consulta releases de GitHub en segundo plano, descarga el instalador con barra de progreso reactiva y aplica la actualización *in-place* sin pasos manuales.

### Motores Especializados de Calendario y Respaldo

*   **Reconciliación iCalendar RFC 5545:** Motor propio con cabeceras anti-caché que reconcilia mutaciones de eventos en tiempo real, normaliza zonas horarias y extrae enlaces de videollamadas (Meet, Zoom, Teams).
*   **Google Drive Sync & Contextos IA:** Respaldo incremental acelerado mediante *Fast-Path Hash Cache* diferido (SHA-256 bajo demanda) y escáner por lotes de directivas IA (`CLAUDE.md`, `.agent`) con protección contra fuga de credenciales.

> **Nota**: Puedes descargar el instalador `.exe` precompilado desde la página de Releases en GitHub o compilar la solución localmente con .NET 9 SDK.

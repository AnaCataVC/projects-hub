---
title: "Work Activity Panel"
icon: "/project-icons/work-activity-panel-icon.png"
description: "Aplicación de escritorio nativa para Windows 11 que optimiza la jornada laboral: auto-inicia herramientas de trabajo, sincroniza Google Calendar, respalda en Google Drive y gestiona contextos de IA."
descriptionEn: "Native Windows 11 desktop application designed to streamline daily work routines: auto-launches work tools, syncs Google Calendar, backs up to Google Drive, and discovers AI context."
githubUrl: "https://github.com/AnaCataVC/work-activity-panel"
websiteUrl: "https://work-activity-panel.ana-catalina.com"
isLiveApp: false
technologies: ["WinUI 3", ".NET 9", "C#", "Fluent Design", "Windows App SDK", "Google Drive Sync", "iCalendar RFC 5545"]
categories: ["Desktop", "Productividad", "Windows", "Automatización"]
type: "desktop"
status: "Activo"
problem: "Fricción diaria al abrir herramientas de trabajo manualmente, desincronización de agendas, pérdida de respaldos locales y falta de visibilidad sobre archivos de contexto de IA no versionados en proyectos."
solution: "Una aplicación de escritorio nativa en WinUI 3 y .NET 9 con diseño Fluent y fondos Mica que automatiza Slack y Granola antes de reuniones, sincroniza Google Calendar, respalda en Google Drive con control de concurrencia en segundo plano y descubre contextos de IA sin versionar."
learnings:
  - "Desarrollo de aplicaciones de escritorio nativas en WinUI 3 (.NET 9) con arquitectura MVVM, fondos Mica y diagnósticos tempranos de inicio."
  - "Arquitectura de sincronización y respaldo en Google Drive en hilos secundarios con control de concurrencia (LockService) sin congelar la interfaz de usuario."
  - "Diseño de un motor de descubrimiento de contexto de IA (CLAUDE.md, carpetas .agent y referencias) no versionado con verificación Git por lotes y escaneo de secretos."
  - "Diseño de un motor de parsing RFC 5545 para iCalendar con normalización de zonas horarias y extracción de enlaces de videollamadas."
websiteActionText: "Visitar Sitio"
---

> **Nota**: Puedes descargar el instalador `.exe` precompilado desde la página de Releases en GitHub o compilar la solución localmente con .NET 9 SDK.

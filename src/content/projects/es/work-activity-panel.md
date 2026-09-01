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

### Arquitectura Nativa de Escritorio (.NET 9 & WinUI 3)

**Work Activity Panel** es una aplicación de escritorio de alto rendimiento diseñada para la plataforma moderna de Windows 11 utilizando **Windows App SDK** y **WinUI 3**:

*   **Patrón MVVM & Fluent Design:** Arquitectura desacoplada mediante `CommunityToolkit.Mvvm`, integrando efectos visuales nativos **Mica** y controles modernos sin impactar los ciclos de renderizado de la GPU.
*   **Diagnóstico Temprano de Inicio:** Manejadores globales de excepciones en arranque (`AppDomain.UnhandledException`, `TaskScheduler.UnobservedTaskException`) con volcado automático a disco para garantizar estabilidad ante fallos de hardware o red.

### Motores Especializados y Tareas en Segundo Plano

*   **Parser iCalendar RFC 5545:** Motor propio de deserialización de calendarios que procesa eventos recurrentes, despliega líneas multipartes (*line unfolding*), normaliza husos horarios UTC/Locales y extrae automáticamente enlaces de videollamadas (Google Meet, Zoom, Teams).
*   **Discovery Engine de Contextos IA:** Escáner por lotes en segundo plano que detecta archivos de configuración de IA (`CLAUDE.md`, `.agent`, directivas) en repositorios locales y valida su estado en Git para prevenir fuga involuntaria de secretos.
*   **Sincronización Asíncrona con Google Drive:** Servicio de respaldo en hilos secundarios con control de exclusión mutua (`LockService`), evitando cuellos de botella en el hilo principal de la UI.

> **Nota**: Puedes descargar el instalador `.exe` precompilado desde la página de Releases en GitHub o compilar la solución localmente con .NET 9 SDK.

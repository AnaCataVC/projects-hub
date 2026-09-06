---
title: "Work Activity Panel"
icon: "/project-icons/work-activity-panel-icon.png"
description: "Aplicación de escritorio nativa para Windows 11 que optimiza la jornada laboral: auto-inicia herramientas, automatiza Granola previo a reuniones, reconcilia Google Calendar, conmuta cuentas de GitHub CLI y respalda en Google Drive."
githubUrl: "https://github.com/AnaCataVC/work-activity-panel"
websiteUrl: "https://work-activity-panel.ana-catalina.com"
isLiveApp: false
technologies: ["WinUI 3", ".NET 9", "C#", "Fluent Design", "Windows App SDK", "Google Drive Sync", "iCalendar RFC 5545", "GitHub CLI Integration", "GitHub Releases API"]
categories: ["Productividad", "Windows", "Automatización"]
type: "desktop"
status: "Activo"
problem: "Fricción diaria al abrir herramientas manualmente, desincronización de agendas, falta de preparación previa para reuniones, pérdida de respaldos de carpetas de trabajo y tedio al cambiar credenciales de GitHub CLI entre cuentas personales y laborales."
solution: "Una aplicación nativa en WinUI 3 y .NET 9 con fondos Mica que abre Slack al iniciar la jornada laboral, ejecuta Granola automáticamente 5 minutos antes de cada reunión agendada, reconcilia eventos de Google Calendar con cabeceras anti-caché, ofrece conmutación de cuentas GitHub CLI en 1 clic y respalda incrementalmente en Google Drive con hashing SHA-256 diferido."
learnings:
  - "Conmutación de Perfiles GitHub CLI: Integración directa con 'gh auth switch' y deserialización YAML de 'hosts.yml' para alternar instantáneamente identidades personales y de trabajo en la terminal."
  - "Motor iCalendar RFC 5545 Resiliente: Parser de deserialización con reconciliación in-place de eventos mutados, normalización de zonas horarias y extracción de enlaces de videollamadas (Meet, Zoom, Teams, Webex)."
  - "Sincronización Incremental con Google Drive: Puente ligero sobre Google Apps Script Web App con cálculo SHA-256 en streaming y filtrado por listas blancas/negras sin requerir proyectos pesados en GCP."
  - "Auto-Actualizador In-App & Desacoplamiento v2.0: Descarga en segundo plano vía GitHub Releases API con progreso en vivo, ejecución Inno Setup in-place y arquitectura MVVM limpia en WinUI 3 (.NET 9)."
websiteActionText: "Visitar Sitio"
---

### Arquitectura WinUI 3 (.NET 9) y Automatización de Jornada

**Work Activity Panel** es una aplicación de escritorio nativa diseñada para Windows 11 con **Windows App SDK** y **WinUI 3**:

*   **Patrón MVVM & Fluent Design:** Arquitectura desacoplada mediante `CommunityToolkit.Mvvm`, fondos translúcidos **Mica** nativos y automatización horaria para abrir Slack al iniciar el día y ejecutar Granola 5 minutos antes de cada reunión agendada.
*   **Conmutador Rápido de Cuentas GitHub CLI:** Detección de cuentas vinculadas en `hosts.yml` y alternancia en 1 clic entre perfiles personales y corporativos mediante `gh auth switch`.
*   **Auto-Actualizador In-App Integrado:** Sistema de actualización que consulta releases de GitHub en segundo plano, descarga el instalador con barra de progreso reactiva y aplica la actualización *in-place* sin pasos manuales.

### Motores Especializados de Calendario y Respaldo

*   **Reconciliación iCalendar RFC 5545:** Motor propio con cabeceras anti-caché que reconcilia mutaciones de eventos en tiempo real, normaliza zonas horarias y extrae enlaces directos de videollamadas (Meet, Zoom, Teams, Webex).
*   **Google Drive Incremental Sync:** Respaldo ágil de directorios de trabajo configurados hacia Google Drive mediante un puente ligero en Google Apps Script, con detección de cambios por hash SHA-256 y reglas de exclusión personalizables.

> **Nota**: Puedes descargar el instalador `.exe` precompilado desde la página de Releases en GitHub o compilar la solución localmente con .NET 9 SDK.

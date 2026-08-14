---
title: "Work Activity Panel"
icon: "/project-icons/work-activity-panel-icon.png"
description: "Aplicación de escritorio nativa para Windows 11 que optimiza tu jornada laboral: inicia Slack al comenzar el día, sincroniza Google Calendar y abre Granola 5 minutos antes de cada reunión."
descriptionEn: "Native Windows 11 desktop application designed to streamline daily work routines: auto-launches Slack, syncs Google Calendar, and opens Granola 5 minutes before meetings."
githubUrl: "https://github.com/AnaCataVC/work-activity-panel"
websiteUrl: "https://work-activity-panel.ana-catalina.com"
isLiveApp: false
technologies: ["WinUI 3", ".NET 9", "C#", "Fluent Design", "Windows App SDK", "iCalendar RFC 5545"]
categories: ["Desktop", "Productividad", "Windows", "Automatización"]
status: "Activo"
problem: "Fricción y descuidos diarios al tener que recordar abrir las herramientas de comunicación (Slack), consultar la agenda del día y preparar notas en Granola minutos antes de reuniones importantes."
solution: "Una aplicación de escritorio nativa en WinUI 3 y .NET 9 con diseño Fluent y fondos Mica que automatiza la apertura de Slack al inicio de la jornada laboral, se sincroniza con Google Calendar vía iCal privado y abre Granola 5 minutos antes de cualquier reunión."
learnings:
  - "Desarrollo de aplicaciones de escritorio nativas en WinUI 3 (Windows App SDK 2.4) con arquitectura MVVM y fondos Mica integrados en Windows 11."
  - "Diseño de un motor de parsing RFC 5545 para iCalendar con soporte para despliegue de líneas, normalización de zonas horarias y extracción de enlaces de videollamadas."
  - "Arquitectura de temporizadores de alta precisión y bajo consumo sin sondeo continuo (polling) en C# y .NET 9."
  - "Integración con la bandeja del sistema (System Tray) y generación de instaladores autónomos con Inno Setup 6."
websiteActionText: "Visitar Sitio"
---

> **Nota**: Puedes descargar el instalador `.exe` precompilado desde la página de Releases en GitHub o compilar la solución localmente con .NET 9 SDK.

---
title: "Smart Calendar Manager"
icon: "/project-icons/smart-calendar-manager-icon.png"
description: "Aplicación de escritorio nativa para Windows 11 (WinUI 3 / .NET 9) que une agendas laboral y personal vía feeds iCal secretos, bloquea disponibilidad sin OAuth y automatiza la preparación de videollamadas."
githubUrl: "https://github.com/AnaCataVC/smart-calendar-manager"
isLiveApp: false
technologies: ["C# 13", ".NET 9", "WinUI 3", "Windows App SDK", "CommunityToolkit.Mvvm", "RFC 5545 iCalendar", "Google Apps Script", "xUnit"]
categories: ["Windows", "Productividad", "Herramientas de Desarrollador", "Automatización"]
type: "desktop"
status: "Activo"
problem: "Unificar la agenda personal y la laboral cuando el Workspace corporativo bloquea apps OAuth de terceros, sin exponer eventos personales al calendario del trabajo y sin perder tiempo preparando manualmente cada videollamada."
solution: "Una app de bandeja del sistema que lee feeds iCal secretos (RFC 5545) laborales y personales sin OAuth, genera un Google Apps Script que corre en la cuenta laboral para bloquear la disponibilidad personal con total privacidad ('🔒 Ocupada'), detecta reuniones con enlace de videollamada para alertar y abrir herramientas de notas minutos antes, y permite programar lanzamientos de apps o URIs por día y hora sin sintaxis cron."
learnings:
  - "Bloqueo de Disponibilidad vía Apps Script de Primera Parte: Generación de un script que corre en la cuenta laboral con los feeds personales embebidos, sorteando restricciones OAuth del Workspace sin exponer el detalle de los eventos."
  - "Parser iCalendar RFC 5545 sin Dependencias: Resolución de recurrencias (RRULE), plegado de líneas y zonas horarias (IANA vs Windows TimeZoneInfo) escrita desde cero."
  - "Tolerancia a Fallos por Feed: La agenda combina múltiples feeds iCal y un feed caído nunca oculta los demás."
  - "Lanzador Cron Visual con Máscaras de Bits: Selección de días de la semana mediante `DayOfWeekFlags` y evaluación por `System.Threading.Timer` con 0% de CPU en reposo."
websiteUrl: "https://smart-calendar-manager.ana-catalina.com"
websiteActionText: "Ver Página"
---

### Unificación de Agendas sin OAuth

**Smart Calendar Manager** lee cualquier calendario mediante **feeds iCal secretos (RFC 5545)** — uno laboral y cualquier cantidad de personales — sin necesidad de flujos OAuth, combinándolos en una agenda diaria con detección de videollamadas (Google Meet, Zoom, Microsoft Teams, Webex).

*   **Bloqueo de Privacidad vía Apps Script:** Un asistente genera un Google Apps Script con los feeds personales embebidos que corre directamente en la cuenta laboral, creando bloqueos de disponibilidad ("🔒 Ocupada") sin exponer el contenido de los eventos personales.
*   **Motor iCalendar Propio:** Parser RFC 5545 sin dependencias externas con soporte de recurrencias (RRULE), plegado de líneas y resolución de zonas horarias IANA/Windows.

### Automatización Pre-Reunión y Lanzador Programado

*   **Preparación Automática de Videollamadas:** Alertas configurables antes de reuniones con enlace de video que abren herramientas como Granola junto con el enlace de la reunión, con un banner descartable que recuerda las reuniones ignoradas entre sesiones.
*   **Lanzador Visual tipo Cron:** Selección de días con máscaras de bits (`DayOfWeekFlags`) y evaluación por `System.Threading.Timer`, soportando ejecutables, esquemas de URI personalizados (`slack://`, `spotify://`) y URLs.

> **Nota**: El código fuente completo, la configuración del Apps Script y las instrucciones de compilación están disponibles en el repositorio de GitHub.

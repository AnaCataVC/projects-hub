---
title: "Smart Calendar Manager"
icon: "/project-icons/smart-calendar-manager-icon.png"
description: "Aplicación de escritorio nativa para Windows 11 (WinUI 3 / .NET 9) que une agendas laboral y personal vía feeds iCal secretos, bloquea disponibilidad sin OAuth y automatiza la preparación de videollamadas."
lastUpdated: 2026-09-24
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
product:
  tagline: "Une tu agenda laboral y personal, sin OAuth"
  intro: "Lee cualquier calendario mediante feeds iCal secretos (RFC 5545), bloquea tu disponibilidad personal en el calendario laboral con total privacidad vía un Apps Script generado, y automatiza la preparación para videollamadas."
  features:
    - icon: "CalendarCheck2"
      title: "Varios Feeds iCal, Sin OAuth"
      text: "Agrega un feed iCal secreto laboral (RFC 5545) y los personales que quieras. La agenda las combina por hora y etiqueta cada evento; si un feed falla, los demás se siguen mostrando."
    - icon: "Lock"
      title: "Bloqueo Privado de Disponibilidad (Apps Script)"
      text: "Un asistente genera un Google Apps Script con tus feeds personales incluidos. Corre en la cuenta laboral y crea bloqueos privados \"Ocupada\" — funciona aunque el Workspace bloquee apps OAuth de terceros. Los eventos recurrentes no se expanden."
    - icon: "Video"
      title: "Automatización Pre-Reunión de Precisión"
      text: "Alertas antes de reuniones elegibles — 5 minutos por defecto, configurable de 0 a 60 — que abren Granola, con alcance solo laboral o todos los feeds. Por defecto solo aplican reuniones con enlace de videollamada."
    - icon: "AlarmClock"
      title: "Lanzador Visual Tipo Cron"
      text: "Selectores de día en píldoras, un selector de hora, y cualquier destino — ejecutables, esquemas URI personalizados (slack://, spotify://) o URLs. Cero consumo de CPU en reposo."
    - icon: "MonitorCog"
      title: "Fluent Design y Bandeja del Sistema"
      text: "Fondo Mica nativo de Windows 11, tarjetas Fluent modernas, y minimización a la bandeja con acciones de menú contextual."
    - icon: "Repeat"
      title: "Parser RFC 5545 Sin Dependencias"
      text: "Un motor de calendario escrito desde cero: plegado de líneas, resolución de recurrencia (RRULE), y manejo de zonas horarias IANA/Windows, más detección de enlaces de reunión para Meet, Zoom, Teams y Webex."
  platforms: ["Windows 11"]
  downloadUrl: "https://github.com/AnaCataVC/smart-calendar-manager/releases"
  downloadLabel: "Descargar para Windows"
---

### Unificación de Agendas sin OAuth

**Smart Calendar Manager** lee cualquier calendario mediante **feeds iCal secretos (RFC 5545)** — uno laboral y cualquier cantidad de personales — sin necesidad de flujos OAuth, combinándolos en una agenda diaria con detección de videollamadas (Google Meet, Zoom, Microsoft Teams, Webex).

*   **Bloqueo de Privacidad vía Apps Script:** Un asistente genera un Google Apps Script con los feeds personales embebidos que corre directamente en la cuenta laboral, creando bloqueos de disponibilidad ("🔒 Ocupada") sin exponer el contenido de los eventos personales.
*   **Motor iCalendar Propio:** Parser RFC 5545 sin dependencias externas con soporte de recurrencias (RRULE), plegado de líneas y resolución de zonas horarias IANA/Windows.

### Automatización Pre-Reunión y Lanzador Programado

*   **Preparación Automática de Videollamadas:** Alertas configurables antes de reuniones con enlace de video que abren herramientas como Granola junto con el enlace de la reunión, con un banner descartable que recuerda las reuniones ignoradas entre sesiones.
*   **Lanzador Visual tipo Cron:** Selección de días con máscaras de bits (`DayOfWeekFlags`) y evaluación por `System.Threading.Timer`, soportando ejecutables, esquemas de URI personalizados (`slack://`, `spotify://`) y URLs.

> **Nota**: El código fuente completo, la configuración del Apps Script y las instrucciones de compilación están disponibles en el repositorio de GitHub.

---
title: "Meds Reminder"
description: "Aplicación móvil nativa para Android (100% offline-first) para la adherencia médica y recordatorios de dosis multi-perfil con alarmas de alta precisión."
lastUpdated: 2026-11-09
icon: "/project-icons/meds-reminder-icon.png"
githubUrl: "https://github.com/AnaCataVC/meds-reminder"
websiteUrl: "https://meds-reminder.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Compose", "Material Design 3", "Room Database", "Koin", "AlarmManager"]
categories: ["Mobile", "Salud", "Android", "Productividad"]
type: "mobile"
status: "Activo"
problem: "El olvido recurrente de tomas de medicamentos en grupos familiares o multi-perfil, sumado a la falta de fiabilidad de las alarmas en Android debido a modos agresivos de ahorro de batería (Doze mode)."
solution: "Una aplicación local-first sin nube con soporte multi-perfil y catálogo maestro de fármacos, dotada de alarmas exactas que rompen el modo Doze, popup sobre pantalla bloqueada (`AlarmActivity`) con confirmación granular por medicamento, avisos previos silenciosos con toma rápida, suspensión temporal de alarmas por persona, posposición acumulativa configurable, diferenciación clara entre dosis tomadas y omitidas con reactivación inmediata, y un motor de alarmas completamente determinista con Room como fuente única de verdad."
learnings:
  - "Resolución Atómica de Tomas Parciales en Grupos de Medicación (Room Schema v6): Modelado de estado efímero por medicamento en relaciones cruzadas (medication_group_cross_ref) permitiendo confirmaciones o descartes granulares dentro de la misma alarma de pantalla completa sin desincronizar el programador del sistema ni los widgets de inicio."
  - "Diferenciación Determinista de Omisión vs. Toma y Reactivación (Room Auto-Migration v5): Separación formal de estados de dosis mediante last_skipped_date y reactivación instantánea de horarios omitidos, preservando la coherencia del tratamiento sin alterar el cronograma del día."
  - "Gestión del Ciclo de Vida de Tomas y Posposición Acumulativa: Cálculo de repeticiones (snooze) sobre la hora real de la alarma con intervalo acumulativo configurable, cancelación reactiva de snooze activo y sincronización en Room DB al registrar tomas anticipadas."
  - "Suspensión Temporal de Alarmas por Perfil: Implementación de mecanismos de pausa selectiva de notificaciones y alarmas sin alterar los horarios programados del tratamiento."
  - "Garantía de precisión milimétrica en Android 14/15/16 utilizando AlarmManager.setAlarmClock() y USE_EXACT_ALARM bajo directrices de salud."
  - "Arquitectura de Widgets Desacoplada: Aislamiento estricto de las actividades de configuración de widgets de inicio y serialización síncrona en Room DB para garantizar previews rasterizados sin bloqueos de RemoteViews."
  - "Superación de la inmutabilidad de sonido en canales de notificación de Android 8.0+ mediante la generación dinámica de canales por hash de URI de tono personalizado."
websiteActionText: "Ver Página"
product:
  tagline: "Tus medicamentos a tiempo y sin olvidos"
  intro: "Organiza tus tomas y las de tu familia con avisos discretos, alarmas que suenan sobre la pantalla bloqueada y todos tus datos privados en tu teléfono."
  features:
    - icon: "ShieldCheck"
      title: "100% Offline & Privacidad"
      text: "Cero telemetría, cero servidores y cero registros en la nube. Tus datos médicos permanecen estrictamente en la base de datos local SQLite (Room) de tu teléfono."
    - icon: "AlarmClock"
      title: "Alarmas de Pantalla Completa"
      text: "Despliega la alarma directamente sobre la pantalla de bloqueo mediante una AlarmActivity interactiva con confirmación granular por medicamento y disparador setAlarmClock()."
    - icon: "Users"
      title: "Gestión Multi-Perfil Familiar"
      text: "Administra los medicamentos de tus padres, hijos o pareja desde un único dispositivo con catálogos independientes, dosis exactas y horarios personalizados."
    - icon: "BellRing"
      title: "Avisos Previos Silenciosos"
      text: "Recibe una notificación 15 o 30 minutos antes de la toma con acciones de un toque para marcar como tomada o descartar hoy, evitando interrupciones sonoras."
    - icon: "PauseCircle"
      title: "Suspensión y Posposición Inteligente"
      text: "Pausa alarmas por 6 horas o pospón tomas con acumulación configurable de minutos y hoja de opciones (SnoozeOptionsSheet), cancelándose automáticamente al registrar la dosis."
    - icon: "CheckCheck"
      title: "Tomas Individuales y Reactivación"
      text: "Confirma o descarta medicamentos individuales dentro de un horario combinado, y reactiva dosis omitidas por error con un solo toque desde la vista diaria o el widget."
    - icon: "FileJson"
      title: "Respaldo SAF en JSON"
      text: "Exporta e importa tu base de datos completa de forma atómica mediante el Storage Access Framework de Android. Sin dependencias propietarias ni bloqueos."
  faq:
    - question: "¿Mis datos médicos se suben a algún servidor o la nube?"
      answer: "No. Meds Reminder funciona 100% sin internet y guarda todo en una base de datos local en tu teléfono, con opción de respaldar en un archivo JSON."
    - question: "¿Las alarmas suenan aunque el teléfono esté en ahorro de batería?"
      answer: "Sí. Utiliza alarmas exactas del sistema que despiertan el dispositivo en modo Doze y muestran la alerta directamente sobre la pantalla bloqueada."
    - question: "¿Puedo llevar el control de medicamentos de varios familiares?"
      answer: "Sí, puedes crear perfiles independientes para cada integrante de la familia con sus propios medicamentos, dosis, horarios y pausas temporales."
  platforms: ["Android"]
  downloadUrl: "https://github.com/AnaCataVC/meds-reminder/releases/latest"
  downloadLabel: "Descargar APK Release"
---

### Arquitectura Offline-First y Resiliencia de Alarmas

**Meds Reminder** está diseñado para garantizar una confiabilidad del 100% en la adherencia médica sin depender de conexión a internet:

*   **Precisión Anti-Doze con `AlarmManager`:** Implementación de `setAlarmClock()` con el permiso `USE_EXACT_ALARM`, garantizando disparos exactos al segundo incluso cuando Android entra en suspensión profunda (*Doze mode*).
*   **Pantalla Completa sobre Bloqueo (`AlarmActivity`):** Uso de `showWhenLocked` y `turnScreenOn` para presentar alertas críticas directamente sobre la pantalla de bloqueo sin requerir desbloqueo manual, incluyendo confirmación granular mediante checkboxes por medicamento dentro de tomas combinadas.
*   **Persistencia Multi-Perfil en Room DB:** Esquema relacional con Koin y Kotlin Coroutines para modelar tratamientos complejos, horarios variables y dependientes familiares, respaldado por migraciones automáticas seguras.

### Ciclo de Vida, Posposición y Tomas Granulares

*   **Confirmación Individual y Diferenciación de Omisiones:** Capacidad de registrar la toma de medicamentos específicos dentro de un horario agrupado mientras se posponen u omiten otros, con visualización dedicada en widgets de inicio y botón de reactivación inmediata ante omisiones involuntarias.
*   **Resolución Inteligente de Tomas Anticipadas y Snooze:** Algoritmo determinista que sincroniza Room ante registros previos a la alarma, posposiciones acumulativas (`SnoozeOptionsSheet`) y cancelación reactiva de recordatorios pendientes.
*   **Canales de Notificación Dinámicos:** Creación de canales sobre la marcha en Android 8.0+ mediante hashes de URI de sonido personalizado, superando la inmutabilidad de audio impuesta por el sistema operativo.

> **Nota**: Puedes explorar el código fuente, la documentación técnica y compilar el APK directamente desde el repositorio en GitHub.

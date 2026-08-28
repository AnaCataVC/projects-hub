---
title: "Meds Reminder"
description: "Aplicación móvil nativa para Android (100% offline-first) para la adherencia médica y recordatorios de dosis multi-perfil con alarmas de alta precisión."
descriptionEn: "100% offline-first native Android mobile application for medication adherence and multi-profile dosage reminders with high-precision alarms."
icon: "/project-icons/meds-reminder-icon.png"
githubUrl: "https://github.com/AnaCataVC/meds-reminder"
websiteUrl: "https://meds-reminder.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Compose", "Material Design 3", "Room Database", "Koin", "AlarmManager"]
categories: ["Mobile", "Salud", "Android", "Productividad"]
type: "mobile"
status: "Activo"
problem: "El olvido recurrente de tomas de medicamentos en grupos familiares o multi-perfil, sumado a la falta de fiabilidad de las alarmas en Android debido a modos agresivos de ahorro de batería (Doze mode)."
solution: "Una aplicación local-first sin nube con soporte multi-perfil y catálogo maestro de fármacos, dotada de alarmas exactas que rompen el modo Doze, popup sobre pantalla bloqueada (AlarmActivity), pre-alarmas con toma rápida, suspensión temporal de alarmas por persona y resolución inteligente ante tomas anticipadas."
learnings:
  - "Gestión del Ciclo de Vida de Tomas Anticipadas: Sincronización del estado en memoria y Room DB para cancelar automáticamente repeticiones (snooze) y pre-alarmas al registrar una toma antes de tiempo."
  - "Suspensión Temporal de Alarmas por Perfil: Implementación de mecanismos de pausa selectiva de notificaciones y alarmas sin alterar los horarios programados del tratamiento."
  - "Garantía de precisión milimétrica en Android 14/15/16 utilizando AlarmManager.setAlarmClock() y USE_EXACT_ALARM bajo directrices de salud."
  - "Superación de la inmutabilidad de sonido en canales de notificación de Android 8.0+ mediante la generación dinámica de canales por hash de URI de tono personalizado."
websiteActionText: "Ver Página"
---

> **Nota**: Puedes explorar el código fuente, la documentación técnica y compilar el APK directamente desde el repositorio en GitHub.

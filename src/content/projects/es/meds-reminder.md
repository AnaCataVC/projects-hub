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
solution: "Una aplicación local-first sin nube con soporte multi-perfil y catálogo maestro de fármacos, dotada de alarmas exactas que rompen el modo Doze, popup sobre pantalla bloqueada (AlarmActivity), avisos previos silenciosos con toma rápida y copias de seguridad atómicas en JSON mediante SAF."
learnings:
  - "Garantía de precisión milimétrica en Android 14/15/16 utilizando AlarmManager.setAlarmClock() y USE_EXACT_ALARM bajo directrices de salud."
  - "Superación de la inmutabilidad de sonido en canales de notificación de Android 8.0+ mediante la generación dinámica de canales por hash de URI de tono personalizado."
  - "Diseño de interfaces declarativas con Jetpack Compose y Material 3 para pantallas de alarma sobre pantalla de bloqueo (setShowWhenLocked / setTurnScreenOn)."
  - "Persistencia local limpia con Room DB (KSP) y respaldos atómicos versionados con kotlinx.serialization vía Android Storage Access Framework (SAF)."
websiteActionText: "Ver Página"
---

> **Nota**: Puedes explorar el código fuente, la documentación técnica y compilar el APK directamente desde el repositorio en GitHub.

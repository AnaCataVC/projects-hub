---
title: "Meds Reminder"
description: "Aplicación móvil nativa para Android (100% offline-first) para la adherencia médica y recordatorios de dosis multi-perfil con alarmas de alta precisión."
icon: "/project-icons/meds-reminder-icon.png"
githubUrl: "https://github.com/AnaCataVC/meds-reminder"
websiteUrl: "https://meds-reminder.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Compose", "Material Design 3", "Room Database", "Koin", "AlarmManager"]
categories: ["Mobile", "Salud", "Android", "Productividad"]
type: "mobile"
status: "Activo"
problem: "El olvido recurrente de tomas de medicamentos en grupos familiares o multi-perfil, sumado a la falta de fiabilidad de las alarmas en Android debido a modos agresivos de ahorro de batería (Doze mode)."
solution: "Una aplicación local-first sin nube con soporte multi-perfil y catálogo maestro de fármacos, dotada de alarmas exactas que rompen el modo Doze, popup sobre pantalla bloqueada (AlarmActivity), pre-alarmas con toma rápida, suspensión temporal de alarmas por persona, resolución inteligente ante tomas anticipadas, y un motor de alarmas completamente determinista con Room como fuente única de verdad, sin delays artificiales."
learnings:
  - "Gestión del Ciclo de Vida de Tomas Anticipadas: Sincronización del estado en memoria y Room DB para cancelar automáticamente repeticiones (snooze) y pre-alarmas al registrar una toma antes de tiempo."
  - "Suspensión Temporal de Alarmas por Perfil: Implementación de mecanismos de pausa selectiva de notificaciones y alarmas sin alterar los horarios programados del tratamiento."
  - "Garantía de precisión milimétrica en Android 14/15/16 utilizando AlarmManager.setAlarmClock() y USE_EXACT_ALARM bajo directrices de salud."
  - "Superación de la inmutabilidad de sonido en canales de notificación de Android 8.0+ mediante la generación dinámica de canales por hash de URI de tono personalizado."
websiteActionText: "Ver Página"
---

### Arquitectura Offline-First y Resiliencia de Alarmas

**Meds Reminder** está diseñado para garantizar una confiabilidad del 100% en la adherencia médica sin depender de conexión a internet:

*   **Precisión Anti-Doze con `AlarmManager`:** Implementación de `setAlarmClock()` con el permiso `USE_EXACT_ALARM`, garantizando disparos exactos al segundo incluso cuando Android entra en suspensión profunda (*Doze mode*).
*   **Pantalla Completa sobre Bloqueo (`AlarmActivity`):** Uso de `showWhenLocked` y `turnScreenOn` para presentar alertas críticas directamente sobre la pantalla de bloqueo sin requerir interacción previa del usuario.
*   **Persistencia Multi-Perfil en Room DB:** Esquema relacional con Koin y Kotlin Coroutines para modelar tratamientos complejos, horarios variables y dependientes familiares.

### Ciclo de Vida y Notificaciones Dinámicas

*   **Resolución Inteligente de Tomas Anticipadas:** Algoritmo que detecta cuando una dosis fue registrada antes de la hora programada, cancelando automáticamente pre-alarmas y posposiciones (*snooze*) pendientes para evitar recordatorios redundantes.
*   **Canales de Notificación Dinámicos:** Solución para Android 8.0+ que crea canales de notificación sobre la marcha mediante hashes de URI de sonido personalizado, superando la inmutabilidad de audio impuesta por el sistema operativo.

> **Nota**: Puedes explorar el código fuente, la documentación técnica y compilar el APK directamente desde el repositorio en GitHub.

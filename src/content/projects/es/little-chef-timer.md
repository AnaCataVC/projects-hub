---
title: "Little Chef Timer"
description: "Temporizador de cocina para Android, 100% offline, con alarmas exactas que suenan aunque el teléfono esté bloqueado, en modo Doze o con la app cerrada por el sistema."
lastUpdated: 2026-09-26
icon: "/project-icons/little-chef-timer-icon.png"
githubUrl: "https://github.com/AnaCataVC/little-chef-timer"
websiteUrl: "https://little-chef-timer.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Compose", "Material Design 3", "SharedPreferences", "AlarmManager", "Storage Access Framework"]
categories: ["Mobile", "Cocina", "Android", "Productividad"]
type: "mobile"
status: "En Desarrollo"
problem: "Los temporizadores de cocina genéricos no distinguen entre preparaciones, pierden la cuenta regresiva si el sistema mata la app o el teléfono se reinicia, y su alarma puede fallar por el modo de ahorro de batería (Doze) de Android."
solution: "Una app offline que guarda recetas propias con emoji, notas y tiempo exacto, y programa la alarma con AlarmManager.setAlarmClock para que suene puntual incluso con la pantalla bloqueada o en Doze. El tiempo restante se calcula contra una marca de fin persistida, así que sobrevive al cierre del proceso sin desfase, y no necesita ningún servicio en primer plano corriendo en segundo plano."
learnings:
  - "Cuenta regresiva sin drift: el tiempo restante se deriva matemáticamente de una marca de tiempo de fin (endAtMillis) guardada en SharedPreferences, en vez de un contador que se pueda perder si el proceso muere."
  - "Alarmas exactas sin permisos invasivos: AlarmManager.setAlarmClock dispara con precisión incluso en Doze, sin pedir SCHEDULE_EXACT_ALARM."
  - "UI reactiva sin polling: un SharedPreferences.OnSharedPreferenceChangeListener conectado a un DisposableEffect de Compose actualiza la interfaz solo cuando cambia el estado, sin lecturas periódicas a disco."
  - "Canales de notificación por sonido: como el sonido de un canal es inmutable una vez creado, cada tono elegido genera su propio canal (alarm_<hash>), eliminando los anteriores."
product:
  tagline: "El temporizador de cocina que no se olvida de nada"
  intro: "Guarda tus recetas con su tiempo exacto y deja que la alarma suene puntual, aunque el teléfono esté bloqueado o la app cerrada."
  features:
    - icon: "ChefHat"
      title: "Recetas propias"
      text: "Registra cada preparación con título, emoji, notas de cocción y una duración exacta, lista para reutilizar cuando quieras."
    - icon: "BellRing"
      title: "Alarmas exactas"
      text: "AlarmManager.setAlarmClock dispara la alarma al segundo, incluso con el modo Doze activo, sin pedir permisos invasivos."
    - icon: "RefreshCw"
      title: "Resiliente a cierres"
      text: "El tiempo restante se calcula contra una marca de fin persistida, así que sobrevive a que el sistema cierre la app o reinicie el teléfono."
    - icon: "Palette"
      title: "Tema y bilingüismo en vivo"
      text: "Paleta lila/rosada en modo Claro, Oscuro o Seguir sistema, con cambio de idioma Español/English sin reiniciar la app."
    - icon: "ShieldCheck"
      title: "Respaldo sin permisos amplios"
      text: "Exporta e importa tus recetas en JSON mediante Storage Access Framework, sin solicitar acceso general al almacenamiento."
  faq:
    - question: "¿Necesito internet para usarla?"
      answer: "No. Little Chef Timer funciona 100% offline: todo se guarda localmente en el dispositivo."
    - question: "¿La alarma suena si tengo la pantalla bloqueada o el modo de ahorro de batería activado?"
      answer: "Sí. Usa AlarmManager.setAlarmClock, que dispara con precisión incluso en Doze, sin necesitar permisos especiales."
    - question: "¿Puedo respaldar mis recetas si cambio de teléfono?"
      answer: "Sí, puedes exportarlas e importarlas como un archivo JSON usando el selector de archivos del sistema."
  platforms: ["Android"]
  downloadUrl: "https://github.com/AnaCataVC/little-chef-timer/releases/latest"
  downloadLabel: "Descargar APK"
---

### Arquitectura sin Room y sin servicio en primer plano

**Little Chef Timer** es una app de un solo módulo, pensada para consumir cero batería mientras el temporizador está corriendo:

*   **Persistencia simple en `SharedPreferences`:** el catálogo de recetas es una lista corta, así que se guarda como JSON validado en preferencias, evitando el costo de un esquema relacional y sus migraciones.
*   **Alarma del sistema, no un servicio propio:** el conteo se calcula como `endAtMillis - now`, y `AlarmManager` se encarga de despertar el dispositivo en el momento exacto, sin gastar ciclos de CPU mientras el teléfono está inactivo.
*   **Notificación insistente:** al sonar, una notificación de alta prioridad con `FLAG_INSISTENT` repite el sonido en bucle hasta que el usuario presiona **Detener**.

### Personalización y respaldo

*   **Recetas propias con emoji y notas:** cada preparación tiene título, emoji, notas de cocción y una duración exacta.
*   **Tema y bilingüismo en vivo:** paleta lila/rosada en modo Claro, Oscuro o Seguir sistema, con cambio de idioma (Español/English) sin reiniciar la app.
*   **Respaldo sin permisos amplios:** exportación e importación de recetas en JSON vía Storage Access Framework, sin solicitar acceso general al almacenamiento.

> **Nota**: Puedes explorar el código fuente y la documentación técnica directamente en el repositorio de GitHub.

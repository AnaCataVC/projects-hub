---
title: "One UI Extra Widgets"
description: "Suite nativa de seis widgets para pantalla de inicio en Android con estética Samsung One UI, construida en Kotlin con Jetpack Glance, Jetpack Compose, efemérides astronómicas offline y telemetría 5G NR / Wi-Fi 6."
lastUpdated: 2026-11-17
icon: "/project-icons/one-ui-extra-widgets-icon.svg"
githubUrl: "https://github.com/AnaCataVC/one-ui-extra-widgets"
websiteUrl: "https://one-ui-extra-widgets.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Glance", "Jetpack Compose", "Material 3", "WorkManager", "DataStore", "Astronomy Engine", "Open-Meteo API"]
categories: ["Android", "Mobile", "Widgets", "One UI"]
type: "mobile"
status: "En Desarrollo"
problem: "La oferta de widgets nativos en teléfonos Samsung Galaxy carece de piezas especializadas con acabado One UI auténtico —como calidad del aire con fase lunar, astrología offline, reproductores retro interactivos y métricas detalladas de red 5G/Wi-Fi— sin depender de cuentas en la nube ni drenar la batería."
solution: "Una suite modular de seis widgets con Jetpack Glance y pantallas de detalle en Jetpack Compose siguiendo los tokens visuales de Samsung One UI (radios de 26dp y superficies translúcidas adaptativas), combinando Open-Meteo sin clave API, cálculo astronómico 100% offline, puente MediaSession y telemetría de red nativa."
learnings:
  - "Jetpack Glance + Canvas Personalizado: Renderizado de bitmaps de alta nitidez para la esfera de fase lunar, la rueda táctil del iPod Classic y la máscara circular giratoria de CD en Discman dentro de las restricciones de RemoteViews."
  - "Efemérides Astronómicas 100% Offline: Integración de Astronomy Engine para calcular longitudes eclípticas geocéntricas y detectar tránsitos lunares y planetas retrógrados o en sombra sin llamadas de red."
  - "Puente Universal de MediaSession: Sincronización en tiempo real mediante NotificationListenerService compatible con Spotify, YouTube Music, Apple Music, Samsung Music y Tidal."
  - "Telemetría 5G NR y Wi-Fi 6 sin Root: Extracción de potencia RSRP en dBm, velocidad de enlace en Mbps, banda de frecuencia y RSSI usando TelephonyManager y ConnectivityManager estándar."
  - "Localización Dinámica Bilingüe (ES/EN): Cambio instantáneo de idioma dentro de la app mediante AppCompatDelegate.setApplicationLocales y LocaleConfig para Android 14+."
websiteActionText: "Ver Página"
product:
  tagline: "Widgets One UI para tu Galaxy"
  intro: "Seis widgets ligeros para Android con estética Samsung One UI: clima con AQI, astrología offline, reproductores retro y calidad 5G/Wi-Fi 6."
  features:
    - icon: "CloudSun"
      title: "Clima Pro, AQI y Fase Lunar"
      text: "Pronóstico con probabilidad de lluvia, índice europeo de calidad del aire (AQI), partículas PM2.5/PM10, UV y fase lunar vía Open-Meteo sin API keys."
    - icon: "Sparkles"
      title: "Astrología 100% Offline"
      text: "Calcula signo solar, tránsito lunar diario, iluminación y estado directo o retrógrado de planetas directamente en el dispositivo sin conexión."
    - icon: "Disc3"
      title: "Tres Reproductores Retro"
      text: "Elige entre iPod Classic con Click Wheel, reproductor MP3 LCD de los 2000 o Discman portátil con carátula en disco, sincronizados con tu música."
    - icon: "Wifi"
      title: "Monitor de Red 5G NR y Wi-Fi 6"
      text: "Visualiza generación celular, operador, potencia RSRP en dBm, velocidad Wi-Fi en Mbps, banda de 5 GHz / 2.4 GHz y señal RSSI en tiempo real."
    - icon: "Languages"
      title: "Bilingüe Automático (ES / EN)"
      text: "Sigue el idioma del sistema o permite cambiar al instante entre español e inglés desde la aplicación compañera."
    - icon: "BatteryCharging"
      title: "Ligero y Sin Cuentas"
      text: "Construido con APIs estándar de Android Jetpack y WorkManager, sin root, sin telemetría oculta y con consumo mínimo de batería."
  faq:
    - question: "¿Funciona únicamente en teléfonos Samsung Galaxy?"
      answer: "Está diseñado siguiendo la estética Samsung One UI (especialmente optimizado para Galaxy), pero usa APIs estándar de Android Jetpack y funciona en cualquier dispositivo con Android 8.0 o superior."
    - question: "¿Necesito acceso root o claves de API para el clima y la astrología?"
      answer: "No. El widget de clima usa la API abierta de Open-Meteo sin registro, y el de astrología realiza todos los cálculos astronómicos localmente sin internet."
    - question: "¿Con qué aplicaciones de música funcionan los widgets retro?"
      answer: "Se sincronizan automáticamente mediante MediaSession con Spotify, YouTube Music, Apple Music, Samsung Music, Tidal y la mayoría de reproductores Android."
  platforms: ["Android 8.0–15", "Samsung One UI"]
  downloadUrl: "https://github.com/AnaCataVC/one-ui-extra-widgets/releases/latest"
  downloadLabel: "Descargar APK (Android)"
---

### Suite de Widgets con Estética Samsung One UI

**One UI Extra Widgets** amplía la pantalla de inicio de Android con seis widgets diseñados en torno a los tokens visuales de **Samsung One UI** (esquinas `26dp`, superficies translúcidas adaptativas día/noche y cabeceras ergonómicas) acompañados de pantallas de detalle en **Jetpack Compose** y **Material 3**.

*   **Clima y Calidad del Aire:** Datos en tiempo real de Open-Meteo (precipitación, AQI europeo, PM2.5/PM10 y UV) más renderizado de fase lunar en `Canvas`.
*   **Astrología Sin Conexión:** Motor local con `Astronomy Engine` para signo solar, tránsito lunar y detección de planetas retrógrados o en sombra.
*   **Reproductores Retro y Telemetría de Red:** Tres formatos musicales (*iPod Classic*, *MP3 LCD* y *Discman*) enlazados vía `MediaSession`, junto a un widget de señal celular 5G NR / LTE y Wi-Fi 6.

> **Nota**: El código fuente completo, la investigación de arquitectura y los paquetes APK compilados están disponibles públicamente en el repositorio de GitHub bajo licencia MIT.

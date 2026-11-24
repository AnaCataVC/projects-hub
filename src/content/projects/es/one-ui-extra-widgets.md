---
title: "One UI Extra Widgets"
description: "Suite nativa de quince widgets para pantalla de inicio en Android con estética Samsung One UI, construida en Kotlin con Jetpack Glance, Jetpack Compose, efemérides astronómicas offline y telemetría 5G NR / Wi-Fi 6."
lastUpdated: 2026-11-24
icon: "/project-icons/one-ui-extra-widgets-icon.png"
githubUrl: "https://github.com/AnaCataVC/one-ui-extra-widgets"
websiteUrl: "https://one-ui-extra-widgets.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Glance", "Jetpack Compose", "Material 3", "WorkManager", "DataStore", "Astronomy Engine", "Open-Meteo API"]
categories: ["Android", "Mobile", "Widgets", "One UI"]
type: "mobile"
status: "En Desarrollo"
problem: "La oferta de widgets nativos en teléfonos Samsung Galaxy carece de piezas especializadas con acabado One UI auténtico —como calidad del aire con fase lunar, astrología offline, reproductores retro interactivos, salud térmica de batería y métricas detalladas de red 5G/Wi-Fi— sin depender de cuentas en la nube ni drenar la batería."
solution: "Una suite modular de quince widgets con Jetpack Glance y pantallas de detalle en Jetpack Compose siguiendo los tokens visuales de Samsung One UI (radios de 26dp y superficies translúcidas adaptativas), combinando Open-Meteo sin clave API, cálculo astronómico 100% offline, puente MediaSession y telemetría de red y batería nativa."
learnings:
  - "Jetpack Glance + Canvas Personalizado: Renderizado de bitmaps de alta nitidez para la esfera de fase lunar, la rueda táctil del iPod Classic, carretes giratorios de Cassette Walkman, plato estroboscópico de tornamesa y cartucho MiniDisc dentro de las restricciones de RemoteViews."
  - "Efemérides Astronómicas 100% Offline: Integración de Astronomy Engine para calcular longitudes eclípticas geocéntricas y detectar tránsitos lunares y planetas retrógrados o en sombra sin llamadas de red."
  - "Puente Universal de MediaSession: Sincronización en tiempo real mediante NotificationListenerService compatible con Spotify, YouTube Music, Apple Music, Samsung Music y Tidal."
  - "Telemetría 5G NR y Wi-Fi 6 sin Root: Extracción de potencia RSRP en dBm, velocidad de enlace en Mbps, banda de frecuencia y RSSI usando TelephonyManager y ConnectivityManager estándar."
  - "Localización Dinámica Bilingüe (ES/EN): Cambio instantáneo de idioma dentro de la app mediante AppCompatDelegate.setApplicationLocales y LocaleConfig para Android 14+."
websiteActionText: "Ver Página"
product:
  tagline: "Widgets One UI para tu Galaxy"
  intro: "Quince widgets ligeros para Android con estética Samsung One UI: clima con AQI, astrología offline, seis reproductores retro y red 5G/Wi-Fi 6."
  features:
    - icon: "CloudSun"
      title: "Clima Pro, AQI y Fase Lunar"
      text: "Pronóstico con probabilidad de lluvia, índice europeo de calidad del aire (AQI), partículas PM2.5/PM10, UV y fase lunar vía Open-Meteo sin API keys."
    - icon: "Sparkles"
      title: "Astrología 100% Offline"
      text: "Calcula signo solar, tránsito lunar diario, iluminación y estado directo o retrógrado de planetas directamente en el dispositivo sin conexión."
    - icon: "Disc3"
      title: "Seis Reproductores Retro"
      text: "Elige entre iPod Classic, MP3 LCD de los 2000, Discman, Cassette Walkman, Tornamesa de vinilo o MiniDisc Hi-MD sincronizados con tu música."
    - icon: "Wifi"
      title: "Monitor de Red 5G NR y Wi-Fi 6"
      text: "Visualiza generación celular, operador, potencia RSRP en dBm, velocidad Wi-Fi en Mbps, banda de 5 GHz / 2.4 GHz y señal RSSI en tiempo real."
    - icon: "Languages"
      title: "Bilingüe Automático (ES / EN)"
      text: "Sigue el idioma del sistema o permite cambiar al instante entre español e inglés desde la aplicación compañera."
    - icon: "BatteryCharging"
      title: "Ligero y Sin Cuentas"
      text: "Construido con APIs estándar de Android Jetpack y WorkManager, sin root, sin telemetría oculta y con consumo mínimo de batería."
  screenshots:
    - src: "/product-screenshots/one-ui-extra-widgets/ipod-classic.png"
      alt: "Widget iPod Classic con rueda táctil Click Wheel y controles multimedia"
    - src: "/product-screenshots/one-ui-extra-widgets/discman.png"
      alt: "Widget Discman portátil circular con pantalla LCD retroiluminada"
    - src: "/product-screenshots/one-ui-extra-widgets/retro-mp3.png"
      alt: "Widget reproductor MP3 USB estilo años 2000 con ecualizador"
    - src: "/product-screenshots/one-ui-extra-widgets/air-quality.png"
      alt: "Widget de Calidad del Aire (AQI europeo) y material particulado PM2.5 y PM10"
    - src: "/product-screenshots/one-ui-extra-widgets/rain-probability.png"
      alt: "Widget de Probabilidad de Lluvia con ventana de 6 horas y nubosidad"
    - src: "/product-screenshots/one-ui-extra-widgets/uv-index.png"
      alt: "Widget de Índice UV Solar con nivel de protección y nubosidad"
    - src: "/product-screenshots/one-ui-extra-widgets/solar-day.png"
      alt: "Widget Día Solar con horario de amanecer, atardecer y hora dorada"
    - src: "/product-screenshots/one-ui-extra-widgets/moon-phase.png"
      alt: "Widget científico de Fase Lunar con porcentaje de iluminación, edad sinódica y elongación"
    - src: "/product-screenshots/one-ui-extra-widgets/night-sky.png"
      alt: "Widget de Cielo Nocturno con índice de visibilidad, planetas visibles y nubosidad"
    - src: "/product-screenshots/one-ui-extra-widgets/astrology.png"
      alt: "Widget de Astrología offline con signo solar, tránsito lunar y planetas retrógrados"
    - src: "/product-screenshots/one-ui-extra-widgets/thermal-health.png"
      alt: "Widget de Salud Térmica de batería con temperatura, voltaje, corriente y potencia"
    - src: "/product-screenshots/one-ui-extra-widgets/network-quality.png"
      alt: "Widget de Calidad de Red 4G LTE / 5G y Wi-Fi con potencia dBm y velocidad en Mbps"
  faq:
    - question: "¿Funciona únicamente en teléfonos Samsung Galaxy?"
      answer: "Está diseñado siguiendo la estética Samsung One UI (especialmente optimizado para Galaxy), pero usa APIs estándar de Android Jetpack y funciona en cualquier dispositivo con Android 8.0 o superior."
    - question: "¿Necesito acceso root o claves de API para el clima y la astrología?"
      answer: "No. El widget de clima usa la API abierta de Open-Meteo sin registro, y el de astrología realiza todos los cálculos astronómicos localmente sin internet."
    - question: "¿Con qué aplicaciones de música funcionan los widgets retro?"
      answer: "Se sincronizan automáticamente mediante MediaSession con Spotify, YouTube Music, Apple Music, Samsung Music, Tidal y la mayoría de reproductores Android."
  platforms: ["Android 8.0–16", "Samsung One UI 8.5"]
  downloadUrl: "https://github.com/AnaCataVC/one-ui-extra-widgets/releases/latest"
  downloadLabel: "Descargar APK (Android)"
---

### Suite de Widgets con Estética Samsung One UI

**One UI Extra Widgets** amplía la pantalla de inicio de Android con quince widgets diseñados en torno a los tokens visuales de **Samsung One UI** (esquinas `26dp`, superficies translúcidas adaptativas día/noche y cabeceras ergonómicas) acompañados de pantallas de detalle en **Jetpack Compose** y **Material 3**.

*   **Clima, Solar y Calidad del Aire:** Datos en tiempo real de Open-Meteo (precipitación, AQI europeo, PM2.5/PM10, UV y cielo nocturno) más fase lunar y arco solar offline.
*   **Astrología Sin Conexión:** Motor local con `Astronomy Engine` para signo solar, tránsito lunar y detección de planetas retrógrados o en sombra.
*   **Reproductores Retro y Diagnóstico de Hardware:** Seis formatos musicales (*iPod Classic*, *MP3 LCD*, *Discman*, *Cassette Walkman*, *Tornamesa de vinilo* y *MiniDisc Hi-MD*) enlazados vía `MediaSession`, junto a monitores de señal 5G NR / Wi-Fi 6 y salud térmica de batería.

> **Nota**: El código fuente completo, la investigación de arquitectura y los paquetes APK compilados están disponibles públicamente en el repositorio de GitHub bajo licencia MIT.

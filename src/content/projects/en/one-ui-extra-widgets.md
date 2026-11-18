---
title: "One UI Extra Widgets"
description: "Native suite of six Android home screen widgets styled after Samsung One UI, built in Kotlin with Jetpack Glance, Jetpack Compose, offline astronomical ephemeris, and 5G NR / Wi-Fi 6 telemetry."
lastUpdated: 2026-11-17
icon: "/project-icons/one-ui-extra-widgets-icon.png"
githubUrl: "https://github.com/AnaCataVC/one-ui-extra-widgets"
websiteUrl: "https://one-ui-extra-widgets.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Glance", "Jetpack Compose", "Material 3", "WorkManager", "DataStore", "Astronomy Engine", "Open-Meteo API"]
categories: ["Android", "Mobile", "Widgets", "One UI"]
type: "mobile"
status: "In Development"
problem: "Stock Samsung Galaxy home screen widgets lack specialized tools with authentic One UI styling — such as air quality with lunar phases, offline astrology, interactive retro music players, and detailed 5G/Wi-Fi metrics — without cloud accounts or battery drain."
solution: "A modular suite of six Jetpack Glance widgets and Jetpack Compose detail screens built around Samsung One UI design tokens (26dp squircle radii and adaptive day/night translucent surfaces), combining keyless Open-Meteo data, 100% offline astronomical computation, MediaSession bridging, and native network telemetry."
learnings:
  - "Jetpack Glance + Custom Canvas: Rendering crisp bitmaps for the lunar phase sphere, interactive iPod Classic Click Wheel, and spinning Discman CD album-art mask within RemoteViews constraints."
  - "100% Offline Astronomical Ephemeris: Integrating Astronomy Engine to compute geocentric ecliptic longitudes, lunar transits, and planetary retrograde or shadow states with zero network calls."
  - "Universal MediaSession Bridge: Real-time playback synchronization via NotificationListenerService compatible with Spotify, YouTube Music, Apple Music, Samsung Music, and Tidal."
  - "Rootless 5G NR & Wi-Fi 6 Telemetry: Extracting cellular RSRP in dBm, Wi-Fi link speed in Mbps, frequency band, and RSSI using standard TelephonyManager and ConnectivityManager APIs."
  - "Dynamic Bilingual Localization (ES/EN): Instant in-app language switching powered by AppCompatDelegate.setApplicationLocales and Android 14+ LocaleConfig."
websiteActionText: "Visit Page"
product:
  tagline: "One UI widgets for your Galaxy"
  intro: "Six lightweight Android widgets styled for Samsung One UI: weather with AQI, offline astrology, retro music players, and 5G/Wi-Fi 6 telemetry."
  features:
    - icon: "CloudSun"
      title: "Weather Pro, AQI & Moon Phase"
      text: "Hourly rain probability, European Air Quality Index (AQI), PM2.5/PM10 particulates, UV index, and lunar phase powered by keyless Open-Meteo APIs."
    - icon: "Sparkles"
      title: "100% Offline Astrology"
      text: "Computes Sun sign, daily Moon transit, lunar illumination, and direct or retrograde planetary states locally on-device with zero internet calls."
    - icon: "Disc3"
      title: "Three Retro Music Players"
      text: "Pick between an iPod Classic Click Wheel, a 2000s dot-matrix MP3 stick, or a portable CD Discman, all synced live with your active player."
    - icon: "Wifi"
      title: "5G NR & Wi-Fi 6 Network Monitor"
      text: "Displays cellular generation, carrier, RSRP signal power in dBm, Wi-Fi link speed in Mbps, 5 GHz / 2.4 GHz band, and RSSI in real time."
    - icon: "Languages"
      title: "Automatic Bilingual Support (ES / EN)"
      text: "Follows your system language automatically or lets you switch between English and Spanish instantly from the companion app."
    - icon: "BatteryCharging"
      title: "Lightweight & Account-Free"
      text: "Built with standard Android Jetpack and WorkManager APIs — no root, no hidden telemetry, and minimal battery impact."
  screenshots:
    - src: "/product-screenshots/one-ui-extra-widgets/ipod-classic.png"
      alt: "iPod Classic widget with interactive Click Wheel and media controls"
    - src: "/product-screenshots/one-ui-extra-widgets/discman.png"
      alt: "Circular portable CD Discman widget with backlit LCD display"
    - src: "/product-screenshots/one-ui-extra-widgets/retro-mp3.png"
      alt: "2000s USB MP3 stick player widget with equalizer"
    - src: "/product-screenshots/one-ui-extra-widgets/air-quality.png"
      alt: "European Air Quality Index (AQI) and PM2.5 particulate widget"
    - src: "/product-screenshots/one-ui-extra-widgets/moon-phase.png"
      alt: "Scientific Moon Phase widget showing illumination percentage and synodic age"
    - src: "/product-screenshots/one-ui-extra-widgets/astrology.png"
      alt: "Offline Astrology widget displaying Sun sign, Moon transit, and retrograde planets"
  faq:
    - question: "Does it only work on Samsung Galaxy phones?"
      answer: "It is crafted around Samsung One UI design tokens, but it relies on standard Android Jetpack APIs and runs on any device running Android 8.0 or newer."
    - question: "Do I need root access or API keys for weather and astrology?"
      answer: "No. Weather data comes from the free, keyless Open-Meteo API, and astrology calculations run 100% offline on your device."
    - question: "Which music apps are supported by the retro player widgets?"
      answer: "They sync automatically via Android MediaSession with Spotify, YouTube Music, Apple Music, Samsung Music, Tidal, and most other media players."
  platforms: ["Android 8.0–16", "Samsung One UI 8.5"]
  downloadUrl: "https://github.com/AnaCataVC/one-ui-extra-widgets/releases/latest"
  downloadLabel: "Download APK (Android)"
---

### Samsung One UI-Styled Widget Suite

**One UI Extra Widgets** expands the Android home screen with six widgets crafted around **Samsung One UI** design tokens (`26dp` corner radii, adaptive day/night translucent surfaces, and ergonomic headers), paired with **Jetpack Compose** and **Material 3** detail screens.

*   **Weather & Air Quality:** Real-time Open-Meteo forecasts (rain probability, European AQI, PM2.5/PM10, and UV index) alongside a custom `Canvas` lunar phase sphere.
*   **Offline Astrology Engine:** Local ephemeris computation with `Astronomy Engine` for Sun sign, Moon zodiac transit, and retrograde/shadow detection.
*   **Retro Music Players & Network Telemetry:** Three classic player styles (*iPod Classic*, *MP3 LCD*, and *Discman*) bridged via `MediaSession`, plus a live 5G NR / LTE and Wi-Fi 6 signal monitor.

> **Note**: Full source code, architectural research, and official APK releases are publicly available in the GitHub repository under the MIT license.

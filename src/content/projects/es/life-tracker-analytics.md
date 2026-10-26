---
title: "Life Tracker Analytics"
description: "Aplicación Web Progresiva (PWA) centrada en la privacidad para rastrear y analizar métricas de vida y hábitos mediante visualizaciones de datos y sincronización local-first."
lastUpdated: 2026-10-26
icon: "/project-icons/lta_icon.png"
githubUrl: "https://github.com/AnaCataVC/life-tracker-analytics"
liveAppUrl: "https://life-tracker-analytics.ana-catalina.com"
isLiveApp: true
technologies: ["React 19", "TypeScript", "Tailwind CSS v4", "Dexie.js", "remoteStorage.js", "Recharts"]
categories: ["Visualización de Datos", "Analíticas", "Herramienta Personal"]
type: "data-science"
status: "Activo"
problem: "Entender matemáticamente cómo los hábitos diarios impactan la calidad de vida, sin entregar datos personales sensibles a servicios backend propietarios."
solution: "Un dashboard PWA analítico y local-first que cruza métricas localmente usando correlación de Pearson con guardas de tamaño mínimo de muestra (N≥5) y tamaño de efecto mediante Cohen's d, complementado con análisis longitudinal de series temporales (medias móviles, EWMA y detección de tendencias) y cross-correlaciones lag-1 para descubrir efectos diferidos entre días sin telemetría ni backend centralizado."
learnings:
  - "Análisis Longitudinal y Efectos Lag-1: Implementación de series temporales con medias móviles exponenciales (EWMA) y correlaciones cruzadas lag-1 para identificar el impacto diferido de hábitos de un día sobre el bienestar del día siguiente."
  - "Sincronización Granular de Entidades: Implementación de algoritmos de sincronización y merge seguro contra conflictos para mantener la consistencia entre dispositivos sin servidor backend."
  - "Persistencia Local Tipada con Dexie.js: Unificación del almacenamiento relacional en IndexedDB con TypeScript para consultas reactivas ultrarrápidas en el navegador."
  - "Arquitectura de Nube BYOD: Integración de remoteStorage.js para permitir que el usuario mantenga la soberanía total de sus datos."
  - "Visualización de Datos de Impacto: Generación de gráficos interactivos con Recharts para revelar correlaciones multivariadas reales sin distorsión estadística."
---

### Arquitectura Local-First y Sincronización BYOD

**Life Tracker Analytics** está construida sobre un paradigma **Local-First**, garantizando que el usuario mantenga soberanía total sobre sus datos de hábitos y salud personal sin depender de una base de datos centralizada.

*   **Motor Relacional en Navegador:** Utiliza **Dexie.js** sobre IndexedDB con esquemas estrictos en TypeScript, permitiendo consultas analíticas sub-milisegundo totalmente offline.
*   **Sincronización BYOD (Bring Your Own Data):** Conexión opcional a servidores personales mediante **remoteStorage.js**, resolviendo conflictos de sincronización entre múltiples dispositivos mediante algoritmos deterministas de merge.

### Motor de Análisis y Visualización de Datos

*   **Cálculo de Correlaciones y Series Temporales:** Pipeline en memoria que procesa series temporales longitudinales, medias móviles (EWMA) y calcula correlaciones contemporáneas y diferidas (lag-1) entre variables cuantitativas (sueño, productividad, enfoque).
*   **Renderizado Reactivo con Recharts:** Visualizaciones interactivas optimizadas para React 19 y Tailwind CSS v4, asegurando transiciones fluidas a 60 fps con miles de registros históricos.

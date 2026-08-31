---
title: "Life Tracker Analytics"
description: "Aplicación Web Progresiva (PWA) centrada en la privacidad para rastrear y analizar métricas de vida y hábitos mediante visualizaciones de datos y sincronización local-first."
descriptionEn: "Privacy-focused Progressive Web App (PWA) to track and analyze life metrics and daily habits through local-first data visualizations."
icon: "/project-icons/lta_icon.png"
githubUrl: "https://github.com/AnaCataVC/life-tracker-analytics"
liveAppUrl: "https://life-tracker-analytics.ana-catalina.com"
isLiveApp: true
technologies: ["React 19", "TypeScript", "Tailwind CSS v4", "Dexie.js", "remoteStorage.js", "Recharts"]
categories: ["Visualización de Datos", "Analíticas", "Herramienta Personal"]
type: "data-science"
status: "Activo"
problem: "Entender matemáticamente cómo los hábitos diarios impactan la calidad de vida, sin entregar datos personales sensibles a servicios backend propietarios."
solution: "Un dashboard PWA analítico y local-first que cruza métricas localmente para visualizar correlaciones ocultas, combinando persistencia en Dexie.js y sincronización de nube BYOD (Bring-Your-Own-Data)."
learnings:
  - "Sincronización Granular de Entidades: Implementación de algoritmos de sincronización y merge seguro contra conflictos para mantener la consistencia entre dispositivos sin servidor backend."
  - "Persistencia Local Tipada con Dexie.js: Unificación del almacenamiento relacional en IndexedDB con TypeScript para consultas reactivas ultrarrápidas en el navegador."
  - "Arquitectura de Nube BYOD: Integración de remoteStorage.js para permitir que el usuario mantenga la soberanía total de sus datos."
  - "Visualización de Datos de Impacto: Generación de gráficos interactivos con Recharts para revelar correlaciones multivariadas reales sin distorsión estadística."
---

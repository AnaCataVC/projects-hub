---
title: "Identity Map"
description: "Un monorepo que contiene dos herramientas independientes: un frontend interactivo en React y un potente backend de consola (CLI) en Python para mapear tu identidad."
icon: "/project-icons/identitymap_icon.png"
githubUrl: "https://github.com/AnaCataVC/identity-map"
liveAppUrl: "https://identity-map.ana-catalina.com"
isLiveApp: true
technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Python", "NetworkX", "SQLModel", "Typer", "Graphviz", "SQLite"]
categories: ["Web Application", "Herramienta CLI", "Teoría de Grafos"]
type: "web"
status: "Archivado"
problem: "La mayoría de las herramientas de autoconocimiento son solo texto libre sin estructura, sin forma de representar la identidad —personas, valores, roles— como un grafo explícito que se pueda consultar o analizar matemáticamente."
solution: "Un monorepo que ofrece un frontend independiente en React para exploración visual, y un backend CLI separado en Python con NetworkX para computar y exportar el modelo de identidad."
learnings:
  - "Desacoplar la interfaz visual del backend de procesamiento de datos permite crear herramientas independientes más flexibles y fáciles de mantener."
  - "Las visualizaciones interactivas complejas necesitan un motor de físicas estable (como d3-force) para evitar que el navegador se congele."
  - "Traducir conceptos matemáticos abstractos a interfaces visuales es el mejor puente entre la lógica y la UX."
---

### Arquitectura Monorepo: Frontend en React y CLI en Python

**Identity Map** separa responsabilidades en dos herramientas independientes dentro de un mismo repositorio:

*   **Frontend en React 19:** Una SPA interactiva que renderiza el grafo de identidad y permite explorar relaciones visualmente, persistiendo el estado en `localStorage` del navegador.
*   **Backend CLI en Python:** Una herramienta de línea de comandos separada, construida sobre **NetworkX**, para computar el modelo de grafo, persistirlo en **SQLite** vía **SQLModel**, y exportarlo de forma independiente a la capa visual.

### Visualización de Grafos con Fuerzas Dirigidas

*   **Motor de Físicas Propio (Force-Directed):** Las posiciones de nodos y aristas se calculan mediante una simulación de fuerzas hecha a mano (repulsión tipo Coulomb + resortes), ajustada para mantenerse fluida en vez de congelar el navegador a medida que el grafo crece.
*   **Matemáticas como UX:** Conceptos estructurales de teoría de grafos (nodos, aristas, centralidad) se traducen en una interfaz pensada para el autoconocimiento, no para el análisis académico.

> **Nota**: Este proyecto está archivado — el código del frontend y del CLI está disponible en GitHub.

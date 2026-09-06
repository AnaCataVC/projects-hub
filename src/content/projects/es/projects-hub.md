---
title: "Projects Hub — Terminal Interactiva"
description: "El portafolio que estás viendo: una terminal Unix simulada 100% en el cliente para navegar mis proyectos por teclado o búsqueda, sin backend."
icon: "/project-icons/projects-hub-icon.svg"
githubUrl: "https://github.com/AnaCataVC/projects-hub"
liveAppUrl: "https://projects.ana-catalina.com"
isLiveApp: true
technologies: ["Astro 7", "TypeScript", "Tailwind CSS v4", "Zod", "Vitest", "Vercel"]
categories: ["Portafolio", "Frontend", "UX/UI", "Testing"]
type: "web"
status: "Activo"
problem: "Un portafolio de tarjetas estático no comunica que quien lo construyó sabe diseñar experiencias distintas a lo genérico, ni deja espacio para el detalle técnico de cada proyecto sin saturar la vista principal."
solution: "Una interfaz dual: una terminal Unix simulada íntegramente en el cliente para navegar el catálogo por teclado o búsqueda incremental, que al 'ejecutar' un proyecto anima una transición y lleva a una ficha técnica completa generada desde Content Collections de Astro."
learnings:
  - "Simular un sistema de archivos Unix 100% client-side —sin backend— con navegación por teclado, breadcrumbs y búsqueda incremental tipo 'find'."
  - "Extraer la lógica pura de la terminal (parsing, matching, aplanado del árbol) a un módulo separado para poder testearla con Vitest sin simular el DOM."
  - "Diseñar un schema de Content Collections (Zod) bilingüe como única fuente de verdad para las fichas de proyecto."
websiteActionText: "Ver Portafolio en Vivo"
---

### Una terminal, no una grilla de tarjetas

Este portafolio reemplaza la grilla habitual de tarjetas por una **terminal Unix simulada**: un árbol de carpetas en memoria (`~/proyectos`, `~/about`, `~/help`) que se navega con flechas, `Enter` y `Backspace`, o buscando directamente cualquier texto para saltar entre resultados con su breadcrumb.

*   **100% cliente, sin shell real:** no hay backend ni proceso detrás — el árbol de menú y la búsqueda son puro TypeScript corriendo en el navegador.
*   **Lógica pura y testeada:** el parsing, el matching de búsqueda y el aplanado del árbol viven en un módulo aislado del DOM, cubierto por tests de Vitest.
*   **Lanzamiento animado:** ejecutar un proyecto escribe un comando falso (`./launch <id> --gui`) con efecto máquina de escribir antes de transicionar a su ficha técnica.

### Contenido como código

Cada proyecto —incluido este— es una entrada de **Astro Content Collections**: un Markdown con frontmatter validado por un schema Zod, con versión en español e inglés. La terminal serializa esos datos en build-time y los agrupa por categoría al vuelo en el cliente.

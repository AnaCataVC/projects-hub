---
title: "Anacatalina CV — Sitio Personal Bilingüe"
description: "Mi CV como sitio web bilingüe con modo oscuro, más un PDF descargable generado imprimiendo plantillas HTML con el motor headless del navegador."
icon: "/project-icons/anacatalina-cv-icon.svg"
githubUrl: "https://github.com/AnaCataVC/anacatalina-cv"
liveAppUrl: "https://cv.ana-catalina.com"
isLiveApp: true
technologies: ["Astro 6", "TypeScript", "Tailwind CSS v4", "Vercel"]
categories: ["Sitio Personal", "i18n", "Diseño"]
type: "web"
status: "Activo"
problem: "Muchos procesos de reclutamiento todavía dependen de un PDF descargable fiel, además de un sitio web legible — pero sumar una librería pesada de generación de PDF (Puppeteer y similares) es un costo de build y de dependencias que no siempre se justifica."
solution: "Un sitio Astro bilingüe (ES/EN) con modo oscuro y animaciones al scroll, más un script que renderiza plantillas HTML de impresión dedicadas usando el motor headless de Chrome o Edge ya instalado en la máquina (`--print-to-pdf`)."
learnings:
  - "Generar PDFs de impresión a partir de HTML/CSS con reglas `@page`, invocando el navegador headless instalado localmente en vez de sumar Puppeteer u otra librería de PDF."
  - "Mantener plantillas de impresión separadas del markup web permite optimizar cada formato (una hoja de CV compacta vs. una página con scroll y animaciones) sin comprometer ninguno de los dos."
  - "Reutilizar un sistema de diseño compartido (paleta pastel, tipografía) entre varios sitios propios acelera montar uno nuevo sin rediseñar desde cero."
websiteActionText: "Ver CV en Vivo"
---

### Un CV que es sitio web, no solo PDF

El sitio está construido en **Astro** con contenido bilingüe (`i18n.js`) y toggle de idioma y de tema oscuro/claro, pensado para leerse cómodo en pantalla en vez de simular una hoja de papel.

*   **Sin dependencias de PDF:** el botón de descarga no usa Puppeteer ni ninguna librería — un script de build abre el navegador headless (Chrome o Edge) ya instalado en la máquina e imprime plantillas HTML dedicadas a `public/ACVC_es.pdf` / `public/ACVC_en.pdf`.
*   **Plantillas de impresión propias:** esas plantillas HTML+CSS (`@page`, tipografía de impresión) son independientes del markup de la web, para que cada formato —pantalla vs. papel— se optimice por separado.
*   **Sistema de diseño compartido:** comparte paleta pastel y tipografía con mi homepage y con este mismo portafolio, documentado en un `DESIGN_SYSTEM.md` común.

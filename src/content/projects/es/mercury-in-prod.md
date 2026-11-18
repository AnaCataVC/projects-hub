---
title: "Mercury in Prod"
description: "Laboratorio empírico de Data Science que evalúa si Mercurio retrógrado, las sombras planetarias o las fases lunares se correlacionan con incidentes de software en producción, demostrando cómo los confusores de calendario y el p-hacking generan patrones ilusorios."
lastUpdated: 2026-11-17
icon: "/project-icons/mercury-in-prod-icon.png"
githubUrl: "https://github.com/AnaCataVC/mercury-in-prod"
liveAppUrl: "https://mercury.ana-catalina.com"
isLiveApp: true
websiteActionText: "Ver Data Story"
technologies: ["Python 3.11", "Statsmodels", "SciPy", "Pandas", "NumPy", "Plotly", "Streamlit", "Astronomy Engine"]
categories: ["Data Science", "Inferencia Estadística", "Visualización de Datos", "Ingeniería de Confiabilidad"]
type: "data-science"
status: "En Desarrollo"
problem: "En la cultura de ingeniería de software abunda el mito de que Mercurio retrógrado o la Luna llena provocan caídas en producción; al buscar correlaciones en datos históricos sin controlar por el calendario operativo ni corregir por múltiples hipótesis, es fácil caer en falsos positivos."
solution: "Un estudio estadístico reproducible y laboratorio interactivo dual (Data Story estática con Plotly en Vercel y explorador dinámico en Streamlit) que cruza 400 incidentes públicos reales de 8 plataformas (Statuspage v2) y un panel operativo de 2,130 días (2021–2026) con efemérides astronómicas exactas offline, aplicando regresión GLM de Poisson con errores robustos HC3, pruebas de permutación de Monte Carlo y corrección FDR de Benjamini-Hochberg sobre 57 hipótesis."
learnings:
  - "Control de Confusores Operativos (GLM de Poisson con HC3): Al modelar 2,130 días (2021–2026) con errores estándar robustos HC3, la varianza real proviene del calendario humano —fines de semana (`IRR = 0.31`, `p < 0.0001`), ventana de despliegues martes a jueves (`IRR = 1.23`, `p < 0.0001`), Patch Tuesday (`IRR = 1.31`, `p = 0.0007`) y Code Freeze Q4 (`IRR = 0.63`, `p = 0.0011`)—, mientras Mercurio retrógrado (`IRR = 0.98`, `p = 0.71`), su sombra (`IRR = 1.05`, `p = 0.30`) y la Luna llena (`IRR = 0.91`, `p = 0.16`) resultan estadísticamente nulos."
  - "Auditoría de Tasas Base en Incidentes Públicos Reales: Al contrastar 400 incidentes recientes de GitHub, Cloudflare, npm, Discord, Reddit, Bitbucket, Vercel y DigitalOcean contra la ventana temporal exacta de cada proveedor, no existe exceso de riesgo en Mercurio retrógrado (`31.0%` observado vs `29.5%` esperado, `p = 0.51`)."
  - "Demostración Empírica de P-Hacking y Confusión Estacional: Escanear 57 hipótesis planetarias, lunares y zodiacales produce 7 hallazgos ingenuos con `p < 0.05`. La corrección FDR de Benjamini-Hochberg descarta el ruido aleatorio y expone que el único sobreviviente (`Sol en Capricornio`) es confusión estacional causada por el Code Freeze de diciembre."
  - "Paridad de Efemérides 100% Offline: Portabilidad exacta de `AstrologyEngine.kt` (de `one-ui-extra-widgets`) a Python en `src/ephemeris.py` mediante `astronomy-engine`, garantizando cálculos deterministas de longitud eclíptica geocéntrica, velocidad angular y fases sinódicas."
  - "Arquitectura Dual y Resiliencia UX de 5 Estados: Generador estático (`src/build_site.py`) con explorador de hipótesis en cliente y laboratorio Streamlit (`app.py`) con permutaciones en vivo, diseñados con tokens CSS centralizados, cero saltos de layout (CLS) y degradación elegante offline."
---

### Estudio Empírico y Arquitectura Dual

**Mercury in Prod** combina el rigor de la inferencia causal y el control de falsos descubrimientos con dos superficies interactivas complementarias:

*   **Data Story Estática ([mercury.ana-catalina.com](https://mercury.ana-catalina.com)):** Narrativa visual autocontenida generada por `src/build_site.py` con tarjetas ejecutivas de KPIs, línea de tiempo orbital 2021–2026, *forest plot* del modelo GLM de Poisson, *volcano plot* de 57 hipótesis y un explorador interactivo en el navegador.
*   **Laboratorio Exploratorio en Streamlit ([mercury-lab.ana-catalina.com](https://mercury-lab.ana-catalina.com)):** Aplicación dinámica (`app.py`) que permite filtrar dimensiones astronómicas, subgrupos de calendario y ejecutar pruebas de permutación de Monte Carlo vectorizadas en tiempo real, además de inspeccionar los registros crudos de Statuspage v2.

### Motor de Efemérides y Pipeline Estadístico

*   **Efemérides Deterministas (`src/ephemeris.py`):** Réplica exacta en Python del motor astronómico de `one-ui-extra-widgets` sobre `astronomy-engine`, calculando posiciones geocéntricas del Sol, la Luna y los planetas Mercurio a Saturno, estados de movimiento (directo, retrógrado, sombra pre/post) y ángulos de fase lunar.
*   **Ingesta y Modelos (`src/incidents.py` y `src/stats.py`):** Recolección automatizada de feeds públicos Statuspage v2 con caché resiliente, pruebas paramétricas y no paramétricas (Welch *t*-test, Mann-Whitney *U*, permutaciones vectorizadas), regresión GLM de Poisson controlada por confusores y ajuste por comparaciones múltiples (Benjamini-Hochberg FDR y Bonferroni).

---
title: "PlotThis"
description: "Aplicación web interactiva local, enfocada en la privacidad, diseñada para analizar datasets estructurados, sugerir los tipos de gráficos más adecuados y generar insights estadísticos automáticos, sin recurrir a Inteligencia Artificial (IA) ni a APIs externas."
icon: "/project-icons/plot-this-icon.png"
githubUrl: "https://github.com/AnaCataVC/plot-this"
liveAppUrl: "https://plot-this.ana-catalina.com"
isLiveApp: true
technologies: ["Python", "Streamlit", "Plotly Express", "Pandas", "NumPy"]
categories: ["Aplicación Web", "Visualización de Datos", "Analíticas"]
type: "data-science"
status: "Archivado"
problem: "Analizar datasets, seleccionar las visualizaciones adecuadas y generar insights estadísticos de forma dinámica sin depender de APIs externas de IA ni comprometer la privacidad de los datos."
solution: "Una aplicación local en Streamlit que utiliza un motor matemático personalizado y altamente optimizado en Pandas/NumPy puro para inferir tipos semánticos y compilar resúmenes en milisegundos (reemplazando librerías de profiling de terceros que causaban deadlocks de más de 60 segundos), y Plotly Express para renderizar gráficos interactivos premium."
learnings:
  - "Descubrir que el uso de librerías de profiling pesadas causan deadlocks de multiprocesamiento en Streamlit, y reemplazarlas con un motor nativo personalizado de Pandas."
  - "Implementar un motor de reglas determinista que evalúa coeficientes de Pearson/Spearman y diferencias de medias para sugerir gráficos idóneos."
  - "Personalizar las propiedades del layout de Plotly Express (tipografía, eliminación de bordes de eje y paletas coordinadas) para producir gráficos con acabado visual moderno y premium."
---

### Motor Propio en Pandas en Vez de Librerías de Profiling Pesadas

**PlotThis** reemplazó librerías de profiling de terceros después de que causaran deadlocks de multiprocesamiento dentro del entorno reactivo de Streamlit:

*   **Motor Nativo en Pandas/NumPy:** Un motor propio y altamente optimizado, construido con Pandas y NumPy, infiere tipos semánticos de columnas y compila resúmenes estadísticos en milisegundos — reemplazando librerías de profiling de terceros que tardaban más de 60 segundos y colapsaban dentro del modelo de multiprocesamiento de Streamlit.
*   **Recomendación Determinista de Gráficos:** Un motor de reglas basado en coeficientes de correlación de Pearson/Spearman y comparaciones de varianza sugiere el tipo de gráfico más adecuado para cada dataset, sin llamar a ninguna API de IA.

### Análisis Local y Enfocado en Privacidad

*   **Estilizado con Plotly Express:** Tipografía personalizada, ejes sin bordes y paletas de colores curadas convierten los gráficos por defecto de Plotly en visualizaciones listas para publicar.
*   **Sin APIs Externas:** Todo el cómputo corre localmente dentro de la app de Streamlit — los datasets nunca salen de la máquina.

> **Nota**: Archivado tras validar el enfoque de análisis local-first — el código está disponible en GitHub.

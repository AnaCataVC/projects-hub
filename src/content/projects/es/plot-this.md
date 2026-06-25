---
title: "PlotThis"
description: "Aplicación web interactiva local, enfocada en la privacidad, diseñada para analizar datasets estructurados, sugerir los tipos de gráficos más adecuados y generar insights estadísticos automáticos, sin recurrir a Inteligencia Artificial (IA) ni a APIs externas."
descriptionEn: "A local, privacy-focused interactive web application to analyze structured datasets, suggest the most appropriate chart types, and generate automated statistical insights, without using Artificial Intelligence (AI) or third-party APIs."
icon: "/project-icons/plot-this-icon.png"
githubUrl: "https://github.com/AnaCataVC/plot-this"
liveAppUrl: "https://plot-this.ana-catalina.com"
isLiveApp: true
technologies: ["Python", "Streamlit", "Plotly Express", "Pandas"]
categories: ["Aplicación Web", "Visualización de Datos", "Analíticas"]
status: "Activo"
problem: "Analizar datasets, seleccionar las visualizaciones adecuadas y generar insights estadísticos de forma dinámica sin depender de APIs externas de IA ni comprometer la privacidad de los datos."
solution: "Una aplicación local en Streamlit que utiliza fg-data-profiling como motor de análisis desacoplado (headless) y Plotly Express para renderizar gráficos interactivos con estilos personalizados de alta calidad."
learnings:
  - "Utilizar una librería de profiling madura (fg-data-profiling) en memoria para extraer tipos semánticos y estadísticas en lugar de reprogramar grafos de inferencia complejos."
  - "Implementar un motor de reglas determinista que evalúa coeficientes de Pearson/Spearman y diferencias de medias para sugerir gráficos idóneos."
  - "Personalizar las propiedades del layout de Plotly Express (tipografía, eliminación de bordes de eje y paletas coordinadas) para producir gráficos con acabado visual moderno y premium."
---

---
title: "PlotThis"
description: "A local, privacy-focused interactive web application to analyze structured datasets, suggest the most appropriate chart types, and generate automated statistical insights, without using Artificial Intelligence (AI) or third-party APIs."
icon: "/project-icons/plot-this-icon.png"
githubUrl: "https://github.com/AnaCataVC/plot-this"
liveAppUrl: "https://plot-this.ana-catalina.com"
isLiveApp: true
technologies: ["Python", "Streamlit", "Plotly Express", "Pandas"]
categories: ["Web App", "Data Visualization", "Analytics"]
status: "Completed"
problem: "Analyzing datasets, choosing the right visualizations, and generating statistical insights dynamically without relying on external AI APIs or compromising data privacy."
solution: "A local Streamlit application that uses fg-data-profiling as a headless analysis engine and Plotly Express to render custom, premium-styled interactive charts."
learnings:
  - "Leveraging a mature profiling library (fg-data-profiling) in memory to extract semantic types and statistics instead of rebuilding type-inference graphs from scratch."
  - "Implementing a deterministic rules engine using Pearson/Spearman coefficients and mean variances to recommend specific chart types."
  - "Fine-tuning Plotly layouts (custom typography, removing axis borders, and applying curated color palettes) to produce modern, publication-ready charts."
---

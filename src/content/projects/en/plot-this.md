---
title: "PlotThis"
description: "A local, privacy-focused interactive web application to analyze structured datasets, suggest the most appropriate chart types, and generate automated statistical insights, without using Artificial Intelligence (AI) or third-party APIs."
icon: "/project-icons/plot-this-icon.png"
githubUrl: "https://github.com/AnaCataVC/plot-this"
liveAppUrl: "https://plot-this.ana-catalina.com"
isLiveApp: true
technologies: ["Python", "Streamlit", "Plotly Express", "Pandas"]
categories: ["Web Application", "Data Visualization", "Analytics"]
type: "data-science"
status: "Archived"
problem: "Analyzing datasets, choosing the right visualizations, and generating statistical insights dynamically without relying on external AI APIs or compromising data privacy."
solution: "A local Streamlit application that uses a custom, highly-optimized pure Pandas engine in the background to infer semantic types and compile summaries in milliseconds, avoiding third-party deadlocks, while using Plotly Express for premium-styled charts."
learnings:
  - "Discovering that heavy third-party data profiling libraries cause severe multiprocessing deadlocks in Streamlit's reactive environment, and replacing them with a custom native Pandas engine."
  - "Implementing a deterministic rules engine using Pearson/Spearman coefficients and mean variances to recommend specific chart types."
  - "Fine-tuning Plotly layouts (custom typography, removing axis borders, and applying curated color palettes) to produce modern, publication-ready charts."
---

### Custom Pandas Engine Instead of Heavy Profiling Libraries

**PlotThis** replaced third-party data-profiling libraries after they caused multiprocessing deadlocks inside Streamlit's reactive runtime:

*   **Native Pandas Engine:** A custom, highly-optimized Pandas-only engine infers semantic column types and compiles statistical summaries in milliseconds, with no external profiling dependency to deadlock.
*   **Deterministic Chart Recommendation:** A rules engine built on Pearson/Spearman correlation coefficients and variance comparisons suggests the chart type that best fits each dataset, without calling any AI API.

### Local-First, Privacy-Focused Analysis

*   **Plotly Express Styling:** Custom typography, borderless axes, and curated color palettes turn default Plotly charts into publication-ready visuals.
*   **No External APIs:** Every computation runs locally inside the Streamlit app — datasets never leave the machine.

> **Note**: Archived after validating the local-first analysis approach — the source is available on GitHub.

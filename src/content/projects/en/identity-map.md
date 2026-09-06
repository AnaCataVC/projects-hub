---
title: "Identity Map"
description: "A monorepo containing two independent tools: an interactive React frontend and a powerful Python CLI backend to map your identity."
icon: "/project-icons/identitymap_icon.png"
githubUrl: "https://github.com/AnaCataVC/identity-map"
liveAppUrl: "https://identity-map.ana-catalina.com"
isLiveApp: true
technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Python", "NetworkX", "SQLModel", "Typer", "Graphviz", "SQLite"]
categories: ["Web Application", "CLI Tool", "Graph Theory"]
type: "web"
status: "Archived"
problem: "Most self-reflection tools are unstructured freeform text, with no way to represent identity — people, values, roles — as an explicit graph you can query or analyze mathematically."
solution: "A monorepo offering a standalone React frontend for visual graph exploration, and a separate Python CLI backend with NetworkX to compute and export the identity model."
learnings:
  - "Decoupling the visual interface from the data-processing backend creates more flexible and maintainable independent tools."
  - "Complex interactive visualizations need a stable physics engine (like d3-force) to avoid freezing the browser."
  - "Translating abstract mathematical concepts into visual interfaces is the best bridge between logic and UX."
---

### Monorepo Architecture: React Frontend & Python CLI

**Identity Map** splits concerns across two independent tools sharing a single repository:

*   **React 19 Frontend:** An interactive SPA that renders the identity graph and lets you explore relationships visually, persisting state to browser `localStorage`.
*   **Python CLI Backend:** A separate command-line tool built on **NetworkX** to compute the graph model, persisting it to **SQLite** via **SQLModel**, and exporting it independently of the visual layer.

### Force-Directed Graph Visualization

*   **Custom Force-Directed Physics Engine:** Node and edge positions are driven by a hand-rolled force simulation (Coulomb repulsion + spring edges), tuned to stay responsive instead of freezing the browser as the graph grows.
*   **Mathematics as UX:** Structural graph-theory concepts (nodes, edges, centrality) are translated into an interface built for self-exploration rather than academic analysis.

> **Note**: This project is archived — the source for both the frontend and the CLI is available on GitHub.

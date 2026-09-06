---
title: "Identity Map"
description: "A monorepo containing two independent tools: an interactive React frontend and a powerful Python CLI backend to map your identity."
icon: "/project-icons/identitymap_icon.png"
githubUrl: "https://github.com/AnaCataVC/identity-map"
liveAppUrl: "https://identity-map.ana-catalina.com"
isLiveApp: true
technologies: ["React 19", "Python", "Tailwind CSS", "SQLite"]
categories: ["Web Application", "CLI Tool", "Graph Theory"]
type: "web"
status: "Archived"
problem: "Exploring the intersection between mathematics and self-knowledge through structural data modeling and dynamic visual interfaces."
solution: "A monorepo offering a standalone React frontend for visual graph exploration, and a separate Python CLI backend with NetworkX to compute and export the identity model."
learnings:
  - "Decoupling the visual interface from the data-processing backend creates more flexible and maintainable independent tools."
  - "Complex interactive visualizations need a stable physics engine (like d3-force) to avoid freezing the browser."
  - "Translating abstract mathematical concepts into visual interfaces is the best bridge between logic and UX."
---

### Monorepo Architecture: React Frontend & Python CLI

**Identity Map** splits concerns across two independent tools sharing a single repository:

*   **React 19 Frontend:** An interactive SPA that renders the identity graph and lets you explore relationships visually, backed by **SQLite** for persistence.
*   **Python CLI Backend:** A separate command-line tool built on **NetworkX** to compute the graph model and export it independently of the visual layer.

### Force-Directed Graph Visualization

*   **d3-force Physics Engine:** Node and edge positions are driven by a force simulation, tuned to stay responsive instead of freezing the browser as the graph grows.
*   **Mathematics as UX:** Structural graph-theory concepts (nodes, edges, centrality) are translated into an interface built for self-exploration rather than academic analysis.

> **Note**: This project is archived — the source for both the frontend and the CLI is available on GitHub.

---
title: "Life Tracker Analytics"
description: "Privacy-focused Progressive Web App (PWA) to track and analyze life metrics and daily habits through local-first data visualizations."
icon: "/project-icons/lta_icon.png"
githubUrl: "https://github.com/AnaCataVC/life-tracker-analytics"
liveAppUrl: "https://life-tracker-analytics.ana-catalina.com"
isLiveApp: true
technologies: ["React 19", "TypeScript", "Tailwind CSS v4", "Dexie.js", "remoteStorage.js", "Recharts"]
categories: ["Data Visualization", "Analytics", "Personal Tool"]
type: "data-science"
status: "Active"
problem: "Understanding mathematically how daily habits impact quality of life, without handing over sensitive personal data to proprietary BaaS."
solution: "A custom analytical, local-first PWA dashboard that cross-references metrics locally to visualize hidden correlations, combining Dexie.js persistence with BYOD (Bring-Your-Own-Data) cloud sync."
learnings:
  - "Granular Entity Synchronization: Implemented conflict-safe entity merge algorithms to maintain multi-device consistency without proprietary backend servers."
  - "Type-Safe Local Persistence with Dexie.js: Unified relational IndexedDB storage with TypeScript for reactive and instantaneous browser queries."
  - "BYOD Cloud Architecture: Integrated remoteStorage.js to ensure complete user sovereignty and ownership of health and habits data."
  - "Meaningful Data Visualization: Built interactive visualizations with Recharts to uncover real multivariate correlations without statistical distortion."
---

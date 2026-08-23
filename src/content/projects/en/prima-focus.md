---
title: "Prima Focus"
description: "Native local-first Android mobile application focused on productivity through a predictive priority system, Jetpack Glance widgets, and P2P sync."
icon: "/project-icons/prima-focus-icon.png"
githubUrl: "https://github.com/AnaCataVC/prima-focus-showcase"
websiteUrl: "https://prima-focus.ana-catalina.com"
technologies: ["Kotlin", "Jetpack Compose", "Jetpack Glance", "Room Database", "Nearby Connections P2P", "Material Design 3"]
categories: ["Productivity", "Mobile", "Android"]
status: "Active"
problem: "Analysis paralysis and lack of focus when facing long, overwhelming to-do lists, plus the friction of needing to open the app just to view or complete priority tasks."
solution: "A privacy-focused (local-first) mobile application using a predictive scoring system for a single 'Today Task', interactive home screen widgets with Jetpack Glance (Top 3 and Quick Add), adaptive tablet split-views with calendar integration, and cloudless offline P2P synchronization."
learnings:
  - "Building interactive Android Home Screen Widgets with Jetpack Glance, supporting dynamic sizing and direct 1-tap task completion from the launcher."
  - "Architecting hardened offline P2P synchronization via Google Nearby Connections with clock-drift resilient LWW conflict resolution and Room DB v5 tombstones."
  - "Designing responsive, adaptive layouts in Jetpack Compose using WindowSizeClass for seamless phone-to-tablet split views."
  - "Implementing atomic task models, foreground service focus timers, and schema-versioned JSON backup/restore via Storage Access Framework (SAF)."
websiteActionText: "Download App"
---

> **Note**: The full source code is kept in a private repository, but I have created a public **Showcase** repository where you can explore the technical documentation and download the application's APK.

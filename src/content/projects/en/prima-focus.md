---
title: "Prima Focus"
description: "Local-first cross-platform application (native Android and Java desktop companion) focused on productivity through a predictive priority system, Jetpack Glance widgets, and P2P/LAN sync."
icon: "/project-icons/prima-focus-icon.png"
githubUrl: "https://github.com/AnaCataVC/prima-focus-showcase"
websiteUrl: "https://prima-focus.ana-catalina.com"
technologies: ["Kotlin", "Jetpack Compose", "Jetpack Glance", "Java Desktop", "Room Database", "Nearby Connections P2P", "LAN Sync"]
categories: ["Productivity", "Mobile", "Android", "Desktop"]
type: "mobile"
status: "Active"
problem: "Analysis paralysis and lack of focus when facing long, overwhelming to-do lists, plus the friction of needing to open the app just to view or complete priority tasks."
solution: "A privacy-centered (local-first) productivity suite consisting of a native Android app and a companion Java desktop client, featuring secure P2P/LAN sync, predictive 'Today Task' scoring, interactive Jetpack Glance widgets, and adaptive tablet views."
learnings:
  - "Modular cross-platform architecture sharing domain core (:shared) across native Android and Java desktop (:desktop) with secure LAN sync."
  - "Building interactive Android Home Screen Widgets with Jetpack Glance, supporting dynamic sizing and direct 1-tap task completion from the launcher."
  - "Architecting hardened offline P2P synchronization via Google Nearby Connections with clock-drift resilient LWW conflict resolution and Room DB v5 tombstones."
  - "Designing responsive, adaptive layouts in Jetpack Compose using WindowSizeClass for seamless phone-to-tablet split views."
websiteActionText: "Download App"
---

> **Note**: The full source code is kept in a private repository, but I have created a public **Showcase** repository where you can explore the technical documentation and download the APK and desktop standalone bundle.

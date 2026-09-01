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

### Modular Architecture & Shared Domain Core

**Prima Focus** is a cross-platform productivity suite architected around clean boundary separation:

*   **Shared Domain (`:shared`):** Pure Kotlin module encapsulating business logic, domain models, and a predictive scoring algorithm that calculates the optimal "Today's Task" without cloud dependency.
*   **Native Android Client (`:app`):** 100% **Jetpack Compose** UI with adaptive multi-window support (`WindowSizeClass`) providing custom split-pane layouts for tablets and foldable devices.
*   **Java Desktop Companion (`:desktop`):** Lightweight desktop client enabling zero-friction task capture and real-time bidirectional sync over the local network (LAN).

### Offline P2P Synchronization & Glance Widgets

*   **Google Nearby Connections & Room DB v5:** Serverless device-to-device synchronization operating completely offline, utilizing *Last-Write-Wins* (LWW) conflict resolution and database *tombstones* for deterministic deletions.
*   **Jetpack Glance Widgets:** Interactive Android home screen widgets that allow users to inspect and complete priority tasks in 1-tap directly from the launcher.

> **Note**: The full source code is kept in a private repository, but I have created a public **Showcase** repository where you can explore the technical documentation and download the APK and desktop standalone bundle.

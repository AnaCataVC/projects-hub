---
title: "Prima Focus"
description: "Local-first native Android productivity application built with Kotlin Multiplatform, focused on productivity through a predictive priority system, Jetpack Glance widgets, and peer-to-peer sync via Google Nearby Connections."
lastUpdated: 2026-09-24
icon: "/project-icons/prima-focus-icon.png"
githubUrl: "https://github.com/AnaCataVC/prima-focus"
websiteUrl: "https://prima-focus.ana-catalina.com"
technologies: ["Kotlin Multiplatform", "Jetpack Compose", "Jetpack Glance", "Room Database v6", "P2P Nearby Connections"]
categories: ["Productivity", "Mobile", "Android"]
type: "mobile"
status: "Active"
problem: "Analysis paralysis and lack of focus when facing long, overwhelming to-do lists, plus the friction of needing to open the app just to view or complete priority tasks."
solution: "A local-first native Android productivity suite featuring predictive 'Today Task' scoring, Room Database v6, Glance widgets, clock-drift resilient LWW resolution, and battery-safe peer-to-peer sync via Google Nearby Connections."
learnings:
  - "Room Database v6 Persistence & Clock Drift: Migration to Room v6 with automated 30-day tombstone garbage collection and clock-drift resilient LWW conflict resolution."
  - "Modular Kotlin Multiplatform Architecture: Shared domain core (:shared) with predictive priority scoring and deterministic conflict resolution, decoupled from the Android UI layer."
  - "Interactive Android Widgets: Home screen widgets built with Jetpack Glance supporting dynamic sizing and 1-tap task completion from the launcher."
  - "Scope Discipline: Deprecated the Java/Swing desktop companion and its LAN sync protocol (embedded HTTP server, HMAC-SHA256 pairing) to refocus the codebase exclusively on native Android, removing over 2,400 lines of unused code."
websiteActionText: "Download App"
---

### Modular KMP Architecture & Room v6 Persistence

**Prima Focus** is a local-first native Android productivity suite built with strict architectural boundaries:

*   **Shared Domain Core KMP (`:shared`):** Pure Kotlin domain module encapsulating predictive priority scoring and deterministic *Last-Write-Wins* (LWW) conflict resolution resilient to device clock drift.
*   **Native Android (`:app`) & Room v6:** Declarative **Jetpack Compose** UI with adaptive tablet layouts and relational persistence in Room v6 supporting soft-delete tombstones and automated 30-day cleanup.

### Peer-to-Peer Sync & Glance Widgets

*   **Nearby Connections P2P Sync:** Host/client mode selection via Google Nearby Connections for offline mobile-to-mobile sync, backed by a 45-second auto-timeout for battery conservation and a 5 MB payload limit.
*   **Jetpack Glance Widgets:** Interactive home screen widgets for instantaneous task completion at 1-tap directly from the launcher.

> **Note**: The full source code, multi-module KMP architecture, and official release packages are publicly available in the main repository under a Source-Available license.

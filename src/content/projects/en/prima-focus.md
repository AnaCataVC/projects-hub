---
title: "Prima Focus"
description: "Local-first cross-platform application (native Android and Java desktop companion) focused on productivity through a predictive priority system, Jetpack Glance widgets, and P2P/LAN sync."
icon: "/project-icons/prima-focus-icon.png"
githubUrl: "https://github.com/AnaCataVC/prima-focus-showcase"
websiteUrl: "https://prima-focus.ana-catalina.com"
technologies: ["Kotlin Multiplatform", "Jetpack Compose", "Jetpack Glance", "Room Database v6", "HMAC-SHA256 LAN Protocol", "P2P Nearby Connections"]
categories: ["Productivity", "Mobile", "Android", "Desktop"]
type: "mobile"
status: "Active"
problem: "Analysis paralysis and lack of focus when facing long, overwhelming to-do lists, plus the friction of needing to open the app just to view or complete priority tasks."
solution: "A local-first productivity suite (native Android and desktop companion) featuring authenticated LAN sync with HMAC-SHA256 and PIN hashing, Room Database v6, predictive 'Today Task' scoring, Glance widgets, and clock-drift resilient LWW resolution."
learnings:
  - "Cryptographic LAN Synchronization: Embedded HTTP desktop sync server (port 8765) with 6-digit PIN hashing, per-request HMAC-SHA256 payload signatures, and brute-force mitigation."
  - "Room Database v6 Persistence & Clock Drift: Migration to Room v6 with automated 30-day tombstone garbage collection and clock-drift resilient LWW conflict resolution."
  - "Modular Kotlin Multiplatform Architecture: Shared domain core (:shared) across native Android and desktop companion with non-regressive task completion."
  - "Interactive Android Widgets: Home screen widgets built with Jetpack Glance supporting dynamic sizing and 1-tap task completion from the launcher."
websiteActionText: "Download App"
---

### Modular KMP Architecture & Room v6 Persistence

**Prima Focus** is a local-first cross-platform productivity suite built with strict architectural boundaries:

*   **Shared Domain Core KMP (`:shared`):** Pure Kotlin domain module encapsulating predictive priority scoring and deterministic *Last-Write-Wins* (LWW) conflict resolution resilient to device clock drift.
*   **Native Android (`:app`) & Room v6:** Declarative **Jetpack Compose** UI with adaptive tablet layouts and relational persistence in Room v6 supporting soft-delete tombstones and automated 30-day cleanup.

### Cryptographic LAN/P2P Sync & Glance Widgets

*   **HMAC-SHA256 Authenticated LAN Sync:** Local network synchronization between mobile and desktop companion (`DesktopSyncServer`, port 8765) secured via 6-digit pairing PIN and per-request cryptographic HMAC signatures.
*   **Jetpack Glance Widgets & Nearby P2P:** Interactive home screen widgets for instantaneous task completion and host/client mode selection for offline P2P sync via Google Nearby Connections.

> **Note**: The full source code is kept in a private repository, but I have created a public **Showcase** repository where you can explore the technical documentation and download the APK and desktop standalone bundle.

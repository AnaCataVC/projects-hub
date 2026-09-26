---
title: "Por Comprar — Shopping List Helper"
description: "100% offline-first native Android mobile application to manage recurring household purchases and plan shopping trips by store."
lastUpdated: 2026-09-26
icon: "/project-icons/shopping-list-helper-icon.png"
githubUrl: "https://github.com/AnaCataVC/shopping-list-helper"
websiteUrl: "https://shopping-list-helper.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Compose", "Material Design 3", "Room Database"]
categories: ["Mobile", "Productivity", "Android", "Home"]
type: "mobile"
status: "Active"
problem: "Forgetting recurring household purchases (groceries, toiletries, etc.) and wasting time building the shopping list because it's unclear what's missing for a given store."
solution: "A local-first, cloud-free application with per-store categories, automatic recurrence rules (every N days) that bring items back once due, and a 'Going shopping' mode that filters only what's pending for one category, sorted by urgency."
learnings:
  - "Lightweight Reactive Flow Pipeline: centralizing Room Flow observation in MainActivity and propagating state to pure composable screens, avoiding external navigation/DI libraries for a focused utility."
  - "On-Demand Due Calculations: due dates are evaluated deterministically at UI render time (Item.isDue(now)), avoiding battery-draining WorkManager workers."
  - "Atomic Relational Operations: using Room @Transaction to atomically move items across foreign-key-restricted categories prior to deletion eliminates database integrity corruption."
  - "Resilient Compose State: form inputs use rememberSaveable to withstand configuration changes and screen rotations without heavyweight ViewModels."
product:
  tagline: "Your shopping list, always ready"
  intro: "Organize recurring household purchases by store and urgency, with no accounts and no internet connection required."
  features:
    - icon: "ListChecks"
      title: "Items by urgency"
      text: "Organize each pending item into 3 urgency tiers (high, medium, low), with optional quantity and notes."
    - icon: "Repeat"
      title: "Recurring purchases"
      text: "Set a recurrence rule every N days. Marking an item as bought hides it until it automatically becomes due again."
    - icon: "Store"
      title: "'Going Shopping' mode"
      text: "Filter by store or category to see only due items, sorted by urgency. Check off items individually or the whole list in one tap."
    - icon: "Tags"
      title: "Editable categories"
      text: "Custom names and emoji icons, with referential integrity protection: deleting a populated category requires relocating its items first."
    - icon: "FileDown"
      title: "Local JSON backup"
      text: "Exports the full application state using Android's Storage Access Framework, requiring zero runtime storage permissions."
    - icon: "Languages"
      title: "Bilingual with light/dark theme"
      text: "Full interface in English and Spanish, with a Material Design 3 palette that follows the system or can be set manually."
  platforms: ["Android"]
  downloadUrl: "https://github.com/AnaCataVC/shopping-list-helper/releases"
  downloadLabel: "Download APK"
---

### Offline-First Architecture With No Unnecessary Dependencies

**Por Comprar** is a single-module Android app: Kotlin, Jetpack Compose with Material 3, and Room — no backend, no dependency-injection framework, no navigation library. All state is observed as a reactive `Flow` from `MainActivity` and propagated down to pure composable screens, avoiding the complexity of external libraries for a focused utility.

*   **No background processes:** due items are calculated deterministically at render time (`Item.isDue(now)`), avoiding `WorkManager` and saving battery.
*   **Transactional referential integrity:** relocating items and deleting a category happens inside a single Room transaction, backed by a foreign key restriction (`RESTRICT`) that prevents orphaned data.
*   **100% private:** no accounts, telemetry, or server communication; all data stays on the device.

### Shopping Cycle & Localization

*   **Automatic recurrence:** buying an item with a recurrence rule hides it and brings it back into the list once it's due again, with no manual intervention.
*   **Bilingual interface:** all UI text lives in English and Spanish string resources, with support for Android 13+'s per-app language setting.

> **Note**: You can explore the source code and build the APK directly from the GitHub repository.

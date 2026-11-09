---
title: "Android Icons Admin"
icon: "/project-icons/android-icon-admin-icon.png"
description: "Deterministic, local-first icon administration utility for Android 8.0 to 16 and Samsung One UI 8.5 that automates icon styling via badge-free widgets, silent shortcuts, and Theme Park export."
lastUpdated: 2026-11-09
githubUrl: "https://github.com/AnaCataVC/android-icon-admin"
websiteUrl: "https://android-icon-admin.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin 2.1", "Android 8.0-16", "Jetpack Compose", "Material 3", "One UI 8.5", "Cleanroom TDD", "JUnit 5"]
categories: ["Android", "Tools", "Customization", "Mobile"]
type: "mobile"
status: "In Development"
problem: "Customizing app icons on Android has traditionally required root privileges, invasive third-party launchers, or shortcuts with ugly creator badges, along with double-container clipping artifacts on adaptive icons and a lack of transactional undo."
solution: "A local-first Kotlin and Jetpack Compose application architected via Cleanroom TDD with a pure JVM core library (:core). Features permission-safe app discovery, clean adaptive layer extraction (foreground and monochrome), a deterministic 4-stage visual pipeline (normalization, Rec.709 tonal treatment, 4x4 supersampled superellipses, and Porter-Duff compositing), native 1x1 badge-free widgets, silent in-place shortcut sync, direct Samsung Theme Park export, and an atomic transactional undo store."
learnings:
  - "Strict Adherence to Android Security Boundaries: Unrooted apps cannot alter external APK packages or private launcher caches. AndroidIconsAdmin implements the three legitimate OS delivery routes: badge-free home widgets, silent in-place ShortcutManagerCompat sync, and MediaStore icon pack exports."
  - "Pure Kotlin (:core JVM) Domain Isolation: Decoupling the image processing engine from android.graphics.Bitmap into RgbaCanvas allows running full TDD unit test suites in sub-seconds on standard JVMs without emulators or Robolectric overhead."
  - "Double-Container Elimination on Adaptive Icons: By isolating the raw foreground layer from AdaptiveIconDrawable and calculating bounding boxes via alpha thresholding (alpha >= 16), undesirable nested framing and OEM clipping borders are completely eradicated."
  - "Native Samsung One UI 8.5 & Theme Park Integration: Direct 512x512 album generation in Pictures/AndroidIconsAdmin/ via MediaStore (zero permissions needed on Android 10+) combined with standard icon pack intent filters enables seamless system-wide One UI styling."
websiteActionText: "View Page"
product:
  tagline: "Style and harmony for your app icons"
  intro: "Style your Android and One UI app icons with badge-free widgets, deterministic visual pipelines, and direct export for Samsung Good Lock Theme Park."
  features:
    - icon: "Smartphone"
      title: "Badge-Free 1x1 Widgets"
      text: "Native AppWidgetProvider widgets with synchronized RemoteViews that display no creator app badge, fully compatible with Samsung One UI 8.5 Home Up."
    - icon: "SlidersHorizontal"
      title: "Rule Engine & Normalization"
      text: "Deterministic 4-stage visual pipeline: bilinear normalization, Rec.709 tonal adjustments, 4x4 supersampled superellipses, and Porter-Duff alpha compositing."
    - icon: "Layers"
      title: "Clean Adaptive Layer Extraction"
      text: "Isolates raw foreground and monochrome layers without vendor masks, preventing double-border clipping and ugly container nesting."
    - icon: "PackageCheck"
      title: "Theme Park & Launcher Export"
      text: "Generates structured ZIP bundles with appfilter.xml and exports 512x512 PNG albums to MediaStore for instant assignment inside Samsung Good Lock Theme Park."
    - icon: "RotateCcw"
      title: "Atomic Transactional Undo"
      text: "Atomic file persistence (.tmp to target with .bak recovery) enabling instantaneous rollback of any single app, batch, or all icons to original snapshots."
    - icon: "ShieldCheck"
      title: "100% Local & Private"
      text: "Zero invasive permissions (no QUERY_ALL_PACKAGES), zero network calls, zero telemetry, and zero root or system modifications required."
  notice:
    title: "Android Security & Reliability"
    text: "Android Icons Admin requires no root access and no dangerous permissions. It operates strictly within official Android APIs to guarantee absolute stability and privacy."
  catalog:
    title: "Delivery & Customization Mechanisms"
    items:
      - title: "Badge-Free Home Widgets"
        description: "Place customized icons in your dock and home screens without badge overlays via AppWidgetProvider."
        tags: ["Widgets", "Zero-Badge"]
      - title: "In-Place Shortcut Sync"
        description: "Batch update all pinned home screen shortcuts simultaneously in one step via ShortcutManagerCompat."
        tags: ["Shortcuts", "Silent Sync"]
      - title: "Samsung Theme Park Packs"
        description: "Export icon albums ready to be applied system-wide across One UI using Samsung Good Lock."
        tags: ["Samsung One UI", "Theme Park"]
  faq:
    - question: "Does it require root access or system modifications?"
      answer: "No. It runs on any device with Android 8.0 to 16 without root, utilizing native badge-free widgets, system shortcuts, or Theme Park albums."
    - question: "How does it integrate with Samsung Galaxy and One UI 8.5?"
      answer: "It exports processed icons directly to your gallery via MediaStore and bundles icon pack intent filters for direct customization in Good Lock Theme Park."
    - question: "Can changes be easily reverted?"
      answer: "Yes. It maintains original snapshots and an atomic undo store that allows restoring original icons individually or in bulk at any time."
  platforms: ["Android (8.0 to 16)", "Samsung One UI 8.5"]
  downloadUrl: "https://github.com/AnaCataVC/android-icon-admin/releases/latest"
  downloadLabel: "Download APK Release"
---

### Deterministic Styling for Android & One UI

**AndroidIconsAdmin** brings the non-destructive, automated visual styling philosophy of [Windows Icons Admin](https://github.com/AnaCataVC/windows-icons-admin) to Android:

*   **Zero Root, Zero Privilege Hacks:** Operates strictly within the Android security model (SELinux and UID sandboxing), leveraging the three official routes for home screen customization: 1x1 badge-free widgets, background-updated pinned shortcuts, and icon pack export for Samsung One UI Theme Park and compatible launchers.
*   **Deterministic Graphics Pipeline (:core):** Built in pure Kotlin and decoupled from Android platform APIs via `RgbaCanvas`, featuring alpha-threshold bilinear normalization, Rec.709 tonal adjustments, and 4x4 subpixel supersampled containers.
*   **Transactional Undo:** Preserves original icon snapshots and persists every styling configuration in atomic JSON files with `.bak` recovery for safe, instantaneous rollbacks.

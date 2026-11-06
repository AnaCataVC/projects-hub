---
title: "Meds Reminder"
description: "100% offline-first native Android mobile application for medication adherence and multi-profile dosage reminders with high-precision alarms."
lastUpdated: 2026-11-05
icon: "/project-icons/meds-reminder-icon.png"
githubUrl: "https://github.com/AnaCataVC/meds-reminder"
websiteUrl: "https://meds-reminder.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Compose", "Material Design 3", "Room Database", "Koin", "AlarmManager"]
categories: ["Mobile", "Health", "Android", "Productivity"]
type: "mobile"
status: "Active"
problem: "Medication forgetfulness across multi-member family profiles and inconsistent alarm reliability on Android due to aggressive battery-saving modes (Doze mode)."
solution: "A local-first, privacy-respecting Android application featuring multi-profile management, exact alarms that bypass Doze mode, interactive lockscreen popups (`AlarmActivity`) with granular per-medication confirmation, silent pre-alarms with quick actions, per-person alarm suspension, configurable cumulative snooze, clear differentiation between taken and skipped doses with instant reactivation, and a fully deterministic Room-as-single-source-of-truth alarm engine."
learnings:
  - "Atomic Partial Intake Resolution in Scheduled Medication Groups (Room Schema v6): Ephemeral per-medication state tracking in many-to-many cross references (medication_group_cross_ref) enabling granular intake confirmations or skips directly from the fullscreen AlarmActivity without de-synchronizing system schedulers or home screen widgets."
  - "Deterministic Skip vs. Taken State Differentiation with Reactivation (Room Auto-Migration v5): Clean architectural separation of intake statuses using last_skipped_date and instant schedule reactivation, preserving treatment integrity while offering reactive recovery from accidental skips."
  - "Intake Lifecycle & Cumulative Snooze Management: Calculating snoozes relative to scheduled alarm time with configurable cumulative intervals, reactive cancellation of active snoozes, and Room DB sync when doses are logged early."
  - "Per-Person Alarm Suspension: Implementing temporary notification and alarm suppression per profile without corrupting underlying treatment schedules."
  - "Ensuring sub-second alarm accuracy on Android 14/15/16 using AlarmManager.setAlarmClock() and USE_EXACT_ALARM under healthcare exemption guidelines."
  - "Decoupled Widget Architecture: Strict isolation of home launcher widget configuration activities and synchronous Room DB state commit to ensure crash-free rasterized RemoteViews previews."
  - "Resolving Android 8.0+ notification channel sound immutability by dynamically generating deterministic channels keyed by custom ringtone URI hashes."
websiteActionText: "View Page"
product:
  tagline: "Keep your medications on track, stress-free"
  intro: "Manage doses for yourself and your family with gentle pre-alerts, reliable lockscreen alarms, and full privacy with all health data stored on your phone."
  features:
    - icon: "ShieldCheck"
      title: "100% Offline & Private"
      text: "Zero telemetry, zero external servers, and zero cloud storage. Your medical data stays strictly within your phone's local SQLite (Room) database."
    - icon: "AlarmClock"
      title: "Full-Screen Lockscreen Alarms"
      text: "Launches an interactive AlarmActivity directly over the lockscreen with granular per-medication checkboxes, powered by a high-priority setAlarmClock() trigger."
    - icon: "Users"
      title: "Multi-Profile Family Care"
      text: "Manage treatments for parents, children, or partners from one single device with independent catalogs, exact dosages, and custom schedules."
    - icon: "BellRing"
      title: "Silent Pre-Alarms"
      text: "Get a notification 15 or 30 minutes before a dose is due, with one-tap actions to mark it as taken or skip it for today, avoiding sound interruptions."
    - icon: "PauseCircle"
      title: "Smart Suspension & Cumulative Snooze"
      text: "Pause alarms for 6 hours or snooze doses with configurable cumulative minutes and a dedicated options sheet, cancelling reactively upon logging intake."
    - icon: "CheckCheck"
      title: "Individual Intake & Reactivation"
      text: "Confirm or skip specific medications within multi-drug schedules, with instant one-tap schedule reactivation for doses skipped by mistake."
    - icon: "FileJson"
      title: "Atomic JSON SAF Backup"
      text: "Export and import your entire database atomically via Android's Storage Access Framework. No proprietary dependencies, no lock-in."
  faq:
    - question: "Is my health data ever uploaded to a server or the cloud?"
      answer: "No. Meds Reminder works 100% offline and stores everything in a local SQLite database on your phone, with optional local JSON backups."
    - question: "Will the alarms still ring if battery saver or Doze mode is on?"
      answer: "Yes. It schedules exact system alarm clocks that wake the device from Doze mode and display an interactive alert right over the lockscreen."
    - question: "Can I track medications for multiple family members?"
      answer: "Yes, you can create separate profiles for parents, children, or partners, each with their own medication catalog, schedules, and pause controls."
  platforms: ["Android"]
  downloadUrl: "https://github.com/AnaCataVC/meds-reminder/releases/latest"
  downloadLabel: "Download APK Release"
---

### Offline-First Architecture & Alarm Reliability

**Meds Reminder** is engineered for 100% medication adherence reliability operating completely offline:

*   **Doze-Resilient Precision with `AlarmManager`:** Built with `setAlarmClock()` and `USE_EXACT_ALARM` permissions under health categorization, ensuring exact second-precision triggers even when Android enters deep sleep (*Doze mode*).
*   **Lock Screen Full-Screen Overlay (`AlarmActivity`):** Leverages `showWhenLocked` and `turnScreenOn` flags to surface critical dosage reminders above the keyguard without manual unlocking, featuring interactive checkboxes for granular intake confirmation within scheduled groups.
*   **Multi-Profile Relational Room DB:** Clean data layer powered by Koin DI and Kotlin Coroutines/Flow to model multi-family regimens and flexible dosage intervals, protected by verified Room auto-migrations.

### Lifecycle Management, Snooze & Granular Intake

*   **Individual Intake Confirmation & Distinct Skip States:** Allows confirming specific medicines in a shared time slot while skipping or postponing others, coupled with clear skipped-state status chips and instant schedule reactivation.
*   **Intelligent Early-Dose Resolution & Cumulative Snooze:** State synchronization algorithm that reconciles Room state upon early dosage logging, configurable cumulative snoozes (`SnoozeOptionsSheet`), and reactive cancellation of pending alerts.
*   **Dynamic Sound Channels on Android 8.0+:** Generates distinct notification channels hashed by custom audio URI on-the-fly, bypassing Android's built-in channel audio immutability.

> **Note**: You can explore the source code, review technical documentation, and build the APK directly from the GitHub repository.

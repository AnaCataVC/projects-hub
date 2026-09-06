---
title: "Meds Reminder"
description: "100% offline-first native Android mobile application for medication adherence and multi-profile dosage reminders with high-precision alarms."
icon: "/project-icons/meds-reminder-icon.png"
githubUrl: "https://github.com/AnaCataVC/meds-reminder"
websiteUrl: "https://meds-reminder.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Compose", "Material Design 3", "Room Database", "Koin", "AlarmManager"]
categories: ["Mobile", "Health", "Android", "Productivity"]
type: "mobile"
status: "Active"
problem: "Medication forgetfulness across multi-member family profiles and inconsistent alarm reliability on Android due to aggressive battery-saving modes (Doze mode)."
solution: "A local-first, privacy-respecting Android application featuring multi-profile management, exact alarms that bypass Doze mode, lockscreen popups (AlarmActivity), pre-alarm quick-actions, per-person alarm suspension, early intake resolution, and a fully deterministic Room-as-single-source-of-truth alarm engine with zero artificial delays."
learnings:
  - "Early Intake Lifecycle Management: Synchronizing in-memory state and Room DB to automatically cancel active snoozes and upcoming pre-alarms when doses are logged ahead of time."
  - "Per-Person Alarm Suspension: Implementing temporary notification and alarm suppression per profile without corrupting underlying treatment schedules."
  - "Ensuring sub-second alarm accuracy on Android 14/15/16 using AlarmManager.setAlarmClock() and USE_EXACT_ALARM under healthcare exemption guidelines."
  - "Resolving Android 8.0+ notification channel sound immutability by dynamically generating deterministic channels keyed by custom ringtone URI hashes."
websiteActionText: "View Page"
---

### Offline-First Architecture & Alarm Reliability

**Meds Reminder** is engineered for 100% medication adherence reliability operating completely offline:

*   **Doze-Resilient Precision with `AlarmManager`:** Built with `setAlarmClock()` and `USE_EXACT_ALARM` permissions under health categorization, ensuring exact second-precision triggers even when Android enters deep sleep (*Doze mode*).
*   **Lock Screen Full-Screen Overlay (`AlarmActivity`):** Leverages `showWhenLocked` and `turnScreenOn` flags to surface critical dosage reminders above the keyguard without requiring manual unlocking.
*   **Multi-Profile Relational Room DB:** Clean data layer powered by Koin DI and Kotlin Coroutines/Flow to model multi-family regimens and flexible dosage intervals.

### Lifecycle Management & Dynamic Notification Channels

*   **Intelligent Early-Dose Resolution:** State synchronization algorithm that detects when medication was taken ahead of schedule, automatically cancelling pending pre-alarms and snoozes to eliminate redundant notifications.
*   **Dynamic Sound Channels on Android 8.0+:** Generates distinct notification channels hashed by custom audio URI on-the-fly, bypassing Android's built-in channel audio immutability.

> **Note**: You can explore the source code, review technical documentation, and build the APK directly from the GitHub repository.

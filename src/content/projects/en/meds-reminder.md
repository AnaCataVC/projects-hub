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
solution: "A local-first, privacy-respecting Android application featuring multi-profile management, exact alarms that bypass Doze mode, a lockscreen popup (AlarmActivity), silent pre-alarm notifications with direct logging, and atomic SAF JSON backups."
learnings:
  - "Ensuring sub-second alarm accuracy on Android 14/15/16 using AlarmManager.setAlarmClock() and USE_EXACT_ALARM under healthcare exemption guidelines."
  - "Resolving Android 8.0+ notification channel sound immutability by dynamically generating deterministic channels keyed by custom ringtone URI hashes."
  - "Designing declarative Compose UI with Material 3 for interactive full-screen alarms over lockscreens (setShowWhenLocked and setTurnScreenOn)."
  - "Maintaining robust local persistence with Room (KSP) and schema-versioned atomic backups via kotlinx.serialization and Storage Access Framework (SAF)."
websiteActionText: "View Page"
---

> **Note**: You can explore the source code, review technical documentation, and build the APK directly from the GitHub repository.

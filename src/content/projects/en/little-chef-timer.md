---
title: "Little Chef Timer"
description: "100% offline Android kitchen timer with exact alarms that fire even when the phone is locked, in Doze mode, or after the app has been killed by the system."
lastUpdated: 2026-09-26
icon: "/project-icons/little-chef-timer-icon.png"
githubUrl: "https://github.com/AnaCataVC/little-chef-timer"
websiteUrl: "https://little-chef-timer.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Compose", "Material Design 3", "SharedPreferences", "AlarmManager", "Storage Access Framework"]
categories: ["Mobile", "Cooking", "Android", "Productivity"]
type: "mobile"
status: "In Development"
problem: "Generic kitchen timers don't distinguish between preparations, lose the countdown if the system kills the app or the phone reboots, and their alarm can fail due to Android's Doze battery-saving mode."
solution: "An offline app that stores custom recipes with an emoji, notes and an exact duration, and schedules the alarm with AlarmManager.setAlarmClock so it fires on time even with the screen locked or in Doze mode. The remaining time is derived from a persisted end timestamp, so it survives process death without drift, with no foreground service running in the background."
learnings:
  - "Drift-free countdown: remaining time is derived mathematically from a persisted end timestamp (endAtMillis) in SharedPreferences, instead of a counter that could be lost if the process dies."
  - "Exact alarms without invasive permissions: AlarmManager.setAlarmClock fires precisely even in Doze mode, without requesting SCHEDULE_EXACT_ALARM."
  - "Reactive UI without polling: a SharedPreferences.OnSharedPreferenceChangeListener wired to a Compose DisposableEffect updates the UI only when state changes, with no periodic disk reads."
  - "Per-sound notification channels: since a channel's sound is immutable once created, each chosen ringtone gets its own channel (alarm_<hash>), with older ones deleted."
product:
  tagline: "The kitchen timer that never forgets"
  intro: "Save your recipes with their exact cook time and let the alarm fire on schedule, even if the phone is locked or the app is closed."
  features:
    - icon: "ChefHat"
      title: "Custom recipes"
      text: "Register each preparation with a title, emoji, cooking notes and an exact duration, ready to reuse anytime."
    - icon: "BellRing"
      title: "Exact alarms"
      text: "AlarmManager.setAlarmClock fires on the second, even with Doze mode active, without requiring invasive permissions."
    - icon: "RefreshCw"
      title: "Resilient to process death"
      text: "Remaining time is computed against a persisted end timestamp, so it survives the system killing the app or a device reboot."
    - icon: "Palette"
      title: "Live theming and bilingual UI"
      text: "A lilac/pink palette in Light, Dark, or System theme, with live Spanish/English language switching, no restart needed."
    - icon: "ShieldCheck"
      title: "Backup without broad permissions"
      text: "Export and import your recipes as JSON via the Storage Access Framework, without requesting general storage access."
  faq:
    - question: "Do I need an internet connection to use it?"
      answer: "No. Little Chef Timer works 100% offline: everything is stored locally on the device."
    - question: "Does the alarm still fire if my screen is locked or battery saver is on?"
      answer: "Yes. It uses AlarmManager.setAlarmClock, which fires precisely even in Doze mode, with no special permissions needed."
    - question: "Can I back up my recipes if I switch phones?"
      answer: "Yes, you can export and import them as a JSON file using the system's file picker."
  platforms: ["Android"]
  downloadUrl: "https://github.com/AnaCataVC/little-chef-timer/releases"
  downloadLabel: "Download APK"
---

### Architecture Without Room or a Foreground Service

**Little Chef Timer** is a single-module app designed to consume zero battery while the timer is running:

*   **Simple persistence in `SharedPreferences`:** the recipe catalog is a short list, so it's stored as validated JSON in preferences, avoiding the overhead of a relational schema and its migrations.
*   **The system's own alarm, not a custom service:** the countdown is computed as `endAtMillis - now`, and `AlarmManager` handles waking the device at the exact moment, with zero CPU cycles spent while the phone is idle.
*   **Insistent notification:** when it fires, a high-importance notification with `FLAG_INSISTENT` loops the sound until the user taps **Stop**.

### Personalization and Backup

*   **Custom recipes with emoji and notes:** each preparation has a title, emoji, cooking notes, and an exact duration.
*   **Live theming and bilingual UI:** a lilac/pink palette in Light, Dark, or System theme, with Spanish/English language switching without restarting the app.
*   **Backup without broad permissions:** export and import recipes as JSON via the Storage Access Framework, without requesting general storage access.

> **Note**: You can explore the source code and technical documentation directly in the GitHub repository.

---
title: "Rest Your Eyes"
description: "Native Android application designed to prevent eye strain caused by prolonged mobile device usage."
icon: "/project-icons/rest-your-eyes-icon.png"
githubUrl: "https://github.com/AnaCataVC/rest-your-eyes"
websiteUrl: "https://rest-your-eyes.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Compose", "Foreground Services", "Broadcast Receivers", "Jetpack DataStore", "MVVM"]
categories: ["Mobile", "Health", "Android"]
type: "mobile"
status: "Active"
problem: "Eye strain from prolonged, continuous mobile screen use, with no built-in way to track real screen-on time or receive proactive rest reminders — and Android 14+'s stricter background service restrictions make naive polling solutions unreliable."
solution: "A native Android app that enforces the 20-20-20 rule by tracking real screen-on time via a Foreground Service and BroadcastReceivers (ACTION_SCREEN_ON/OFF), pausing automatically when the device is locked to avoid battery drain. It overlays a gentle SYSTEM_ALERT_WINDOW reminder with customizable sound alerts and auto-dismiss, and declares the Android 14+ `health` foreground service type so the OS never kills the monitor mid-session."
learnings:
  - "Building an app capable of tracking real device usage (screen on/off time)."
  - "Using Foreground Services and Broadcast Receivers in Android for background monitoring."
  - "Implementing system-level overlay notifications (SYSTEM_ALERT_WINDOW) to proactively interact with the user."
websiteActionText: "Visit Page"
---

### Background Architecture & Screen Time Tracking

**Rest Your Eyes** enforces the **20-20-20 optical rule** (rest eyes for 20 seconds every 20 minutes of continuous screen use) via a high-efficiency native Android background service:

*   **Foreground Service & BroadcastReceivers:** Real-time state tracking listening to `ACTION_SCREEN_ON` and `ACTION_SCREEN_OFF` events to aggregate only genuine active screen-on time.
*   **Proactive Overlays (`SYSTEM_ALERT_WINDOW`):** Renders a gentle, translucent Jetpack Compose overlay prompting eye relaxation without forcibly crashing active tasks.

### Battery & Resource Optimization

*   **Zero Battery Drain when Locked:** The timer automatically pauses when the device is locked or asleep, avoiding CPU WakeLocks and preserving battery longevity.
*   **Android 14+ Compliance (`FOREGROUND_SERVICE_HEALTH`):** The Foreground Service explicitly declares the `health` service type, satisfying Android 14+'s stricter background process restrictions and preventing the OS from killing the monitor during active sessions.

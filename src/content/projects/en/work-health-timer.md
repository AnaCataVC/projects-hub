---
title: "Work Health Timer"
icon: "/project-icons/work-health-timer-icon.png"
description: "A lightweight Windows desktop application that sends periodic health alerts while you work."
githubUrl: "https://github.com/AnaCataVC/work-health-timer"
websiteUrl: "https://work-health-timer.ana-catalina.com/"
isLiveApp: true
technologies: ["Python", "Tkinter", "PyInstaller", "Windows API"]
categories: ["Health", "Desktop", "Windows"]
status: "Active"
problem: "Forgetting to take breaks or maintain good posture during long computer sessions, leading to eye strain and back pain."
solution: "A desktop application that runs in the background, detects actual user activity, and overlays gentle reminders for eye rests and posture checks based on configurable intervals."
learnings:
  - "Native Windows Integration: Interacting directly with the Windows API using ctypes to accurately detect user idle time."
  - "Resource Optimization: Designing a background application that consumes minimal system resources."
  - "Packaging and Distribution: Overcoming the challenges of bundling a Python application into a standalone .exe using PyInstaller."
  - "Concurrency & IPC Quirks: Managing single-instance locks with a robust TCP socket-based mechanism."
websiteActionText: "Visit Website"
---

> **Note**: You can download the pre-compiled standalone `.exe` installer from the GitHub Releases page. No Python installation is required to run the application.

---
title: "Screen Health Guardian"
icon: "/project-icons/screen-health-guardian-icon.png"
description: "High-performance, ultra-lightweight native Windows desktop application designed to promote ocular and postural wellness by tracking real user activity without system overhead."
githubUrl: "https://github.com/AnaCataVC/screen-health-guardian"
websiteUrl: "https://screen-health-guardian.ana-catalina.com"
isLiveApp: false
technologies: ["C#", ".NET 9", "WPF", "XAML", "Win32 API", "H.NotifyIcon", "Fluent Design"]
categories: ["Health", "Desktop", "Windows", "Productivity"]
status: "Active"
problem: "Digital eye strain and postural fatigue caused by prolonged screen time, combined with packaging challenges in Python (PyInstaller) that caused heuristic antivirus false positives, high background RAM consumption (~50 MB), and main UI thread contention."
solution: "A high-performance native Windows desktop application built with C# and .NET 9 featuring hardware-accelerated WPF overlays, residing silently in the system tray (<16 MB RAM, <0.1% CPU) while detecting user activity via Win32 GetLastInputInfo to schedule non-intrusive 20-20-20 eye rests and posture checks."
learnings:
  - "Architectural Evolution (Python ➡️ C# / .NET): Eliminated antivirus false positives in Windows Defender and corporate scanners by moving away from PyInstaller compressed bootloaders to native Portable Executable (PE) binaries via .NET 9 single-file publishing."
  - "Resource Optimization for 24/7 Daemons: Decreased background working set memory footprint from ~50 MB to 12–16 MB and sustained idle CPU usage below 0.1% using native DispatcherTimer loops without GIL overhead."
  - "UI Fidelity & GPU Acceleration in XAML: Replaced legacy Tkinter canvases with hardware-accelerated WPF translucent overlays, DWM composition, and crisp multi-monitor mixed-DPI rendering."
  - "Native OS Integration & Concurrency: Replaced fragile TCP socket single-instance locking with a robust Win32 System.Threading.Mutex and decoupled background system tray lifecycle via H.NotifyIcon.Wpf."
websiteActionText: "Visit Website"
---

> **Note**: You can download the pre-compiled standalone `.exe` installer or self-contained binary directly from the GitHub Releases section.

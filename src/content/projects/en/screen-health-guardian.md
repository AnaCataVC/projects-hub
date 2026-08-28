---
title: "Screen Health Guardian"
icon: "/project-icons/screen-health-guardian-icon.png"
description: "High-performance, ultra-lightweight native Windows desktop application designed to promote ocular and postural wellness with multi-monitor reminder support."
githubUrl: "https://github.com/AnaCataVC/screen-health-guardian"
websiteUrl: "https://screen-health-guardian.ana-catalina.com"
isLiveApp: false
technologies: ["C#", ".NET 9", "WPF", "XAML", "Win32 API", "Multi-Monitor", "Fluent Design"]
categories: ["Health", "Desktop", "Windows", "Productivity"]
type: "desktop"
status: "Active"
problem: "Digital eye strain and postural fatigue caused by prolonged screen time, combined with packaging challenges in Python (PyInstaller) that caused heuristic antivirus false positives, high background RAM consumption (~50 MB), and lack of multi-monitor coverage."
solution: "A high-performance native Windows desktop application built with C# and .NET 9 featuring hardware-accelerated WPF overlays, residing silently in the system tray (<16 MB RAM, <0.1% CPU) while detecting user activity via Win32 GetLastInputInfo to project configurable multi-monitor overlays for 20-20-20 eye rests and posture checks."
learnings:
  - "Multi-Monitor Overlay Projection: Synchronized and configurable projection of translucent alert windows across all active displays with independent mixed-DPI scaling."
  - "Architectural Evolution (Python ➡️ C# / .NET): Eliminated antivirus false positives in Windows Defender by replacing PyInstaller bootloaders with native Portable Executable (PE) binaries via .NET 9."
  - "Resource Optimization for 24/7 Daemons: Decreased background working set memory footprint from ~50 MB to 12–16 MB and sustained idle CPU usage below 0.1% using native DispatcherTimer loops without GIL overhead."
  - "Native OS Integration & Concurrency: Replaced fragile TCP socket single-instance locking with a robust Win32 System.Threading.Mutex and decoupled background system tray lifecycle via H.NotifyIcon.Wpf."
websiteActionText: "Visit Website"
---

> **Note**: You can download the pre-compiled standalone `.exe` installer or self-contained binary directly from the GitHub Releases section.

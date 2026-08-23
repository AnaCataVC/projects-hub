---
title: "Simple PC Monitor"
icon: "/project-icons/simple-pc-monitor-icon.png"
description: "Visual, lightweight, and interactive system telemetry dashboard and performance control suite for Windows built in native C# (.NET WPF/XAML) in a standalone 585 KB executable with zero external dependencies."
githubUrl: "https://github.com/AnaCataVC/simple-pc-monitor"
websiteUrl: "https://simple-pc-monitor.ana-catalina.com"
isLiveApp: false
technologies: ["C#", ".NET WPF", "XAML", "Win32 P/Invoke", "PowrProf.dll", "Direct3D"]
categories: ["Desktop", "Windows", "Performance", "Tools", "Telemetry"]
type: "desktop"
status: "Active"
problem: "Bulky system telemetry monitors (built on heavy web runtimes or uncompiled scripts) consuming excessive memory overhead (~100-300 MB RAM), introducing UI thread contention, and triggering false-positive heuristic flags on modern antivirus software."
solution: "A high-performance, ultra-lightweight native Windows telemetry dashboard engineered in compiled C# (.NET WPF/XAML) leveraging sub-millisecond Win32 P/Invoke telemetry (<0.01 ms), 1-click power scheme switching via PowrProf.dll, safe working set memory optimization, temporary file cleaning, and dynamic theme switching within a single 585 KB standalone executable."
learnings:
  - "Win32 Power Scheme Switching: Utilized PowrProf.dll (PowerSetActiveScheme) to enable instantaneous, sub-millisecond power profile toggles without requiring UAC administrator privileges."
  - "Crash-Resilient Process Management: Combined QueryFullProcessImageName with a strict system blacklist to protect critical OS processes from accidental termination."
  - "Safe Working Set Memory Optimization: Trimmed process working sets using SetProcessWorkingSetSize and EmptyWorkingSet to return idle physical memory pages to the OS safely."
  - "Adaptive Custom WPF Chrome: Engineered seamless window controls, smooth dragging, dynamic corner radius adjustments, and Always-on-Top pinning using AllowsTransparency=\"True\"."
websiteActionText: "Visit Website"
---

> **Note**: You can download the pre-compiled standalone `.exe` directly from the GitHub Releases section without needing an installer.

---
title: "Simple PC Monitor"
icon: "/project-icons/simple-pc-monitor-icon.png"
description: "Visual, lightweight HUD system telemetry dashboard and performance control suite for Windows built in native C# (.NET WPF/XAML) in a standalone 585 KB executable with zero external dependencies."
githubUrl: "https://github.com/AnaCataVC/simple-pc-monitor"
websiteUrl: "https://simple-pc-monitor.ana-catalina.com"
isLiveApp: false
technologies: ["C#", ".NET WPF", "XAML", "Win32 P/Invoke", "PowrProf.dll", "Direct3D"]
categories: ["Desktop", "Windows", "Performance", "Tools", "Telemetry"]
type: "desktop"
status: "Active"
problem: "Bulky system telemetry monitors (built on heavy web runtimes or uncompiled scripts) consuming excessive memory overhead (~100-300 MB RAM), introducing UI thread contention, and triggering false-positive heuristic flags on modern antivirus software."
solution: "A high-performance, ultra-lightweight native Windows HUD telemetry dashboard engineered in compiled C# (.NET WPF/XAML) leveraging sub-millisecond Win32 P/Invoke telemetry (<0.01 ms), an interactive command center with quick action buttons, 1-click power scheme switching via PowrProf.dll, process optimization, and hardened temp cleaner within a 585 KB standalone executable."
learnings:
  - "High-performance HUD interface design with an interactive command center, real-time metrics, and quick action buttons for power schemes and system maintenance."
  - "Win32 Power Scheme Switching: Utilized PowrProf.dll (PowerSetActiveScheme) to enable instantaneous, sub-millisecond power profile toggles without requiring UAC administrator privileges."
  - "Crash-Resilient Process Management: Combined QueryFullProcessImageName with a strict system blacklist to protect critical OS processes from accidental termination."
  - "Safe Working Set Memory Optimization: Trimmed process working sets using SetProcessWorkingSetSize and EmptyWorkingSet to return idle physical memory pages to the OS safely."
websiteActionText: "Visit Website"
---

### Native Win32 Architecture & HUD Telemetry

**Simple PC Monitor** is a high-performance system telemetry HUD compiled into a single **585 KB standalone executable** with zero external runtime dependencies:

*   **Sub-Millisecond P/Invoke Telemetry (<0.01 ms):** Queries low-level hardware metrics (CPU, RAM, GPU, and Network) via direct Win32 API calls instead of sluggish WMI bridges.
*   **Instant Power Scheme Toggling via `PowrProf.dll`:** Invokes `PowerSetActiveScheme` to seamlessly switch Windows energy profiles (*High Performance*, *Balanced*, *Power Saver*) without requiring elevated Administrator (UAC) prompts.

### Memory Optimization & Process Safety

*   **Controlled Working Set Compaction:** Diagnostic routine invoking `EmptyWorkingSet` and `SetProcessWorkingSetSize` to flush idle physical memory pages without provoking disk thrashing.
*   **Kernel-Safe Process Inspection:** Process termination guardrails leveraging `QueryFullProcessImageName` with an immutable kernel-process blacklist to prevent OS instability.

> **Note**: You can download the pre-compiled standalone `.exe` directly from the GitHub Releases section without needing an installer.

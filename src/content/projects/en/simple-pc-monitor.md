---
title: "Simple PC Monitor"
icon: "/project-icons/simple-pc-monitor-icon.png"
description: "Visual, lightweight HUD system telemetry dashboard and performance control suite for Windows built in native C# (.NET WPF/XAML) in a standalone 585 KB executable with zero external dependencies."
githubUrl: "https://github.com/AnaCataVC/simple-pc-monitor"
websiteUrl: "https://simple-pc-monitor.ana-catalina.com"
isLiveApp: false
technologies: ["C#", ".NET WPF", "XAML", "Win32 P/Invoke", "PowrProf.dll", "ntdll Kernel API", "AI & MCP Process Monitor"]
categories: ["Desktop", "Windows", "Performance", "Tools", "Telemetry"]
type: "desktop"
status: "Active"
problem: "Bulky system telemetry monitors (built on heavy web runtimes or uncompiled scripts) consuming excessive memory overhead (~100-300 MB RAM), introducing UI thread contention, and triggering false-positive heuristic flags on modern antivirus software."
solution: "A high-performance native Windows HUD telemetry dashboard and command center engineered in compiled C# (.NET WPF/XAML) in a 585 KB standalone binary, combining sub-millisecond Win32 P/Invoke telemetry, AI Agent & MCP session monitoring, reverse tree kill, NtSuspendProcess freezing, and 1-click power schemes."
learnings:
  - "AI Agent & MCP Session Monitor: Live telemetry of developer CLI sessions (claude, gemini, cursor, antigravity) and MCP servers with Reverse Tree Kill to prevent orphaned background processes."
  - "Kernel-Level Process Control: Safe freezing and resuming of runaway tasks using ntdll.dll (NtSuspendProcess / NtResumeProcess) paired with a Two-Phase Graceful Close protocol."
  - "Win32 Power Switching via PowrProf.dll: Instantaneous power profile switching (PowerSetActiveScheme) coupled with working set memory trimming (EmptyWorkingSet)."
  - "Hardened Multizone Cleaner: Safe cleanup of obsolete temporary files protected by NTFS Junction isolation and dual timestamp validation."
websiteActionText: "Visit Website"
---

### Native Win32 Architecture & AI Agent Sessions

**Simple PC Monitor** is a high-performance system command center packaged into a single **585 KB standalone executable** with zero external dependencies:

*   **Sub-Millisecond P/Invoke Telemetry (<0.01 ms):** Direct native Win32 API polling for hardware and network throughput without sluggish WMI abstractions or runtime overhead.
*   **AI Agent & MCP Session Monitor:** Real-time discovery of active AI developer sessions (`claude.exe`, `gemini.exe`, `cursor.exe`, `antigravity.exe`) and child MCP servers, with *Reverse Topological Tree Kill* that terminates leaves before parent CLIs to prevent orphaned memory leaks.

### Kernel-Level Process Control & Optimization

*   **Kernel NT Process Management (`ntdll.dll`):** Direct thread-level control using `NtSuspendProcess` and `NtResumeProcess` to freeze runaway background tasks without data loss, plus a two-phase graceful close protocol with System Tray minimization detection.
*   **1-Click Command Center:** Instantaneous power scheme toggling via `PowrProf.dll`, Turbo Mode with RAM working set trimming (`EmptyWorkingSet`), native DNS cache flusher, and multizone temp cleaner immune to NTFS Junction attacks.

> **Note**: You can download the pre-compiled standalone `.exe` directly from the GitHub Releases section without needing an installer.

---
title: "System Core Monitor"
icon: "/project-icons/system-core-monitor-icon.png"
description: "Visual, lightweight HUD system telemetry dashboard and performance control suite for Windows built in native C# (.NET WPF/XAML) in a standalone 585 KB executable with zero external dependencies."
lastUpdated: 2026-09-24
githubUrl: "https://github.com/AnaCataVC/system-core-monitor"
websiteUrl: "https://system-core-monitor.ana-catalina.com"
isLiveApp: false
technologies: ["C#", ".NET Framework 4.8", "WPF", "XAML", "Win32 P/Invoke", "PowrProf.dll", "ntdll Kernel API", "AI & MCP Process Monitor"]
categories: ["Windows", "Performance", "Tools", "Telemetry"]
type: "desktop"
status: "Active"
problem: "Bulky system telemetry monitors (built on heavy web runtimes or uncompiled scripts) consuming excessive memory overhead, introducing UI thread contention, and triggering false-positive heuristic flags on modern antivirus software."
solution: "A high-performance native Windows HUD telemetry dashboard and command center engineered in compiled C# (.NET WPF/XAML) in a 585 KB standalone binary, combining sub-millisecond Win32 P/Invoke telemetry, AI Agent & MCP session monitoring, reverse tree kill, NtSuspendProcess freezing, and 1-click power schemes."
learnings:
  - "AI Agent & MCP Session Monitor: Live telemetry of developer CLI sessions (claude, gemini, cursor, antigravity) and MCP servers with Reverse Tree Kill to prevent orphaned background processes."
  - "Agent Lineage Tracking & Leftover Scanner: AgentLineageTracker groups orphaned sessions by their ended parent process, while AiAgentLeftoverScanner performs a disk-wide scan for dangling git worktrees, stale scratch directories, and orphaned logs left behind by AI agent sessions."
  - "Runaway Process Detection: Sustained-CPU heuristic that proactively warns of runaway background tasks before manual NtSuspendProcess intervention is needed."
  - "Kernel-Level Process Control: Safe freezing and resuming of runaway tasks using ntdll.dll (NtSuspendProcess / NtResumeProcess) paired with a Two-Phase Graceful Close protocol."
  - "Win32 Power Switching via PowrProf.dll: Instantaneous power profile switching (PowerSetActiveScheme) coupled with working set memory trimming (EmptyWorkingSet)."
  - "Hardened Multizone Cleaner: Safe cleanup of obsolete temporary files protected by NTFS Junction isolation and dual timestamp validation."
websiteActionText: "Visit Website"
product:
  tagline: "High-Performance System & AI Agent Monitor for Windows"
  intro: "Real-time telemetry, Claude Code & Gemini observability, transcript storage maintenance, and resource optimization in a single standalone binary."
  features:
    - icon: "Cpu"
      title: "Win32 P/Invoke Telemetry"
      text: "Sub-millisecond high-precision delta math via GetSystemTimes and GlobalMemoryStatusEx passed by reference, with zero GC pressure."
    - icon: "Bot"
      title: "AI Agents & MCP Servers"
      text: "Real-time observability of Claude Code CLI, Gemini, and compiled MCP subprocesses (Go, Rust, Node, Python) with dedicated CPU and RAM tracking."
    - icon: "FileClock"
      title: "AI Transcript Retention & Cleanup"
      text: "Intelligent scanning and safe pruning of stale session .jsonl files (>7 days) with an inviolable 24-hour grace window and config file protection."
    - icon: "PowerOff"
      title: "Win32 Power Plan Switcher"
      text: "Instant 0.01 ms switching between Balanced, High Performance, and Power Saver schemes with PowrProf.dll, without UAC elevation."
    - icon: "Trash2"
      title: "Safe Temp Cleaner & RAM Optimizer"
      text: "Multi-zone cleaning of temporary files (>24h), idle memory page trimming with EmptyWorkingSet, and regenerable build cache cleanup."
    - icon: "Gauge"
      title: "1-Click Command Center"
      text: "Turbo Mode, DNS cache flush, suspend/resume for runaway processes, and rescue for unresponsive apps, all via direct kernel calls."
    - icon: "MonitorSmartphone"
      title: "GPU & NPU Hardware Accelerators"
      text: "DirectX DXGI graphics hardware discovery and neural processing unit (NPU) accelerator probing via native SetupAPI calls."
    - icon: "ScanEye"
      title: "360° Inspector & PID Reuse Guard"
      text: "Two-phase graceful close (WM_CLOSE), reverse topological tree termination, and Windows PID recycling safeguards."
    - icon: "LayoutGrid"
      title: "Bento Visual Ergonomics"
      text: "Enhanced 14-16px typography, sharp 20x20 vector icons, 240px navigation sidebar, and 4 dynamic XAML themes."
  notice:
    title: "Security & Privacy Guarantee"
    text: "System Core Monitor collects zero telemetry, makes zero unexpected background requests, and installs no background services. 100% auditable and transparent."
  catalog:
    title: "Action Buttons & Native Control Matrix"
    items:
      - title: "🚀 Turbo Mode"
        description: "Instantly switches to High Performance power plan (unparking CPU cores) and aggressively purges idle RAM working sets."
        tags: ["PowrProf.dll", "EmptyWorkingSet"]
      - title: "🌐 Flush DNS"
        description: "Directly resets the Windows DNS resolver cache in 0.01 ms to resolve networking glitches and unreachable web pages."
        tags: ["dnsapi.dll", "DnsFlushResolverCache"]
      - title: "🧹 Clean Temp Storage"
        description: "Safely clears cache files in %TEMP%, Windows\\Temp, and WinSxS (>24h). Isolated against NTFS Junctions with dual-timestamp safety gate."
        tags: ["Multizone SafeTempCleaner"]
      - title: "🗄️ AI Transcripts"
        description: "Scans and safely reclaims hundreds of megabytes of stale Claude Code and Gemini session histories while protecting active sessions."
        tags: ["AiTranscriptCleaner", "Retention"]
      - title: "⏸️ Suspend & Resume"
        description: "Freezes runaway background tasks dropping CPU to 0% without closing windows, with instant resume capability."
        tags: ["ntdll.dll", "NtSuspendProcess"]
      - title: "⚡ Process Rescue"
        description: "Detects unresponsive applications (IsResponding == false) with graceful close requests and safe termination of orphan subprocesses."
        tags: ["Graceful Close", "Tree Terminate"]
  screenshots:
    - src: "/product-screenshots/system-core-monitor/dashboard.png"
      alt: "System Core Monitor dashboard showing CPU and RAM telemetry, active Claude Code and Gemini sessions, and AI transcript maintenance"
  faq:
    - question: "Does it require Administrator (UAC) elevation?"
      answer: "No. All CPU, RAM, disk, network telemetry, power plan switching, AI agent monitoring, and temp cleaning run under standard user permissions."
    - question: "Why is the executable so small (617 KB)?"
      answer: "Unlike modern Electron-based tools that bundle an entire Chromium browser and Node (>150 MB), System Core Monitor is compiled directly in native C# targeting .NET 9 with zero third-party dependencies."
    - question: "How does it monitor AI agents and MCP servers?"
      answer: "It leverages Win32 Toolhelp32 process snapshots to discover Claude Code CLI, Gemini, and MCP server child processes (Go, Rust, Node, Python), aggregating their resource consumption."
    - question: "Is the AI transcript cleaner safe to run?"
      answer: "Yes. It strictly enforces a 24-hour inviolable grace window for recent files, checks live process PIDs to avoid active sessions, and blacklists config and memory files (CLAUDE.md, GEMINI.md, settings.json)."
  platforms: ["Windows 10 (1809+)", "Windows 11"]
  downloadUrl: "https://github.com/AnaCataVC/system-core-monitor/releases/latest/download/SystemCoreMonitor-Setup.exe"
  downloadLabel: "Download Installer (.exe)"
---

### Native Win32 Architecture & AI Agent Sessions

**System Core Monitor** is a high-performance system command center packaged into a single **585 KB standalone executable** with zero external dependencies:

*   **Sub-Millisecond P/Invoke Telemetry (<0.01 ms):** Direct native Win32 API polling for hardware and network throughput without sluggish WMI abstractions or runtime overhead.
*   **AI Agent & MCP Session Monitor:** Real-time discovery of active AI developer sessions (`claude.exe`, `gemini.exe`, `cursor.exe`, `antigravity.exe`) and child MCP servers, with *Reverse Topological Tree Kill* that terminates leaves before parent CLIs to prevent orphaned memory leaks.
*   **Agent Lineage & Leftover Scanner:** `AgentLineageTracker` groups orphaned sessions by their ended parent process, and `AiAgentLeftoverScanner` runs a disk-wide scan for dangling git worktrees, stale scratch directories, and orphaned logs left behind by AI agent sessions.

### Kernel-Level Process Control & Optimization

*   **Kernel NT Process Management (`ntdll.dll`):** Direct thread-level control using `NtSuspendProcess` and `NtResumeProcess` to freeze runaway background tasks without data loss, plus a two-phase graceful close protocol with System Tray minimization detection.
*   **1-Click Command Center:** Instantaneous power scheme toggling via `PowrProf.dll`, Turbo Mode with RAM working set trimming (`EmptyWorkingSet`), native DNS cache flusher, and multizone temp cleaner immune to NTFS Junction attacks.

> **Note**: You can download the pre-compiled standalone `.exe` directly from the GitHub Releases section without needing an installer.

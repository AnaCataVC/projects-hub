---
title: "Claude Desktop Tools"
icon: "/project-icons/claude-desktop-tools-icon.png"
description: "Autonomous visual workstation hub for Windows 11 designed to audit local storage, safely prune CLI transcripts and Claude Desktop sessions, filter secrets, and back up AI steering directives to Google Drive."
githubUrl: "https://github.com/AnaCataVC/claude-desktop-tools"
websiteUrl: "https://claude-desktop-tools.ana-catalina.com"
isLiveApp: false
technologies: ["WinUI 3", ".NET 9", "C#", "Fluent Design", "Windows App SDK", "Google Drive Sync", "Regex Secret Scanning", "Claude CLI", "Claude Desktop", "Inno Setup"]
categories: ["Desktop", "AI", "Windows", "Developer Tools", "Productivity"]
type: "desktop"
status: "Active"
problem: "Heavy usage of Claude Code (CLI) and Claude Desktop accumulates gigabytes of transcript files (.jsonl), clutters graphical session lists, and puts unversioned AI steering directives (CLAUDE.md, skills, agents, hooks) at risk of local loss or accidental secret leaks."
solution: "A native Windows 11 desktop application crafted in WinUI 3 and .NET 9 featuring Mica backdrops that safely reclaims disk space with an inviolable 24-hour grace window, prunes session indexes with active process locks (claude.exe), verifies real-world CLI session liveness via PID inspection, and selectively backs up sanitized directives to Google Drive."
learnings:
  - "Inviolable 24-Hour Grace Window & Atomic Pruning: Deletion algorithm guaranteeing immunity for recently modified sessions and surgical in-place JSON header mutation using atomic temporary files."
  - "CLI Session Explorer with Verified Liveness: Real-time cross-referencing against ~/.claude/sessions/<pid>.json validating PID and process start time to prevent false positives from Windows PID recycling."
  - "Multi-Zone BFS Context Discovery & Secret Scanning: Recursive scanning of steering directives (CLAUDE.md, skills, agents, hooks) with batched git checks (chunks of 50) and regex shields for SSH keys, AWS tokens, and PATs."
  - "Selective Google Drive Backup: Cloud transfer engine featuring per-file live progress reporting (IProgress), granular checkbox selection, and automatic routing to configured storage buckets."
websiteActionText: "Visit Website"
---

### Visual Command Center for Claude CLI & Desktop on Windows 11

**Claude Desktop Tools** is a native Windows 11 desktop application crafted with **WinUI 3** and **.NET 9**, delivering Fluent Design and hardware-accelerated **Mica** translucent backdrops to solve storage bloat and context management challenges:

*   **Storage Auditing & Disk Reclamation:** Instant space analysis of `.jsonl` transcripts accumulated by Claude Code under `%USERPROFILE%\.claude\projects`. Reclaims gigabytes of disk space with an **inviolable 24-hour grace window** that shields active or recently resumed sessions even if retention is configured to 0 days.
*   **Safe Desktop Session Index Maintenance:** Atomic in-place compaction and archiving (`"isArchived": true`) of sessions under `%APPDATA%\Claude\claude-code-sessions` (including full fallback support for MSIX-virtualized Microsoft Store installations). Equipped with active process detection (`claude.exe`) to prevent memory overwrites on shutdown.

### Session Explorer with Verified Real-World Liveness

*   **Reliable Active Session Detection:** Rather than relying purely on static timestamps, the session explorer cross-references transcripts against Claude's live registry (`~/.claude/sessions/<pid>.json`) and checks the Windows process `StartTime`, neutralizing false positives caused by OS PID recycling.
*   **Granular Operations:** Close active CLI processes directly behind safe modal dialogs or bulk-delete inactive transcripts based on age thresholds.

### AI Directive Discovery & Cloud Backup

*   **BFS Discovery & Multi-Secret Filtering:** Comprehensive scanning of project steering files (`CLAUDE.md`, references, skills, agents, and hooks) accelerated by batched Git verification (chunks of 50 files) and regex protection against AWS tokens, GitHub PATs, Slack credentials, and SSH private keys.
*   **Resilient Google Drive Backup:** Cloud synchronization with per-file progress tracking (`IProgress`), user cancellation, and organized bucket destinations (`_sin-repo`, `_claude-config`).

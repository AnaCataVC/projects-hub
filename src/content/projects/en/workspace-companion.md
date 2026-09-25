---
title: "Workspace Companion"
description: "Ultra-lightweight native Windows system tray and Spotlight utility to manage Git Worktrees, decoupled IDE/terminal launchers, and 1-click GitHub CLI switching."
lastUpdated: 2026-09-24
icon: "/project-icons/workspace-companion-icon.png"
githubUrl: "https://github.com/AnaCataVC/workspace-companion"
websiteUrl: "https://workspace-companion.ana-catalina.com"
isLiveApp: false
technologies: ["Rust", "Tauri v2", "Svelte 5", "TypeScript", "Tailwind CSS", "Git Porcelain Protocol", "GitHub CLI"]
categories: ["Developer Tools", "Productivity", "Windows"]
type: "desktop"
status: "Active"
problem: "Workflow friction when managing parallel feature branches with Git Worktrees, safely cleaning up merged or orphaned worktree directories, and switching GitHub CLI account identities."
solution: "An ultra-lightweight Windows system tray micro-app (<40 MB RAM) with a Spotlight-style HUD featuring recursive Git worktree discovery, independent IDE and terminal launchers, 1-click GitHub CLI account switching, batch git branch cleanup with safety guards, and 1-click resolution for dirty or locked worktrees with Toast alerts."
learnings:
  - "Decoupled IDE & Terminal Launchers (ADR-0004): Direct binary resolution for GUI editors (VS Code, Antigravity, Cursor, Windsurf) and consoles (Windows Terminal, Git Bash, AGY CLI) without flashing console prompts."
  - "Hardened Orphan Worktree Cleaner: Pruning algorithm with pre-flight dirty checks, root directory false-positive guards, and native Windows Toast notifications."
  - "Batch Git Branch Cleaner (ADR-0006): Multi-select local branch cleanup that distinguishes skipped safety guards from real git failures, surfacing merge and remote status directly in the worktree view."
  - "Dirty & Locked Worktree Resolution: 1-click Stash and double-confirmed Discard actions plus a Force Unlock & Remove path for worktrees left locked by external agent processes."
  - "Git Worktree Tree Management: Background Porcelain stream parsing with 1-click dock switching and swift GitHub CLI identity profiles."
  - "Ultra-Fast Reactive UI with Svelte 5 (Runes) and Tauri v2 with automatic taskbar anchoring and minimal working set memory."
websiteActionText: "View Page"
---

### Rust & Tauri v2 Architecture with Svelte 5

**Workspace Companion** pairs **Rust's memory safety** and low-level OS capabilities with **Svelte 5 (Runes)** inside **Tauri v2**:

*   **Git Porcelain Engine in Rust:** High-speed parser consuming machine-readable `git worktree list --porcelain` streams across background worker threads with `CREATE_NO_WINDOW` flags, preventing console flashes on Windows.
*   **Spotlight Floating Utility & System Tray:** Fast keyboard-driven HUD anchored dynamically to the Windows Taskbar Notification Area with an ultra-low working set under **40 MB RAM**.

### Decoupled Launchers & Hardened Orphan Pruning

*   **Dual IDE & Terminal Launchers (ADR-0004):** 1-click launching for preferred code editors (VS Code, Antigravity IDE, Cursor) and developer consoles with direct executable resolution and swift GitHub CLI identity switching (`gh auth switch`).
*   **Orphan Cleaner & Toast Notifications:** Automatic discovery of deleted upstream branches with *dirty check* guards, root worktree isolation, and native Windows Toast notifications.

### Batch Branch Cleaner & Worktree Conflict Resolution

*   **Batch Branch Cleaner (ADR-0006):** Multi-select local branch cleanup that distinguishes skipped safety guards from real git failures, with per-branch merge and remote status exposed directly in the worktree list.
*   **Dirty & Locked Worktree Resolution:** 1-click Stash and double-confirmed Discard actions in the branch switcher, plus a Force Unlock & Remove path in the batch-delete flow for worktrees left locked by external agent processes.

> **Note**: You can explore the source code, review Architectural Decision Records (ADRs), and compile the Windows desktop binary from the GitHub repository.

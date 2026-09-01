---
title: "Workspace Companion"
description: "Ultra-lightweight native Windows system tray and Spotlight floating utility to manage Git Worktrees with hierarchical trees, recursive scanning, and 1-click GitHub CLI switching."
icon: "/project-icons/workspace-companion-icon.png"
githubUrl: "https://github.com/AnaCataVC/workspace-companion"
websiteUrl: "https://workspace-companion.ana-catalina.com"
isLiveApp: false
technologies: ["Rust", "Tauri v2", "Svelte 5", "TypeScript", "Tailwind CSS", "Git Porcelain Protocol"]
categories: ["Desktop", "Developer Tools", "Productivity", "Windows", "Rust"]
type: "desktop"
status: "Active"
problem: "Workflow friction when managing parallel feature branches with Git Worktrees, safely cleaning up merged or orphaned worktree directories, and switching GitHub CLI account identities."
solution: "An ultra-lightweight Windows system tray micro-app (<40 MB RAM) with a Spotlight-style floating window, hierarchical worktrees tree management with 1-click dock, recursive repo discovery scanner, and dirty-checked safe batch cleaner."
learnings:
  - "Hybrid Git Worktree management with hierarchical tree views, multifaceted status filters, and 1-click dock switching."
  - "Safe batch deletion of orphaned worktrees with strict pre-flight dirty checks to prevent uncommitted data loss."
  - "Recursive local repository discovery and dynamic configuration persistence without Win32 console flashes (CREATE_NO_WINDOW in Rust)."
  - "Building ultra-fast reactive UIs with Svelte 5 (Runes) and Tauri v2 tray positioning integrations."
websiteActionText: "View Page"
---

### Rust & Tauri v2 Architecture with Svelte 5

**Workspace Companion** pairs **Rust's memory safety** and low-level OS capabilities with **Svelte 5 Runes** inside **Tauri v2**:

*   **Git Porcelain Engine in Rust:** High-speed parser consuming machine-readable `git worktree list --porcelain` streams across background worker threads with `CREATE_NO_WINDOW` flags, preventing console window flashing on Windows.
*   **Spotlight Floating Utility & System Tray:** Fast keyboard-driven HUD anchored dynamically to the Windows Taskbar Notification Area with an ultra-low working set under **35 MB RAM**.

### Pre-Flight Safety Checks & GitHub CLI Identity Switching

*   **Dirty State Safeguards:** Strict validation engine running `git status --porcelain` checks prior to worktree removal, preventing accidental loss of uncommitted local modifications.
*   **1-Click GitHub CLI Profile Switching:** Native `gh auth switch` automation enabling seamless identity swapping between personal and corporate accounts based on the active repository context.

> **Note**: You can explore the source code, review Architectural Decision Records (ADRs), and compile the Windows desktop binary from the GitHub repository.

---
title: "Workspace Companion"
description: "Ultra-lightweight native Windows system tray and Spotlight floating utility to manage parallel Git Worktrees and switch GitHub CLI profiles in 1 click."
icon: "/project-icons/workspace-companion-icon.png"
githubUrl: "https://github.com/AnaCataVC/workspace-companion"
websiteUrl: "https://workspace-companion.ana-catalina.com"
isLiveApp: false
technologies: ["Rust", "Tauri v2", "Svelte 5", "TypeScript", "Tailwind CSS", "Git Porcelain Protocol"]
categories: ["Desktop", "Developer Tools", "Productivity", "Windows", "Rust"]
status: "Active"
problem: "Workflow friction when managing parallel feature branches with Git Worktrees, safely cleaning up merged or orphaned worktree directories, and switching GitHub CLI account identities."
solution: "An ultra-lightweight Windows system tray micro-app (<40 MB RAM) with a Spotlight-style floating window, active worktrees dashboard, dirty-checked safe orphan cleaner, and 1-click GitHub CLI profile switching without terminal popups."
learnings:
  - "Eliminating background console window flashes on Windows via low-level Win32 creation flags (CREATE_NO_WINDOW = 0x08000000) in Rust."
  - "Robust parsing of the Git Porcelain Protocol (git worktree list --porcelain) accounting for bare repos, locked states, and detached heads."
  - "Designing defensive pre-flight dirty checks before authorizing destructive orphaned worktree removals."
  - "Building ultra-fast reactive UIs with Svelte 5 (Runes) and Tauri v2 tray positioning integrations."
websiteActionText: "View Page"
---

> **Note**: You can explore the source code, review Architectural Decision Records (ADRs), and compile the Windows desktop binary from the GitHub repository.

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

> **Note**: You can explore the source code, review Architectural Decision Records (ADRs), and compile the Windows desktop binary from the GitHub repository.

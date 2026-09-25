---
title: "Google Drive Work Sync"
icon: "/project-icons/google-drive-work-sync-icon.png"
description: "Native Windows 11 desktop application (WinUI 3 / .NET 9) that syncs work directories and AI agent context to Google Drive via a Google Apps Script Web App, with incremental hashing and secret redaction."
lastUpdated: 2026-09-24
githubUrl: "https://github.com/AnaCataVC/google-drive-work-sync"
isLiveApp: false
technologies: ["C# 13", ".NET 9", "WinUI 3", "Windows App SDK", "CommunityToolkit.Mvvm", "Google Apps Script", "xUnit"]
categories: ["Windows", "Productivity", "Developer Tools", "Automation"]
type: "desktop"
status: "Active"
problem: "Keeping work directories and AI agent context (CLAUDE.md, skills, memory files) synced to Google Drive without a heavyweight sync client, without re-uploading unchanged files, and without accidentally leaking secrets."
solution: "A WinUI 3 system tray app that uploads only new or modified files to a self-hosted Google Apps Script Web App, using a metadata fast-path (timestamp and size) before computing full SHA-256 hashes, retrying transient failures with exponential backoff, discovering AI agent context recursively while excluding nested repositories and worktrees, and running a three-tiered secret filter before backing anything up."
learnings:
  - "Crash-Safe Hash Index: The sync index is written to a temp file and swapped in atomically, so an interrupted run can never leave it empty."
  - "Three-Tiered Secret Filter: A filename blacklist, a regex scan of the first 64 KB for known token patterns (PAT, AWS, SSH), and a fail-closed sanitizer for MCP configuration files."
  - "Nested Repository & Worktree Detection: A BFS traversal that identifies git roots (both `.git` directories and linked worktree files) so tracked `CLAUDE.md` files are never misclassified as untracked scratch notes."
  - "No Silent Skips: Locked files or unlistable folders are reported as errors instead of counted as 'unchanged', so the 'Up to date' status can always be trusted."
websiteUrl: "https://google-drive-work-sync.ana-catalina.com"
websiteActionText: "View Page"
---

### Incremental Sync with Cryptographic Verification

**Google Drive Work Sync** pairs a metadata fast-path (timestamp and size) with full **SHA-256** verification only when there are real signs of change, batching files into groups of up to 8 files or 9 MB to respect Google Apps Script's execution quotas.

*   **Crash-Safe Persistent Index:** Sync state is stored in `sync_hashes.json` via a temp-file write and atomic swap, preventing a corrupted index after an unexpected interruption.
*   **Transient Failure Recovery:** HTTP errors (429, 500, 503) are persisted and can be retried with a single click, re-hashing the current file before retrying.

### AI Agent Context Discovery & Security

*   **Git-Aware BFS Traversal:** Detects repository roots and linked worktrees to exclude them from the scan, and uses `git ls-files` to tell tracked documentation apart from untracked local scratch notes.
*   **Three-Layer Secret Redaction:** A known-filename filter, a regex scan for common token patterns, and an MCP configuration parser that fails closed on any doubt before the file is backed up.

> **Note**: The full source code, architectural decisions, and build instructions are available in the GitHub repository.

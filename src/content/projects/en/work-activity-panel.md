---
title: "Work Activity Panel"
icon: "/project-icons/work-activity-panel-icon.png"
description: "Native Windows 11 desktop application designed to streamline daily work routines: auto-launches work tools, reconciles Google Calendar in real-time, backs up to Google Drive, and updates in-place."
githubUrl: "https://github.com/AnaCataVC/work-activity-panel"
websiteUrl: "https://work-activity-panel.ana-catalina.com"
isLiveApp: false
technologies: ["WinUI 3", ".NET 9", "C#", "Fluent Design", "Windows App SDK", "Google Drive Sync", "iCalendar RFC 5545", "GitHub Releases API"]
categories: ["Desktop", "Productivity", "Windows", "Automation"]
type: "desktop"
status: "Active"
problem: "Daily friction manually opening work tools, calendar desynchronization, lost local configurations, and lack of visibility into unversioned AI context files across projects."
solution: "A native Windows 11 desktop app built with WinUI 3 and .NET 9 with Mica backdrops that automates Slack/Granola launches, reconciles mutated Google Calendar events with anti-cache headers, backs up to Google Drive with deferred Fast-Path Hash Cache, and updates in-place via GitHub Releases."
learnings:
  - "Accelerated Google Drive Synchronization: Background backup engine with deferred Fast-Path Hash Cache and batched unversioned AI context scanning with secret filtering."
  - "Integrated In-App Auto-Updater: Background GitHub Releases API client with live progress reporting and seamless in-place Inno Setup execution."
  - "Resilient RFC 5545 iCalendar Engine: Custom deserialization engine featuring in-place mutation reconciliation, timezone normalization, and video conference link extraction."
  - "Native WinUI 3 (.NET 9) Architecture: MVVM pattern with CommunityToolkit, native Mica backdrops, and early crash diagnostics."
websiteActionText: "Visit Website"
---

### WinUI 3 (.NET 9) Architecture & Daily Routine Automation

**Work Activity Panel** is a native Windows 11 desktop application engineered using **Windows App SDK** and **WinUI 3**:

*   **MVVM Pattern & Fluent Design:** Clean architectural separation using `CommunityToolkit.Mvvm`, delivering hardware-accelerated **Mica** translucent backdrops and automated Slack/Granola execution 5 minutes before scheduled meetings.
*   **Integrated In-App Auto-Updater:** Automated update client querying the GitHub Releases API in the background, downloading installers with reactive progress tracking and applying in-place upgrades.

### Calendar Reconciliation & Accelerated Storage Engines

*   **RFC 5545 iCalendar Reconciliation:** In-house calendar parser with anti-cache headers that reconciles mutated events in real time, normalizes timezones, and extracts video conference links (Meet, Zoom, Teams).
*   **Google Drive Sync & AI Contexts:** Accelerated incremental backups using deferred *Fast-Path Hash Cache* (on-demand SHA-256 computation) and batched scanning for unversioned AI directives (`CLAUDE.md`, `.agent`) with secret protection.

> **Note**: You can download the pre-compiled standalone `.exe` installer from the GitHub Releases page or build the solution locally using the .NET 9 SDK.

---
title: "Work Activity Panel"
icon: "/project-icons/work-activity-panel-icon.png"
description: "Native Windows 11 desktop application designed to streamline daily work routines: auto-launches work tools, automates Granola before meetings, reconciles Google Calendar, switches GitHub CLI accounts, and backs up to Google Drive."
githubUrl: "https://github.com/AnaCataVC/work-activity-panel"
websiteUrl: "https://work-activity-panel.ana-catalina.com"
isLiveApp: false
technologies: ["WinUI 3", ".NET 9", "C#", "Fluent Design", "Windows App SDK", "Google Drive Sync", "iCalendar RFC 5545", "GitHub CLI Integration", "GitHub Releases API"]
categories: ["Productivity", "Windows", "Automation"]
type: "desktop"
status: "Active"
problem: "Daily friction manually launching work tools, calendar desynchronization, lack of automated meeting preparedness, risk of losing local work file changes, and tedious account switching between personal and work GitHub CLI profiles."
solution: "A native Windows 11 desktop application crafted with WinUI 3 and .NET 9 featuring Mica backdrops that launches Slack at the start of the workday, auto-launches Granola 5 minutes before scheduled meetings, reconciles mutated Google Calendar events with anti-cache headers, provides 1-click GitHub CLI switching, and performs incremental Google Drive backups with streaming SHA-256 hashing."
learnings:
  - "GitHub CLI Multi-Account Management: Direct integration with 'gh auth switch' and YAML hosts parsing to seamlessly switch between personal and corporate terminal credentials in 1 click."
  - "Resilient RFC 5545 iCalendar Engine: Custom deserialization engine featuring in-place mutation reconciliation, timezone normalization, and video conference link extraction (Meet, Zoom, Teams, Webex)."
  - "Lightweight Google Drive Synchronization: Scalable backup bridge powered by a Google Apps Script Web App with streaming SHA-256 hash change detection and file filtering without heavy GCP client libraries."
  - "In-App Auto-Updater & v2.0 Decoupling: Background GitHub Releases API client with live progress reporting, seamless Inno Setup execution, and clean MVVM architecture in WinUI 3 (.NET 9)."
websiteActionText: "Visit Website"
---

### WinUI 3 (.NET 9) Architecture & Daily Routine Automation

**Work Activity Panel** is a native Windows 11 desktop application engineered using **Windows App SDK** and **WinUI 3**:

*   **MVVM Pattern & Fluent Design:** Clean architectural separation using `CommunityToolkit.Mvvm`, delivering hardware-accelerated **Mica** translucent backdrops, automated Slack startup, and Granola execution 5 minutes before scheduled meetings.
*   **Quick GitHub CLI Account Switcher:** Detects linked profiles in `hosts.yml` and enables 1-click switching between personal and corporate credentials via `gh auth switch`.
*   **Integrated In-App Auto-Updater:** Automated update client querying the GitHub Releases API in the background, downloading installers with reactive progress tracking and applying in-place upgrades.

### Calendar Reconciliation & Accelerated Storage Engines

*   **RFC 5545 iCalendar Reconciliation:** In-house calendar parser with anti-cache headers that reconciles mutated events in real time, normalizes timezones, and extracts direct video conference links (Meet, Zoom, Teams, Webex).
*   **Incremental Google Drive Sync:** Streamlined cloud backup for configured work directories via a lightweight Google Apps Script bridge with streaming SHA-256 change detection and custom exclusion rules.

> **Note**: You can download the pre-compiled standalone `.exe` installer from the GitHub Releases page or build the solution locally using the .NET 9 SDK.

---
title: "Work Activity Panel"
icon: "/project-icons/work-activity-panel-icon.png"
description: "Native Windows 11 desktop application designed to streamline daily work routines: auto-launches work tools, automates Granola before meetings, reconciles Google Calendar with RRULE support, pops up meeting alerts with 1-click join, switches GitHub CLI accounts, and backs up to Google Drive."
lastUpdated: 2026-09-25
githubUrl: "https://github.com/AnaCataVC/work-activity-panel"
isLiveApp: false
technologies: ["WinUI 3", ".NET 9", "C#", "Fluent Design", "Windows App SDK", "Google Drive Sync", "iCalendar RFC 5545 RRULE", "Meeting Alert Popup", "GitHub CLI Integration", "GitHub Releases API"]
categories: ["Productivity", "Windows", "Automation"]
type: "desktop"
status: "Archived"
problem: "Daily friction manually launching work tools, calendar desynchronization across complex recurring events, lack of automated meeting preparedness, risk of losing local work file changes, and tedious account switching between personal and work GitHub CLI profiles."
solution: "A native Windows 11 desktop application crafted with WinUI 3 and .NET 9 featuring Mica backdrops that launches Slack at the start of the workday, auto-launches Granola 5 minutes before scheduled meetings, pops up a reactive Meeting Alert window with 1-click conference joining, reconciles recurring Google Calendar events (RFC 5545 RRULE) with anti-cache headers, provides 1-click GitHub CLI switching, and performs incremental Google Drive backups with streaming SHA-256 hashing."
learnings:
  - "GitHub CLI Multi-Account Management: Direct integration with 'gh auth switch' and YAML hosts parsing to seamlessly switch between personal and corporate terminal credentials in 1 click."
  - "Resilient RFC 5545 iCalendar & RRULE Engine: Custom deserialization engine featuring in-place mutation reconciliation, recurring event calculation (RRULE), strict timezone normalization (TZID), and video conference link extraction (Meet, Zoom, Teams, Webex)."
  - "Reactive Desktop Meeting Alert Popup: Implementation of a decoupled floating secondary window in WinUI 3 notifying imminent meetings with URL validation and 1-click join."
  - "Lightweight Google Drive Synchronization: Scalable backup bridge powered by a Google Apps Script Web App with streaming SHA-256 hash change detection and file filtering without heavy GCP client libraries."
  - "In-App Auto-Updater & MVVM Decoupling: Background GitHub Releases API client with live progress reporting, seamless Inno Setup execution, and clean MVVM architecture in WinUI 3 (.NET 9)."
---

### WinUI 3 (.NET 9) Architecture & Daily Routine Automation

**Work Activity Panel** is a native Windows 11 desktop application engineered using **Windows App SDK** and **WinUI 3**:

*   **MVVM Pattern & Fluent Design:** Clean architectural separation using `CommunityToolkit.Mvvm`, delivering hardware-accelerated **Mica** translucent backdrops, automated Slack startup, and Granola execution 5 minutes before scheduled meetings.
*   **Reactive Meeting Alert Popup:** Floating window that proactively notifies upcoming calendar events, validates video conference URLs, and provides instant 1-click joining.
*   **Quick GitHub CLI Account Switcher:** Detects linked profiles in `hosts.yml` and enables 1-click switching between personal and corporate credentials via `gh auth switch`.
*   **Integrated In-App Auto-Updater:** Automated update client querying the GitHub Releases API in the background, downloading installers with reactive progress tracking and applying in-place upgrades.

### Calendar Reconciliation & Accelerated Storage Engines

*   **RFC 5545 iCalendar Reconciliation & RRULE:** In-house calendar parser with anti-cache headers that reconciles mutated events in real time, handles recurring rules (`RRULE`), normalizes timezones (`TZID`), and extracts direct video conference links (Meet, Zoom, Teams, Webex).
*   **Incremental Google Drive Sync:** Streamlined cloud backup for configured work directories via a lightweight Google Apps Script bridge with streaming SHA-256 change detection and custom exclusion rules.

> **Note**: You can download the pre-compiled standalone `.exe` installer from the GitHub Releases page or build the solution locally using the .NET 9 SDK.

> **Archived:** Its features continue in **smart-calendar-manager** (calendar and meeting alerts), **google-drive-work-sync** (Google Drive backup) and **workspace-companion** (GitHub CLI account switching).

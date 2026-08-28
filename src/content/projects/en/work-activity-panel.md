---
title: "Work Activity Panel"
icon: "/project-icons/work-activity-panel-icon.png"
description: "Native Windows 11 desktop application designed to streamline daily work routines: auto-launches work tools, syncs Google Calendar, backs up to Google Drive, and discovers unversioned AI context."
githubUrl: "https://github.com/AnaCataVC/work-activity-panel"
websiteUrl: "https://work-activity-panel.ana-catalina.com"
isLiveApp: false
technologies: ["WinUI 3", ".NET 9", "C#", "Fluent Design", "Windows App SDK", "Google Drive Sync", "iCalendar RFC 5545"]
categories: ["Desktop", "Productivity", "Windows", "Automation"]
type: "desktop"
status: "Active"
problem: "Daily friction manually opening work tools, calendar desynchronization, lost local configurations, and lack of visibility into unversioned AI context files across projects."
solution: "A native Windows 11 desktop app built with WinUI 3 and .NET 9 featuring Fluent Design and Mica backdrops that automates Slack/Granola launches, syncs Google Calendar, backs up settings to Google Drive with non-blocking background concurrency control, and discovers unversioned AI context."
learnings:
  - "Building native unpackaged WinUI 3 desktop applications with MVVM architecture, Windows 11 Mica backdrops, and startup diagnostics."
  - "Architecting non-blocking background Google Drive backup synchronization with robust concurrency control (LockService) to prevent UI thread freezes."
  - "Designing an unversioned AI context discovery engine (CLAUDE.md, .agent folders, and references) with batched Git checking and secret scanning."
  - "Building an RFC 5545 iCalendar parsing engine supporting line unfolding, timezone normalization, and video conference link extraction."
websiteActionText: "Visit Website"
---

> **Note**: You can download the pre-compiled standalone `.exe` installer from the GitHub Releases page or build the solution locally using the .NET 9 SDK.

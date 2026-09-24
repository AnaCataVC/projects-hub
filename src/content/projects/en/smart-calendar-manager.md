---
title: "Smart Calendar Manager"
icon: "/project-icons/smart-calendar-manager-icon.png"
description: "Native Windows 11 desktop application (WinUI 3 / .NET 9) that bridges personal and work schedules through secret iCal feeds, blocks availability without OAuth, and automates video meeting preparation."
githubUrl: "https://github.com/AnaCataVC/smart-calendar-manager"
isLiveApp: false
technologies: ["C# 13", ".NET 9", "WinUI 3", "Windows App SDK", "CommunityToolkit.Mvvm", "RFC 5545 iCalendar", "Google Apps Script", "xUnit"]
categories: ["Windows", "Productivity", "Developer Tools", "Automation"]
type: "desktop"
status: "Active"
problem: "Merging a personal and a work calendar when the corporate Workspace blocks third-party OAuth apps, without exposing personal event details on the work calendar and without manually prepping for every video call."
solution: "A system tray app that reads secret work and personal iCal feeds (RFC 5545) with no OAuth required, generates a Google Apps Script that runs in the work account to block personal availability with full privacy ('🔒 Busy'), detects meetings with a video link to alert and open note-taking tools minutes before, and lets the user schedule app or URI launches by weekday and time with no cron syntax."
learnings:
  - "First-Party Apps Script Availability Blocking: Generating a script that runs in the work account with the personal feeds embedded, working around Workspace OAuth restrictions without exposing event details."
  - "Dependency-Free RFC 5545 iCalendar Parser: Recurrence resolution (RRULE), line folding, and timezone handling (IANA vs Windows TimeZoneInfo) written from scratch."
  - "Per-Feed Fault Tolerance: The agenda merges multiple iCal feeds, and one failing feed never hides the others."
  - "Visual Cron Launcher with Bitmasks: Weekday selection via `DayOfWeekFlags` evaluated through `System.Threading.Timer` with zero CPU overhead when idle."
websiteUrl: "https://smart-calendar-manager.ana-catalina.com"
websiteActionText: "View Page"
---

### Calendar Unification Without OAuth

**Smart Calendar Manager** reads any calendar through **secret iCal feeds (RFC 5545)** — one work feed plus any number of personal ones — with no OAuth flow required, merging them into a daily agenda with video meeting detection (Google Meet, Zoom, Microsoft Teams, Webex).

*   **Privacy Blocking via Apps Script:** A setup wizard generates a Google Apps Script with the personal feeds embedded that runs directly in the work account, creating availability blocks ("🔒 Busy") without exposing personal event details.
*   **Custom iCalendar Engine:** A dependency-free RFC 5545 parser supporting recurrence (RRULE), line folding, and IANA/Windows timezone resolution.

### Pre-Meeting Automation & Scheduled Launcher

*   **Automatic Video Meeting Prep:** Configurable alerts before meetings with a video link that open tools like Granola alongside the meeting link, with a dismissible banner remembering discarded meetings across sessions.
*   **Visual Cron-Style Launcher:** Weekday selection via bitmasks (`DayOfWeekFlags`) evaluated with `System.Threading.Timer`, supporting executables, custom URI protocol schemes (`slack://`, `spotify://`), and web URLs.

> **Note**: The full source code, Apps Script setup, and build instructions are available in the GitHub repository.

---
title: "AMI Claude Mods"
icon: "/project-icons/ami-claude-mods-icon.png"
description: "Suite of 8 production-grade modular extensions, reactive UI panels, and function hooks for Claude Desktop and Claude Code CLI integrated with Amiga IA. Features plan orchestration, quota pacing, quiet meters, Git/K8s guards, and i18n."
lastUpdated: 2026-11-08
githubUrl: "https://github.com/AnaCataVC/ami-claude-mods"
websiteUrl: "https://ami-claude-mods.ana-catalina.com"
isLiveApp: false
technologies: ["Claude Desktop", "Claude Code CLI", "TypeScript 5.4+", "React / Ink JSX", "Reactive State Atoms", "EngineInterface ($)", "Cleanroom TDD", "claude-code/testing", "Amiga IA"]
categories: ["AI", "Agents", "Developer Tools", "Productivity"]
type: "ai"
status: "In Development"
problem: "As autonomous coding agents tackle large-scale workflows in Claude Desktop and Claude Code CLI, developers encounter critical operational hurdles: rapid context window depletion from repetitive mechanical file searches, premature exhaustion of weekly usage limits without pacing, lack of reactive progress tracking for long plan tasks, orphaned background containers or dangling processes upon exit, accidental commits across mismatched Git identities, mutations on production Kubernetes clusters, and zero visibility into active hooks."
solution: "A suite of eight decoupled modular extensions (mods) and function hooks with native dual-host support (Claude Desktop and Claude Code CLI) and bilingual localization (ES/EN) integrated with Amiga IA. Features a reactive live progress pane for orchestrator plans (/plan-progress) in 'orchestrate-plan', workday usage limit pacing (20% daily) in 'quota-pace', interactive hook and settings inspection ('hooks-viewer'), quiet status bar meters and read circuit breakers ('undelegated-reads'), pre-exit resource checklists ('close-checklist'), inter-agent inbox banners ('child-sessions'), Double-Blind Cleanroom isolation for bias-free TDD ('cleanroom-guard'), and multi-profile Git/K8s safeguards ('context-guard')."
learnings:
  - "Dual-Host Environment Interoperability (Desktop GUI & CLI Terminal): Plugins resolve their UI via '$.ui.resolve', rendering seamlessly as native side drawers and status meters in Claude Desktop or as interactive terminal interfaces in the CLI."
  - "Non-Destructive Plan Reconciliation: 'orchestrate-plan' reconciles plan.md task progress against live child agent sessions and merged PRs without mutating the file on disk, maintaining full reactivity in the progress pane."
  - "Deterministic Local Rate-Limit Pacing: 'quota-pace' calculates weekly usage limits across workdays (20% per weekday target) by tapping native 'session.measure' events, providing timely threshold alerts without external network requests."
  - "Quiet Status Meters & Prompt Ergonomics: Eliminated prompt visual clutter by replacing intrusive AbovePrompt banners in 'undelegated-reads' and 'context-guard' with quiet status line meters that only alert when entering warning thresholds (7/10)."
  - "Host-Gated Isolation over Node.js Runtime: Plugins operate in an isolated ESM container without arbitrary require() or direct fs access; all I/O flows through the EngineInterface ($) handle, guaranteeing sandboxed safety and uniform cross-platform behavior across Windows, macOS, and Linux."
  - "Full Bilingual i18n Localization: All UI panels, toast notifications, status messages, and help texts dynamically resolve localized strings in Spanish and English based on the user's host environment."
  - "0.x Versioning Policy (ADR / Versioning Policy): The repository intentionally remains on the 0.x release line as a live source of personal local mods, prioritizing rapid iteration over the maintenance overhead of backwards compatibility or formal deprecation cycles."
websiteActionText: "Visit Page"
product:
  tagline: "Reactive mods for Claude Desktop and CLI"
  intro: "Suite of 8 mods for Claude Desktop & CLI: orchestrate plans, pace weekly quotas, audit lingering tasks with hotkeys, and run quiet context meters with i18n."
  features:
    - icon: "Sliders"
      title: "Hooks & Settings Inspector"
      text: "Visualize active hooks, registered mods, and configuration layers in real time from a reactive side pane or via /hooks-panel with quick refresh hotkeys."
    - icon: "ListTodo"
      title: "Live Plan Progress & Tracking"
      text: "Reactive side pane tracking plan.md milestones via /plan-progress, reconciling completed tasks, and launching executor subagents non-destructively."
    - icon: "Gauge"
      title: "Weekly Quota Rate-Pacing"
      text: "Calculates optimal workday consumption pace (20% daily) over the 7-day rate limit window and emits status bar warnings before exhausting usage."
    - icon: "Cpu"
      title: "Quiet Context Meter & Delegation"
      text: "Tracks consecutive mechanical searches via a quiet status bar gauge without cluttering the prompt, alerting only at risk thresholds (7/10) to enforce subagent delegation."
    - icon: "CheckSquare"
      title: "Pre-Exit Resource Checklist"
      text: "Audits uncommitted Git changes, running Docker containers, and lingering background processes before closing the session via /cierre or /checklist with the 'r' refresh hotkey."
    - icon: "MessagesSquare"
      title: "Inter-Agent Inbox with Hotkeys"
      text: "Interactive banner above the prompt prioritizing blocking questions from concurrent background subagents with numeric hotkeys (1-3) for rapid replies."
    - icon: "ShieldAlert"
      title: "Double-Blind Cleanroom Isolation"
      text: "Strict TDD guardrail preventing test-generating subagents from reading implementation source code, eradicating confirmation bias with localized notifications."
    - icon: "FolderLock"
      title: "Multi-Profile Git & K8s Guards"
      text: "Enforces active GitHub CLI accounts in the status line per workspace directory and forbids bare kubectl mutations on production Kubernetes clusters without explicit context."
  platforms: ["Claude Desktop", "Claude Code CLI", "Windows", "macOS", "Linux"]
  downloadUrl: "https://github.com/AnaCataVC/ami-claude-mods"
  downloadLabel: "View Repository on GitHub"
  links:
    - label: "Mods Catalog"
      url: "#catalog"
    - label: "Quick Start"
      url: "#quick-start"
  catalog:
    title: "Mods Catalog"
    items:
      - title: "hooks-viewer"
        description: "Interactive side pane and /hooks-panel command with refresh hotkeys listing all configured hooks and active plugins."
        tags: ["session.start", "command.run", "Side Pane", "Hotkeys"]
      - title: "orchestrate-plan"
        description: "Live side pane (/plan-progress) tracking plan.md milestones, reconciling active sessions, and launching executors."
        tags: ["command.run", "Side Pane", "/plan-progress", "Orchestrator"]
      - title: "quota-pace"
        description: "Weekly rate limit pacer (20% per weekday target) with status bar indicators and daily threshold warnings."
        tags: ["session.measure", "Status Bar", "Rate Limiting", "Pacing"]
      - title: "undelegated-reads"
        description: "Real-time quiet status bar gauge and circuit breaker counting consecutive mechanical searches without prompt clutter."
        tags: ["tool.call", "Status Bar", "Quiet Meter"]
      - title: "close-checklist"
        description: "Consolidated pre-exit safety inspector via /cierre and /checklist tracking Git status, Docker containers, and tasks with 'r' key."
        tags: ["session.end", "/cierre", "Side Pane", "Hotkeys"]
      - title: "child-sessions"
        description: "Inter-agent messaging inbox with digit hotkeys (1-3) for instantaneous response, viewing, or dismissal."
        tags: ["session.receive", "AbovePrompt", "Subagents", "Hotkeys"]
      - title: "cleanroom-guard"
        description: "Strict Double-Blind Cleanroom isolation for TDD subagents, preventing test data leakage with localized notifications."
        tags: ["tool.call", "Cleanroom TDD", "Amiga IA"]
      - title: "context-guard"
        description: "Quiet multi-profile guard aligning GitHub CLI accounts with workspaces in the status bar and blocking un-scoped kubectl commands."
        tags: ["git auth", "kubectl", "Guardrails", "Status Bar"]
  codeSnippets:
    - title: "Fast Mods Installation"
      language: "bash"
      code: "npm run install-mods"
    - title: "Persistent Setup in Claude Desktop"
      language: "json"
      code: |
        // ~/.claude/settings.json
        {
          "CLAUDE_CODE_PLUGIN_DIRS": "~/.claude/mods/child-sessions:~/.claude/mods/cleanroom-guard:~/.claude/mods/close-checklist:~/.claude/mods/context-guard:~/.claude/mods/hooks-viewer:~/.claude/mods/orchestrate-plan:~/.claude/mods/quota-pace:~/.claude/mods/undelegated-reads"
        }
    - title: "Ad-Hoc CLI Terminal Execution"
      language: "bash"
      code: "claude --plugin-dir mods/hooks-viewer --plugin-dir mods/orchestrate-plan"
    - title: "Contract Validation & Tests"
      language: "bash"
      code: |
        claude plugin validate mods/hooks-viewer
        claude plugin test mods/hooks-viewer
  faq:
    - question: "How does it integrate with Claude Desktop vs. CLI terminal?"
      answer: "ami-claude-mods is built as a first-class companion for Claude Desktop (Code tab): side panes (Pane), banners, and gauges render as native desktop GUI controls. In the CLI terminal, the exact same components render seamlessly using Ink/ANSI without separate configs."
    - question: "Does it modify Claude Desktop or Claude Code core binaries?"
      answer: "No. All mods run inside the official sandboxed ECMAScript runtime shared by Claude Desktop and Claude Code CLI, consuming exclusively the EngineInterface ($)."
    - question: "Is it cross-compatible across Windows, macOS, and Linux?"
      answer: "Yes. All environment resolution, keyboard hotkeys, and system helpers are built for uniform cross-platform behavior and tested against automated suites."
---

### Production-Grade Extensions and Safety Guards for Claude Desktop and Claude Code

**AMI Claude Mods** (`ami-claude-mods`) is a curated suite of eight modular extensions and function hooks built with dual-host support for **Claude Desktop** (integrated Code tab) and **Claude Code CLI** (Early Access 2.1+), seamlessly integrated with the **Amiga IA** agent ecosystem (`amiga-ia`) and full bilingual localization (Spanish and English). Engineered for developers and engineering teams leveraging AI agents in intensive daily coding workflows, the suite resolves key operational, context, and security pain points when running agentic loops:

*   **Engine Inspection & Diagnostics (`hooks-viewer`):** Reactive side pane and interactive `/hooks-panel` command visualizing active hooks, registered mods, and configuration layers (`user`, `project`, `local`) in real time, featuring quick refresh hotkeys (`r`) and auto-focus.
*   **Plan Progress & Orchestration (`orchestrate-plan`):** Interactive `/plan-progress` side pane tracking `plan.md` milestones, reconciling task completion with active subagent sessions and merged PRs non-destructively, while launching executor subagents.
*   **Weekly Quota Rate-Pacing (`quota-pace`):** Status bar gauge that models optimal consumption pace (20% per workday) against 7-day token limits, alerting once daily when exceeding the day's pacing target.
*   **Context Efficiency & Quiet Status Meter (`undelegated-reads`):** Quiet status bar gauge and circuit breaker monitoring consecutive mechanical searches (`Read`, `Grep`, `Glob`) on the primary thread without cluttering the prompt with banners, alerting only upon reaching warning thresholds (7/10) to enforce subagent exploration delegation.
*   **Pre-Exit Resource Audit & Safe Shutdown (`close-checklist`):** Exit guardrail unified under `/cierre` and `/checklist` commands or upon session termination (`session.end`). Audits uncommitted Git changes, running Docker containers/volumes, and lingering child processes, with keyboard shortcuts (`r`) to refresh state.
*   **Inter-Agent Messaging Inbox with Hotkeys (`child-sessions`):** Non-blocking banner rendered above the prompt that tracks and prioritizes blocking questions or notifications from concurrent background subagents, equipped with numeric hotkeys (`1`–`3`) to reply, view, or dismiss instantly.
*   **Double-Blind Cleanroom Isolation (`cleanroom-guard`):** TDD guardrail that strictly blocks test-generating subagents from reading implementation source code (and vice versa), eradicating confirmation bias with localized notifications and strict contractual audit trails.
*   **Multi-Profile Git & Kubernetes Safeguards (`context-guard`):** Declarative JSON-driven sentinel that verifies active GitHub CLI accounts in the status line against working repository paths and blocks un-scoped `kubectl` mutations on production Kubernetes clusters without explicit context flags.

### Dual-Host Interoperability Architecture & Modular Learnings Catalog

All components in the suite remain fully decoupled and execute within Claude's sandboxed ECMAScript runtime:

*   **Dual-Host Environment Parity (Desktop GUI & CLI Terminal):** Mods integrate natively into both Claude Desktop and the terminal CLI via declarative UI resolution (`$.ui.resolve`), adapting cleanly as desktop side drawers (`Pane`), discreet banners, and status bar meters.
*   **Zero Core Binary Modifications:** Extends agent capabilities by subscribing to the engine's native event bus (`session.start`, `tool.call`, `command.run`, `session.end`) via the official `EngineInterface` (`$`).
*   **Typed State Management & Modular Learnings Catalog:** Inter-turn state persistence is managed through strongly typed reactive atoms formally registered in TypeScript contracts (`types/index.d.ts`). The project also maintains an exhaustive modular architectural learnings catalog in `docs/learning/`.

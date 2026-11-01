---
title: "AMI Claude Mods"
icon: "/project-icons/ami-claude-mods-icon.png"
description: "Suite of production-grade modular extensions, reactive terminal UI panels, and function hooks for Claude Code CLI integrated with the Amiga IA ecosystem, optimizing context consumption, safe exits, multi-profile guards, and Cleanroom TDD isolation."
lastUpdated: 2026-11-01
githubUrl: "https://github.com/AnaCataVC/ami-claude-mods"
websiteUrl: "https://ami-claude-mods.ana-catalina.com"
isLiveApp: false
technologies: ["Claude Code CLI", "TypeScript 5.4+", "React / Ink JSX", "Reactive State Atoms", "EngineInterface ($)", "Cleanroom TDD", "claude-code/testing", "Amiga IA"]
categories: ["AI", "Agents", "Developer Tools", "Productivity"]
type: "ai"
status: "Active"
problem: "As autonomous coding agents tackle large-scale workflows in Claude Code CLI, developers encounter key operational hurdles: rapid context window depletion from repetitive mechanical file searches, orphaned background Docker containers or dangling processes upon exit, accidental commits across mismatched Git identities or mutations on production Kubernetes clusters, and zero visibility into active hook configurations."
solution: "A suite of six decoupled, fully tested modular extensions (mods) and function hooks integrated with the Amiga IA ecosystem, operating within Claude Code's sandboxed ESM runtime and verified via 'claude-code/testing'. Features an interactive hook and settings inspector panel (`hooks-viewer`), a mechanical read circuit breaker enforcing subagent delegation (`undelegated-reads`), a pre-exit resource checklist (`close-checklist`), an inter-agent messaging inbox (`child-sessions`), Double-Blind Cleanroom isolation for bias-free TDD (`cleanroom-guard`), and configurable multi-profile Git/Kubernetes safeguards (`context-guard`)."
learnings:
  - "Host-Gated Isolation over Node.js Runtime: Plugins operate in an isolated ESM container without arbitrary require() or direct fs access; all I/O flows through the EngineInterface ($) handle, guaranteeing sandboxed safety and uniform cross-platform behavior across Windows, macOS, and Linux."
  - "Top-Level Function Scope for Engine Reference ($): Claude Code's static plugin validator enforces that the $ handle cannot be passed to nested or anonymous functions within the register closure, requiring pure module top-level helper functions."
  - "Cross-Platform Asynchronous Environment Resolution: Avoiding silent runtime fallbacks when querying OS-specific environment variables (USERPROFILE vs HOME) by resolving them concurrently with Promise.all."
  - "Double-Blind Cleanroom Synergy with Amiga IA: Decoupling test authors from code implementers to eliminate confirmation bias during agentic TDD workflows and ensuring clean integration with the ami-orchestrate-cleanroom skill."
  - "Mandatory Declarative State Registration in TypeScript Contracts: Any reactive atom state key must be formally registered in the PluginState interface of types/index.d.ts to prevent untyped collisions during engine compilation and validation."
websiteActionText: "Visit Page"
product:
  tagline: "Production-grade mods and reactive terminal panels for Claude Code"
  intro: "Optimize your reasoning context, audit uncommitted changes before exit, protect Git/Kubernetes environments, and run bias-free Cleanroom TDD in Claude Code CLI."
  features:
    - icon: "Sliders"
      title: "Hooks & Settings Inspector"
      text: "Visualize active hooks, registered mods, and configuration layers in real time from a reactive side pane or via /hooks-panel."
    - icon: "Cpu"
      title: "Context Economy & Circuit Breaker"
      text: "Detects consecutive mechanical searches on the primary thread and prompts delegation to exploration subagents, preserving the main reasoning window."
    - icon: "CheckSquare"
      title: "Pre-Exit Resource Checklist"
      text: "Audits uncommitted Git changes, running Docker containers, and lingering background processes before closing the session via /checklist or upon exit."
    - icon: "MessagesSquare"
      title: "Inter-Agent Messaging Inbox"
      text: "Interactive banner above the prompt that surfaces blocking questions and notifications from concurrent background subagents with one-click actions."
    - icon: "ShieldAlert"
      title: "Double-Blind Cleanroom Isolation"
      text: "Strict TDD guardrail preventing test-generating subagents from reading implementation source code, eradicating confirmation bias."
    - icon: "FolderLock"
      title: "Multi-Profile Git & K8s Guards"
      text: "Enforces active GitHub CLI accounts per workspace directory and forbids bare kubectl mutations on production Kubernetes clusters without explicit context."
  platforms: ["Claude Code CLI", "Windows", "macOS", "Linux"]
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
        description: "Interactive side pane and /hooks-panel command listing all configured hooks and active plugins."
        tags: ["session.start", "command.run", "Side Pane"]
      - title: "undelegated-reads"
        description: "Real-time gauge and circuit breaker counting consecutive mechanical searches to enforce subagent delegation."
        tags: ["tool.call", "Status Bar", "AbovePrompt"]
      - title: "close-checklist"
        description: "Pre-exit safety inspector tracking uncommitted Git status, active Docker containers, and dangling tasks."
        tags: ["session.end", "/checklist", "Side Pane"]
      - title: "child-sessions"
        description: "Inter-agent messaging inbox prioritizing blocking questions with quick action buttons."
        tags: ["session.receive", "AbovePrompt", "Subagents"]
      - title: "cleanroom-guard"
        description: "Strict Double-Blind Cleanroom isolation for TDD subagents, preventing test data leakage."
        tags: ["tool.call", "Cleanroom TDD", "Amiga IA"]
      - title: "context-guard"
        description: "Multi-profile guard aligning GitHub CLI accounts with workspaces and blocking un-scoped kubectl commands."
        tags: ["git auth", "kubectl", "Guardrails"]
  codeSnippets:
    - title: "Fast Command-Line Loading"
      language: "bash"
      code: "claude --plugin-dir mods/hooks-viewer --plugin-dir mods/undelegated-reads"
    - title: "Load via Environment Variable"
      language: "powershell"
      code: |
        $env:CLAUDE_CODE_PLUGIN_DIRS = "C:/path/to/ami-claude-mods/mods/hooks-viewer;C:/path/to/ami-claude-mods/mods/close-checklist"
        claude
    - title: "Validate Mod Contract"
      language: "bash"
      code: |
        claude plugin validate mods/hooks-viewer
        claude plugin test mods/hooks-viewer
  faq:
    - question: "Does it modify Claude Code core binaries?"
      answer: "No. All mods run inside Claude Code's official sandboxed ECMAScript runtime consuming exclusively the EngineInterface ($)."
    - question: "Is it cross-compatible across Windows, macOS, and Linux?"
      answer: "Yes. All environment resolution and system helpers are built for uniform cross-platform behavior and tested against automated suites."
---

### Production-Grade Extensions and Safety Guards for Claude Code

**AMI Claude Mods** (`ami-claude-mods`) is a curated suite of modular extensions and function hooks built specifically for the **Claude Code CLI** engine (Early Access 2.1+) and integrated with the **Amiga IA** agent ecosystem (`amiga-ia`). Engineered for developers and engineering teams leveraging AI agents in intensive daily coding workflows, the suite resolves key operational, context, and security pain points when running agentic loops in the terminal:

*   **Engine Inspection & Diagnostics (`hooks-viewer`):** Reactive side pane and interactive `/hooks-panel` command visualizing active hooks, registered mods, and configuration layers (`user`, `project`, `local`) in real time, bringing complete observability to the execution environment.
*   **Context Efficiency & Delegation (`undelegated-reads`):** Status bar gauge and circuit breaker that detects bursts of consecutive mechanical searches (`Read`, `Grep`, `Glob`) on the primary thread and prompts delegation to exploration subagents, preserving the main reasoning context window.
*   **Pre-Exit Resource Audit (`close-checklist`):** Exit guardrail triggered via `/checklist` or session termination (`session.end`). It audits uncommitted Git changes, running Docker containers/volumes, and lingering child processes to prevent local environment bloat.
*   **Inter-Agent Messaging Inbox (`child-sessions`):** Non-blocking banner rendered above the prompt that tracks and prioritizes blocking questions or notifications from concurrent background subagents, complete with quick action buttons to reply, view, or dismiss.
*   **Double-Blind Cleanroom Isolation (`cleanroom-guard`):** TDD guardrail that strictly blocks test-generating subagents from reading implementation source code (and vice versa), ensuring unit tests remain completely unbiased and immune to confirmation bias.
*   **Multi-Profile Git & Kubernetes Safeguards (`context-guard`):** Declarative JSON-driven sentinel that verifies active GitHub CLI accounts against working repository paths and blocks un-scoped `kubectl` mutations on production Kubernetes clusters without explicit context flags.

### Event-Driven Architecture & Reactive Terminal UI

All components in the suite remain fully decoupled and execute within Claude Code's sandboxed ECMAScript runtime:

*   **Zero Core Binary Modifications:** Extends agent capabilities by subscribing to the engine's native event bus (`session.start`, `tool.call`, `command.run`, `session.end`) via the official `EngineInterface` (`$`).
*   **Reactive Terminal Surfaces (Ink/React):** User interfaces (side panes, toasts, status bar badges, and prompt banners) leverage declarative reactive primitives (`Box`, `Text`, `Button`) resolved dynamically at runtime.
*   **Typed State Management:** Inter-turn state persistence is managed through strongly typed reactive atoms, ensuring clean memory isolation between loaded mods and deterministic pre-validation checks.

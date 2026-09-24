---
title: "Cute Agents Desk"
icon: "/project-icons/cute-agents-desk-icon.png"
description: "Native desktop control panel and agent dispatcher to orchestrate command-line AI agents (Claude Code and Antigravity CLI) across local repositories with Git Worktree isolation."
githubUrl: "https://github.com/AnaCataVC/cute-agents-desk"
websiteUrl: "https://cute-agents-desk.ana-catalina.com"
isLiveApp: false
technologies: ["Electron 44", "Node.js", "node-pty", "Claude Code", "Antigravity CLI", "Git Worktrees", "ES Modules", "Pastel-Tech CSS"]
categories: ["AI", "Agents", "Windows", "Desktop", "Developer Tools"]
type: "ai"
status: "In Development"
problem: "Friction and lack of visual insight when running multiple CLI agent sessions (Claude Code, agy) in parallel, the risk of concurrent mutations on shared git working trees, and the lack of a structured delegation mailbox between a coordinator agent and its workers."
solution: "A zero-build Electron 44 desktop command center spawning autonomous coordinator agents over real PTY sessions, orchestrating subtasks via a structured worker-coordinator mailbox, isolating write tasks in independent Git Worktrees, and tracking live token consumption and agent states with a Pastel-Tech UI."
learnings:
  - "Multi-Engine Hook Normalization: Bridging divergent hook contracts between Claude Code (--settings in snake_case with write-tool deny lists) and Antigravity CLI (.agents/hooks.json in camelCase with strict read-only tool whitelists)."
  - "PTY-Based Mailbox Communication: Structured worker-to-coordinator messaging routed directly through the coordinator's interactive terminal PTY session without external network requests."
  - "Zero-Build Architecture via app:// Protocol: Loading native ES modules in Electron through a custom secure scheme that eliminates bundler overhead and local HTTP port vulnerabilities."
  - "Concurrency Protection with Git Worktrees: Isolating write-mode agents into dedicated git worktrees outside the main checkout to prevent race conditions and concurrent mutation collisions."
  - "DAG-Based Task Scheduler with Real Quota Telemetry: A custom scheduler enforces global and per-conversation concurrency limits, detects dependency cycles via DFS with fail-fast cascading aborts, and queries `claude -p /usage` and `agy -p /usage` directly for live subscription usage telemetry (weekly percentage, 5-hour windows, reset dates)."
  - "Radial Flow Visualization: A hub-and-spoke SVG graph (`ui/boss-graph.js`) placing the coordinator at the center with workers orbiting the ring, animated arcs for dependencies and context handoffs, and ghost entries for tasks queued or aborted before they start running."
websiteActionText: "View Website"
---

### Local Agent Dispatch & Multi-Engine Orchestration

**Cute Agents Desk** is a native Windows desktop application engineered to dispatch, coordinate, and visually monitor AI agents operating directly across system terminals and local git repositories:

*   **Autonomous CLI Coordinators:** Each user request initiates a dedicated coordinator agent that evaluates project context, breaks tasks down into parallel sub-sessions, and provisions worker agents via a local `spawn-request` mailbox protocol, maintaining end-to-end execution integrity without cloud intermediaries.
*   **Multi-Engine Support (Claude Code & Antigravity):** Native integration for both `claude` and `agy` runtimes. Each engine utilizes tailored stateless hooks for sub-millisecond tool-call telemetry, token budget tracking, and blocked-state detection.
*   **Real PTY Subprocesses (`node-pty`):** Sanitized pseudoterminal environments that isolate CLI lifecycles, preserve credentials, and prevent session state pollution during `--resume` runs.

### Workspace Isolation & Concurrency Safety

*   **Git Worktree Sandboxing:** Write-mode agent sessions run within dynamically created worktrees isolated from the primary working directory. This prevents concurrent file collisions when multiple agents refactor code simultaneously, enabling clean review and safe pruning.
*   **Read-Only Safe Modes:** Enforcement layers that deny mutation tools in Claude (`Edit`, `Write`, `NotebookEdit`) and enforce an explicit whitelist of inspection tools in Antigravity for passive exploration.
*   **Zero-Build & Pastel-Tech UI:** Modular architecture powered by pure ES Modules loaded over an `app://` protocol, styled with Pastel-Tech design system tokens and real-time SVG status animations compatible with `prefers-reduced-motion`.

> **Note**: The application is actively in development with its dispatcher, mailbox protocol, hooks, and worktree layers verified end-to-end with automated test suites.

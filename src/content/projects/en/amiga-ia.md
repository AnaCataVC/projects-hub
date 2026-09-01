---
title: "Amiga IA"
description: "Comprehensive ecosystem of autonomous subagents, stateless guardrail hooks, and 24 portable declarative skills. 100% cross-compatible with Antigravity (Gemini) and Claude Code."
icon: "/project-icons/ami-icon.png"
githubUrl: "https://github.com/AnaCataVC/amiga-ia"
websiteUrl: "https://amiga-ia.ana-catalina.com"
isLiveApp: false
technologies: ["Subagent Orchestration", "Agent Skills", "Delimited Block Protocol", "Release Automation", "PowerShell", "Node.js"]
categories: ["AI", "Agents", "Productivity", "Developer Tools"]
type: "ai"
status: "Active"
problem: "Traditional step-by-step imperative instructions break down as codebases scale, alongside heavy recurring token taxes caused by bloated system prompts and repetitive multi-engine context."
solution: "A unified agentic ecosystem featuring autonomous orchestrating subagents and declarative skills, utilizing a delimited block protocol for clean directive distribution and rigorous release verification gates."
learnings:
  - "Idempotent AI Rules Distribution: Designed a delimited block protocol to inject and sync agent directives across codebases without overwriting local configurations or leaving artifacts."
  - "Release Automation Verification Gates: Enforced live artifact verification protocols ensuring compiled binaries are physically generated and uploaded before publishing official releases."
  - "Agentic vs. Passive Prompting: Transitioning to autonomous subagent profiles that reason about project goals and deploy worker threads in parallel proved dramatically more robust and scalable than monolithic prompt engineering."
  - "System Token Optimization (ADR-004): Verified 36.3% reduction (-1,211 tokens per conversation turn) by compacting the universal adapter and modularizing hook scripts."
websiteActionText: "Visit Page"
---

### Technical Architecture & Orchestration

**Amiga IA** elevates AI-assisted software engineering from linear chat prompts to an **autonomous subagent mesh** (`ami-tech-lead`, `ami-repo-auditor`, `ami-push-assistant`, etc.). Each agent operates with bounded tools, declarative skills, and explicit verification gates.

*   **Universal Adapter & Hooks:** Injects stateless guardrails that intercept high-risk operations and enforce pre-commit linting and automated test runs.
*   **Delimited Block Protocol:** An idempotent synchronization engine that distributes and updates global agent directives across projects without overwriting custom developer settings.

### Optimization & Quality Gates

*   **Token Tax Reduction:** Decoupling bloated system prompts into *on-demand declarative skills* reduced initial context token consumption by **36.3%**.
*   **Anti-Hallucination Gate:** Automated CI/CD release pipelines featuring live verification checks that physically compile, test, and validate binary hashes before triggering official GitHub releases.

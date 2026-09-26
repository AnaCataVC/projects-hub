---
title: "Amiga IA"
description: "Comprehensive ecosystem of autonomous subagents, stateless guardrail hooks, and 24 portable declarative skills. 100% cross-compatible with Antigravity (Gemini) and Claude Code."
lastUpdated: 2026-08-31
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
product:
  tagline: "Autonomous agentic intelligence for your CLI"
  intro: "An evolutionary suite of decentralized subagents, stateless guardrail hooks, and portable markdown skills, engineered for true parallel reviews and capability discovery. 100% native across Claude Code and Antigravity (Gemini)."
  features:
    - icon: "Bot"
      title: "Autonomous Subagent Suite"
      text: "Specialized subagents reason, discover skills, and orchestrate repository audits, PR code reviews, and releases in parallel — no step-by-step micro-prompting required."
    - icon: "Zap"
      title: "Stateless & Zero-Overhead"
      text: "Engineered for strict token economy, featuring externalized hook deduplication and reactive lazy-loading to keep prompt history pristine and lightning fast."
    - icon: "Layers"
      title: "Multi-Skill Parallelism"
      text: "Decentralized agents coordinate multi-skill workflows concurrently, executing technical debt scans, dependency audits, and documentation architectures simultaneously."
    - icon: "Shield"
      title: "Pre-Flight Guards"
      text: "Performs baseline security, data consistency, and hook interceptions before pushing to remote."
    - icon: "Stethoscope"
      title: "Setup Wizard & Diagnostic Doctor"
      text: "An interactive CLI wizard configures skills and agents and lets you pick your preferred shell engine, while a doctor command verifies system health."
  platforms: ["Claude Code", "Antigravity (Gemini)"]
  downloadUrl: "https://www.npmjs.com/package/@anacatavc/amiga-ia"
  downloadLabel: "Install via NPM"
---

### Technical Architecture & Orchestration

**Amiga IA** elevates AI-assisted software engineering from linear chat prompts to an **autonomous subagent mesh** (`ami-tech-lead`, `ami-repo-auditor`, `ami-push-assistant`, etc.). Each agent operates with bounded tools, declarative skills, and explicit verification gates.

*   **Universal Adapter & Hooks:** Injects stateless guardrails that intercept high-risk operations and enforce pre-commit linting and automated test runs.
*   **Delimited Block Protocol:** An idempotent synchronization engine that distributes and updates global agent directives across projects without overwriting custom developer settings.

### Optimization & Quality Gates

*   **Token Tax Reduction:** Decoupling bloated system prompts into *on-demand declarative skills* reduced initial context token consumption by **36.3%**.
*   **Anti-Hallucination Gate:** Automated CI/CD release pipelines featuring live verification checks that physically compile, test, and validate binary hashes before triggering official GitHub releases.

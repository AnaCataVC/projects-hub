---
title: "Amiga IA"
description: "Comprehensive ecosystem of 14 autonomous subagents, stateless guardrail hooks, and 25 portable declarative skills with selective domain pack installation and strengthened engineering invariants. 100% cross-compatible with Antigravity (Gemini), Claude Code, and OpenAI Codex."
lastUpdated: 2026-11-05
icon: "/project-icons/ami-icon.png"
githubUrl: "https://github.com/AnaCataVC/amiga-ia"
websiteUrl: "https://amiga-ia.ana-catalina.com"
isLiveApp: false
technologies: ["Subagent Orchestration", "Agent Skills", "Delimited Block Protocol", "Cleanroom TDD", "Empirical Benchmarks", "Release Automation", "PowerShell", "Node.js"]
categories: ["AI", "Agents", "Productivity", "Developer Tools"]
type: "ai"
status: "Active"
problem: "Traditional step-by-step imperative instructions break down as codebases scale, alongside heavy recurring token taxes caused by bloated system prompts and repetitive multi-engine context."
solution: "A unified agentic ecosystem featuring 14 autonomous orchestrating subagents and 25 declarative skills with selective domain pack setup and strengthened engineering invariants, powered by a tri-ecosystem compiler (Antigravity, Claude Code, and OpenAI Codex), delimited block distribution, Double-Blind Cleanroom TDD, and deterministic empirical benchmarks."
learnings:
  - "Empirical Benchmark Validation (ADR-004, ADR-012): Offline deterministic benchmark suite demonstrating a 44.75% (-2,973 tokens) reduction in context overhead per turn, 0% confirmation bias in Cleanroom TDD, and 100% precision and recall (F1 = 1.00) in repository defect audits."
  - "Idempotent AI Rules Distribution: Designed a delimited block protocol to inject and sync agent directives across codebases without overwriting local configurations or leaving artifacts."
  - "Release Automation Verification Gates: Enforced live artifact verification protocols ensuring compiled binaries are physically generated and uploaded before publishing official releases."
  - "Agentic vs. Passive Prompting: Transitioning to autonomous subagent profiles that reason about project goals and deploy worker threads in parallel proved dramatically more robust and scalable than monolithic prompt engineering."
  - "Tri-Ecosystem Semantic Compiler: Automated compilation pipeline transforming canonical Markdown sources into native structures for Anthropic Claude Code (~/.claude/), Google Antigravity (~/.gemini/config/), and OpenAI Codex (~/.agents/ and ~/.codex/)."
websiteActionText: "Visit Page"
product:
  tagline: "A thoughtful team of AI agents for everyday coding"
  intro: "Specialized subagents, clear guardrails, and Markdown tools to plan features, review code, and ship releases across Claude Code, Antigravity, and Codex."
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
    - icon: "Package"
      title: "Domain Packs & ami CLI"
      text: "Activate only what you need: in-tree domain packs ('essential', 'data', 'ui') and runtime extensions ('claude-mods') with instant, 100% offline toggling."
    - icon: "Stethoscope"
      title: "Setup Wizard & Diagnostic Doctor"
      text: "The interactive CLI wizard (`ami` or `amiga-ia-setup`) configures full suites or selective domain packs across Antigravity, Claude Code, and OpenAI Codex, with health checks via ami doctor."
  platforms: ["Claude Code", "Antigravity (Gemini)", "OpenAI Codex"]
  downloadUrl: "https://www.npmjs.com/package/@anacatavc/amiga-ia"
  downloadLabel: "Install via NPM"
  links:
    - label: "Explore Tools"
      url: "#catalog"
    - label: "Quick Start"
      url: "#quick-start"
  catalog:
    title: "Suite Capabilities (Utility Groups)"
    items:
      - title: "ami-cleanroom-arbiter"
        description: "Master Double-Blind Cleanroom TDD Arbiter. Freezes formal interface contracts and coordinates isolated builder and tester subagents."
        tags: ["ami-orchestrate-cleanroom", "Contract-First Design", "Adversarial QA"]
      - title: "ami-data-scientist"
        description: "Master orchestrator for exploratory data analysis, SQL optimizations, quality auditing, and executive dashboards."
        tags: ["ami-build-dashboard", "ami-optimize-sql"]
      - title: "ami-ui-builder"
        description: "Master UI and prototype specialist. Builds interactive mockups, UI prototypes, and living visual documentation without context pollution."
        tags: ["ami-prototype-ui", "ami-audit-ui-consistency", "Interactive Prototypes"]
      - title: "ami-tech-lead"
        description: "Master Tech Lead. Orchestrates project planning, greenfield architecture, and strategy design."
        tags: ["ami-architect-project", "ami-plan-feature", "ami-stress-test-idea", "ami-design-test-strategy", "ami-debug-issue"]
      - title: "ami-pr-reviewer"
        description: "Orchestrates structured PR code reviews using parallel subagents for teammates' Pull Requests."
        tags: ["ami-review-peer-pr", "ami-analyze-pr-comments", "ami-review-self-pr"]
      - title: "ami-pr-publisher"
        description: "Automates the creation, conflict checking, and critical self-review of your own Pull Requests."
        tags: ["ami-review-self-pr", "ami-plan-commits", "ami-detect-pr-conflicts", "ami-create-tests"]
      - title: "ami-repo-auditor"
        description: "Orchestrates modular repository health audits, agent discovery, automation opportunities, and quality checks."
        tags: ["ami-discover-ai-agents", "ami-discover-automations", "ami-scan-tech-debt", "ami-analyze-dependencies", "ami-audit-quality"]
      - title: "ami-doc-architect"
        description: "Master documentation orchestrator for repository wikis, context research, and learning extraction."
        tags: ["ami-manage-docs", "ami-research-context"]
      - title: "ami-release-manager"
        description: "Orchestrates full release lifecycle, semantic version tag calculation, and changelog drafting."
        tags: ["ami-prepare-release"]
      - title: "ami-push-assistant"
        description: "Performs baseline security, data consistency, and hook interceptions before pushing to remote."
        tags: ["Git Pre-Flight Guards", "Real-time Debug Linter"]
      - title: "ami-expert-council"
        description: "Spawns a council of dynamic specialized subagents to debate, analyze, and refine architectural ideas."
        tags: ["Dynamic Parallel Subagents"]
  codeSnippets:
    - title: "Universal Installation via ami CLI"
      language: "bash"
      code: |
        npm install -g @anacatavc/amiga-ia
        ami # or: amiga-ia-setup
    - title: "Modular Domain Packs & Extensions"
      language: "bash"
      code: |
        ami list
        ami add data
        ami add ui
        ami add claude-mods
    - title: "System Health Diagnostics"
      language: "bash"
      code: |
        ami doctor
  faq:
    - question: "How does the ami CLI and Domain Packs work?"
      answer: "The `ami` CLI (official alias of `amiga-ia-setup`) packages 39 capabilities into declarative packs ('essential', 'data', 'ui') and runtime extensions ('claude-mods'). Activation is instantaneous, 100% offline, and requires zero additional downloads."
    - question: "Which AI coding assistants are supported?"
      answer: "Amiga IA compiles natively for Google Antigravity (Gemini), Anthropic Claude Code, and OpenAI Codex, translating rules, subagents, and skills into each engine's expected native directory structure."
---

### Technical Architecture & Orchestration

**Amiga IA** elevates AI-assisted software engineering from linear chat prompts to an **autonomous subagent mesh of 14 specialized agents** (`ami-tech-lead`, `ami-repo-auditor`, `ami-push-assistant`, etc.) supported by **25 on-demand declarative skills**. Each agent operates with bounded tools, declarative skills, and explicit verification gates.

*   **Universal Adapter & Multi-Engine Portability:** Stateless guardrail injection and portable skill compilation with native cross-compatibility across Antigravity (Gemini), Claude Code, and OpenAI Codex. Features an interactive CLI wizard (`amiga-ia-setup`) with modular domain pack installation and strengthened engineering invariants.
*   **Delimited Block Protocol:** Idempotent synchronization engine that updates global rules across codebases without overwriting local configurations or leaving residual clutter.
*   **Double-Blind Cleanroom Isolation:** Decoupled TDD workflow (`ami-cleanroom-arbiter`) where implementers and test authors communicate exclusively over frozen interface contracts, eliminating confirmation bias.

### Optimization, Benchmarks & Verification Gates

*   **Empirical Benchmark Suite:** Offline deterministic evaluations demonstrating a **44.75% (-2,973 tokens/turn)** reduction in context overhead, 0% escaped defects under Cleanroom TDD, and perfect precision and recall ($F_1 = 1.00$) in repository defect detection.
*   **Anti-Hallucination Release Protocol:** Automated release pipelines with live artifact verification gates that compile, test, and verify binary checksums before enabling publishing to GitHub.

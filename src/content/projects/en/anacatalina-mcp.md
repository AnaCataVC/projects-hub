---
title: "anacatalina-mcp (AI-Native Interactive Resume)"
description: "Model Context Protocol (MCP) server that enables AI assistants to interact with my professional experience."
lastUpdated: 2026-10-31
icon: "/project-icons/anacatalina-mcp-icon.png"
githubUrl: "https://github.com/AnaCataVC/anacatalina-mcp"
websiteUrl: "https://mcp.ana-catalina.com/"
isLiveApp: false
technologies: ["Python 3.12", "FastMCP", "Streamable-HTTP", "FastAPI / Starlette", "Pydantic v2", "Docker", "Google Cloud Run", "Task Runner", "Model Context Protocol", "Google Antigravity", "Gemini Connected Apps"]
categories: ["AI", "MCP", "Backend", "Cloud"]
type: "ai"
status: "Active"
problem: "Traditional web resumes are designed for humans to read, but today AI assistants are often the ones initially processing this information, limited by the need for scraping and unstructured data."
solution: "An AI-native service built with the official Model Context Protocol exposing 10 specialized tools to query experience, evaluate vacancy alignment, search tech taxonomy, and explore publications. Engineered for LLM reasoning with strict Pydantic schemas and Streamable-HTTP transport, backed by a unified Python task runner (`tasks.py`), ecosystem invariant verification (`verify_ecosystem_invariants.py`), automated upstream sync (`sync_mcp_data.py`), and self-healing CI/CD drift detection workflows."
learnings:
  - "Successful integration of the emerging MCP protocol, adapting the architecture to support asynchronous bidirectional communication via Streamable-HTTP compatible with Antigravity, Claude, Cursor, and Gemini Connected Apps."
  - "ASGI Security Middleware & Bounded Rate Limiting: Implementation of strict ASGI security headers, in-memory rate limiting, and continuous vulnerability auditing in CI pipelines."
  - "In-Memory Dynamic Matching Engine: Deterministic algorithm in cv_service.py evaluating job profile compatibility and technical stack alignment entirely in memory with sub-2ms latency."
  - "Optimized serverless deployment on Google Cloud Run using lightweight Docker containers, leveraging 'Scale to Zero' functionality to reduce operational costs to zero during idle times."
  - "Zero-Downtime Content Negotiation & Typed Contracts: Dynamic HTTP content negotiation on GET / delivering the interactive HTML showcase directly with 200 OK to web browsers while serving JSON discovery to MCP clients, paired with a strongly-typed SearchResult Pydantic v2 contract."
  - "Invariant Automation & Self-Healing CI/CD (v1.10.0): Built a native task runner (`scripts/tasks.py`) and ecosystem invariant auditor (`verify_ecosystem_invariants.py`) validating Pastel-Tech tokens, Zero-Flags policy, and cross-repo data congruence, alongside daily automated upstream drift detection in GitHub Actions."
websiteActionText: "MCP Server & Demo"
---

The **AI-Native Interactive Resume** project is a complete redesign of the resume or portfolio concept. Instead of merely offering a visual interface (GUI) for human recruiters, it exposes an official server under the **Model Context Protocol (MCP)**, standardized by Anthropic and compatible with leading AI ecosystems, paired with an interactive web showcase and client configurator publicly hosted at [https://mcp.ana-catalina.com/](https://mcp.ana-catalina.com/).

This allows any LLM client supporting MCP (such as **Google Antigravity**, **Claude.ai**, **Google Gemini** in Connected Apps, or IDEs like **Cursor** and **Windsurf**) to connect to the server and execute predefined tools to query my tech stack, featured projects, and professional experience, processing the data in a structured and interactive way rather than reading plain text or performing web scraping. Furthermore, human reviewers and technical recruiters can explore the 10 tools catalog and inspect live benchmark evaluation scenarios directly via the web showcase at [mcp.ana-catalina.com](https://mcp.ana-catalina.com/).

### ⚡ Quick Connect (Antigravity, Claude, Gemini & Cursor)

**Google Antigravity / Gemini CLI** supports remote MCP servers in `~/.gemini/config/mcp_config.json`:

```json
{
  "mcpServers": {
    "anacatalina-cv": {
      "url": "https://mcp.ana-catalina.com/mcp"
    }
  }
}
```

**Google Gemini (Connected Apps)** and **Claude.ai (Custom Connectors)** support direct connection over Streamable HTTP by adding the following endpoint in their configuration settings:

```
https://mcp.ana-catalina.com/mcp
```

**Cursor & Windsurf** support remote MCP servers natively in `mcp.json`:

```json
{
  "mcpServers": {
    "anacatalina-cv": {
      "url": "https://mcp.ana-catalina.com/mcp"
    }
  }
}
```

**Key tools exposed for LLM reasoning:**
* `obtener_experiencia`: Query career trajectory, detailed roles, and achievements.
* `evaluar_fit_puesto`: Algorithmic evaluation of technical compatibility with job descriptions.
* `obtener_publicaciones`: Query formal academic publications, technical articles, and research patents.
* `obtener_stack_tecnologico`: Granular search and proficiency levels across specific technologies.
* `buscar_en_curriculum`: Cross-cutting keyword search across career trajectory, tech stack, and projects returning a strongly-typed `SearchResult`.

### Technical Architecture & In-Memory Engine

The server is developed in **Python 3.12** using **FastMCP** and unified **Streamable-HTTP** (`/mcp`), enabling bidirectional streaming and instant JSON responses. All type and input validation for the tools is strictly guaranteed by **Pydantic v2**, loading dataset models directly into memory upon container boot to achieve sub-2-millisecond response latencies. High-concurrency performance and reliability are reinforced with declarative static asset routing, `@functools.lru_cache` template rendering, and a comprehensive suite of automated tests with 100% success rate.

### Deployment on Cloud Run

The application is packaged into a highly optimized **Docker** image and deployed on **Google Cloud Run (GCP)**. The nature of the traffic (on-demand requests from assistants) makes the *Serverless* architecture ideal, since thanks to the *Scale to Zero* model, infrastructure costs remain nil while the server receives no requests, restarting and scaling in milliseconds when invoked.

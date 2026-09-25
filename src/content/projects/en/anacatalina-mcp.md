---
title: "AI-Native Interactive Resume (MCP Server)"
description: "Model Context Protocol (MCP) server that enables AI assistants to interact with my professional experience."
lastUpdated: 2026-09-11
icon: "/project-icons/anacatalina-mcp-icon.png"
githubUrl: "https://github.com/AnaCataVC/anacatalina-mcp"
websiteUrl: "https://mcp.ana-catalina.com/"
isLiveApp: false
technologies: ["Python 3.12", "FastMCP", "Streamable-HTTP", "Docker", "Google Cloud Run", "Model Context Protocol", "Gemini Connected Apps"]
categories: ["AI", "MCP", "Backend", "Cloud"]
type: "ai"
status: "Active"
problem: "Traditional web resumes are designed for humans to read, but today AI assistants are often the ones initially processing this information, limited by the need for scraping and unstructured data."
solution: "A native service for Artificial Intelligences, built using the official Model Context Protocol, exposing 9 specialized tools to query experience, mathematically evaluate profile fit for job openings, and search the tech stack, designed specifically for LLM reasoning using strict Pydantic schemas and Streamable-HTTP transport."
learnings:
  - "Successful integration of the emerging MCP protocol, adapting the architecture to support asynchronous bidirectional communication via Streamable-HTTP compatible with Claude, Cursor, and Gemini Connected Apps."
  - "In-Memory Dynamic Matching Engine: Deterministic algorithm in cv_service.py evaluating job profile compatibility and technical stack alignment entirely in memory with sub-2ms latency."
  - "Optimized serverless deployment on Google Cloud Run using lightweight Docker containers, leveraging 'Scale to Zero' functionality to reduce operational costs to zero during idle times."
websiteActionText: "MCP Server"
---

The **AI-Native Interactive Resume** project is a complete redesign of the resume or portfolio concept. Instead of merely offering a visual interface (GUI) for human recruiters, it exposes an official server under the **Model Context Protocol (MCP)**, standardized by Anthropic and compatible with leading AI ecosystems.

This allows any LLM client supporting MCP (such as **Claude.ai**, **Google Gemini** in Connected Apps, or IDEs like **Cursor** and **Windsurf**) to connect to the server and execute predefined tools to query my tech stack, featured projects, and professional experience, processing the data in a structured and interactive way rather than reading plain text or performing web scraping.

### ⚡ Quick Connect (Claude, Gemini & Cursor)

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
* `obtener_stack_tecnologico`: Granular search and proficiency levels across specific technologies.

### Technical Architecture & In-Memory Engine

The server is developed in **Python 3.12** using **FastMCP** and unified **Streamable-HTTP** (`/mcp`), enabling bidirectional streaming and instant JSON responses. All type and input validation for the tools is strictly guaranteed by **Pydantic v2**, loading dataset models directly into memory upon container boot to achieve sub-2-millisecond response latencies.

### Deployment on Cloud Run

The application is packaged into a highly optimized **Docker** image and deployed on **Google Cloud Run (GCP)**. The nature of the traffic (on-demand requests from assistants) makes the *Serverless* architecture ideal, since thanks to the *Scale to Zero* model, infrastructure costs remain nil while the server receives no requests, restarting and scaling in milliseconds when invoked.

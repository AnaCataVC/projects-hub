---
title: "AI-Native Interactive Resume (MCP Server)"
description: "Model Context Protocol (MCP) server that enables AI assistants to interact with my professional experience."
icon: "/project-icons/anacatalina-mcp-icon.png"
githubUrl: "https://github.com/AnaCataVC/anacatalina-mcp"
websiteUrl: "https://mcp.ana-catalina.com/"
isLiveApp: false
technologies: ["Python 3.12", "FastAPI", "Pydantic v2", "Server-Sent Events (SSE)", "Docker", "Google Cloud Run", "Model Context Protocol"]
categories: ["AI", "API", "Backend", "Cloud"]
type: "ai"
status: "Active"
problem: "Traditional web resumes are designed for humans to read, but today AI assistants (like Claude or Gemini) are often the ones initially processing this information, limited by the need for scraping and unstructured data."
solution: "A native API for Artificial Intelligences, built using the official Model Context Protocol, exposing 9 specialized tools to query experience, mathematically evaluate profile fit for job openings, and search the tech stack, designed specifically for LLM reasoning using strict Pydantic schemas."
learnings:
  - "Successful integration of the emerging MCP protocol, adapting the architecture to support asynchronous bidirectional communication via Server-Sent Events (SSE)."
  - "Resolution of complex dependency conflicts by deliberately pinning to FastMCP v1 instead of migrating to v2, keeping the service stable without an immediate rewrite."
  - "Optimized serverless deployment on Google Cloud Run using lightweight Docker containers, leveraging 'Scale to Zero' functionality to reduce operational costs to zero during idle times."
websiteActionText: "MCP Server"
---

The **AI-Native Interactive Resume** project is a complete redesign of the resume or portfolio concept. Instead of merely offering a visual interface (GUI) for human recruiters, it exposes an official server under the **Model Context Protocol (MCP)**, standardized by Anthropic.

This allows any LLM client supporting MCP (such as Claude Desktop or IDEs like Cursor or Windsurf) to connect to the server and execute predefined tools to query my tech stack, featured projects, and professional experience, processing the data in a structured and interactive way rather than reading plain text or performing web scraping.

### ⚡ Quick Connect (Claude Desktop & Cursor)

**Cursor** natively supports remote MCP servers over a URL. Add this to your `mcp.json`:

```json
{
  "mcpServers": {
    "anacatalina-cv": {
      "url": "https://mcp.ana-catalina.com/sse"
    }
  }
}
```

**Claude Desktop**, on the other hand, only supports local `stdio` servers in its `claude_desktop_config.json` (a bare `url` field there won't connect). To use it, clone this repository and add this configuration pointing to the included `conecta_cata.py` bridge:

```json
{
  "mcpServers": {
    "anacatalina- cv": {
      "command": "python",
      "args": [
        "conecta_cata.py"
      ],
      "env": {
        "MCP_SERVER_SSE_URL": "https://mcp.ana-catalina.com/sse"
      }
    }
  }
}
```

**Key tools exposed for LLM reasoning:**
* `obtener_experiencia`: Query career trajectory, detailed roles, and achievements.
* `evaluar_fit_puesto`: Algorithmic evaluation of technical compatibility with job descriptions.
* `obtener_stack_tecnologico`: Granular search and proficiency levels across specific technologies.

### Technical Architecture

The server is developed in **Python 3.12** using **FastAPI** to handle HTTP requests and bidirectional streaming via **SSE (Server-Sent Events)**, which is required by the HTTP transport specification in MCP. All type and input validation for the tools is strictly guaranteed by **Pydantic v2**, generating the JSON schemas necessary for dynamic declaration in LLMs.

### Deployment on Cloud Run

The application is packaged into a highly optimized **Docker** image and deployed on **Google Cloud Run (GCP)**. The nature of the traffic (on-demand requests from assistants) makes the *Serverless* architecture ideal, since thanks to the *Scale to Zero* model, infrastructure costs remain nil while the server receives no requests, restarting and scaling in milliseconds when invoked.

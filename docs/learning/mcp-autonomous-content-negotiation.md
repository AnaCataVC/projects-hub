# Architectural Learning: Autonomous Hybrid MCP/Web Services & Content Negotiation

## Context & Background
In the personal developer portfolio ecosystem (`ana-catalina.com`), applications span static landing pages (hosted on Vercel), client applications, and backend microservices. The `anacatalina-mcp` project serves as an official Model Context Protocol (MCP) server running Python 3.12 (`FastMCP`) containerized on Google Cloud Run.

Previously, `anacatalina-mcp` handled browser traffic to its root domain (`mcp.ana-catalina.com/`) via an HTTP 301 redirect to an Astro-generated product landing on `projects.ana-catalina.com/p/anacatalina-mcp/`. This caused user experience friction due to unexpected URL redirection, fragmented project documentation across two codebases, and coupled the service's presentation layer to a separate static site repository.

---

## Architectural Decision: Native Content Negotiation vs. Edge Reverse Proxy

When unifying the service under a single root URL (`https://mcp.ana-catalina.com/`), two primary architectural approaches were evaluated:

### 1. Edge Reverse Proxy (Rejected)
* **Design:** Route `mcp.ana-catalina.com` to Vercel CDN to serve the static landing page, using Vercel rewrites to proxy `/mcp`, `/health`, and API endpoints to Google Cloud Run.
* **Why Rejected:**
  - **Streaming & SSE Sensitivity:** The Model Context Protocol uses the *Streamable HTTP* transport, relying on persistent HTTP chunked streaming and Server-Sent Events (SSE). Edge CDNs and serverless proxies often buffer streaming chunks, enforce strict request timeouts, or drop long-lived connections, leading to connection failures in MCP clients like Cursor, Claude.ai, or Windsurf.
  - **Operational Coupling:** Changes to backend endpoints or headers required coordinating DNS and proxy rules in the frontend project.

### 2. Native Content Negotiation on Root Endpoint (Selected)
* **Design:** Point `mcp.ana-catalina.com` directly to Google Cloud Run and implement native HTTP content negotiation on `GET /` inside `server.py`:
  - **Browser Clients (`Accept: text/html`):** Return HTTP 200 with the complete interactive showcase HTML template (`HTMLResponse`).
  - **Machine / AI / Health Probes (`Accept: application/json` or fallback):** Return HTTP 200 with the structured JSON discovery payload (`DISCOVERY_PAYLOAD`).
* **Benefits:**
  - **Single Autonomous Service:** The server directly serves its own documentation, web showcase, and MCP endpoints without external redirects.
  - **Clean URLs:** Users navigate to `mcp.ana-catalina.com` and remain on that host.
  - **Zero Proxy Overhead:** AI clients connect directly to the Cloud Run container without edge buffering or timeout hazards.

---

## Visual Consistency & Two-Way Reciprocal Navigation

When hosting a standalone frontend outside the primary Astro framework, cross-project brand consistency is preserved by:

1. **Shared Token Replication:**
   - Adopting the *Pastel-Tech / Cosmic Aura* tokens: slate-950 dark canvas (`#030712` / `#0b0f19`), frosted glass cards (`backdrop-filter: blur(16px)`), ambient gradient glow orbs, and unified typography:
     - Headings: `Outfit`
     - Body: `Inter`
     - Code & MCP tools: `JetBrains Mono`
2. **Zero Flags Rule Compliance:**
   - Standard ISO language codes (`ES` / `EN`) in pill button switchers, avoiding regional flags in UI and documentation.
3. **Reciprocal Navigation Links:**
   - The autonomous MCP showcase links directly to the detailed technical case study (*Ficha técnica*) in Projects Hub (`https://projects.ana-catalina.com/anacatalina-mcp`).
   - The Projects Hub case study links directly to the autonomous live server and showcase (`https://mcp.ana-catalina.com/`).

---

## Verification via Cleanroom Double-Blind Testing

To avoid confirmation bias during refactoring:
- A formal behavioral contract (`docs/contracts/mcp-landing-unification.contract.md`) was frozen before implementation.
- An independent black-box test suite (`tests/test_content_negotiation.py`) verified:
  - Browser requests return 200 HTML without 301/302 redirects.
  - API/JSON requests return the exact discovery schema.
  - Fallback requests without headers default to JSON discovery.

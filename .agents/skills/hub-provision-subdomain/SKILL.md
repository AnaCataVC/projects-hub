---
name: hub-provision-subdomain
description: >-
  Provisions, verifies, and binds custom subdomains (<slug>.ana-catalina.com) for Projects Hub
  showcase entries. Maps host routes in vercel.json, adds domains on Vercel, extracts unique
  CNAME hash targets, and reports Namecheap DNS records.
tools: run_command, manage_task, view_file, write_to_file, replace_file_content, search_web, read_url_content
allowed-tools: Bash, Read, Grep, Glob, Write, Edit, run_command, view_file, replace_file_content, write_to_file
---

# Skill: Provision & Bind Project Subdomain (`hub-provision-subdomain`)

This skill provides a standardized, automated procedure to configure and provision custom project subdomains (`<slug>.ana-catalina.com`) on Vercel and route them to bilingual product landing pages (`/p/<slug>/` and `/p/<slug>/en/`).

## Context & Architecture

- **Domain Apex:** `ana-catalina.com` (managed in Namecheap).
- **Vercel Project:** `projects-hub` (linked to repository `AnaCataVC/projects-hub`).
- **Target Landing Pages:**
  - Spanish: `/p/<slug>/index.html` (default root `/`)
  - English: `/p/<slug>/en/index.html` (route `/en` or `/en/`)
- **DNS Architecture:**
  - Vercel does **NOT** use generic `cname.vercel-dns.com` for subdomains on this domain.
  - Vercel provisions a unique per-subdomain hash target under `vercel-dns-017.com` (e.g., `<hash>.vercel-dns-017.com`).
  - In Namecheap DNS, the record must be a `CNAME` pointing `<slug>` to that unique target.

---

## Step-by-Step Procedure

### 1. Verify Project Frontmatter & Product Block
Before provisioning, confirm that the project entry has:
- `src/content/projects/es/<slug>.md` and `src/content/projects/en/<slug>.md`
- `websiteUrl: "https://<slug>.ana-catalina.com"`
- A defined `product` block in both languages.

### 2. Map Host Routes in `vercel.json`
Inspect `vercel.json`. The `routes` array must contain host-based rewrite rules mapping the subdomain to the static product pages **BEFORE** the `{"handle": "filesystem"}` entry:

```json
{
  "src": "^/$",
  "has": [{ "type": "host", "value": "<slug>.ana-catalina.com" }],
  "dest": "/p/<slug>/index.html"
},
{
  "src": "^/en/?$",
  "has": [{ "type": "host", "value": "<slug>.ana-catalina.com" }],
  "dest": "/p/<slug>/en/index.html"
}
```

If these routes are missing:
1. Insert them at the top of the `routes` array in `vercel.json`.
2. Ensure JSON syntax is valid.

### 3. Attach Subdomain in Vercel
Execute via `run_command`:
```powershell
vercel domains add <slug>.ana-catalina.com projects-hub
```

Expected output:
- Domain added successfully to project `projects-hub`.
- If already attached, Vercel will report that the domain is already assigned.

### 4. Extract Unique CNAME Hash Target
Execute via `run_command`:
```powershell
vercel domains verify <slug>.ana-catalina.com
```

Examine the command output or run:
```powershell
vercel domains inspect <slug>.ana-catalina.com
```

Locate the DNS configuration details. Look for:
- Record Type: `CNAME`
- Target: `<hash>.vercel-dns-017.com.`

### 5. Report Namecheap DNS Setup to the User
Format the exact DNS record for the user to configure in Namecheap:
- **Location:** Namecheap -> Domain List -> `ana-catalina.com` -> Advanced DNS -> Host Records -> Add New Record
- **Type:** `CNAME Record`
- **Host:** `<slug>`
- **Target / Value:** `<hash>.vercel-dns-017.com`
- **TTL:** `Automatic` (or `1 min` for rapid propagation)

### 6. Verify Domain Propagation & SSL Status
Once DNS is configured:
```powershell
vercel domains verify <slug>.ana-catalina.com
```
When verified, Vercel reports `Valid Configuration` and automatically issues the SSL certificate.

### 7. Run Vitest & Quality Gates
Ensure automated test suites pass:
```powershell
npm test
npm run lint
```
The test `src/__tests__/product-pages.test.ts` validates that every routed subdomain has a valid bilingual product page.

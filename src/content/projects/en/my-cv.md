---
title: "My CV Template"
description: "A modern, interactive, and dependency-free (Zero-JS output) template to build your own resume or professional portfolio. Easy to configure and deploy."
icon: "/project-icons/cv-icon.svg"
githubUrl: "https://github.com/AnaCataVC/my-cv"
websiteUrl: "https://my-cv-template.ana-catalina.com"
isLiveApp: false
technologies: ["Vite", "Handlebars", "Tailwind CSS"]
categories: ["Template", "Portfolio", "SSG"]
type: "web"
status: "Archived"
problem: "Sharing the design of a personal interactive resume so the code doesn't remain isolated and private."
solution: "Refactoring the logic to abstract personal information and convert it into a pure SSG generic template, allowing any developer to deploy their portfolio by just editing a single data.js file."
learnings:
  - "The best way to distribute a highly customizable template is by minimizing coupled dependencies (Zero-JS in the final build)."
  - "Adapting a complex design into a modular system where users only edit a configuration file without touching HTML/CSS improves usability."
  - "Integrating dynamic theming using Tailwind and CSS variables facilitates scalability and personalization."
websiteActionText: "View Demo"
---

### From Personal Resume to Reusable SSG Template

**My CV Template** started as a one-off personal resume and was refactored into a distributable template:

*   **Single Config File:** All personal content lives in one `data.js` file — anyone can deploy their own portfolio by editing data, never touching HTML or CSS.
*   **Handlebars Templating:** Markup structure is fully decoupled from personal content, so forking the repo requires no HTML edits at all.

### Zero-JS, Themeable Output

*   **Vite Static Build:** Compiles to fully static HTML with no client-side framework runtime, keeping the final bundle dependency-free.
*   **Tailwind + CSS Variables:** Dynamic theming is driven by CSS custom properties on top of Tailwind, so color schemes can be swapped without editing component markup.

> **Note**: Archived after serving its purpose as a shareable template — the source is available on GitHub.

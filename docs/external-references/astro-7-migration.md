> **Created:** 2026-06-25
> **Last Updated:** 2026-06-25

# Astro 7.0 Migration Guide & Release Notes

Astro 7.0 (released June 22, 2026) introduces significant performance improvements through a new Rust-based compiler, Vite 8 integration (with Rolldown), and a new native Markdown/MDX pipeline.

## Key Changes & Breaking Changes

### 1. Rust-Based Compiler
The core `.astro` compiler is now written in Rust. 
**Breaking Change:** It no longer performs silent HTML auto-correction. Invalid markup that was previously "fixed" by the compiler may now trigger errors and break the build.

### 2. New Markdown Pipeline (Sätteri)
Sätteri is now the default Markdown/MDX processor.
**Migration:** If the project relies on existing `remark` or `rehype` plugins, you **must** install `@astrojs/markdown-remark` separately to maintain that functionality.

### 3. Astro DB Deprecation
The `astro db` CLI commands (init, login, link, etc.) have been removed. Projects must migrate to a dedicated database client if using this integration.

### 4. Advanced Routing
Previously experimental, advanced routing is now enabled by default. 
**Migration:** The default entry point has moved from `src/app.ts` to `src/fetch.ts`.

### 5. API Removals
Several View Transitions-related APIs (e.g., `TRANSITION_BEFORE_PREPARATION`, `isTransitionBeforePreparationEvent()`) can no longer be used.

## How to Upgrade
To upgrade an existing project, run:
```bash
npx @astrojs/upgrade
```
For manual migration steps, consult the [Upgrade to Astro v7 guide](https://docs.astro.build/en/guides/upgrade-to-astro-v7/).

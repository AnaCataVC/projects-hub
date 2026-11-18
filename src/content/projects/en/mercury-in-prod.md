---
title: "Mercury in Prod"
description: "Empirical Data Science laboratory testing whether Mercury retrograde, planetary shadow windows, or lunar phases correlate with software production incidents, demonstrating how calendar confounders and p-hacking create illusory patterns."
lastUpdated: 2026-11-17
icon: "/project-icons/mercury-in-prod-icon.png"
githubUrl: "https://github.com/AnaCataVC/mercury-in-prod"
liveAppUrl: "https://mercury.ana-catalina.com"
isLiveApp: true
websiteActionText: "View Data Story"
technologies: ["Python 3.11", "Statsmodels", "SciPy", "Pandas", "NumPy", "Plotly", "Streamlit", "Astronomy Engine"]
categories: ["Data Science", "Statistical Inference", "Data Visualization", "Reliability Engineering"]
type: "data-science"
status: "In Development"
problem: "Software engineering folklore often blames Mercury retrograde or full moons for production outages; when scanning historical incident logs without controlling for operational calendar schedules or correcting for multiple hypothesis testing, spurious correlations easily masquerade as real signals."
solution: "A reproducible statistical study and dual interactive laboratory (static Plotly Data Story on Vercel and live Streamlit exploratory sandbox) cross-referencing 400 real public incidents across 8 platforms (Statuspage v2) and a 2,130-day operational panel (2021–2026) against exact offline astronomical ephemerides, using confounder-controlled Poisson GLM with HC3 robust standard errors, vectorized Monte Carlo permutation tests, and Benjamini-Hochberg FDR correction across 57 hypotheses."
learnings:
  - "Operational Confounder Control (Poisson GLM with HC3): Across 2,130 days (2021–2026) with HC3 robust standard errors, human release schedules drive incident variance — weekends (`IRR = 0.31`, `p < 0.0001`), midweek Tue–Thu deploy windows (`IRR = 1.23`, `p < 0.0001`), Patch Tuesday (`IRR = 1.31`, `p = 0.0007`), and Q4 Code Freeze (`IRR = 0.63`, `p = 0.0011`) — while Mercury retrograde (`IRR = 0.98`, `p = 0.71`), pre/post shadow (`IRR = 1.05`, `p = 0.30`), and Full Moon (`IRR = 0.91`, `p = 0.16`) sit cleanly at null."
  - "Real Public Statuspage Base-Rate Audit: Cross-referencing 400 recent public incidents from GitHub, Cloudflare, npm, Discord, Reddit, Bitbucket, Vercel, and DigitalOcean against each provider's exact date-window base rate confirms zero excess risk during Mercury retrograde (`31.0%` observed vs `29.5%` expected, `p = 0.51`)."
  - "Empirical P-Hacking & Seasonal Confounding Demo: Scanning 57 planetary, lunar, and zodiacal slices yields 7 naive hits below `p < 0.05`. Benjamini-Hochberg FDR eliminates random noise and reveals that the lone FDR survivor (`Sun in Capricorn`) is seasonal confounding from the December Q4 Code Freeze."
  - "100% Offline Ephemeris Parity: Exact Python port of `AstrologyEngine.kt` (from `one-ui-extra-widgets`) in `src/ephemeris.py` powered by `astronomy-engine`, guaranteeing deterministic geocentric ecliptic longitudes, angular velocities, and synodic lunar phases."
  - "Dual Web Architecture & 5-State UX Resilience: Standalone static generator (`src/build_site.py`) with a client-side hypothesis explorer paired with a live Streamlit lab (`app.py`), engineered with centralized CSS design tokens, zero Cumulative Layout Shift (CLS), and graceful offline degradation."
---

### Empirical Study & Dual Web Architecture

**Mercury in Prod** pairs causal inference discipline and false-discovery control with two complementary interactive web surfaces:

*   **Static Data Story ([mercury.ana-catalina.com](https://mercury.ana-catalina.com)):** Self-contained visual narrative built by `src/build_site.py` featuring executive KPI cards, a 2021–2026 orbital timeline, a confounder-controlled Poisson GLM forest plot, a 57-hypothesis multiple-testing volcano plot, and a client-side Interactive Hypothesis Explorer.
*   **Interactive Streamlit Lab ([mercury-lab.ana-catalina.com](https://mercury-lab.ana-catalina.com)):** Live exploratory sandbox (`app.py`) enabling users to filter astronomical dimensions, slice operational calendar windows, run vectorized Monte Carlo permutation tests on demand, and inspect raw Statuspage v2 incident records.

### Ephemeris Engine & Statistical Pipeline

*   **Deterministic Ephemerides (`src/ephemeris.py`):** Exact Python port of the `one-ui-extra-widgets` astronomical engine built on `astronomy-engine`, computing geocentric positions for the Sun, Moon, and Mercury through Saturn, motion states (direct, retrograde, pre/post shadow), and lunar phase angles.
*   **Ingestion & Inference (`src/incidents.py` & `src/stats.py`):** Automated public Statuspage v2 feed ingestion with offline cache fallback, parametric and non-parametric two-sample tests (Welch's *t*-test, Mann-Whitney *U*, vectorized permutations), confounder-adjusted Poisson GLM regression, and multiple-testing corrections (Benjamini-Hochberg FDR and Bonferroni).

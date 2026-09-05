---
title: "Emotion Finder"
description: "Interactive emotion detector and affective NLP classifier based on Russell's Circumplex Model of Affect and a 64-state somatic binary decision tree."
icon: "/project-icons/emotion-finder-icon.png"
githubUrl: "https://github.com/AnaCataVC/emotion-finder"
liveAppUrl: "https://emotion-finder.ana-catalina.com"
isLiveApp: true
technologies: ["Python 3.11", "FastHTML", "HTMX", "scikit-learn", "Pico CSS", "TF-IDF", "Vercel Serverless"]
categories: ["Data Science", "NLP", "Machine Learning", "Affective Psychology"]
type: "data-science"
status: "Active"
problem: "Converting vague somatic sensations and diffuse thoughts into accurate emotional labels often frustrates or overwhelms users when presented with long, decontextualized lists of abstract psychological terms."
solution: "A decoupled two-stage hybrid architecture: it first maps freeform natural language into Russell's 4 affective quadrants via TF-IDF and Logistic Regression (0 KB client JS, <5ms inference), then navigates a 4-step binary somatic decision tree to pinpoint exactly 1 of 64 emotions with empathetic introspective clarity."
learnings:
  - "NLP Meta-Word Feature Bias Elimination: Diagnosing and neutralizing shortcut correlations where generic domain terms ('emotion', 'feeling') skewed quadrant predictions, solved via custom domain stopwords and balanced synthetic augmentation."
  - "Affective Stopword Whitelisting: Overriding standard NLP stopword removers to retain critical negation particles ('not', 'without') and intensifiers ('very', 'extremely') essential for valence and arousal fidelity."
  - "Zero-JS Hypermedia with FastHTML and HTMX: Eliminating client build tooling and multi-megabyte SPA bundles using pure server-rendered Python components with declarative partial DOM swaps."
  - "Lightweight Serverless ML on Vercel: Compressing inference pipelines to ~27 KB via L2-regularized linear classifiers, achieving sub-1.5s cold starts and avoiding heavy Transformer overhead."
---

### Hybrid Affective Classification & Circumplex Model

**Emotion Finder** models emotional states using **Russell's Circumplex Model of Affect**, which organizes emotional experience along two orthogonal dimensions: **Valence** (pleasant vs. unpleasant) and **Arousal/Activation** (high vs. low energy).

*   **Affective NLP Classifier:** Evaluates freeform user input through a TF-IDF and Logistic Regression pipeline to predict the overarching affective quadrant (`alta_positiva`, `alta_negativa`, `baja_positiva`, `baja_negativa`).
*   **Binary Somatic Decision Tree (64 States):** Once the quadrant is locked, the application guides the user through a deterministic binary tree of depth 4 ($2^4 = 16$ leaves per quadrant), evaluating 4 physiological Yes/No somatic indicators to determine the exact emotion.

### Dialectal Idiom Mapping & Hypermedia Performance

*   **Cultural Affective Collocations:** Native support for dialectal idioms (Chilean Spanish and British English), using functional affective mapping rather than misleading word-for-word translation.
*   **Stateless Serverless Hypermedia:** Packaged for serverless ASGI deployment on Vercel, delivering smooth, responsive UI state transitions rendered in server-side Python with 0 KB of client JavaScript.

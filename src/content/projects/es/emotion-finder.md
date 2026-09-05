---
title: "Emotion Finder"
description: "Detector interactivo de emociones y clasificador NLP afectivo basado en el Modelo Circunflejo de Russell y un árbol de decisión somático de 64 estados."
descriptionEn: "Interactive emotion detector and affective NLP classifier based on Russell's Circumplex Model of Affect and a 64-state somatic decision tree."
icon: "/project-icons/emotion-finder-icon.png"
githubUrl: "https://github.com/AnaCataVC/emotion-finder"
liveAppUrl: "https://emotion-finder.ana-catalina.com"
isLiveApp: true
technologies: ["Python 3.11", "FastHTML", "HTMX", "scikit-learn", "Pico CSS", "TF-IDF", "Vercel Serverless"]
categories: ["Data Science", "NLP", "Machine Learning", "Psicología Afectiva"]
type: "data-science"
status: "Activo"
problem: "Transformar sensaciones somáticas y pensamientos vagos en etiquetas emocionales precisas suele abrumar al usuario con largas listas descontextualizadas de términos abstractos."
solution: "Una arquitectura híbrida desacoplada en dos etapas: clasificación inicial en los 4 cuadrantes del Modelo Circunflejo de Russell mediante NLP (TF-IDF + Regresión Logística), seguida de un árbol de decisión somático binario de 4 pasos para identificar exactamente 1 de 64 emociones con un resultado empático enfocado."
learnings:
  - "Eliminación de Sesgo por Meta-Palabras en NLP: Detección y corrección de correlaciones espurias donde términos genéricos ('emoción', 'sentimiento') sesgaban la predicción de cuadrantes, neutralizados mediante stopwords de dominio y balanceo sintético."
  - "Preservación Selectiva de Moduladores Afectivos: Whitelisting en el tokenizador para preservar marcadores de negación ('no', 'sin') e intensificadores ('muy', 'demasiado') críticos para determinar la polaridad de valencia y activación."
  - "Arquitectura Hypermedia Zero-JS con FastHTML y HTMX: Reemplazo de frameworks SPA pesados por renderizado server-side en Python y reemplazos parciales de DOM, eliminando por completo los bundles de JavaScript en el cliente."
  - "Inferencia Serverless Ultraligera en Vercel: Compresión de pipelines ML a ~27 KB mediante modelos lineales regularizados y tokenización desacoplada, asegurando arranques en frío de <1.5s e inferencias en <5ms."
---

### Clasificación Afectiva Híbrida y Modelo Circunflejo

**Emotion Finder** estructura el espacio emocional a partir del **Modelo Circunflejo del Afecto de Russell**, que descompone los estados subjetivos en dos dimensiones ortogonales: **Valencia** (placentero vs. desagradable) y **Activación** (alta vs. baja energía).

*   **Clasificador NLP Inicial:** Procesa texto libre mediante un pipeline de TF-IDF y Regresión Logística para identificar el cuadrante afectivo general (`alta_positiva`, `alta_negativa`, `baja_positiva`, `baja_negativa`).
*   **Árbol Somático Binario (64 Estados):** Una vez delimitado el cuadrante, el sistema transiciona a un árbol determinista de profundidad 4 ($2^4 = 16$ hojas por cuadrante), guiando al usuario con 4 preguntas fisiológicas de Sí/No hacia su emoción exacta.

### Mapeo Afectivo Funcional e Idiomático

*   **Tratamiento de Modismos Culturales:** Soporte especializado para expresiones dialectales (chilenismos y modismos británicos), realizando un mapeo funcional del estado afectivo en lugar de una traducción literal léxica.
*   **Eficiencia Hypermedia en Serverless:** Desplegado sobre funciones ASGI sin estado en Vercel, entregando una experiencia reactiva fluida con 0 KB de JavaScript cliente gracias a FastHTML y HTMX.

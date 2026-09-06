---
title: "Emotion Finder"
description: "Detector interactivo de emociones y clasificador NLP afectivo basado en el Modelo Circunflejo de Russell y un árbol de decisión somático de 64 estados."
icon: "/project-icons/emotion-finder-icon.png"
githubUrl: "https://github.com/AnaCataVC/emotion-finder"
liveAppUrl: "https://emotion-finder.ana-catalina.com"
isLiveApp: true
technologies: ["Python 3.11", "FastHTML", "HTMX", "scikit-learn", "Pico CSS", "TF-IDF", "Turso LibSQL", "Vercel Serverless"]
categories: ["Data Science", "NLP", "Machine Learning", "Psicología Afectiva"]
type: "data-science"
status: "Activo"
problem: "Transformar sensaciones somáticas y pensamientos vagos en etiquetas emocionales precisas suele abrumar al usuario con largas listas descontextualizadas de términos abstractos."
solution: "Una arquitectura híbrida con salida temprana: el texto libre se clasifica primero en los 4 cuadrantes del Modelo Circunflejo de Russell mediante TF-IDF y Regresión Logística (0 KB de JS en cliente, <5ms de inferencia), luego se compara por similitud coseno contra las 16 emociones del cuadrante —recurriendo al árbol de decisión somático binario de 4 pasos solo cuando ningún match es suficientemente confiable— y se refina continuamente mediante un ciclo de feedback humano con reentrenamiento automático semanal, validado por cross-validation y pruebas de regresión dialectal."
learnings:
  - "Eliminación de Sesgo por Meta-Palabras en NLP: Detección y corrección de correlaciones espurias donde términos genéricos ('emoción', 'sentimiento') sesgaban la predicción de cuadrantes, neutralizados mediante stopwords de dominio y balanceo sintético."
  - "Preservación Selectiva de Moduladores Afectivos: Whitelisting en el tokenizador para preservar marcadores de negación ('no', 'sin') e intensificadores ('muy', 'demasiado') críticos para determinar la polaridad de valencia y activación."
  - "Arquitectura Hypermedia Zero-JS con FastHTML y HTMX: Reemplazo de frameworks SPA pesados por renderizado server-side en Python y reemplazos parciales de DOM, eliminando por completo los bundles de JavaScript en el cliente."
  - "Inferencia Serverless Ultraligera en Vercel: Compresión de pipelines ML a ~27 KB mediante modelos lineales regularizados y tokenización desacoplada, asegurando arranques en frío de <1.5s e inferencias en <5ms."
---

### Clasificación Afectiva Híbrida y Modelo Circunflejo

**Emotion Finder** estructura el espacio emocional a partir del **Modelo Circunflejo del Afecto de Russell**, que descompone los estados subjetivos en dos dimensiones ortogonales: **Valencia** (placentero vs. desagradable) y **Activación** (alta vs. baja energía).

*   **Clasificador NLP Inicial:** Procesa texto libre mediante un pipeline de TF-IDF y Regresión Logística para identificar el cuadrante afectivo general (`alta_positiva`, `alta_negativa`, `baja_positiva`, `baja_negativa`).
*   **Emparejador Semántico de Emociones:** Ordena las 16 emociones del cuadrante detectado por similitud coseno contra el texto del usuario, resolviendo la mayoría de los casos al instante sin preguntas adicionales.
*   **Árbol Somático Binario (64 Estados, Respaldo):** Solo cuando el emparejador no tiene suficiente confianza, el sistema recurre a un árbol determinista de profundidad 4 ($2^4 = 16$ hojas por cuadrante), guiando al usuario con 4 preguntas fisiológicas de Sí/No hacia su emoción exacta.

### Mapeo Afectivo Funcional e Idiomático

*   **Tratamiento de Modismos Culturales:** Soporte especializado para expresiones dialectales (chilenismos y modismos británicos), realizando un mapeo funcional del estado afectivo en lugar de una traducción literal léxica.
*   **Eficiencia Hypermedia en Serverless:** Desplegado sobre funciones ASGI sin estado en Vercel, entregando una experiencia reactiva fluida con 0 KB de JavaScript cliente gracias a FastHTML y HTMX.
*   **Reentrenamiento con Feedback Humano:** El feedback de usuarios alimenta un pipeline de reentrenamiento automático semanal, validado por cross-validation de 5 folds (F1≥0.95) y pruebas de regresión dialectal, con topes anti-envenenamiento sobre las muestras nuevas, persistido en Turso LibSQL.

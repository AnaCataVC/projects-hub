---
title: "Work Health Timer"
description: "Una aplicación de escritorio ligera para Windows que envía alertas periódicas de salud mientras trabajas."
descriptionEn: "A lightweight Windows desktop application that sends periodic health alerts while you work."
githubUrl: "https://github.com/AnaCataVC/work-health-timer"
websiteUrl: "https://github.com/AnaCataVC/work-health-timer/releases/latest"
isLiveApp: true
technologies: ["Python", "Tkinter", "PyInstaller", "Windows API"]
categories: ["Salud", "Desktop", "Windows"]
status: "Activo"
problem: "Olvidar tomar descansos o mantener una buena postura durante largas sesiones de computadora, causando fatiga visual y dolor de espalda."
solution: "Una aplicación de escritorio que se ejecuta en segundo plano, detecta la actividad real del usuario y muestra recordatorios suaves para descansos visuales y revisión de postura."
learnings:
  - "Integración Nativa en Windows: Interactuar directamente con la API de Windows mediante ctypes para detectar con precisión el tiempo de inactividad del usuario."
  - "Optimización de Recursos: Diseñar una aplicación en segundo plano que consuma los mínimos recursos del sistema."
  - "Empaquetado y Distribución: Superar los retos de compilar una aplicación Python en un .exe independiente usando PyInstaller."
  - "Peculiaridades de Concurrencia: Manejar candados de instancia única con un mecanismo infalible basado en sockets TCP."
websiteActionText: "Descargar Instalador"
---

> **Nota**: Puedes descargar el instalador `.exe` precompilado desde la página de Releases en GitHub. No es necesario tener Python instalado para ejecutar la aplicación.

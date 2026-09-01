---
title: "Prima Focus"
description: "Aplicación multiplataforma local-first (Android nativo y cliente de escritorio en Java) enfocada en la productividad mediante un sistema predictivo de prioridades, widgets con Jetpack Glance y sincronización P2P/LAN."
descriptionEn: "Local-first cross-platform application (native Android and Java desktop companion) focused on productivity through a predictive priority system, Jetpack Glance widgets, and P2P/LAN sync."
icon: "/project-icons/prima-focus-icon.png"
githubUrl: "https://github.com/AnaCataVC/prima-focus-showcase"
websiteUrl: "https://prima-focus.ana-catalina.com"
technologies: ["Kotlin", "Jetpack Compose", "Jetpack Glance", "Java Desktop", "Room Database", "Nearby Connections P2P", "LAN Sync"]
categories: ["Productividad", "Mobile", "Android", "Desktop"]
type: "mobile"
status: "Activo"
problem: "La parálisis por análisis y la falta de concentración al enfrentarse a listas de tareas largas y abrumadoras, sumada a la fricción de tener que abrir la app para consultar o completar tareas prioritarias."
solution: "Una suite de productividad centrada en la privacidad (local-first) compuesta por una app móvil Android nativa y un cliente de escritorio en Java, con sincronización segura P2P/LAN, sistema predictivo de 'Tarea de Hoy', widgets interactivos con Jetpack Glance y vista adaptativa para tablets."
learnings:
  - "Arquitectura modular multiplataforma compartiendo el dominio central (:shared) entre la aplicación Android y el cliente de escritorio en Java (:desktop) con sincronización LAN segura."
  - "Desarrollo de Widgets interactivos para la pantalla de inicio con Jetpack Glance, soportando dimensionamiento dinámico y completado directo de tareas sin abrir la app."
  - "Diseño de algoritmos de sincronización P2P offline mediante Google Nearby Connections con resolución de conflictos LWW y manejo de lápidas (Tombstones) en Room DB v5."
  - "Construcción de interfaces adaptativas mediante Jetpack Compose y WindowSizeClass con vista dividida y calendario interactivo en tablets."
websiteActionText: "Descargar App"
---

### Arquitectura Modular y Dominio Compartido

**Prima Focus** es una suite de productividad multiplataforma construida con una estricta separación de responsabilidades:

*   **Núcleo Compartido (`:shared`):** Módulo en Kotlin puro que encapsula la lógica de negocio, entidades y el algoritmo de puntuación predictiva para priorizar tareas automáticamente.
*   **Android Nativo (`:app`):** Interfaz moderna construida 100% en **Jetpack Compose** con soporte adaptable para teléfonos y tablets mediante `WindowSizeClass`.
*   **Acompañante de Escritorio (`:desktop`):** Cliente liviano en Java que se comunica bidireccionalmente con el dispositivo móvil dentro de la misma red local (LAN).

### Sincronización P2P Offline y Widgets de Pantalla

*   **Google Nearby Connections & Room v5:** Sincronización descentralizada dispositivo-a-dispositivo (P2P) que no requiere servidores ni conexión a internet, utilizando resolución de conflictos LWW (*Last-Write-Wins*) y lápidas (*tombstones*) para eliminaciones consistentes.
*   **Widgets con Jetpack Glance:** Widgets interactivos de inicio que permiten visualizar y completar la tarea prioritaria del día en un solo toque sin abrir la aplicación.

> **Nota**: El código fuente completo reside en un repositorio privado, pero he creado un repositorio público (**Showcase**) donde puedes explorar la documentación técnica y descargar el APK y el bundle para escritorio.

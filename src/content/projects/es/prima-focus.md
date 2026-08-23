---
title: "Prima Focus"
description: "Aplicación móvil Android nativa (local-first) enfocada en la productividad mediante un sistema predictivo de prioridades, widgets con Jetpack Glance y sincronización P2P."
descriptionEn: "Native local-first Android mobile application focused on productivity through a predictive priority system, Jetpack Glance widgets, and P2P sync."
icon: "/project-icons/prima-focus-icon.png"
githubUrl: "https://github.com/AnaCataVC/prima-focus-showcase"
websiteUrl: "https://prima-focus.ana-catalina.com"
technologies: ["Kotlin", "Jetpack Compose", "Jetpack Glance", "Room Database", "Nearby Connections P2P", "Material Design 3"]
categories: ["Productividad", "Mobile", "Android"]
status: "Activo"
problem: "La parálisis por análisis y la falta de concentración al enfrentarse a listas de tareas largas y abrumadoras, sumada a la fricción de tener que abrir la app para consultar o completar tareas prioritarias."
solution: "Una aplicación móvil enfocada en la privacidad (local-first) que utiliza un sistema predictivo para destacar una única 'Tarea de Hoy', widgets interactivos en la pantalla de inicio con Jetpack Glance (Top 3 y Quick Add), diseño adaptativo para tablets con calendario y sincronización offline P2P sin servidores en la nube."
learnings:
  - "Desarrollo de Widgets interactivos para la pantalla de inicio con Jetpack Glance, soportando dimensionamiento dinámico y completado directo de tareas sin abrir la app."
  - "Diseño de algoritmos de sincronización P2P offline mediante Google Nearby Connections con resolución de conflictos LWW y manejo de lápidas (Tombstones) en Room DB v5."
  - "Construcción de interfaces adaptativas mediante Jetpack Compose y WindowSizeClass con vista dividida y calendario interactivo en tablets."
  - "Implementación de modelos atómicos de tareas, temporizadores con Foreground Services y respaldos en JSON mediante Storage Access Framework (SAF)."
websiteActionText: "Descargar App"
---

> **Nota**: El código fuente completo reside en un repositorio privado, pero he creado un repositorio público (**Showcase**) donde puedes explorar la documentación técnica y descargar el APK de la aplicación.

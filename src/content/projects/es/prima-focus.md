---
title: "Prima Focus"
description: "Aplicación nativa de Android local-first construida con Kotlin Multiplatform, enfocada en la productividad mediante un sistema predictivo de prioridades, widgets con Jetpack Glance y sincronización P2P mediante Google Nearby Connections."
icon: "/project-icons/prima-focus-icon.png"
githubUrl: "https://github.com/AnaCataVC/prima-focus"
websiteUrl: "https://prima-focus.ana-catalina.com"
technologies: ["Kotlin Multiplatform", "Jetpack Compose", "Jetpack Glance", "Room Database v6", "P2P Nearby Connections"]
categories: ["Productividad", "Mobile", "Android"]
type: "mobile"
status: "Activo"
problem: "La parálisis por análisis y la falta de concentración al enfrentarse a listas de tareas largas y abrumadoras, sumada a la fricción de tener que abrir la app para consultar o completar tareas prioritarias."
solution: "Una suite de productividad local-first para Android nativo con motor predictivo de 'Tarea de Hoy', base de datos Room v6, widgets Glance, resolución LWW inmune a clock drift y sincronización P2P segura para batería mediante Google Nearby Connections."
learnings:
  - "Persistencia en Room Database v6 y Clock Drift: Migración a Room v6 con purga automática de lápidas (tombstones) y resolución LWW basada en versiones lógicas monótonas."
  - "Arquitectura Modular Kotlin Multiplatform: Dominio compartido (:shared) con motor predictivo de prioridades y resolución de conflictos determinista, desacoplado de la capa de UI de Android."
  - "Widgets Interactivos con Jetpack Glance: Widgets de inicio para visualizar y completar tareas prioritarias en 1 toque directo desde el launcher."
  - "Disciplina de Alcance: Se dio de baja el cliente de escritorio en Java/Swing y su protocolo de sincronización LAN (servidor HTTP embebido, emparejamiento HMAC-SHA256) para enfocar el código exclusivamente en Android nativo, eliminando más de 2.400 líneas sin uso."
websiteActionText: "Descargar App"
---

### Arquitectura KMP y Persistencia Room v6

**Prima Focus** es una suite de productividad local-first para Android nativo construida con estricta separación de responsabilidades:

*   **Núcleo Compartido KMP (`:shared`):** Capa de dominio en Kotlin puro con motor predictivo de prioridades y resolución determinista *Last-Write-Wins* (LWW) inmune a desfases de reloj (*clock drift*).
*   **Android Nativo (`:app`) & Room v6:** Interfaz en **Jetpack Compose** adaptativa para tablets y persistencia relacional en Room v6 con soporte de lápidas (*tombstones*) y purga automática a los 30 días.

### Sincronización P2P y Widgets Glance

*   **Sincronización P2P con Nearby Connections:** Selección de modo anfitrión/cliente mediante Google Nearby Connections para sincronización móvil-a-móvil sin conexión, con temporizador de desconexión automática a los 45 segundos y límite de 5 MB por transferencia.
*   **Widgets con Jetpack Glance:** Widgets interactivos de inicio para completar tareas prioritarias en 1 toque directo desde el launcher.

> **Nota**: El código fuente completo, la arquitectura modular KMP y las versiones oficiales compiladas están disponibles públicamente en el repositorio principal bajo licencia *Source-Available*.

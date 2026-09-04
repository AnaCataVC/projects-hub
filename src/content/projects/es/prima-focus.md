---
title: "Prima Focus"
description: "Aplicación multiplataforma local-first (Android nativo y cliente de escritorio en Java) enfocada en la productividad mediante un sistema predictivo de prioridades, widgets con Jetpack Glance y sincronización P2P/LAN."
descriptionEn: "Local-first cross-platform application (native Android and Java desktop companion) focused on productivity through a predictive priority system, Jetpack Glance widgets, and P2P/LAN sync."
icon: "/project-icons/prima-focus-icon.png"
githubUrl: "https://github.com/AnaCataVC/prima-focus-showcase"
websiteUrl: "https://prima-focus.ana-catalina.com"
technologies: ["Kotlin Multiplatform", "Jetpack Compose", "Jetpack Glance", "Room Database v6", "HMAC-SHA256 LAN Protocol", "P2P Nearby Connections"]
categories: ["Productividad", "Mobile", "Android", "Desktop"]
type: "mobile"
status: "Activo"
problem: "La parálisis por análisis y la falta de concentración al enfrentarse a listas de tareas largas y abrumadoras, sumada a la fricción de tener que abrir la app para consultar o completar tareas prioritarias."
solution: "Una suite de productividad local-first (Android nativo y cliente de escritorio) con sincronización LAN autenticada mediante HMAC-SHA256 y PIN, base de datos Room v6, motor predictivo de 'Tarea de Hoy', widgets Glance y resolución LWW inmune a clock drift."
learnings:
  - "Sincronización LAN Criptográfica: Servidor HTTP embebido en escritorio (puerto 8765) con emparejamiento por PIN de 6 dígitos, firmas HMAC-SHA256 y mitigación de fuerza bruta."
  - "Persistencia en Room Database v6 y Clock Drift: Migración a Room v6 con purga automática de lápidas (tombstones) y resolución LWW basada en versiones lógicas monótonas."
  - "Arquitectura Modular Kotlin Multiplatform: Dominio compartido (:shared) entre Android nativo y cliente de escritorio con consistencia no-regresiva de tareas completadas."
  - "Widgets Interactivos con Jetpack Glance: Widgets de inicio para visualizar y completar tareas prioritarias en 1 toque directo desde el launcher."
websiteActionText: "Descargar App"
---

### Arquitectura KMP y Persistencia Room v6

**Prima Focus** es una suite de productividad local-first construida con estricta separación de responsabilidades:

*   **Núcleo Compartido KMP (`:shared`):** Capa de dominio en Kotlin puro con motor predictivo de prioridades y resolución determinista *Last-Write-Wins* (LWW) inmune a desfases de reloj (*clock drift*).
*   **Android Nativo (`:app`) & Room v6:** Interfaz en **Jetpack Compose** adaptativa para tablets y persistencia relacional en Room v6 con soporte de lápidas (*tombstones*) y purga automática a los 30 días.

### Sincronización Criptográfica LAN/P2P y Widgets

*   **Sincronización LAN Autenticada con HMAC-SHA256:** Comunicación bidireccional entre la app móvil y el companion de escritorio (`DesktopSyncServer`, puerto 8765) blindada por PIN de 6 dígitos y firmas criptográficas HMAC por petición.
*   **Widgets con Jetpack Glance & Nearby P2P:** Widgets interactivos de inicio para completar tareas al instante y modo anfitrión/cliente para sincronización P2P offline mediante Google Nearby Connections.

> **Nota**: El código fuente completo reside en un repositorio privado, pero he creado un repositorio público (**Showcase**) donde puedes explorar la documentación técnica y descargar el APK y el bundle para escritorio.

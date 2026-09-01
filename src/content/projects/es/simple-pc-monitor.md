---
title: "Simple PC Monitor"
icon: "/project-icons/simple-pc-monitor-icon.png"
description: "Panel interactivo de telemetría HUD y suite de control de rendimiento para Windows en C# nativo (.NET WPF/XAML) en un único ejecutable standalone de 585 KB sin dependencias externas."
descriptionEn: "Visual, lightweight HUD system telemetry dashboard and performance control suite for Windows built in native C# (.NET WPF/XAML) in a standalone 585 KB executable with zero external dependencies."
githubUrl: "https://github.com/AnaCataVC/simple-pc-monitor"
websiteUrl: "https://simple-pc-monitor.ana-catalina.com"
isLiveApp: false
technologies: ["C#", ".NET WPF", "XAML", "Win32 P/Invoke", "PowrProf.dll", "Direct3D"]
categories: ["Desktop", "Windows", "Rendimiento", "Herramientas", "Telemetría"]
type: "desktop"
status: "Activo"
problem: "Monitores de recursos tradicionales pesados (basados en frameworks web/Electron o scripts interpretados) que consumen excesiva memoria RAM (~100-300 MB), provocan latencia en la interfaz y suelen disparar falsos positivos heurísticos en antivirus."
solution: "Un panel de telemetría HUD nativo y ultraligero compilado en C# (.NET WPF/XAML) que consulta métricas del sistema mediante llamadas P/Invoke a Win32 de submilisegundo (<0.01 ms), incorpora un centro de comandos con acciones rápidas, conmutación de planes de energía con PowrProf.dll, optimización de memoria y limpiador seguro del sistema."
learnings:
  - "Diseño de interfaz HUD de alto rendimiento con centro de comandos, métricas en tiempo real y botones de acción rápida para control de energía y limpieza del sistema."
  - "Conmutación de Planes de Energía con Win32: Uso de PowrProf.dll (PowerSetActiveScheme) para alternar perfiles energéticos al instante sin requerir elevación de permisos UAC de Administrador."
  - "Gestión de Procesos Segura y Resiliente: Integración de QueryFullProcessImageName con lista negra estricta para prevenir la terminación accidental de procesos críticos del sistema operativo."
  - "Optimización Segura de Memoria RAM: Recorte del Working Set mediante SetProcessWorkingSetSize y EmptyWorkingSet para liberar páginas físicas de memoria de forma controlada y segura."
websiteActionText: "Visitar Sitio"
---

### Arquitectura Nativa Win32 y Telemetría HUD

**Simple PC Monitor** es una herramienta de diagnóstico compactada en un ejecutable *standalone* de solo **585 KB** con cero dependencias externas:

*   **P/Invoke de Submilisegundo (<0.01 ms):** Consulta de contadores de hardware y telemetría de CPU, RAM y red mediante llamadas directas a APIs nativas de Win32 en lugar de capas lentas WMI.
*   **Conmutación Energética con `PowrProf.dll`:** Cambio instantáneo entre esquemas de energía de Windows (*Alto Rendimiento*, *Equilibrado*, *Ahorro*) invocando `PowerSetActiveScheme` sin requerir elevación de privilegios de Administrador (UAC).

### Optimización de Memoria y Resiliencia

*   **Recorte Controlado de Working Set:** Función de optimización que invoca `EmptyWorkingSet` y `SetProcessWorkingSetSize` para compactar páginas de memoria inactivas sin forzar *paging thrashing*.
*   **Gestión Segura de Procesos:** Algoritmo con lista blanca/negra de procesos del sistema mediante `QueryFullProcessImageName` para prevenir la terminación de procesos del núcleo de Windows.

> **Nota**: Puedes descargar el ejecutable standalone `.exe` directamente desde la sección de Releases en GitHub sin necesidad de instaladores.

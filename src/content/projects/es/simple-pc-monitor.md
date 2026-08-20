---
title: "Simple PC Monitor"
icon: "/project-icons/simple-pc-monitor-icon.png"
description: "Panel interactivo de telemetría de escritorio y suite de control de rendimiento para Windows en C# nativo (.NET WPF/XAML) en un único ejecutable standalone de 585 KB sin dependencias externas."
descriptionEn: "Visual, lightweight, and interactive system telemetry dashboard and performance control suite for Windows built in native C# (.NET WPF/XAML) in a standalone 585 KB executable with zero external dependencies."
githubUrl: "https://github.com/AnaCataVC/simple-pc-monitor"
websiteUrl: "https://simple-pc-monitor.ana-catalina.com"
isLiveApp: false
technologies: ["C#", ".NET WPF", "XAML", "Win32 P/Invoke", "PowrProf.dll", "Direct3D"]
categories: ["Desktop", "Windows", "Rendimiento", "Herramientas", "Telemetría"]
status: "Activo"
problem: "Monitores de recursos tradicionales pesados (basados en frameworks web/Electron o scripts interpretados) que consumen excesiva memoria RAM (~100-300 MB), provocan latencia en la interfaz y suelen disparar falsos positivos heurísticos en antivirus."
solution: "Un panel de telemetría nativo y ultraligero compilado en C# (.NET WPF/XAML) que consulta métricas del sistema mediante llamadas P/Invoke a Win32 de submilisegundo (<0.01 ms), incorpora conmutación de planes de energía con PowrProf.dll, optimización de memoria de procesos, limpiador seguro de archivos temporales y 4 temas visuales en un ejecutable autónomo de 585 KB."
learnings:
  - "Conmutación de Planes de Energía con Win32: Uso de PowrProf.dll (PowerSetActiveScheme) para alternar perfiles energéticos al instante sin requerir elevación de permisos UAC de Administrador."
  - "Gestión de Procesos Segura y Resiliente: Integración de QueryFullProcessImageName con lista negra estricta para prevenir la terminación accidental de procesos críticos del sistema operativo."
  - "Optimización Segura de Memoria RAM: Recorte del Working Set mediante SetProcessWorkingSetSize y EmptyWorkingSet para liberar páginas físicas de memoria de forma controlada y segura."
  - "Chrome Personalizado y Controles de Ventana Adaptativos: Manejo de ventana fluida con AllowsTransparency=\"True\", esquinas redondeadas dinámicas, arrastre suave y modo fijar en primer plano (Always-on-Top)."
websiteActionText: "Visitar Sitio"
---

> **Nota**: Puedes descargar el ejecutable standalone `.exe` directamente desde la sección de Releases en GitHub sin necesidad de instaladores.

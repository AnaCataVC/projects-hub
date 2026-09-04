---
title: "Simple PC Monitor"
icon: "/project-icons/simple-pc-monitor-icon.png"
description: "Panel interactivo de telemetría HUD y suite de control de rendimiento para Windows en C# nativo (.NET WPF/XAML) en un único ejecutable standalone de 585 KB sin dependencias externas."
descriptionEn: "Visual, lightweight HUD system telemetry dashboard and performance control suite for Windows built in native C# (.NET WPF/XAML) in a standalone 585 KB executable with zero external dependencies."
githubUrl: "https://github.com/AnaCataVC/simple-pc-monitor"
websiteUrl: "https://simple-pc-monitor.ana-catalina.com"
isLiveApp: false
technologies: ["C#", ".NET WPF", "XAML", "Win32 P/Invoke", "PowrProf.dll", "ntdll Kernel API", "AI & MCP Process Monitor"]
categories: ["Desktop", "Windows", "Rendimiento", "Herramientas", "Telemetría"]
type: "desktop"
status: "Activo"
problem: "Monitores de recursos tradicionales pesados (basados en frameworks web/Electron o scripts interpretados) que consumen excesiva memoria RAM (~100-300 MB), provocan latencia en la interfaz y suelen disparar falsos positivos heurísticos en antivirus."
solution: "Un panel de telemetría HUD y centro de comandos en C# nativo (.NET WPF/XAML) de solo 585 KB que combina métricas P/Invoke de submilisegundo, monitor de sesiones de Agentes IA y servidores MCP, terminación de procesos en árbol inverso, congelación con NtSuspendProcess y planes de energía en 1 clic."
learnings:
  - "Monitor de Agentes IA & MCP: Telemetría en tiempo real de sesiones CLI (claude, gemini, cursor, antigravity) y servidores MCP con Reverse Tree Kill para evitar procesos huérfanos."
  - "Control de Procesos a Nivel de Kernel: Congelación y reanudación segura de procesos desbocados con ntdll.dll (NtSuspendProcess / NtResumeProcess) y cierre elegante en dos fases."
  - "Conmutación Energética con PowrProf.dll: Alternancia instantánea de perfiles de energía (PowerSetActiveScheme) combinada con recorte seguro de páginas de memoria inactivas (EmptyWorkingSet)."
  - "Limpiador Seguro Multizona: Purga higiénica de archivos temporales del sistema protegida contra enlaces simbólicos (NTFS Junctions) y validación de marcas temporales duales."
websiteActionText: "Visitar Sitio"
---

### Arquitectura Nativa Win32 y Sesiones de Agentes IA

**Simple PC Monitor** es un centro de comandos de alto rendimiento compactado en un único ejecutable *standalone* de **585 KB** con cero dependencias externas:

*   **P/Invoke y Telemetría HUD (<0.01 ms):** Consulta de contadores de hardware y red mediante llamadas directas a APIs nativas de Win32, sin la latencia de WMI ni runtimes externos.
*   **Monitor de Agentes IA & Servidores MCP:** Detección en vivo de sesiones de desarrollo (`claude.exe`, `gemini.exe`, `cursor.exe`, `antigravity.exe`) y subprocesos MCP, con terminación jerárquica en árbol inverso (*Reverse Topological Tree Kill*) que elimina procesos huérfanos en segundo plano.

### Control a Nivel de Kernel y Optimización

*   **Control de Procesos en Kernel (`ntdll.dll`):** Suspensión y reactivación instantánea de hilos con `NtSuspendProcess` y `NtResumeProcess` para congelar tareas intensivas sin perder datos, junto a un protocolo de cierre elegante en dos fases con detección de System Tray.
*   **Centro de Comandos en 1 Clic:** Conmutación de esquemas de energía mediante `PowrProf.dll`, modo Turbo con recorte de memoria RAM (`EmptyWorkingSet`), vaciado de caché DNS y limpiador multizona inmune a *Junctions* de NTFS.

> **Nota**: Puedes descargar el ejecutable standalone `.exe` directamente desde la sección de Releases en GitHub sin necesidad de instaladores.

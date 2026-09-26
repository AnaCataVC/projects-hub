---
title: "System Core Monitor"
icon: "/project-icons/system-core-monitor-icon.png"
description: "Panel interactivo de telemetría HUD y suite de control de rendimiento para Windows en C# nativo (.NET WPF/XAML) en un único ejecutable standalone de 585 KB sin dependencias externas."
lastUpdated: 2026-09-24
githubUrl: "https://github.com/AnaCataVC/system-core-monitor"
websiteUrl: "https://system-core-monitor.ana-catalina.com"
isLiveApp: false
technologies: ["C#", ".NET Framework 4.8", "WPF", "XAML", "Win32 P/Invoke", "PowrProf.dll", "ntdll Kernel API", "AI & MCP Process Monitor"]
categories: ["Windows", "Rendimiento", "Herramientas", "Telemetría"]
type: "desktop"
status: "Activo"
problem: "Monitores de recursos tradicionales pesados (basados en frameworks web/Electron o scripts interpretados) que consumen memoria RAM excesiva, provocan latencia en la interfaz y suelen disparar falsos positivos heurísticos en antivirus."
solution: "Un panel de telemetría HUD y centro de comandos en C# nativo (.NET WPF/XAML) de solo 585 KB que combina métricas P/Invoke de submilisegundo, monitor de sesiones de Agentes IA y servidores MCP, terminación de procesos en árbol inverso, congelación con NtSuspendProcess y planes de energía en 1 clic."
learnings:
  - "Monitor de Agentes IA & MCP: Telemetría en tiempo real de sesiones CLI (claude, gemini, cursor, antigravity) y servidores MCP con Reverse Tree Kill para evitar procesos huérfanos."
  - "Rastreo de Linaje de Agentes y Escáner de Residuos: AgentLineageTracker agrupa sesiones huérfanas por su proceso padre finalizado, mientras AiAgentLeftoverScanner realiza un barrido de disco completo en busca de worktrees de git colgantes, directorios scratch obsoletos y logs huérfanos dejados por sesiones de agentes IA."
  - "Detección de Procesos Desbocados: Heurística de CPU sostenida que advierte proactivamente sobre tareas descontroladas en segundo plano antes de requerir intervención manual con NtSuspendProcess."
  - "Control de Procesos a Nivel de Kernel: Congelación y reanudación segura de procesos desbocados con ntdll.dll (NtSuspendProcess / NtResumeProcess) y cierre elegante en dos fases."
  - "Conmutación Energética con PowrProf.dll: Alternancia instantánea de perfiles de energía (PowerSetActiveScheme) combinada con recorte seguro de páginas de memoria inactivas (EmptyWorkingSet)."
  - "Limpiador Seguro Multizona: Purga higiénica de archivos temporales del sistema protegida contra enlaces simbólicos (NTFS Junctions) y validación de marcas temporales duales."
websiteActionText: "Visitar Sitio"
product:
  tagline: "Monitor de Rendimiento y Agentes IA para Windows"
  intro: "Telemetría en tiempo real, observabilidad de Claude Code y Gemini, mantenimiento de sesiones y optimización de recursos en un único ejecutable nativo."
  features:
    - icon: "Cpu"
      title: "Telemetría Win32 P/Invoke"
      text: "Cálculos delta de alta precisión con GetSystemTimes y GlobalMemoryStatusEx estructurado por referencia, sin presión sobre el Garbage Collector."
    - icon: "Bot"
      title: "Agentes IA & Servidores MCP"
      text: "Observabilidad en tiempo real de Claude Code CLI, Gemini y servidores MCP compilados (Go, Rust, Node, Python) con telemetría de CPU y RAM dedicada."
    - icon: "FileClock"
      title: "Mantenimiento de Transcripts IA"
      text: "Escaneo y depuración inteligente de historiales .jsonl (>7 días) con ventana de gracia inviolable de 24h y protección de archivos de configuración."
    - icon: "PowerOff"
      title: "Conmutador de Energía Win32"
      text: "Cambio instantáneo de planes de energía (Equilibrado, Alto Rendimiento, Ahorro) en 0.01 ms con PowrProf.dll, sin requerir permisos de Administrador."
    - icon: "Trash2"
      title: "Limpiador Temp & RAM Optimizer"
      text: "Limpieza multizona de archivos temporales antiguos (>24h), vaciado de páginas en desuso con EmptyWorkingSet y podado de cachés de compilación."
    - icon: "Gauge"
      title: "Centro de Mando en 1 Clic"
      text: "Modo Turbo, vaciado de caché DNS, suspensión/reanudación de procesos desbocados y rescate de aplicaciones colgadas, todo con llamadas nativas al kernel."
  screenshots:
    - src: "/product-screenshots/system-core-monitor/dashboard.png"
      alt: "Dashboard de System Core Monitor mostrando telemetría de CPU y RAM, sesiones activas de Claude Code y Gemini, y mantenimiento de transcripts IA"
  faq:
    - question: "¿Requiere privilegios de Administrador (UAC) para funcionar?"
      answer: "No. Toda la telemetría de CPU, RAM, discos, red, conmutación de planes de energía, agentes IA y limpieza de archivos temporales opera con permisos normales de usuario estándar."
    - question: "¿Por qué el ejecutable es tan ligero (617 KB)?"
      answer: "A diferencia de monitores construidos con Electron que empaquetan Chromium y Node (>150 MB), System Core Monitor está compilado en C# nativo sobre .NET 9 con cero dependencias externas de terceros."
    - question: "¿Cómo detecta los agentes IA y servidores MCP?"
      answer: "Examina los árboles de procesos nativos de Toolhelp32 identificando ejecutables de Claude CLI, Gemini y servidores MCP (Go, Rust, Node, Python), calculando su consumo de recursos agregado."
    - question: "¿Es seguro el limpiador de transcripts IA?"
      answer: "Sí. Aplica una ventana de gracia inviolable de 24 horas para nunca tocar sesiones recientes, verifica que el PID no esté activo y protege listas negras de configuración (CLAUDE.md, GEMINI.md, settings.json)."
  platforms: ["Windows 10 (1809+)", "Windows 11"]
  downloadUrl: "https://github.com/AnaCataVC/system-core-monitor/releases/latest/download/SystemCoreMonitor-Setup.exe"
  downloadLabel: "Descargar Instalador (.exe)"
---

### Arquitectura Nativa Win32 y Sesiones de Agentes IA

**System Core Monitor** es un centro de comandos de alto rendimiento compactado en un único ejecutable *standalone* de **585 KB** con cero dependencias externas:

*   **P/Invoke y Telemetría HUD (<0.01 ms):** Consulta de contadores de hardware y red mediante llamadas directas a APIs nativas de Win32, sin la latencia de WMI ni runtimes externos.
*   **Monitor de Agentes IA & Servidores MCP:** Detección en vivo de sesiones de desarrollo (`claude.exe`, `gemini.exe`, `cursor.exe`, `antigravity.exe`) y subprocesos MCP, con terminación jerárquica en árbol inverso (*Reverse Topological Tree Kill*) que elimina procesos huérfanos en segundo plano.
*   **Linaje de Agentes y Escáner de Residuos:** `AgentLineageTracker` agrupa sesiones huérfanas por su proceso padre finalizado, y `AiAgentLeftoverScanner` ejecuta un barrido de disco completo en busca de worktrees de git colgantes, directorios scratch obsoletos y logs huérfanos.

### Control a Nivel de Kernel y Optimización

*   **Control de Procesos en Kernel (`ntdll.dll`):** Suspensión y reactivación instantánea de hilos con `NtSuspendProcess` y `NtResumeProcess` para congelar tareas intensivas sin perder datos, junto a un protocolo de cierre elegante en dos fases con detección de System Tray.
*   **Centro de Comandos en 1 Clic:** Conmutación de esquemas de energía mediante `PowrProf.dll`, modo Turbo con recorte de memoria RAM (`EmptyWorkingSet`), vaciado de caché DNS y limpiador multizona inmune a *Junctions* de NTFS.

> **Nota**: Puedes descargar el ejecutable standalone `.exe` directamente desde la sección de Releases en GitHub sin necesidad de instaladores.

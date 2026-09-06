---
title: "Claude Desktop Tools"
icon: "/project-icons/claude-desktop-tools-icon.png"
description: "Centro de comando visual autónomo para Windows 11 que audita almacenamiento local, poda transcripts CLI y sesiones de Claude Desktop de forma segura, filtra secretos y respalda directivas IA en Google Drive."
githubUrl: "https://github.com/AnaCataVC/claude-desktop-tools"
websiteUrl: "https://claude-desktop-tools.ana-catalina.com"
isLiveApp: false
technologies: ["WinUI 3", ".NET 9", "C#", "Fluent Design", "Windows App SDK", "Google Drive Sync", "Regex Secret Scanning", "Claude CLI", "Claude Desktop", "Inno Setup"]
categories: ["IA", "Windows", "Developer Tools", "Productividad"]
type: "desktop"
status: "Activo"
problem: "El uso intensivo de Claude Code (CLI) y Claude Desktop acumula gigabytes de transcripts (.jsonl), satura las listas de sesiones de la interfaz gráfica y expone directivas IA no versionadas (CLAUDE.md, skills, agents, hooks) al riesgo de pérdida local o fuga de credenciales sensibles."
solution: "Una aplicación de escritorio nativa en WinUI 3 y .NET 9 con fondos Mica que recupera espacio en disco bajo una guarda inviolable de 24 horas, poda índices de sesiones con bloqueo de colisión de procesos (claude.exe), verifica la vida real de sesiones CLI por PID, monitorea y ajusta en vivo el uso de RAM/CPU de los procesos claude.exe, y respalda selectivamente directivas en Google Drive tras escanear secretos."
learnings:
  - "Guarda Inviolable de 24 Horas & Poda Atómica: Algoritmo de depuración que garantiza inmunidad a sesiones activas recientes y mutación quirúrgica in-place de cabeceras JSON con archivos temporales atómicos."
  - "Explorador de Sesiones CLI con Verificación de Liveness: Cruce en tiempo real contra ~/.claude/sessions/<pid>.json validando PID y tiempo de inicio de proceso para evitar falsos positivos ante reciclaje de PIDs en Windows."
  - "Descubrimiento BFS de Contextos IA & Filtro de Secretos: Exploración recursiva de directivas (CLAUDE.md, skills, agents, hooks) con verificación Git por lotes de 50 archivos y filtros regex contra claves SSH, AWS y tokens PAT."
  - "Sincronización Selectiva a Google Drive: Motor de transferencia con reporte de progreso en vivo por archivo (IProgress), selección granular mediante checkboxes y clasificación automática en cubos configurables."
websiteActionText: "Visitar Sitio"
---

### Centro de Mando Visual para Claude CLI & Desktop en Windows 11

**Claude Desktop Tools** es una aplicación de escritorio nativa desarrollada en **WinUI 3** y **.NET 9** con diseño Fluent y efectos translúcidos **Mica**, creada para resolver el impacto colateral del desarrollo continuo con Inteligencia Artificial en local:

*   **Auditoría y Recuperación de Almacenamiento:** Análisis instantáneo de transcripts `.jsonl` acumulados por Claude Code en `%USERPROFILE%\.claude\projects`. Permite liberar gigabytes de espacio con una **guarda inviolable de 24 horas** que blinda cualquier transcript modificado recientemente, incluso si la política de retención se define en 0 días.
*   **Mantenimiento Seguro de Índices de Sesión:** Compactación y archivado atómico de sesiones en `%APPDATA%\Claude\claude-code-sessions` (con soporte automático para rutas virtualizadas por MSIX en Microsoft Store). Cuenta con detección de procesos activos (`claude.exe`) para evitar sobreescrituras en memoria al cerrar la aplicación.

### Explorador de Sesiones con Verificación de Vida Real

*   **Detección Confiable de Sesiones Activas:** A diferencia de simples inspecciones de archivos estáticos, el explorador cruza cada transcript contra el registro vivo de sesiones (`~/.claude/sessions/<pid>.json`) y comprueba el `StartTime` del proceso en Windows, descartando colisiones de PID reciclados por el sistema operativo.
*   **Gestión Granular:** Permite terminar sesiones activas directamente o eliminar transcripts individuales e inactivos de forma masiva según umbrales de antigüedad.
*   **Monitor de Recursos en Vivo:** Una pestaña dedicada lista los procesos `claude.exe` activos con RAM/CPU en tiempo real, permitiendo liberar RAM (`EmptyWorkingSet`) o ajustar su prioridad (`Process.PriorityClass`) sin cerrar la sesión.

### Descubrimiento de Directivas de IA y Respaldo Cloud

*   **Inspección BFS y Escaneo de Secretos:** Escaneo exhaustivo de archivos de contexto (`CLAUDE.md`, referencias, habilidades, agentes y hooks) con comprobación Git acelerada por lotes de 50 elementos y filtrado preventivo por expresiones regulares contra tokens de AWS, GitHub, Slack y llaves privadas SSH.
*   **Respaldo Resiliente en Google Drive:** Sincronización en la nube con selector individual de archivos, cancelación interactiva, cálculo de progreso en vivo y enrutamiento jerárquico hacia cubos organizados (`_sin-repo`, `_claude-config`).

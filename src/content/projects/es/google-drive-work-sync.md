---
title: "Google Drive Work Sync"
icon: "/project-icons/google-drive-work-sync-icon.png"
description: "Aplicación de escritorio nativa para Windows 11 (WinUI 3 / .NET 9) que sincroniza carpetas de trabajo y contexto de agentes IA hacia Google Drive mediante Google Apps Script, con hashing incremental y redacción de secretos."
lastUpdated: 2026-09-24
githubUrl: "https://github.com/AnaCataVC/google-drive-work-sync"
isLiveApp: false
technologies: ["C# 13", ".NET 9", "WinUI 3", "Windows App SDK", "CommunityToolkit.Mvvm", "Google Apps Script", "xUnit"]
categories: ["Windows", "Productividad", "Herramientas de Desarrollador", "Automatización"]
type: "desktop"
status: "Activo"
problem: "Mantener sincronizadas carpetas de trabajo y el contexto de agentes IA (CLAUDE.md, skills, memorias) hacia Google Drive sin depender de clientes de sincronización pesados ni de subir archivos sin cambios reales, evitando además fugas accidentales de secretos."
solution: "Una app de bandeja del sistema en WinUI 3 que sube solo archivos nuevos o modificados a un Google Apps Script Web App propio, usando un fast-path de metadatos (fecha y tamaño) antes de calcular hashes SHA-256, con reintentos con backoff exponencial ante errores transitorios, descubrimiento recursivo de contexto de agentes IA con exclusión de repositorios y worktrees anidados, y un filtro de secretos en tres capas antes de respaldar cualquier archivo."
learnings:
  - "Índice de Hashes a Prueba de Caídas: Escritura del índice de sincronización en un archivo temporal con swap atómico, para que una ejecución interrumpida nunca lo deje vacío."
  - "Filtro de Secretos en Tres Capas: Lista negra de nombres de archivo, escaneo por regex de los primeros 64 KB en busca de tokens (PAT, AWS, SSH) y un sanitizador que falla cerrado al parsear configuraciones MCP."
  - "Detección de Repositorios y Worktrees Anidados: Recorrido BFS que identifica raíces de git (`.git` como carpeta o como archivo de worktree) para no reclasificar `CLAUDE.md` versionados como notas sueltas."
  - "Sin Omisiones Silenciosas: Archivos bloqueados o carpetas no listables se reportan como error en vez de contarse como 'sin cambios', para que el estado 'Al día' sea siempre confiable."
websiteUrl: "https://google-drive-work-sync.ana-catalina.com"
websiteActionText: "Ver Página"
product:
  tagline: "Sincroniza tu trabajo y contexto IA a Drive"
  intro: "Una app de bandeja del sistema en WinUI 3 que calcula hashes antes de subir archivos, los agrupa en lotes para respetar las cuotas de Google Apps Script y redacta secretos en tres capas antes de que algo salga de tu equipo."
  features:
    - icon: "ScanLine"
      title: "Fast-Path de Metadatos + SHA-256"
      text: "Revisa primero la fecha de modificación y el tamaño, calculando un hash SHA-256 completo solo cuando los metadatos sugieren un cambio real — los archivos sin cambios nunca se vuelven a subir."
    - icon: "FolderTree"
      title: "Descubrimiento de Contexto de Agentes IA"
      text: "Escaneos en anchura (niveles 1-6) que encuentran archivos CLAUDE.md, skills de agentes, prompts de subagentes, memorias y hooks en tus carpetas de trabajo, de forma automática."
    - icon: "KeyRound"
      title: "Redacción de Secretos en Tres Capas"
      text: "Una lista negra de nombres de archivo (.env, id_rsa), un escaneo regex de 64 KB en busca de patrones de tokens y un sanitizador de configuraciones MCP que falla cerrado, todo antes de que un archivo se prepare para subir."
    - icon: "GitBranch"
      title: "Exclusión de Repos y Worktrees Anidados"
      text: "Un recorrido BFS detecta raíces de git — tanto carpetas .git como worktrees vinculados — y los excluye, para que los archivos CLAUDE.md versionados nunca se reclasifiquen como notas sueltas sin trackear."
    - icon: "Clock"
      title: "Programador Flexible y Bandeja del Sistema"
      text: "Configura la sincronización en segundo plano por día y hora, minimiza a la bandeja del sistema y arranca en silencio al iniciar sesión."
    - icon: "ShieldCheck"
      title: "Sin Omisiones Silenciosas"
      text: "Los archivos bloqueados y las carpetas no listables se reportan como error, no se cuentan como \"sin cambios\" — así el estado Al día siempre es confiable. Los lotes fallidos quedan disponibles para reintentar en un clic con backoff exponencial."
  platforms: ["Windows 11"]
  downloadUrl: "https://github.com/AnaCataVC/google-drive-work-sync/releases"
  downloadLabel: "Descargar para Windows"
---

### Sincronización Incremental con Verificación Criptográfica

**Google Drive Work Sync** combina un fast-path de metadatos (timestamp y tamaño) con verificación **SHA-256** completa solo cuando hay indicios reales de cambio, empaquetando los archivos en lotes de hasta 8 archivos o 9 MB para respetar las cuotas de ejecución de Google Apps Script.

*   **Índice Persistente y Crash-Safe:** El estado de sincronización se guarda en `sync_hashes.json` mediante escritura a archivo temporal y reemplazo atómico, evitando índices corruptos ante un corte inesperado.
*   **Recuperación ante Fallos Transitorios:** Los errores HTTP (429, 500, 503) se persisten y pueden reintentarse en un clic, recalculando el hash del archivo actual antes de reintentar.

### Descubrimiento de Contexto de Agentes IA y Seguridad

*   **Traversal BFS Consciente de Git:** Detecta raíces de repositorios y worktrees vinculados para excluirlos del escaneo, y usa `git ls-files` para distinguir documentación versionada de notas locales sin trackear.
*   **Redacción de Secretos en Tres Niveles:** Filtro de nombres de archivo conocidos, escaneo regex de tokens comunes y un parser de configuraciones MCP que falla cerrado ante cualquier duda, antes de respaldar el archivo.

> **Nota**: El código fuente completo, las decisiones de arquitectura y las instrucciones de compilación están disponibles en el repositorio de GitHub.

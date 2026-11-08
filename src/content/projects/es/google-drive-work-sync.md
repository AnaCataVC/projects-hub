---
title: "Google Drive Work Sync"
icon: "/project-icons/google-drive-work-sync-icon.png"
description: "Aplicación de escritorio nativa para Windows 11 (WinUI 3 / .NET 9) que sincroniza carpetas de trabajo y contexto de agentes IA hacia Google Drive mediante motor nativo Rust con BLAKE3 SIMD y Google Apps Script."
lastUpdated: 2026-11-08
githubUrl: "https://github.com/AnaCataVC/google-drive-work-sync"
isLiveApp: false
technologies: ["C# 13", ".NET 9", "Rust", "WinUI 3", "Windows App SDK", "BLAKE3 SIMD", "P/Invoke FFI", "Google Apps Script", "xUnit"]
categories: ["Windows", "Productividad", "Herramientas de Desarrollador", "Automatización"]
type: "desktop"
status: "Activo"
problem: "Mantener sincronizadas carpetas de trabajo y el contexto de agentes IA (CLAUDE.md, skills, memorias) hacia Google Drive sin depender de clientes de sincronización pesados ni de subir archivos sin cambios reales, evitando además fugas accidentales de secretos."
solution: "Una app de bandeja del sistema en WinUI 3 con motor nativo en Rust (FFI P/Invoke) que sube solo archivos nuevos o modificados a un Google Apps Script Web App propio, usando hashing ultraveloz BLAKE3 SIMD y Rayon multihilo antes de transferir, con reintentos con backoff exponencial ante errores transitorios, descubrimiento recursivo de contexto IA sin repositorios ni worktrees anidados y filtro de secretos en tres capas."
learnings:
  - "Subida en Lotes y Reconciliación de Huérfanos: Empaquetado en lotes para sincronización de contexto de Claude con progreso en vivo, indicadores de escaneo y confirmación de acciones destructivas al limpiar duplicados o huérfanos en Google Drive."
  - "Índice de Hashes a Prueba de Caídas: Escritura del índice de sincronización en un archivo temporal con swap atómico, para que una ejecución interrumpida nunca lo deje vacío."
  - "Filtro de Secretos en Tres Capas: Lista negra de nombres de archivo, escaneo por regex de los primeros 64 KB en busca de tokens (PAT, AWS, SSH) y un sanitizador que falla cerrado al parsear configuraciones MCP."
  - "Detección de Repositorios y Worktrees Anidados: Recorrido BFS que identifica raíces de git (`.git` como carpeta o como archivo de worktree) para no reclasificar `CLAUDE.md` versionados como notas sueltas."
  - "Sin Omisiones Silenciosas: Archivos bloqueados o carpetas no listables se reportan como error en vez de contarse como 'sin cambios', para que el estado 'Al día' sea siempre confiable."
  - "Motor Nativo Rust vía FFI y BLAKE3 SIMD (v1.9.0): Integración de un motor cdylib en Rust con Rayon y hashing BLAKE3 vectorizado mediante un puente P/Invoke de cero asignaciones, con migración transparente in-place del índice de hashes sin re-subidas a la red."
websiteUrl: "https://google-drive-work-sync.ana-catalina.com"
websiteActionText: "Ver Página"
product:
  tagline: "Respalda proyectos e IA en Google Drive"
  intro: "App en la bandeja del sistema que sube solo tus cambios a Drive, cuida tus cuotas de transferencia y filtra claves privadas antes de que salgan de tu PC."
  features:
    - icon: "ScanLine"
      title: "Fast-Path de Metadatos + BLAKE3 SIMD"
      text: "Revisa primero la fecha de modificación y el tamaño, calculando un hash BLAKE3 ultrarrápido con motor nativo Rust vectorizado solo cuando hay cambios reales — los archivos intactos nunca se vuelven a subir."
    - icon: "FolderTree"
      title: "Descubrimiento de Contexto de Agentes IA"
      text: "Escaneos en anchura (niveles 1-6) que encuentran archivos CLAUDE.md, skills de agentes, prompts de subagentes, memorias, hooks y mods (~/.claude/mods/) en tus carpetas de trabajo, de forma automática."
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
      text: "Los archivos bloqueados y carpetas no listables se reportan como error, con indicadores de escaneo y sincronización en tiempo real, confirmación en acciones destructivas y reintento en un clic con backoff exponencial."
  faq:
    - question: "¿Necesito instalar el cliente oficial de Google Drive?"
      answer: "No. Se conecta directamente a tu propio Google Apps Script Web App y sube en lotes solo los archivos nuevos o modificados."
    - question: "¿Cómo evita que se suban claves privadas o tokens por error?"
      answer: "Aplica un filtro en tres capas: bloquea archivos sensibles (.env, id_rsa), escanea los primeros 64 KB en busca de tokens y sanea configuraciones MCP antes de subir nada."
    - question: "¿Vuelve a subir todos mis archivos en cada sincronización?"
      answer: "No. Revisa primero la fecha de modificación y el tamaño, y calcula el hash SHA-256 solo cuando hay cambios reales, guardando un índice local a prueba de fallos."
  platforms: ["Windows 11"]
  downloadUrl: "https://github.com/AnaCataVC/google-drive-work-sync/releases/latest"
  downloadLabel: "Descargar para Windows"
---

### Sincronización Incremental con Verificación Criptográfica

**Google Drive Work Sync** combina un fast-path de metadatos (timestamp y tamaño) con verificación criptográfica ultraveloz **BLAKE3 SIMD** mediante motor nativo en Rust solo cuando hay indicios reales de cambio, empaquetando los archivos en lotes de hasta 8 archivos o 9 MB para respetar las cuotas de ejecución de Google Apps Script.

*   **Índice Persistente y Crash-Safe:** El estado de sincronización se guarda en `sync_hashes.json` mediante escritura a archivo temporal y reemplazo atómico, evitando índices corruptos ante un corte inesperado.
*   **Recuperación ante Fallos Transitorios:** Los errores HTTP (429, 500, 503) se persisten y pueden reintentarse en un clic, recalculando el hash del archivo actual antes de reintentar.

### Descubrimiento de Contexto de Agentes IA y Seguridad

*   **Traversal BFS Consciente de Git:** Detecta raíces de repositorios y worktrees vinculados para excluirlos del escaneo, y usa `git ls-files` para distinguir documentación versionada de notas locales sin trackear.
*   **Redacción de Secretos en Tres Niveles:** Filtro de nombres de archivo conocidos, escaneo regex de tokens comunes y un parser de configuraciones MCP que falla cerrado ante cualquier duda, antes de respaldar el archivo.

> **Nota**: El código fuente completo, las decisiones de arquitectura y las instrucciones de compilación están disponibles en el repositorio de GitHub.

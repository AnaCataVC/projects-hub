---
title: "AMI Claude Mods"
icon: "/project-icons/ami-claude-mods-icon.png"
description: "Suite de mods modulares, paneles reactivos y function hooks para Claude Desktop y Claude Code CLI integrados con Amiga IA. Incluye medidores de estado discretos, atajos de teclado, guardas Git/K8s y aislamiento Cleanroom TDD."
lastUpdated: 2026-11-05
githubUrl: "https://github.com/AnaCataVC/ami-claude-mods"
websiteUrl: "https://ami-claude-mods.ana-catalina.com"
isLiveApp: false
technologies: ["Claude Desktop", "Claude Code CLI", "TypeScript 5.4+", "React / Ink JSX", "Reactive State Atoms", "EngineInterface ($)", "Cleanroom TDD", "claude-code/testing", "Amiga IA"]
categories: ["IA", "Agentes", "Developer Tools", "Productividad"]
type: "ai"
status: "En Desarrollo"
problem: "A medida que los agentes de codificación autónomos ejecutan flujos de trabajo extensos tanto en Claude Desktop como en la terminal con Claude Code CLI, surgen fricciones críticas: saturación de la ventana de contexto por búsquedas mecánicas repetitivas, banners intrusivos en el prompt, procesos huérfanos al salir, commits accidentales con cuentas de Git cruzadas, mutaciones riesgosas en clústeres de Kubernetes de producción y falta de visibilidad sobre los hooks cargados en el motor."
solution: "Una suite de seis extensiones modulares (mods) y function hooks con interoperabilidad dual (Claude Desktop y Claude Code CLI) integrados con el ecosistema Amiga IA. Proporciona inspección interactiva de hooks (`hooks-viewer`), medidores silenciosos en barra de estado e interruptor contra lecturas mecánicas (`undelegated-reads`), checklist de cierre con atajos de teclado (`close-checklist`), buzón reactivo con respuestas rápidas (`child-sessions`), guarda Cleanroom Doble Ciego para TDD sin sesgos (`cleanroom-guard`), centinela multientorno Git/K8s (`context-guard`) y un catálogo modular de aprendizajes arquitectónicos."
learnings:
  - "Interoperabilidad Dual de Anfitrión (Claude Desktop GUI y CLI): Los plugins resuelven su interfaz mediante '$.ui.resolve', operando idénticamente como paneles laterales nativos y medidores integrados en Claude Desktop o como interfaces de terminal en la CLI."
  - "Medidores de Estado Silenciosos y Ergonomía del Prompt: Reducción de ruido visual eliminando banners intrusivos sobre el prompt en 'undelegated-reads' y 'context-guard', manteniendo los medidores silenciosos hasta alcanzar el umbral de advertencia (7/10)."
  - "Aislamiento Controlado por el Anfitrión frente a Runtime Node.js: Los plugins operan en un contenedor ESM aislado sin acceso arbitrario a require() ni fs; todo I/O fluye por el manejador EngineInterface ($), garantizando seguridad y consistencia multiplataforma en Windows, macOS y Linux."
  - "Alcance de Nivel Superior para la Referencia del Motor ($): El validador estático de Claude Code exige que el parámetro $ no se transfiera a funciones internas o anónimas dentro del registro de hooks, requiriendo funciones auxiliares puras en el nivel superior del módulo."
  - "Catálogo Modular de Aprendizajes y Contratos Fuertemente Tipados: Toda clave atómica compartida (atom) debe declararse explícitamente en la interfaz PluginState de types/index.d.ts para prevenir colisiones en tiempo de compilación y validación del motor."
websiteActionText: "Ver Página"
product:
  tagline: "Mods de producción y paneles reactivos para Claude Desktop y Claude Code"
  intro: "Suite complementaria de mods y paneles reactivos diseñada como daily driver para Claude Desktop (pestaña Code) y Claude Code CLI: optimiza tu contexto con medidores discretos, audita cambios pendientes con atajos rápidos, protege entornos Git/K8s y habilita TDD Cleanroom sin sesgos."
  features:
    - icon: "Sliders"
      title: "Inspección de Hooks y Ajustes"
      text: "Visualiza hooks activos, extensiones cargadas y capas de configuración en tiempo real desde un panel lateral reactivo mediante /hooks-panel con atajo de recarga rápida."
    - icon: "Cpu"
      title: "Medidor Silencioso de Contexto"
      text: "Contabiliza lecturas mecánicas consecutivas en un medidor discreto de barra de estado sin saturar el prompt, alertando solo al entrar en zona de riesgo (7/10) para forzar la delegación."
    - icon: "CheckSquare"
      title: "Checklist Previo a la Salida"
      text: "Audita cambios pendientes en Git, contenedores Docker activos y procesos en segundo plano antes de cerrar la sesión mediante /cierre o /checklist con atajo de teclado 'r'."
    - icon: "MessagesSquare"
      title: "Bandeja Inter-Agente con Atajos"
      text: "Banda interactiva sobre el prompt que prioriza preguntas de subagentes en ejecución concurrente con atajos numéricos rápidos (1-3) para responder o descartar."
    - icon: "ShieldAlert"
      title: "Aislamiento Cleanroom Doble Ciego"
      text: "Guarda estricta para TDD que bloquea el acceso de subagentes generadores de tests al código fuente de implementación para erradicar el sesgo de confirmación."
    - icon: "FolderLock"
      title: "Guardas Multi-Perfil Git y K8s"
      text: "Alinea la cuenta activa de GitHub CLI con el directorio de trabajo en la barra de estado y previene mutaciones bare con kubectl en clústeres de producción sin contexto explícito."
  platforms: ["Claude Desktop", "Claude Code CLI", "Windows", "macOS", "Linux"]
  downloadUrl: "https://github.com/AnaCataVC/ami-claude-mods"
  downloadLabel: "Ver Repositorio en GitHub"
  links:
    - label: "Catálogo de Mods"
      url: "#catalog"
    - label: "Inicio Rápido"
      url: "#quick-start"
  catalog:
    title: "Catálogo de Extensiones"
    items:
      - title: "hooks-viewer"
        description: "Panel lateral interactivo y comando /hooks-panel con atajo de recarga rápida que lista todos los hooks y plugins configurados."
        tags: ["session.start", "command.run", "Side Pane", "Hotkeys"]
      - title: "undelegated-reads"
        description: "Interruptor de seguridad y medidor silencioso en barra de estado que contabiliza lecturas mecánicas sin invadir el prompt."
        tags: ["tool.call", "Status Bar", "Quiet Meter"]
      - title: "close-checklist"
        description: "Inspector de cierre consolidado en /cierre y /checklist que rastrea estado Git, contenedores Docker y procesos huérfanos con tecla 'r'."
        tags: ["session.end", "/cierre", "Side Pane", "Hotkeys"]
      - title: "child-sessions"
        description: "Buzón de mensajería entre agentes con atajos numéricos (1-3) para responder, ver o descartar al instante."
        tags: ["session.receive", "AbovePrompt", "Subagents", "Hotkeys"]
      - title: "cleanroom-guard"
        description: "Aislamiento estricto Cleanroom Doble Ciego para flujos TDD con agentes autónomos y notificaciones localizadas."
        tags: ["tool.call", "Cleanroom TDD", "Amiga IA"]
      - title: "context-guard"
        description: "Guarda multientorno silenciosa para cuentas GitHub CLI y comandos de Kubernetes en producción."
        tags: ["git auth", "kubectl", "Guardrails", "Status Bar"]
  codeSnippets:
    - title: "Instalación Rápida de Mods"
      language: "bash"
      code: "npm run install-mods"
    - title: "Configuración Persistente en Claude Desktop"
      language: "json"
      code: |
        // ~/.claude/settings.json
        {
          "CLAUDE_CODE_PLUGIN_DIRS": "~/.claude/mods/child-sessions:~/.claude/mods/cleanroom-guard:~/.claude/mods/close-checklist:~/.claude/mods/context-guard:~/.claude/mods/hooks-viewer:~/.claude/mods/undelegated-reads"
        }
    - title: "Carga Ad-Hoc en Terminal CLI"
      language: "bash"
      code: "claude --plugin-dir mods/hooks-viewer --plugin-dir mods/undelegated-reads"
    - title: "Validación de Contratos y Tests"
      language: "bash"
      code: |
        claude plugin validate mods/hooks-viewer
        claude plugin test mods/hooks-viewer
  faq:
    - question: "¿Cómo se integra con Claude Desktop frente a la terminal CLI?"
      answer: "ami-claude-mods es un compañero de primera clase para la app Claude Desktop (pestaña Code): paneles laterales (Pane), banners interactivos y medidores se renderizan como controles gráficos nativos. En la CLI de terminal, esos mismos componentes se adaptan fluidamente a Ink/ANSI sin requerir configuraciones separadas."
    - question: "¿Requiere modificar el binario de Claude Desktop o Claude Code?"
      answer: "No. Todos los mods se ejecutan en el sandbox aislado ECMAScript oficial compartido por Claude Desktop y Claude Code CLI, consumiendo exclusivamente la interfaz EngineInterface ($)."
    - question: "¿Es compatible con Windows, macOS y Linux?"
      answer: "Sí. Toda la resolución de variables de entorno, atajos de teclado y comandos de sistema está diseñada con soporte multiplataforma garantizado y verificado mediante pruebas unitarias."
---

### Extensiones de Producción y Guardas de Seguridad para Claude Desktop y Claude Code

**AMI Claude Mods** (`ami-claude-mods`) es una suite de herramientas modulares y function hooks desarrollada con soporte dual para **Claude Desktop** (pestaña Code integrada) y la CLI de **Claude Code** (Early Access 2.1+), integrada fluidamente con el ecosistema agéntico de **Amiga IA** (`amiga-ia`). Diseñada para desarrolladores y equipos que utilizan agentes de IA en flujos intensivos de codificación, la suite resuelve los problemas operativos y de seguridad más comunes al interactuar con el motor agéntico:

*   **Inspección y Diagnóstico del Motor (`hooks-viewer`):** Panel lateral reactivo y comando interactivo `/hooks-panel` que visualiza en tiempo real los hooks registrados, plugins activos y capas de configuración (`user`, `project`, `local`), con atajo de recarga rápida (`r`) y foco automático.
*   **Eficiencia de Contexto y Medidor Silencioso (`undelegated-reads`):** Medidor discreto en la barra de estado e interruptor de circuito (*circuit breaker*) que monitorea lecturas mecánicas (`Read`, `Grep`, `Glob`) en el hilo principal sin saturar el prompt con banners, alertando solo al entrar en zona de riesgo (7/10) para forzar la delegación en subagentes exploradores.
*   **Inspección Previa a la Salida y Cierre Seguro (`close-checklist`):** Guardarraíl de salida unificado en los comandos `/cierre` y `/checklist` o al finalizar la sesión (`session.end`). Identifica cambios pendientes en Git, contenedores o volúmenes Docker activos y procesos en segundo plano, incorporando atajos de teclado (`r`) para refrescar el estado.
*   **Buzón de Mensajería Inter-Agente con Atajos Rápidos (`child-sessions`):** Interfaz no bloqueante sobre el prompt que organiza preguntas y notificaciones prioritarias emitidas por subagentes en ejecución concurrente, con atajos numéricos (`1`-`3`) para responder o descartar al instante.
*   **Aislamiento Cleanroom Doble Ciego (`cleanroom-guard`):** Centinela de seguridad para metodologías TDD que bloquea el acceso de subagentes generadores de tests al código fuente de implementación (y viceversa), erradicando el sesgo de confirmación con mensajes localizados y trazabilidad estricta.
*   **Protección Multientorno Git y Kubernetes (`context-guard`):** Validador configurable mediante esquema JSON que alinea automáticamente la cuenta de GitHub CLI activa en la barra de estado y bloquea mutaciones directas mediante `kubectl` en clústeres productivos sin un contexto explícito.

### Arquitectura de Interoperabilidad Dual y Catálogo Modular de Aprendizajes

Todos los componentes de la suite están desacoplados y se ejecutan dentro del sandbox ECMAScript de Claude:

*   **Paridad Dual de Anfitrión (Desktop GUI y CLI Terminal):** Los mods se integran de manera nativa tanto en la aplicación Claude Desktop como en la terminal CLI mediante la resolución declarativa de componentes (`$.ui.resolve`), adaptándose como paneles laterales (`Pane`), banners discretos y medidores de barra de estado.
*   **Sin Modificación de Binarios:** Interactúan con el ciclo de vida del agente suscribiéndose al bus de eventos nativo (`session.start`, `tool.call`, `command.run`, `session.end`) a través de la interfaz oficial `EngineInterface` (`$`).
*   **Gestión de Estado Tipada y Catálogo de Aprendizajes:** La persistencia entre turnos se coordina mediante átomos reactivos fuertemente tipados registrados en contratos TypeScript (`types/index.d.ts`). Además, el proyecto cuenta con un catálogo modular de decisiones arquitectónicas y patrones en `docs/learning/`.

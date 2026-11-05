---
title: "AMI Claude Mods"
icon: "/project-icons/ami-claude-mods-icon.png"
description: "Suite de mods modulares, paneles reactivos en terminal y function hooks para la CLI de Claude Code integrados con el ecosistema Amiga IA que optimizan el contexto, auditan salidas seguras, protegen identidades Git y clústeres, e integran Cleanroom TDD."
lastUpdated: 2026-11-01
githubUrl: "https://github.com/AnaCataVC/ami-claude-mods"
websiteUrl: "https://ami-claude-mods.ana-catalina.com"
isLiveApp: false
technologies: ["Claude Code CLI", "TypeScript 5.4+", "React / Ink JSX", "Reactive State Atoms", "EngineInterface ($)", "Cleanroom TDD", "claude-code/testing", "Amiga IA"]
categories: ["IA", "Agentes", "Developer Tools", "Productividad"]
type: "ai"
status: "En Desarrollo"
problem: "A medida que los agentes de codificación autónomos ejecutan flujos de trabajo extensos en la terminal con Claude Code, surgen fricciones críticas: saturación de la ventana de contexto por búsquedas mecánicas repetitivas, contenedores Docker y procesos huérfanos al salir, commits accidentales con cuentas de Git cruzadas, mutaciones riesgosas en clústeres de Kubernetes de producción y falta de visibilidad sobre los hooks cargados en el motor."
solution: "Una suite de seis extensiones modulares (mods) y function hooks integrados sinérgicamente con el ecosistema Amiga IA, construidos sobre el runtime aislado de Claude Code y testeados con 'claude-code/testing'. Proporciona inspección interactiva de hooks y ajustes (`hooks-viewer`), interruptor de seguridad contra lecturas mecánicas masivas (`undelegated-reads`), checklist de cierre de recursos y Git previo a la salida (`close-checklist`), buzón reactivo de mensajería inter-agente (`child-sessions`), guarda de aislamiento Cleanroom Doble Ciego para TDD sin sesgos (`cleanroom-guard`) y un centinela configurable de perfiles Git y contextos de Kubernetes (`context-guard`)."
learnings:
  - "Aislamiento Controlado por el Anfitrión frente a Runtime Node.js: Los plugins operan en un contenedor ESM aislado sin acceso arbitrario a require() ni fs; todo I/O fluye por el manejador EngineInterface ($), garantizando seguridad y consistencia multiplataforma en Windows, macOS y Linux."
  - "Alcance de Nivel Superior para la Referencia del Motor ($): El validador estático de Claude Code exige que el parámetro $ no se transfiera a funciones internas o anónimas dentro del registro de hooks, requiriendo funciones auxiliares puras en el nivel superior del módulo."
  - "Resolución Asíncrona de Entorno Multiplataforma: Corrección de fallos silenciosos al consultar variables de entorno dependientes del sistema operativo (USERPROFILE vs HOME) mediante resolución paralela con Promise.all."
  - "Sinergia Cleanroom Doble Ciego con Amiga IA: Desacoplamiento estricto entre subagentes constructores y creadores de pruebas unitarias, eliminando el sesgo de confirmación e integrándose nativamente con la skill ami-orchestrate-cleanroom."
  - "Registro Declarativo Obligatorio de Estado en Contratos TypeScript: Toda clave atómica compartida (atom) debe declararse explícitamente en la interfaz PluginState de types/index.d.ts para prevenir colisiones en tiempo de compilación y validación del motor."
websiteActionText: "Ver Página"
product:
  tagline: "Mods de producción y paneles reactivos para Claude Code"
  intro: "Optimiza tu ventana de contexto, audita cambios pendientes antes de salir, protege identidades Git/Kubernetes y habilita TDD Cleanroom sin sesgos en la CLI de Claude Code."
  features:
    - icon: "Sliders"
      title: "Inspección de Hooks y Ajustes"
      text: "Visualiza hooks activos, extensiones cargadas y capas de configuración en tiempo real desde un panel lateral reactivo o mediante el comando /hooks-panel."
    - icon: "Cpu"
      title: "Ahorro de Contexto y Delegación"
      text: "Detecta ráfagas de lecturas mecánicas consecutivas en el hilo principal y fuerza la delegación en subagentes exploradores para proteger la ventana de razonamiento."
    - icon: "CheckSquare"
      title: "Checklist Previo a la Salida"
      text: "Audita cambios pendientes en Git, contenedores Docker activos y procesos en segundo plano antes de cerrar la sesión mediante /checklist o al invocar exit."
    - icon: "MessagesSquare"
      title: "Bandeja de Mensajería Inter-Agente"
      text: "Banda interactiva sobre el prompt que prioriza preguntas bloqueantes y alertas de subagentes en ejecución concurrente con botones de acción rápida."
    - icon: "ShieldAlert"
      title: "Aislamiento Cleanroom Doble Ciego"
      text: "Guarda estricta para TDD que bloquea el acceso de subagentes generadores de tests al código fuente de implementación para erradicar el sesgo de confirmación."
    - icon: "FolderLock"
      title: "Guardas Multi-Perfil Git y K8s"
      text: "Alinea la cuenta activa de GitHub CLI con el directorio de trabajo y previene mutaciones bare con kubectl en clústeres de producción sin contexto explícito."
  platforms: ["Claude Code CLI", "Windows", "macOS", "Linux"]
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
        description: "Panel lateral interactivo y comando /hooks-panel que lista todos los hooks y plugins configurados."
        tags: ["session.start", "command.run", "Side Pane"]
      - title: "undelegated-reads"
        description: "Interruptor de seguridad y medidor en barra de estado que contabiliza lecturas mecánicas consecutivas."
        tags: ["tool.call", "Status Bar", "AbovePrompt"]
      - title: "close-checklist"
        description: "Inspector de cierre que rastrea estado Git, contenedores Docker y procesos huérfanos antes de salir."
        tags: ["session.end", "/checklist", "Side Pane"]
      - title: "child-sessions"
        description: "Buzón de mensajería entre agentes con acciones de un clic para responder, ver o descartar."
        tags: ["session.receive", "AbovePrompt", "Subagents"]
      - title: "cleanroom-guard"
        description: "Aislamiento estricto Cleanroom Doble Ciego para flujos TDD con agentes autónomos."
        tags: ["tool.call", "Cleanroom TDD", "Amiga IA"]
      - title: "context-guard"
        description: "Guarda multientorno para cuentas GitHub CLI y comandos de Kubernetes en producción."
        tags: ["git auth", "kubectl", "Guardrails"]
  codeSnippets:
    - title: "Carga Rápida por Línea de Comandos"
      language: "bash"
      code: "claude --plugin-dir mods/hooks-viewer --plugin-dir mods/undelegated-reads"
    - title: "Carga Mediante Variable de Entorno"
      language: "powershell"
      code: |
        $env:CLAUDE_CODE_PLUGIN_DIRS = "C:/path/to/ami-claude-mods/mods/hooks-viewer;C:/path/to/ami-claude-mods/mods/close-checklist"
        claude
    - title: "Validación de Contratos de Mod"
      language: "bash"
      code: |
        claude plugin validate mods/hooks-viewer
        claude plugin test mods/hooks-viewer
  faq:
    - question: "¿Requiere modificar el binario de Claude Code?"
      answer: "No. Todos los mods se ejecutan en el sandbox aislado ECMAScript oficial de Claude Code consumiendo exclusivamente la interfaz EngineInterface ($)."
    - question: "¿Es compatible con Windows, macOS y Linux?"
      answer: "Sí. Toda la resolución de variables de entorno y comandos de sistema está diseñada con soporte multiplataforma garantizado y verificado mediante pruebas unitarias."
---

### Extensiones de Producción y Guardas de Seguridad para Claude Code

**AMI Claude Mods** (`ami-claude-mods`) es una suite de herramientas modulares y function hooks desarrollada para la CLI de **Claude Code** (Early Access 2.1+) e integrada con el ecosistema agéntico de **Amiga IA** (`amiga-ia`). Diseñada para desarrolladores y equipos que utilizan agentes de IA en flujos intensivos de codificación, la suite resuelve los problemas operativos y de seguridad más comunes al interactuar con el motor agéntico en la terminal:

*   **Inspección y Diagnóstico del Motor (`hooks-viewer`):** Panel lateral reactivo y comando interactivo `/hooks-panel` que visualiza en tiempo real los hooks registrados, plugins activos y capas de configuración (`user`, `project`, `local`), brindando total transparencia al entorno de ejecución.
*   **Eficiencia de Contexto y Delegación (`undelegated-reads`):** Indicador visual en la barra de estado e interruptor de circuito (*circuit breaker*) que detecta ráfagas de lecturas mecánicas (`Read`, `Grep`, `Glob`) en el hilo principal y fuerza la delegación en subagentes exploradores, evitando el desperdicio de tokens y la saturación del contexto de razonamiento.
*   **Inspección Previa a la Salida (`close-checklist`):** Guardarraíl de cierre ejecutado al invocar `/checklist` o finalizar la sesión (`session.end`). Identifica cambios pendientes en Git, contenedores o volúmenes Docker activos y procesos en segundo plano para evitar fugas de recursos locales.
*   **Buzón de Mensajería Inter-Agente (`child-sessions`):** Interfaz no bloqueante sobre el prompt que organiza preguntas y notificaciones prioritarias emitidas por subagentes en ejecución concurrente, con botones de acceso rápido para responder o descartar.
*   **Aislamiento Cleanroom Doble Ciego (`cleanroom-guard`):** Centinela de seguridad para metodologías TDD que bloquea el acceso de subagentes generadores de tests al código fuente de implementación (y viceversa), garantizando que las pruebas unitarias sean verdaderamente ciegas e inmunes al sesgo de confirmación.
*   **Protección Multientorno Git y Kubernetes (`context-guard`):** Validador configurable mediante esquema JSON que alinea automáticamente la cuenta de GitHub CLI activa con el repositorio de trabajo y bloquea mutaciones directas mediante `kubectl` en clústeres productivos sin un contexto explícito.

### Arquitectura Basada en Eventos y Reactividad en Terminal

Todos los componentes de la suite están desacoplados y se ejecutan dentro del sandbox ECMAScript de Claude Code:

*   **Sin Modificación de Binarios:** Interactúan con el ciclo de vida del agente suscribiéndose al bus de eventos nativo (`session.start`, `tool.call`, `command.run`, `session.end`) a través de la interfaz oficial `EngineInterface` (`$`).
*   **Interfaces Terminal Reactivas (Ink/React):** Las superficies de usuario (paneles laterales, toasts y barras de estado) utilizan componentes reactivos declarativos (`Box`, `Text`, `Button`) resueltos en tiempo de ejecución.
*   **Gestión de Estado Tipada:** La persistencia entre turnos se coordina mediante átomos reactivos fuertemente tipados, garantizando aislamiento total entre extensiones y validación estricta previa a la ejecución.

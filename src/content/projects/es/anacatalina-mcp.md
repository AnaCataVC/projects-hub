---
title: "AI-Native Interactive Resume (MCP Server)"
description: "Servidor Model Context Protocol (MCP) que permite a Inteligencias Artificiales interactuar con mi experiencia profesional."
icon: "/project-icons/anacatalina-mcp-icon.png"
githubUrl: "https://github.com/AnaCataVC/anacatalina-mcp"
websiteUrl: "https://mcp.ana-catalina.com/"
isLiveApp: false
technologies: ["Python 3.12", "FastAPI", "Pydantic v2", "Server-Sent Events (SSE)", "Docker", "Google Cloud Run", "Model Context Protocol"]
categories: ["IA", "API", "Backend", "Cloud"]
type: "ai"
status: "Activo"
problem: "Los currículums web tradicionales están diseñados para ser leídos por humanos, pero hoy en día los asistentes de IA (como Claude o Gemini) son quienes procesan esta información inicialmente, limitados por la necesidad de scraping y la falta de estructuración de los datos."
solution: "Una API nativa para Inteligencias Artificiales, construida bajo el Model Context Protocol oficial, que expone 9 tools especializadas para consultar experiencia, evaluar perfiles matemáticos con vacantes y buscar en el stack tecnológico, diseñada específicamente para el razonamiento de LLMs mediante schemas estrictos en Pydantic."
learnings:
  - "Integración exitosa del protocolo emergente MCP, adaptando la arquitectura para soportar comunicación bidireccional asíncrona mediante Server-Sent Events (SSE)."
  - "Resolución de conflictos complejos de dependencias fijando deliberadamente la versión en FastMCP v1 en vez de migrar a v2, manteniendo el servicio estable sin necesidad de una reescritura inmediata."
  - "Despliegue serverless optimizado en Google Cloud Run utilizando contenedores Docker ligeros, aprovechando la funcionalidad 'Scale to Zero' para reducir costos operativos a cero durante la inactividad."
websiteActionText: "Endpoint API (Cloud Run)"
---

El proyecto de **AI-Native Interactive Resume** es un rediseño completo del concepto de currículum o portafolio. En lugar de ofrecer únicamente una interfaz visual (GUI) para reclutadores humanos, expone un servidor oficial bajo el **Model Context Protocol (MCP)**, estandarizado por Anthropic.

Esto permite que cualquier cliente LLM que soporte MCP (como Claude Desktop o editores IDE como Cursor o Windsurf) pueda conectarse al servidor y ejecutar herramientas (tools) predefinidas para consultar mi stack tecnológico, proyectos destacados y experiencia profesional, procesando los datos de forma estructurada e interactiva en lugar de leer texto plano o realizar web scraping.

### ⚡ Conexión Rápida (Claude Desktop & Cursor)

**Cursor** soporta servidores MCP remotos por URL de forma nativa. Agrega esto a tu `mcp.json`:

```json
{
  "mcpServers": {
    "anacatalina-resume": {
      "url": "https://anacatalina-mcp-165536131179.us-central1.run.app/sse"
    }
  }
}
```

**Claude Desktop**, en cambio, solo admite servidores locales por `stdio` en su `claude_desktop_config.json` (un campo `url` ahí no se conecta). Para usarlo, clona este repositorio y agrega esta configuración apuntando al puente `conecta_cata.py` incluido:

```json
{
  "mcpServers": {
    "anacatalina-resume": {
      "command": "python",
      "args": ["<ruta-local>/conecta_cata.py"],
      "env": {
        "MCP_SERVER_SSE_URL": "https://anacatalina-mcp-165536131179.us-central1.run.app/sse"
      }
    }
  }
}
```

**Herramientas clave expuestas para el razonamiento de la IA:**
* `obtener_experiencia`: Consulta de trayectoria profesional, roles y logros detallados.
* `evaluar_fit_puesto`: Evaluación algorítmica de compatibilidad técnica con descripciones de vacantes.
* `obtener_stack_tecnologico`: Búsqueda granular y nivel de dominio en tecnologías específicas.

### Arquitectura Técnica

El servidor está desarrollado en **Python 3.12** utilizando **FastAPI** para manejar las peticiones HTTP y el streaming bidireccional mediante **SSE (Server-Sent Events)**, lo cual es requerido por la especificación del transporte HTTP en el MCP. Toda la validación de tipos e inputs de las tools está estrictamente garantizada por **Pydantic v2**, generando los esquemas JSON necesarios para la declaración dinámica en los LLMs.

### Despliegue en Cloud Run

La aplicación se empaqueta en una imagen **Docker** altamente optimizada y se despliega en **Google Cloud Run (GCP)**. La naturaleza del tráfico (peticiones a demanda desde asistentes) hace que la arquitectura *Serverless* sea ideal, ya que gracias al modelo *Scale to Zero*, el costo de infraestructura se mantiene nulo mientras el servidor no recibe peticiones, reiniciándose y escalando en milisegundos cuando es invocado.

---
title: "AI-Native Interactive Resume (MCP Server)"
description: "Servidor Model Context Protocol (MCP) que permite a Inteligencias Artificiales interactuar con mi experiencia profesional."
lastUpdated: 2026-09-11
icon: "/project-icons/anacatalina-mcp-icon.png"
githubUrl: "https://github.com/AnaCataVC/anacatalina-mcp"
websiteUrl: "https://mcp.ana-catalina.com/"
isLiveApp: false
technologies: ["Python 3.12", "FastMCP", "Streamable-HTTP", "Docker", "Google Cloud Run", "Model Context Protocol", "Gemini Connected Apps"]
categories: ["IA", "MCP", "Backend", "Cloud"]
type: "ai"
status: "Activo"
problem: "Los currículums web tradicionales están diseñados para ser leídos por humanos, pero hoy en día los asistentes de IA son quienes procesan esta información inicialmente, limitados por la necesidad de scraping y la falta de estructuración de los datos."
solution: "Un servicio nativo para Inteligencias Artificiales, construido con el Model Context Protocol oficial, que expone 9 tools especializadas para consultar experiencia, evaluar perfiles matemáticos con vacantes y buscar en el stack tecnológico, diseñada específicamente para el razonamiento de LLMs mediante schemas estrictos en Pydantic y transporte Streamable-HTTP."
learnings:
  - "Integración exitosa del protocolo emergente MCP, adaptando la arquitectura para soportar comunicación bidireccional asíncrona mediante Streamable-HTTP compatible con Claude, Cursor y Gemini Connected Apps."
  - "Motor de Emparejamiento Dinámico en Memoria: Implementación de un algoritmo determinista en cv_service.py para evaluar compatibilidad con vacantes y stack técnico en memoria con latencia inferior a 2ms."
  - "Despliegue serverless optimizado en Google Cloud Run utilizando contenedores Docker ligeros, aprovechando la funcionalidad 'Scale to Zero' para reducir costos operativos a cero durante la inactividad."
websiteActionText: "MCP Server"
product:
  tagline: "Tu currículum, nativo para IA"
  intro: "Un servidor MCP oficial que deja a cualquier asistente de IA consultar mi experiencia, stack y proyectos como datos estructurados, sin scraping."
  features:
    - icon: "PlugZap"
      title: "Conexión directa desde tu cliente MCP"
      text: "Agrega el endpoint Streamable HTTP en Claude.ai, Google Gemini (Connected Apps) o en el mcp.json de Cursor y Windsurf, y el asistente queda conectado al instante."
    - icon: "Boxes"
      title: "9 herramientas MCP oficiales"
      text: "Consulta experiencia, stack tecnológico, proyectos destacados, educación, contacto y perfil, además de búsqueda transversal por palabra clave, todo mediante tools tipadas."
    - icon: "Target"
      title: "Evaluación de fit con vacantes"
      text: "La tool evaluar_fit_puesto analiza una descripción de cargo y calcula el porcentaje de compatibilidad técnica y las fortalezas coincidentes."
    - icon: "Cpu"
      title: "Motor en memoria de baja latencia"
      text: "Los datos se cargan en memoria al iniciar el contenedor, con validación estricta vía Pydantic v2 y respuestas en menos de 2 milisegundos."
    - icon: "Cloud"
      title: "Serverless en Google Cloud Run"
      text: "Arquitectura Scale to Zero: el servicio no genera costo mientras no recibe tráfico y escala en milisegundos cuando un asistente lo invoca."
  platforms: ["Claude.ai (Conector Web)", "Google Gemini (Connected Apps)", "Cursor", "Windsurf", "Clientes MCP compatibles con Streamable HTTP"]
  downloadUrl: "https://mcp.ana-catalina.com/mcp"
  downloadLabel: "Conectar vía MCP"
---

El proyecto de **AI-Native Interactive Resume** es un rediseño completo del concepto de currículum o portafolio. En lugar de ofrecer únicamente una interfaz visual (GUI) para reclutadores humanos, expone un servidor oficial bajo el **Model Context Protocol (MCP)**, estandarizado por Anthropic y compatible con los principales ecosistemas de IA.

Esto permite que cualquier cliente LLM que soporte MCP (como **Claude.ai**, **Google Gemini** en Connected Apps o editores IDE como **Cursor** y **Windsurf**) pueda conectarse al servidor y ejecutar herramientas (tools) predefinidas para consultar mi stack tecnológico, proyectos destacados y experiencia profesional, procesando los datos de forma estructurada e interactiva en lugar de leer texto plano o realizar web scraping.

### ⚡ Conexión Rápida (Claude, Gemini & Cursor)

**Google Gemini (Connected Apps)** y **Claude.ai (Custom Connectors)** admiten conexión directa vía Streamable HTTP agregando el siguiente endpoint en su panel de configuración:

```
https://mcp.ana-catalina.com/mcp
```

**Cursor & Windsurf** soportan servidores remotos en `mcp.json`:

```json
{
  "mcpServers": {
    "anacatalina-cv": {
      "url": "https://mcp.ana-catalina.com/mcp"
    }
  }
}
```

**Herramientas clave expuestas para el razonamiento de la IA:**
* `obtener_experiencia`: Consulta de trayectoria profesional, roles y logros detallados.
* `evaluar_fit_puesto`: Evaluación algorítmica dinámica de compatibilidad técnica con descripciones de vacantes.
* `obtener_stack_tecnologico`: Búsqueda granular y nivel de dominio en tecnologías específicas.

### Arquitectura Técnica & Motor en Memoria

El servidor está desarrollado en **Python 3.12** utilizando **FastMCP** y el transporte unificado **Streamable-HTTP** (`/mcp`), permitiendo streaming bidireccional y respuestas JSON instantáneas. Toda la validación de tipos e inputs de las tools está estrictamente garantizada por **Pydantic v2**, cargando los conjuntos de datos en memoria durante el arranque del contenedor para garantizar tiempos de respuesta menores a 2 milisegundos.

### Despliegue en Cloud Run

La aplicación se empaqueta en una imagen **Docker** altamente optimizada y se despliega en **Google Cloud Run (GCP)**. La naturaleza del tráfico (peticiones a demanda desde asistentes) hace que la arquitectura *Serverless* sea ideal, ya que gracias al modelo *Scale to Zero*, el costo de infraestructura se mantiene nulo mientras el servidor no recibe peticiones, reiniciándose y escalando en milisegundos cuando es invocado.

---
title: "AI-Native Interactive Resume (MCP Server)"
description: "Servidor Model Context Protocol (MCP) que permite a Inteligencias Artificiales interactuar con mi experiencia profesional."
lastUpdated: 2026-10-18
icon: "/project-icons/anacatalina-mcp-icon.png"
githubUrl: "https://github.com/AnaCataVC/anacatalina-mcp"
websiteUrl: "https://mcp.ana-catalina.com/"
isLiveApp: false
technologies: ["Python 3.12", "FastMCP", "Streamable-HTTP", "FastAPI / Starlette", "Pydantic v2", "Docker", "Google Cloud Run", "Model Context Protocol", "Google Antigravity", "Gemini Connected Apps"]
categories: ["IA", "MCP", "Backend", "Cloud"]
type: "ai"
status: "Activo"
problem: "Los currículums web tradicionales están diseñados para ser leídos por humanos, pero hoy en día los asistentes de IA son quienes procesan esta información inicialmente, limitados por la necesidad de scraping y la falta de estructuración de los datos."
solution: "Un servicio nativo para Inteligencias Artificiales, construido con el Model Context Protocol oficial, que expone 9 tools especializadas para consultar experiencia, evaluar perfiles matemáticos con vacantes y buscar en el stack tecnológico, diseñada específicamente para el razonamiento de LLMs mediante schemas estrictos en Pydantic y transporte Streamable-HTTP."
learnings:
  - "Integración exitosa del protocolo emergente MCP, adaptando la arquitectura para soportar comunicación bidireccional asíncrona mediante Streamable-HTTP compatible con Antigravity, Claude, Cursor y Gemini Connected Apps."
  - "Seguridad ASGI y Rate Limiting Acotado: Implementación de middleware de seguridad ASGI con cabeceras estrictas, limitación de tasa en memoria y auditoría continua de vulnerabilidades en CI."
  - "Motor de Emparejamiento Dinámico en Memoria: Implementación de un algoritmo determinista en cv_service.py para evaluar compatibilidad con vacantes y stack técnico en memoria con latencia inferior a 2ms."
  - "Despliegue serverless optimizado en Google Cloud Run utilizando contenedores Docker ligeros, aprovechando la funcionalidad 'Scale to Zero' para reducir costos operativos a cero durante la inactividad."
  - "Negociación Transparente de Contenido HTTP & Contratos Tipados: Negociación dinámica en GET / que entrega directamente el showcase HTML con status 200 a navegadores web y descubrimiento JSON a clientes MCP, junto a un contrato fuertemente tipado SearchResult en Pydantic v2."
websiteActionText: "Servidor MCP & Demo"
---

El proyecto de **AI-Native Interactive Resume** es un rediseño completo del concepto de currículum o portafolio. En lugar de ofrecer únicamente una interfaz visual (GUI) para reclutadores humanos, expone un servidor oficial bajo el **Model Context Protocol (MCP)**, estandarizado por Anthropic y compatible con los principales ecosistemas de IA, junto a una demo web interactiva y configurador de clientes MCP accesible públicamente en [https://mcp.ana-catalina.com/](https://mcp.ana-catalina.com/).

Esto permite que cualquier cliente LLM que soporte MCP (como **Google Antigravity**, **Claude.ai**, **Google Gemini** en Connected Apps o editores IDE como **Cursor** y **Windsurf**) pueda conectarse al servidor y ejecutar herramientas (tools) predefinidas para consultar mi stack tecnológico, proyectos destacados y experiencia profesional, procesando los datos de forma estructurada e interactiva en lugar de leer texto plano o realizar web scraping. Además, los usuarios humanos y reclutadores pueden explorar el catálogo de 9 tools y probar escenarios de evaluación de afinidad técnica en vivo directamente en la demo web en [mcp.ana-catalina.com](https://mcp.ana-catalina.com/).

### ⚡ Conexión Rápida (Antigravity, Claude, Gemini & Cursor)

**Google Antigravity / Gemini CLI** soporta servidores remotos en `~/.gemini/config/mcp_config.json`:

```json
{
  "mcpServers": {
    "anacatalina-cv": {
      "url": "https://mcp.ana-catalina.com/mcp"
    }
  }
}
```

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
* `buscar_en_curriculum`: Búsqueda transversal por palabra clave en historial laboral, habilidades y proyectos con contrato fuertemente tipado `SearchResult`.

### Arquitectura Técnica & Motor en Memoria

El servidor está desarrollado en **Python 3.12** utilizando **FastMCP** y el transporte unificado **Streamable-HTTP** (`/mcp`), permitiendo streaming bidireccional y respuestas JSON instantáneas. Toda la validación de tipos e inputs de las tools está estrictamente garantizada por **Pydantic v2**, cargando los conjuntos de datos en memoria durante el arranque del contenedor para garantizar tiempos de respuesta menores a 2 milisegundos. El rendimiento y la confiabilidad se refuerzan mediante un despachador declarativo de assets estáticos, caché de templates con `@functools.lru_cache` y una suite integral de 54 pruebas automatizadas.

### Despliegue en Cloud Run

La aplicación se empaqueta en una imagen **Docker** altamente optimizada y se despliega en **Google Cloud Run (GCP)**. La naturaleza del tráfico (peticiones a demanda desde asistentes) hace que la arquitectura *Serverless* sea ideal, ya que gracias al modelo *Scale to Zero*, el costo de infraestructura se mantiene nulo mientras el servidor no recibe peticiones, reiniciándose y escalando en milisegundos cuando es invocado.

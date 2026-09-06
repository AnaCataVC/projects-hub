---
title: "My CV Template"
description: "Plantilla moderna e interactiva para construir tu propio currículum o portafolio profesional. Fácil de configurar y desplegar."
icon: "/project-icons/cv-icon.svg"
githubUrl: "https://github.com/AnaCataVC/my-cv"
websiteUrl: "https://my-cv-template.ana-catalina.com"
isLiveApp: false
technologies: ["Vite", "Handlebars", "Tailwind CSS"]
categories: ["Plantilla", "Portafolio", "SSG"]
type: "web"
status: "Archivado"
problem: "Compartir el diseño de un currículum interactivo personal para que no quede como un código aislado y privado."
solution: "Refactorización de la lógica para abstraer la información y convertirla en una plantilla genérica pura SSG, permitiendo a cualquier desarrollador desplegar su portafolio editando un único archivo data.js."
learnings:
  - "La mejor forma de distribuir una plantilla altamente personalizable es minimizando las dependencias acopladas (Zero-JS en el build final)."
  - "Adaptar un diseño complejo a un sistema modular donde el usuario solo edita un archivo de configuración sin tocar HTML/CSS mejora la usabilidad."
  - "Integrar temas dinámicos usando Tailwind y variables CSS facilita la escalabilidad y personalización."
websiteActionText: "Ver Demo"
---

### De Currículum Personal a Plantilla SSG Reutilizable

**My CV Template** nació como un currículum personal puntual y fue refactorizado hasta convertirse en una plantilla distribuible:

*   **Un Solo Archivo de Configuración:** Todo el contenido personal vive en un único archivo `data.js` — cualquiera puede desplegar su propio portafolio editando datos, sin tocar HTML ni CSS.
*   **Templating con Handlebars:** La estructura de marcado queda totalmente desacoplada del contenido personal, por lo que hacer un fork del repositorio no requiere editar HTML.

### Salida Zero-JS y Personalizable

*   **Build Estático con Vite:** Compila a HTML totalmente estático sin runtime de framework en el cliente, manteniendo el bundle final libre de dependencias.
*   **Tailwind + Variables CSS:** El theming dinámico se maneja con custom properties de CSS sobre Tailwind, permitiendo cambiar la paleta de colores sin tocar el markup de los componentes.

> **Nota**: Archivado tras cumplir su propósito como plantilla compartible — el código está disponible en GitHub.

# Proyecto: Ana-Catalina | Projects Hub

## Descripción General
Projects Hub es el portafolio y directorio central de proyectos y aplicaciones de Ana-Catalina. Actualmente cuenta con un diseño bilingüe (Inglés/Español) y sirve como puerta de enlace a proyectos como "My CV Template".

## Stack Tecnológico Actual
- **Estructura:** HTML5
- **Estilos:** CSS Vanilla (CSS Variables, animaciones y micro-interacciones)
- **Lógica:** JavaScript Vanilla (para el cambio de idioma)
- **Tipografía:** Outfit (Google Fonts)
- **Despliegue:** Preparado para Vercel (`vercel.json` incluido)

## Análisis de Migración: ¿Conviene usar Astro?

**Conclusión: Sí, es muy recomendable migrar este proyecto a Astro.**

### Razones:
1. **Ideal para Sitios de Contenido:** Astro brilla en proyectos como portafolios, blogs y hubs, donde la velocidad y el contenido estático son la prioridad.
2. **Componentización sin Bloat:** Podremos dividir el código en componentes reutilizables (por ejemplo, `<ProjectCard />`, `<LanguageToggle />`, `<Header />`) manteniendo un bundle de JavaScript casi nulo ("Zero JS by default").
3. **Escalabilidad y Mantenimiento:** A medida que agregues más proyectos, mantener un solo archivo `index.html` se volverá complicado. Con Astro podemos usar listas de datos o archivos Markdown/MDX para renderizar los proyectos dinámicamente.
4. **Islands Architecture:** El botón de cambio de idioma puede seguir siendo un componente interactivo aislado sin afectar el rendimiento del resto de la página estática.
5. **Preparado para el Futuro:** Si un proyecto futuro requiere incrustar un componente interactivo complejo de React, Svelte o Vue en este Hub, Astro permite integrarlo de forma nativa.

## Estándares de Diseño y Desarrollo (Reglas del Proyecto)
- Mantener una estética moderna, limpia y atractiva ("Premium Design").
- Priorizar animaciones sutiles (micro-interacciones) y fluidez.
- Asegurar responsividad total (Mobile-first).
- Uso estricto de variables CSS para la paleta de colores.
- Toda nueva característica debe soportar la internacionalización (i18n) en ES y EN.
- **Subaplicaciones externas:** Si un proyecto externo (Vite, React, Astro, etc.) va a ser embebido o enrutado dentro de este Hub mediante rewrites de Vercel (ej. `/identity-map`), el proyecto externo DEBE estar compilado con rutas relativas para sus assets (ej. `base: './'` en Vite) para evitar errores 404.
- **Rendimiento Móvil & Scroll:** En vistas con mucho contenido, evita layouts Flexbox complejos con alturas dinámicas acoplados con animaciones de GPU si estas provocan problemas de scroll en dispositivos táctiles. Conmutar a `display: block` e inyectar paddings inferiores holgados (ej. `pb-24`) y remover clases de animación (ej. `animate-gui-boot`) vía JS cliente tras la carga.
- **Detección de Dispositivos Táctiles:** No confíes en breakpoints de ancho de pantalla para cambiar la ayuda táctil. Utiliza media queries de características del puntero de hardware: `@media (pointer: coarse)` para táctiles y `@media (pointer: fine)` para ratón/teclado.
- **Limpieza de Redirecciones Locales:** Al convertir cualquier enrutamiento externo a una ruta local dinámica de Astro en el Hub, asegúrate de eliminar cualquier rewrite/redirección residual en `vercel.json` para prevenir bucles infinitos de red en el servidor.

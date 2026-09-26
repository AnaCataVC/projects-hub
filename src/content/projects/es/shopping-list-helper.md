---
title: "Por Comprar — Shopping List Helper"
description: "Aplicación móvil nativa para Android (100% offline-first) para gestionar compras recurrentes del hogar y armar la lista de compras por tienda."
lastUpdated: 2026-09-26
icon: "/project-icons/shopping-list-helper-icon.png"
githubUrl: "https://github.com/AnaCataVC/shopping-list-helper"
websiteUrl: "https://shopping-list-helper.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Compose", "Material Design 3", "Room Database"]
categories: ["Mobile", "Productividad", "Android", "Hogar"]
type: "mobile"
status: "Activo"
problem: "Olvidar recompras periódicas del hogar (artículos de supermercado, aseo, etc.) y perder tiempo armando la lista de compras al no saber qué falta según la tienda a la que se va."
solution: "Una aplicación local-first sin nube, con categorías por tienda, reglas de recurrencia automática (cada N días) que reaparecen los ítems al vencer, y un modo 'Voy a comprar' que filtra solo lo pendiente de una categoría ordenado por urgencia."
learnings:
  - "Flujo Reactivo sin Sobrecarga: centralización de la observación de Flow de Room en MainActivity hacia composables puros, evitando librerías externas de navegación o inyección de dependencias para una app autocontenida."
  - "Cálculo Determinista sin Procesos en Segundo Plano: el estado de vencimiento se calcula en tiempo real al renderizar (Item.isDue(now)), eliminando WorkManager y optimizando batería."
  - "Transaccionalidad en Integridad Referencial: la reubicación y eliminación de categorías se ejecuta en una única @Transaction de Room, asegurando que la restricción de clave foránea (RESTRICT) jamás deje datos huérfanos."
  - "Persistencia de Formularios ante Rotación: captura de datos en diálogos con rememberSaveable, sin ViewModels adicionales."
product:
  tagline: "Tu lista de compras, siempre lista"
  intro: "Organiza las compras recurrentes del hogar por tienda y urgencia, sin cuentas ni conexión a internet."
  features:
    - icon: "ListChecks"
      title: "Ítems por urgencia"
      text: "Organiza cada ítem pendiente en 3 niveles de urgencia (alta, media, baja), con cantidad y notas opcionales."
    - icon: "Repeat"
      title: "Compras recurrentes"
      text: "Define una repetición cada N días. Al marcar un ítem como comprado, se oculta hasta que vuelve a vencer automáticamente."
    - icon: "Store"
      title: "Modo 'Voy a comprar'"
      text: "Filtra por tienda o categoría y muestra solo lo vencido, ordenado por urgencia. Marca ítem por ítem o la lista completa de un toque."
    - icon: "Tags"
      title: "Categorías editables"
      text: "Nombres y emojis personalizables, con protección de integridad: para borrar una categoría con ítems, primero hay que reubicarlos."
    - icon: "FileDown"
      title: "Respaldo local en JSON"
      text: "Exporta el estado completo de la base de datos usando el Storage Access Framework de Android, sin pedir permisos intrusivos de almacenamiento."
    - icon: "Languages"
      title: "Bilingüe y con tema claro/oscuro"
      text: "Interfaz completa en español e inglés, con paleta Material Design 3 configurable según el sistema o de forma manual."
  platforms: ["Android"]
  downloadUrl: "https://github.com/AnaCataVC/shopping-list-helper/releases"
  downloadLabel: "Descargar APK"
---

### Arquitectura offline-first y sin dependencias innecesarias

**Por Comprar** es una app Android de un solo módulo: Kotlin, Jetpack Compose con Material 3 y Room, sin backend, sin framework de inyección de dependencias y sin librería de navegación. Todo el estado se observa como `Flow` reactivo desde `MainActivity` y se propaga a pantallas composable puras, evitando la complejidad de librerías externas para una utilidad enfocada.

*   **Sin procesos en segundo plano:** los ítems vencidos se calculan de forma determinista al renderizar la pantalla (`Item.isDue(now)`), evitando `WorkManager` y ahorrando batería.
*   **Integridad referencial transaccional:** mover ítems y eliminar una categoría ocurre en una única transacción de Room, respaldada por una restricción de clave foránea (`RESTRICT`) que impide dejar datos huérfanos.
*   **100% privado:** sin cuentas, telemetría ni comunicación con servidores; todos los datos quedan en el dispositivo.

### Ciclo de compras y localización

*   **Recurrencia automática:** al comprar un ítem con repetición configurada, este permanece oculto y reaparece en la lista una vez vencido, sin intervención manual.
*   **Interfaz bilingüe:** todo el texto vive en recursos de strings en inglés y español, con soporte para la configuración de idioma por app de Android 13+.

> **Nota**: Puedes explorar el código fuente y compilar el APK directamente desde el repositorio en GitHub.

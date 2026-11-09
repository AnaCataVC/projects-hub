---
title: "Android Icons Admin"
icon: "/project-icons/android-icon-admin-icon.png"
description: "Utilidad local-first y determinista para Android 8.0 a 16 y Samsung One UI 8.5 que automatiza la personalización estética de iconos de apps mediante widgets sin insignia, accesos directos silenciosos y exportación a Theme Park."
lastUpdated: 2026-11-09
githubUrl: "https://github.com/AnaCataVC/android-icon-admin"
websiteUrl: "https://android-icon-admin.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin 2.1", "Android 8.0-16", "Jetpack Compose", "Material 3", "One UI 8.5", "Cleanroom TDD", "JUnit 5"]
categories: ["Android", "Herramientas", "Personalización", "Mobile"]
type: "mobile"
status: "En Desarrollo"
problem: "Personalizar la apariencia de los iconos en Android históricamente ha requerido root, launchers de terceros intrusivos o atajos con insignias molestas del creador, provocando además recortes defectuosos en iconos adaptativos y falta de persistencia transaccional."
solution: "Una aplicación local-first en Kotlin y Jetpack Compose desarrollada bajo metodología Cleanroom TDD con módulo de dominio puro (:core). Ofrece detección automática de apps sin permisos abusivos, extracción limpia de capas adaptativas (foreground y monochrome), un pipeline visual determinista de 4 etapas (normalización, tratamiento tonal Rec.709, superelipses supersampleadas 4x4 y mezcla Porter-Duff), widgets nativos 1x1 sin insignia, sincronización masiva in-place de accesos directos, exportación directa a Samsung Theme Park y un historial transaccional atómico de deshacer."
learnings:
  - "Respeto Estricto de Límites de Seguridad de Android: Las apps sin root no pueden alterar APKs ajenos ni cachés privadas del launcher. Se implementaron los tres caminos legítimos del SO: widgets sin insignia, actualización silenciosa in-place con ShortcutManagerCompat y exportación de paquetes vía MediaStore."
  - "Aislamiento de Dominio en Kotlin Puro (:core JVM): Desacoplar el motor gráfico de android.graphics.Bitmap mediante RgbaCanvas permite ejecutar suites de pruebas unitarias TDD en subsegundos en la JVM sin emuladores ni dependencias de Android."
  - "Eliminación de Contenedores Dobles en Iconos Adaptativos: Al aislar la capa foreground bruta de AdaptiveIconDrawable y computar la caja delimitadora por umbral de opacidad (alpha >= 16), se erradica el anidamiento indeseado de marcos y bordes."
  - "Integración Nativa con Samsung One UI 8.5 y Theme Park: Generación directa de álbumes 512x512 en Pictures/AndroidIconsAdmin/ vía MediaStore (sin permisos de almacenamiento en Android 10+) e inyección de intent filters de icon pack para personalización integral del sistema."
websiteActionText: "Ver Página"
product:
  tagline: "Estilo y orden para tus iconos"
  intro: "Personaliza los iconos de tus aplicaciones en Android y One UI con widgets limpios sin insignia, reglas deterministas y exportación directa para Theme Park."
  features:
    - icon: "Smartphone"
      title: "Widgets 1x1 Sin Insignia"
      text: "Widgets nativos con RemoteViews sincronizados que no muestran el logo de la aplicación creadora, compatibles con redimensionamiento en Samsung One UI 8.5 Home Up."
    - icon: "SlidersHorizontal"
      title: "Motor de Reglas y Normalización"
      text: "Pipeline determinista de 4 etapas: normalización bilineal, tratamiento tonal Rec.709, superelipses supersampleadas 4x4 y composición Porter-Duff."
    - icon: "Layers"
      title: "Extracción Limpia de Capas Adaptativas"
      text: "Aísla directamente las capas foreground y monochrome sin máscaras previas, evitando bordes dobles y el recorte indeseado de los fabricantes."
    - icon: "PackageCheck"
      title: "Exportación a Theme Park y Launchers"
      text: "Genera paquetes ZIP con appfilter.xml y exporta imágenes 512x512 a la galería para asignación instantánea en Good Lock Theme Park de Samsung."
    - icon: "RotateCcw"
      title: "Historial y Deshacer Transaccional"
      text: "Almacén atómico (.tmp a destino con respaldo .bak) que permite restaurar cualquier app, lote o todos los iconos a su estado original con un solo toque."
    - icon: "ShieldCheck"
      title: "100% Local y Privado"
      text: "Cero permisos invasivos (sin QUERY_ALL_PACKAGES), cero conexión a internet, cero telemetría y sin requerir root ni modificaciones de sistema."
  notice:
    title: "Seguridad y Transparencia en Android"
    text: "Android Icons Admin no requiere root ni permisos peligrosos. Opera estrictamente bajo las APIs oficiales de Android para garantizar estabilidad y privacidad absoluta."
  catalog:
    title: "Mecanismos de Personalización y Entrega"
    items:
      - title: "Widgets de Inicio Sin Insignia"
        description: "Coloca iconos personalizados en tu dock y pantalla de inicio sin insignias adicionales mediante AppWidgetProvider."
        tags: ["Widgets", "Zero-Badge"]
      - title: "Accesos Directos In-Place"
        description: "Actualiza masivamente todos los accesos directos anclados en un solo paso mediante ShortcutManagerCompat."
        tags: ["Shortcuts", "Silent Sync"]
      - title: "Paquetes Samsung Theme Park"
        description: "Exporta carpetas de iconos listas para aplicar en toda la interfaz de One UI mediante Samsung Good Lock."
        tags: ["Samsung One UI", "Theme Park"]
  faq:
    - question: "¿Requiere permisos de root o modificar el sistema?"
      answer: "No. Funciona en cualquier dispositivo con Android 8.0 a 16 sin root, utilizando widgets nativos sin insignia, accesos directos del sistema o paquetes para Theme Park."
    - question: "¿Cómo se integra con teléfonos Samsung Galaxy y One UI 8.5?"
      answer: "Exporta las imágenes procesadas directamente a la galería mediante MediaStore y provee intent filters de icon pack para personalización completa en Good Lock Theme Park."
    - question: "¿Se pueden revertir los cambios fácilmente?"
      answer: "Sí. Cuenta con un sistema de instantáneas y deshacer transaccional que permite restaurar los iconos originales individualmente o en lote."
  platforms: ["Android (8.0 a 16)", "Samsung One UI 8.5"]
  downloadUrl: "https://github.com/AnaCataVC/android-icon-admin/releases/latest"
  downloadLabel: "Descargar APK Release"
---

### Personalización Determinista para Android y One UI

**AndroidIconsAdmin** traslada a Android la filosofía de personalización visual no destructiva y automatizada de [Windows Icons Admin](https://github.com/AnaCataVC/windows-icons-admin):

*   **Sin Root ni Hacks de Privilegios:** Opera estrictamente bajo el modelo de seguridad de Android (SELinux y UID sandboxing), utilizando los tres caminos oficiales para personalizar la pantalla de inicio: widgets 1x1 libres de insignia, accesos directos actualizados en segundo plano y exportación de paquetes de iconos para Samsung One UI Theme Park y launchers compatibles.
*   **Pipeline Gráfico Determinista (:core):** Desarrollado en Kotlin puro y desacoplado de las APIs de Android mediante `RgbaCanvas`, realiza normalización bilineal por umbral de opacidad, ajuste tonal Rec.709 y renderizado de contenedores con supermuestreo subpíxel 4x4.
*   **Deshacer Transaccional:** Almacena instantáneas de los iconos originales y registra cada personalización en archivos JSON atómicos con respaldo `.bak` para una reversión inmediata sin riesgos.

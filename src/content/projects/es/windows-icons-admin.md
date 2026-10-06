---
title: "Windows Icons Admin"
icon: "/project-icons/windows-icons-admin-icon.png"
description: "Utilidad de alto rendimiento para Windows 10 y 11 que automatiza la personalización masiva de iconos de carpetas y del sistema, con motor de reglas, codificador PNG a ICO nativo y refresco instantáneo del shell."
lastUpdated: 2026-10-06
githubUrl: "https://github.com/AnaCataVC/windows-icons-admin"
websiteUrl: "https://windows-icons-admin.ana-catalina.com"
isLiveApp: false
technologies: ["C# 13", ".NET 9", "WinUI 3", "Windows App SDK", "Win32 P/Invoke", "xUnit", "Inno Setup"]
categories: ["Windows", "Herramientas", "Personalización", "WinUI 3"]
type: "desktop"
status: "En Desarrollo"
problem: "La personalización de iconos de carpetas en Windows ha dependido históricamente del diálogo manual carpeta por carpeta o de utilidades heredadas que corrompen archivos desktop.ini, carecen de historial reversible y obligan a reiniciar el Explorador de Windows perdiendo el estado de las ventanas abiertas."
solution: "Una aplicación moderna de escritorio en C# 13 y .NET 9 con interfaz Fluent (WinUI 3) desarrollada bajo estándares Cleanroom TDD. Integra motor de reglas con protección contra ReDoS, conversor PNG a ICO de 7 capas en memoria, inyección segura de desktop.ini con gestión de atributos Win32 (ReadOnly/System), personalización de nodos del Panel de Navegación de Windows 11 sin requerir elevación UAC, historial transaccional de deshacer y refresco en vivo con SHChangeNotify."
learnings:
  - "Protección de Carpetas del Sistema y Shell Rollback (ADR-0002): Implementación de SystemFolderGuard para salvaguardar rutas críticas de Windows contra manipulación accidental de desktop.ini, complementado con transaccionalidad atómica y rollback seguro del shell."
  - "Atributo de Carpeta Win32 como Disparador del Shell: Windows Explorer ignora desktop.ini a menos que la carpeta tenga el atributo FILE_ATTRIBUTE_READONLY o FILE_ATTRIBUTE_SYSTEM. En directorios, este atributo no bloquea la escritura de archivos y actúa exclusivamente como señal interna para que el shell procese la personalización."
  - "Refresco No Destructivo del Shell: Reiniciar explorer.exe destruye el estado de ventanas y la bandeja del sistema. Se logra un refresco instantáneo y limpio orquestando notificaciones Win32 duales: SHCNE_UPDATEITEM a nivel de ruta y SHCNE_ASSOCCHANGED para purgar la caché de iconos en memoria."
  - "Validación de Integridad PNG contra Truncamiento: Los decodificadores estándar de imágenes procesan silenciosamente flujos PNG truncados sin bloque final IEND. Se implementó un parser de integridad por chunks para garantizar la validez binaria antes de codificar el archivo .ico."
  - "Desacoplamiento Estricto con Cleanroom TDD: La capa WindowsIconsAdmin.Core se diseñó con cero dependencias de UI o APIs de Windows, congelando contratos formales y validando mediante pruebas unitarias independientes timeouts de expresiones regulares, concurrencia en disco, codificación binaria y asociaciones de registro del shell."
  - "Modos de Almacenamiento Central y Portátil: Soporte dual para almacenar iconos en un repositorio protegido en %LOCALAPPDATA% (manteniendo limpias las carpetas de usuario) o de forma portátil dentro del propio directorio para conservar los iconos en discos extraíbles o unidades compartidas."
websiteActionText: "Visitar Sitio"
product:
  tagline: "Personalización Masiva de Iconos de Carpetas y Sistema para Windows"
  intro: "Automatiza la asignación de iconos en tus carpetas con reglas inteligentes, conversión nativa PNG a ICO y refresco inmediato del Explorador de Windows."
  features:
    - icon: "FolderTree"
      title: "Personalización Masiva"
      text: "Asigna iconos individuales o en lotes a múltiples carpetas y árboles anidados con vista previa interactiva."
    - icon: "Layers"
      title: "Codificador Nativo ICO de 7 Capas"
      text: "Genera binarios ICO con resoluciones desde 16x16 hasta 256x256 (capas BGRA DIB y compresión PNG en 256px)."
    - icon: "SlidersHorizontal"
      title: "Motor de Reglas Inteligente"
      text: "Reglas automatizadas basadas en nombres (Contains, StartsWith, EndsWith, Regex) con protección contra ataques ReDoS."
    - icon: "RefreshCw"
      title: "Refresco Inmediato de Shell"
      text: "Actualización en tiempo real vía SHChangeNotify de Win32 sin reiniciar explorer.exe ni cerrar tus ventanas abiertas."
    - icon: "Repeat"
      title: "Historial y Deshacer Transaccional"
      text: "Registro atómico de operaciones que permite restaurar iconos previos o el icono predeterminado con un solo clic."
    - icon: "HardDrive"
      title: "Almacenamiento Central y Portátil"
      text: "Elige entre almacenar iconos en %LOCALAPPDATA% o integrarlos directamente en carpetas portátiles y unidades USB."
    - icon: "ShieldCheck"
      title: "Inyección Segura de desktop.ini"
      text: "Preserva secciones preexistentes del usuario y gestiona atributos Win32 ReadOnly y System sin bloquear permisos."
    - icon: "MonitorCog"
      title: "Iconos del Sistema y Panel de Navegación"
      text: "Personaliza la Papelera de Reciclaje (vacía y llena), carpetas del sistema y nodos del Panel de Navegación de Windows 11 (Inicio, Galería, Linux/WSL y OneDrive) sin requerir permisos de administrador."
  notice:
    title: "Seguridad y Rendimiento Nativo"
    text: "Windows Icons Admin se ejecuta 100% de forma local, no recopila datos de telemetría y opera con permisos estándar de usuario para personalizar tus carpetas."
  catalog:
    title: "Capacidades de Personalización y Almacenamiento"
    items:
      - title: "Personalización por Lotes"
        description: "Aplica iconos a decenas de carpetas en segundos mediante selección múltiple o escaneo recursivo."
        tags: ["Bulk Action", "FolderTree"]
      - title: "Reglas de Coincidencia"
        description: "Automatiza la identidad visual de proyectos de desarrollo, carpetas de clientes o librerías multimedia."
        tags: ["RuleEngine", "ReDoS Safe"]
      - title: "Modo Centralizado"
        description: "Consolida los archivos .ico en un almacén protegido en %LOCALAPPDATA% para evitar archivos sueltos en el directorio."
        tags: ["AppData", "Clean Folders"]
      - title: "Modo Portátil"
        description: "Incrusta los iconos como archivos ocultos dentro de la propia carpeta para conservar la personalización en unidades USB."
        tags: ["Portable", "USB Drives"]
      - title: "Iconos del Sistema y Navegación"
        description: "Reemplaza iconos de la Papelera de Reciclaje, carpetas de Este equipo y nodos del Panel de Navegación de Windows 11 (Inicio, Galería, Linux/WSL, OneDrive)."
        tags: ["Shell Icons", "Navigation Pane"]
  faq:
    - question: "¿Por qué Windows no mostraba mis iconos personalizados con otras herramientas?"
      answer: "Windows Explorer requiere obligatoriamente que las carpetas tengan el atributo ReadOnly o System para procesar el archivo desktop.ini. Windows Icons Admin gestiona estos atributos automáticamente sin restringir la escritura de tus archivos."
    - question: "¿Es necesario reiniciar el Explorador de Windows o el equipo?"
      answer: "No. La aplicación emite notificaciones nativas SHChangeNotify que invalidan la caché de iconos del shell al instante sin cerrar ventanas ni terminar explorer.exe."
    - question: "¿Qué formatos y resoluciones de iconos genera?"
      answer: "Convierte cualquier imagen PNG a un binario .ico multi-resolución de 7 capas: 16x16, 24x24, 32x32, 48x48, 64x64, 128x128 (DIB sin compresión BGRA) y 256x256 con compresión PNG estándar."
    - question: "¿Puedo revertir los cambios si deseo volver al icono original?"
      answer: "Sí. Cada lote de cambios se almacena en un historial transaccional atómico que permite deshacer la personalización y restaurar el estado original en cualquier momento."
  platforms: ["Windows 10 (1809+)", "Windows 11"]
  downloadUrl: "https://github.com/AnaCataVC/windows-icons-admin/releases/latest/download/WindowsIconsAdmin_Setup.exe"
  downloadLabel: "Descargar Instalador (.exe)"
---

### Automatización de Iconos y Arquitectura de Shell

**Windows Icons Admin** es una utilidad de personalización del sistema para Windows 10 y 11 que moderniza la gestión visual de directorios y accesos directos del shell:

*   **Motor de Reglas Automatizado:** Permite definir reglas declarativas (`Contains`, `StartsWith`, `EndsWith` y expresiones regulares seguras con timeouts contra ReDoS) para asociar iconos automáticamente a árboles de carpetas de desarrollo, librerías multimedia o repositorios.
*   **Codificador Nativo PNG a ICO Multi-Capa:** Motor de conversión puro en memoria que genera binarios `.ico` de 7 resoluciones (16x16 hasta 256x256) cumpliendo con la especificación Win32 y validando la integridad de bloques PNG antes de la emisión.
*   **Gestión Segura de `desktop.ini`:** Preserva secciones preexistentes y configura de forma transparente los atributos Win32 de directorio (`FILE_ATTRIBUTE_READONLY` / `FILE_ATTRIBUTE_SYSTEM`) indispensables para que el shell active la personalización.

### Metodología Cleanroom TDD y Control Transaccional

*   **Dominio Aislado con Contratos Formales:** La biblioteca central `WindowsIconsAdmin.Core` carece de dependencias externas o llamadas directas a UI. Sus especificaciones fueron congeladas en contratos formales y validadas con pruebas unitarias independientes ejecutadas en subsegundos.
*   **Historial de Deshacer Atómico:** Almacén transaccional en disco con recuperación automática ante interrupciones, permitiendo revertir lotes completos de personalización a su estado original.
*   **Refresco No Destructivo con `SHChangeNotify`:** Orquestación de eventos nativos de shell (`SHCNE_UPDATEITEM` y `SHCNE_ASSOCCHANGED`) para reflejar los cambios en el Explorador de inmediato sin reiniciar procesos del sistema ni alterar la barra de tareas.

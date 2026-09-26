---
title: "Screen Health Guardian"
icon: "/project-icons/screen-health-guardian-icon.png"
description: "Aplicación de escritorio nativa y ultraligera para Windows que promueve la salud visual y postural monitoreando la actividad real del usuario con soporte multimonitor."
lastUpdated: 2026-09-06
githubUrl: "https://github.com/AnaCataVC/screen-health-guardian"
websiteUrl: "https://screen-health-guardian.ana-catalina.com"
isLiveApp: false
technologies: ["C#", ".NET 9", "WPF", "XAML", "Win32 API", "Multi-Monitor", "Fluent Design"]
categories: ["Salud", "Windows", "Productividad"]
type: "desktop"
status: "Activo"
problem: "Fatiga visual y sobrecarga postural tras largas horas continuas frente a la pantalla, sumado a las limitaciones de herramientas empaquetadas en Python (PyInstaller) que generaban falsos positivos en antivirus y falta de cobertura multimonitor."
solution: "Una aplicación de escritorio nativa en C# y .NET 9 con WPF y aceleración por GPU que actúa como un servicio ultraligero en la bandeja del sistema (12–16 MB RAM, <0.1% CPU), detecta inactividad con Win32 GetLastInputInfo y proyecta overlays translúcidos configurables en múltiples monitores para descansos visuales (regla 20-20-20) y postura."
learnings:
  - "Soporte Multimonitor y Composición DWM: Proyección sincronizada y configurable de ventanas de alerta traslúcidas en todas las pantallas activas con escalado DPI mixto independiente."
  - "Evolución Arquitectónica (Python ➡️ C# / .NET): Eliminación total de falsos positivos en Windows Defender al reemplazar PyInstaller con ejecutables nativos compilados en .NET 9."
  - "Optimización de Recursos en Daemons Residentes: Reducción del uso continuo de RAM de ~50 MB a solo 12–16 MB y reducción del consumo de CPU por debajo del 0.1% mediante DispatcherTimer nativo sin contención de GIL."
  - "Integración Nativa con el Sistema Operativo: Sustitución de locks por sockets TCP por un System.Threading.Mutex nativo de Win32 y desacoplamiento del System Tray mediante H.NotifyIcon.Wpf."
websiteActionText: "Visitar Sitio"
product:
  tagline: "Cuida tu salud al trabajar"
  intro: "Una aplicación de escritorio nativa y ultraligera que te envía alertas periódicas de salud mientras trabajas, sin interrumpirte si no estás en el PC."
  features:
    - icon: "Eye"
      title: "Descanso Visual"
      text: "Sigue la regla 20-20-20. Cada 20 minutos de trabajo activo, te recordamos mirar a 6 metros (20 pies) de distancia durante 20 segundos para relajar tu vista."
    - icon: "Armchair"
      title: "Control de Postura"
      text: "Evita los dolores de espalda. Recibe alertas no intrusivas cada 45 minutos para corregir tu postura, estirarte y asegurarte de mantener la espalda recta."
    - icon: "Activity"
      title: "Detección Inteligente"
      text: "Solo se cuenta el tiempo de actividad real (teclado o mouse mediante Win32). Si te levantas de tu escritorio, los contadores se pausan de forma automática sin consumir CPU."
    - icon: "SlidersHorizontal"
      title: "Totalmente Configurable"
      text: "Personaliza los intervalos de descanso visual, postura e inactividad, además del sonido de notificación y el inicio automático con Windows."
  platforms: ["Windows 10", "Windows 11"]
  downloadUrl: "https://github.com/AnaCataVC/screen-health-guardian/releases"
  downloadLabel: "Descargar Instalador (.exe)"
---

### Arquitectura Nativa de Escritorio (.NET 9 / WPF)

**Screen Health Guardian** fue reescrito desde cero en C# y .NET 9 tras superar las limitaciones de consumo y falsos positivos heurísticos asociados a empaquetadores como PyInstaller:

*   **Daemon Ultraligero en System Tray:** Opera en segundo plano con una huella de memoria de **12–16 MB de RAM** y menos del **0.1% de CPU**, utilizando `H.NotifyIcon.Wpf` y un mutex global de Win32 para ejecución de instancia única.
*   **Detección de Inactividad con Win32:** Llamada P/Invoke a `GetLastInputInfo` para pausar contadores automáticamente si el usuario se retira del escritorio, asegurando que solo se contabilice el tiempo de exposición visual activa.

### Soporte Multimonitor y Composición DWM

*   **Overlays Translúcidos con Aceleración GPU:** Renderizado simultáneo de alertas visuales sincronizadas en todas las pantallas detectadas mediante `Screen.AllScreens`, adaptándose a configuraciones de DPI mixto y orientación vertical/horizontal.
*   **Evolución Arquitectónica Python → C#/.NET:** La migración desde un prototipo PyInstaller eliminó completamente los falsos positivos en Windows Defender, redujo la huella de RAM de ~50 MB a 12–16 MB y eliminó la contención del GIL en bucles de temporizador de alta frecuencia.

> **Nota**: Puedes descargar el instalador standalone `.exe` o el binario sin dependencias directamente desde la sección de Releases en GitHub.

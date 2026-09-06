---
title: "Screen Health Guardian"
icon: "/project-icons/screen-health-guardian-icon.png"
description: "Aplicación de escritorio nativa y ultraligera para Windows que promueve la salud visual y postural monitoreando la actividad real del usuario con soporte multimonitor."
githubUrl: "https://github.com/AnaCataVC/screen-health-guardian"
websiteUrl: "https://screen-health-guardian.ana-catalina.com"
isLiveApp: false
technologies: ["C#", ".NET 9", "WPF", "XAML", "Win32 API", "Multi-Monitor", "Fluent Design"]
categories: ["Salud", "Windows", "Productividad"]
type: "desktop"
status: "Activo"
problem: "Fatiga visual y sobrecarga postural tras largas horas continuas frente a la pantalla, sumado a las limitaciones de herramientas empaquetadas en Python (PyInstaller) que generaban falsos positivos en antivirus y falta de cobertura multimonitor."
solution: "Una aplicación de escritorio nativa en C# y .NET 9 con WPF y aceleración por GPU que actúa como un servicio ultraligero en la bandeja del sistema (<16 MB RAM, <0.1% CPU), detecta inactividad con Win32 GetLastInputInfo y proyecta overlays translúcidos configurables en múltiples monitores para descansos visuales (regla 20-20-20) y postura."
learnings:
  - "Soporte Multimonitor y Composición DWM: Proyección sincronizada y configurable de ventanas de alerta traslúcidas en todas las pantallas activas con escalado DPI mixto independiente."
  - "Evolución Arquitectónica (Python ➡️ C# / .NET): Eliminación total de falsos positivos en Windows Defender al reemplazar PyInstaller con ejecutables nativos compilados en .NET 9."
  - "Optimización de Recursos en Daemons Residentes: Reducción del uso continuo de RAM de ~50 MB a solo 12–16 MB y reducción del consumo de CPU por debajo del 0.1% mediante DispatcherTimer nativo sin contención de GIL."
  - "Integración Nativa con el Sistema Operativo: Sustitución de locks por sockets TCP por un System.Threading.Mutex nativo de Win32 y desacoplamiento del System Tray mediante H.NotifyIcon.Wpf."
websiteActionText: "Visitar Sitio"
---

### Arquitectura Nativa de Escritorio (.NET 9 / WPF)

**Screen Health Guardian** fue reescrito desde cero en C# y .NET 9 tras superar las limitaciones de consumo y falsos positivos heurísticos asociados a empaquetadores como PyInstaller:

*   **Daemon Ultraligero en System Tray:** Opera en segundo plano con una huella de memoria inferior a **14 MB de RAM** y menos del **0.05% de CPU**, utilizando `H.NotifyIcon.Wpf` y un mutex global de Win32 para ejecución de instancia única.
*   **Detección de Inactividad con Win32:** Llamada P/Invoke a `GetLastInputInfo` para pausar contadores automáticamente si el usuario se retira del escritorio, asegurando que solo se contabilice el tiempo de exposición visual activa.

### Soporte Multimonitor y Composición DWM

*   **Overlays Translúcidos con Aceleración GPU:** Renderizado simultáneo de alertas visuales sincronizadas en todas las pantallas detectadas mediante `Screen.AllScreens`, adaptándose a configuraciones de DPI mixto y orientación vertical/horizontal.
*   **Evolución Arquitectónica Python → C#/.NET:** La migración desde un prototipo PyInstaller eliminó completamente los falsos positivos en Windows Defender, redujo la huella de RAM de ~50 MB a menos de 14 MB y eliminó la contención del GIL en bucles de temporizador de alta frecuencia.

> **Nota**: Puedes descargar el instalador standalone `.exe` o el binario sin dependencias directamente desde la sección de Releases en GitHub.

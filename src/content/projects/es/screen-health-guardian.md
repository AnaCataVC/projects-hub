---
title: "Screen Health Guardian"
icon: "/project-icons/screen-health-guardian-icon.png"
description: "Aplicación de escritorio nativa y ultraligera para Windows que promueve la salud visual y postural monitoreando la actividad real del usuario sin sobrecarga del sistema."
descriptionEn: "High-performance, ultra-lightweight native Windows desktop application designed to promote ocular and postural wellness by tracking real user activity without system overhead."
githubUrl: "https://github.com/AnaCataVC/screen-health-guardian"
websiteUrl: "https://screen-health-guardian.ana-catalina.com"
isLiveApp: false
technologies: ["C#", ".NET 9", "WPF", "XAML", "Win32 API", "H.NotifyIcon", "Fluent Design"]
categories: ["Salud", "Desktop", "Windows", "Productividad"]
status: "Activo"
problem: "Fatiga visual y sobrecarga postural tras largas horas continuas frente a la pantalla, sumado a las limitaciones de herramientas empaquetadas en Python (PyInstaller) que generaban falsos positivos en antivirus, alto consumo de memoria RAM (~50 MB) y bloqueos en el hilo de interfaz."
solution: "Una aplicación de escritorio nativa en C# y .NET 9 con WPF y aceleración por GPU que actúa como un servicio ultraligero en la bandeja del sistema (<16 MB RAM, <0.1% CPU), detecta inactividad real con Win32 GetLastInputInfo y proyecta overlays translúcidos con auto-cierre para descansos visuales (regla 20-20-20) y postura."
learnings:
  - "Evolución Arquitectónica (Python ➡️ C# / .NET): Eliminación total de falsos positivos en Windows Defender y software antivirus corporativo al reemplazar el bootloader de PyInstaller con ejecutables Portable Executable (PE) nativos compilados con .NET 9."
  - "Optimización de Recursos en Daemons Residentes: Reducción del uso continuo de RAM de ~50 MB a solo 12–16 MB y reducción del consumo de CPU por debajo del 0.1% mediante bucles DispatcherTimer nativos sin contención de GIL."
  - "Fidelidad Visual y Aceleración por GPU en XAML: Reemplazo de lienzos de Tkinter por ventanas WPF con AllowsTransparency, aceleración por hardware completa, composición DWM y compatibilidad nativa multimonitor con escalado DPI mixto."
  - "Integración Nativa con el Sistema Operativo: Sustitución de locks por sockets TCP por un System.Threading.Mutex nativo de Win32 y desacoplamiento del ciclo de vida del System Tray mediante H.NotifyIcon.Wpf."
websiteActionText: "Visitar Sitio"
---

> **Nota**: Puedes descargar el instalador standalone `.exe` o el binario sin dependencias directamente desde la sección de Releases en GitHub.

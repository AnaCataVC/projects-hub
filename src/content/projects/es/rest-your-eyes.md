---
title: "Rest Your Eyes"
description: "Aplicación nativa para Android diseñada para prevenir la fatiga visual generada por el uso prolongado de dispositivos móviles."
icon: "/project-icons/rest-your-eyes-icon.png"
githubUrl: "https://github.com/AnaCataVC/rest-your-eyes"
websiteUrl: "https://rest-your-eyes.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Compose", "Foreground Services", "Broadcast Receivers", "Jetpack DataStore", "MVVM"]
categories: ["Mobile", "Salud", "Android"]
type: "mobile"
status: "Activo"
problem: "La fatiga visual por el uso prolongado y continuo del celular, sin una forma real de registrar el tiempo efectivo de pantalla encendida ni de recibir recordatorios proactivos de descanso — y las restricciones más estrictas de servicios en segundo plano de Android 14+ hacen poco confiables las soluciones basadas en polling simple."
solution: "Una app nativa para Android que impone la regla 20-20-20 registrando el tiempo real de pantalla encendida mediante un Foreground Service y BroadcastReceivers (ACTION_SCREEN_ON/OFF), pausándose automáticamente cuando el dispositivo se bloquea para no gastar batería. Muestra un recordatorio superpuesto (SYSTEM_ALERT_WINDOW) con alertas de sonido personalizables y auto-dismiss, y declara el tipo de servicio `health` de Android 14+ para que el sistema nunca mate el monitoreo a mitad de sesión."
learnings:
  - "Creación de una aplicación capaz de registrar el uso real del teléfono (tiempo de pantalla encendida/apagada)."
  - "Uso de Foreground Services y Broadcast Receivers en Android para monitoreo en segundo plano."
  - "Implementación de notificaciones superpuestas (SYSTEM_ALERT_WINDOW) para interactuar proactivamente con el usuario."
websiteActionText: "Ver Página"
---

### Arquitectura y Monitoreo en Segundo Plano

**Rest Your Eyes** implementa la regla oftalmológica **20-20-20** (descansar la vista 20 segundos cada 20 minutos de uso) mediante un servicio de fondo en Android altamente eficiente:

*   **Foreground Service & BroadcastReceivers:** Rastreo en tiempo real del estado de la pantalla (`ACTION_SCREEN_ON`, `ACTION_SCREEN_OFF`) para acumular únicamente el tiempo de uso visual efectivo.
*   **Overlay Proactivo (`SYSTEM_ALERT_WINDOW`):** Despliegue de una superposición visual translúcida y no intrusiva con Jetpack Compose que recuerda al usuario relajar el enfoque ocular sin interrumpir bruscamente sus tareas.

### Optimización Energética

*   **Cero Consumo con Pantalla Apagada:** El temporizador se pausa automáticamente cuando la pantalla se bloquea, liberando bloqueos de activación (*WakeLocks*) y preservando la batería del dispositivo móvil.
*   **Compatibilidad Android 14+ (`FOREGROUND_SERVICE_HEALTH`):** El Foreground Service declara el tipo `health` para cumplir con las restricciones de background más estrictas de Android 14 y versiones posteriores, garantizando que el sistema no lo mate durante el monitoreo continuo.

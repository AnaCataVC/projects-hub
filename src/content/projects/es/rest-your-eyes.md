---
title: "Rest Your Eyes"
description: "Aplicación nativa para Android diseñada para prevenir la fatiga visual generada por el uso prolongado de dispositivos móviles."
lastUpdated: 2026-11-05
icon: "/project-icons/rest-your-eyes-icon.png"
githubUrl: "https://github.com/AnaCataVC/rest-your-eyes"
websiteUrl: "https://rest-your-eyes.ana-catalina.com"
isLiveApp: false
technologies: ["Kotlin", "Jetpack Compose", "Foreground Services", "Broadcast Receivers", "Jetpack DataStore", "Habit Analytics", "MVVM"]
categories: ["Mobile", "Salud", "Android"]
type: "mobile"
status: "Activo"
problem: "La fatiga visual por el uso prolongado y continuo del celular, sin una forma real de registrar el tiempo efectivo de pantalla encendida ni de recibir recordatorios proactivos de descanso — y las restricciones más estrictas de servicios en segundo plano de Android 14+ hacen poco confiables las soluciones basadas en polling simple."
solution: "Una app nativa para Android que impone la regla 20-20-20 registrando el tiempo real de pantalla encendida mediante un Foreground Service y BroadcastReceivers (ACTION_SCREEN_ON/OFF), pausándose automáticamente cuando el dispositivo se bloquea para no gastar batería. Muestra un recordatorio superpuesto (SYSTEM_ALERT_WINDOW) con alertas de sonido personalizables y auto-dismiss, declara el tipo de servicio `health` de Android 14+, e integra analítica de adherencia con ventana rodante de 7 días y retención histórica de 180 días."
learnings:
  - "Creación de una aplicación capaz de registrar el uso real del teléfono (tiempo de pantalla encendida/apagada)."
  - "Ventana Rodante de Adherencia y Retención a 180 Días: Arquitectura de StatsRepository sobre Jetpack DataStore con ventana móvil de 7 días para evitar reseteos artificiales en lunes y barrera atómica contra eventos duplicados."
  - "Uso de Foreground Services y Broadcast Receivers en Android para monitoreo en segundo plano."
  - "Implementación de notificaciones superpuestas (SYSTEM_ALERT_WINDOW) para interactuar proactivamente con el usuario."
websiteActionText: "Ver Página"
product:
  tagline: "Dale un respiro a tus ojos mientras trabajas"
  intro: "Aplica la regla 20-20-20 con avisos que solo cuentan el tiempo real frente a la pantalla, adaptándose a tu ritmo sin interrumpirte de más."
  features:
    - icon: "Timer"
      title: "Intervalos Personalizables"
      text: "Ajusta el tiempo de aviso y la duración del descanso. Por defecto, cada 20 minutos descansa 20 segundos."
    - icon: "TrendingUp"
      title: "Métricas de Adherencia Ocular"
      text: "Analítica de descansos completados vs. saltados con ventana rodante de 7 días, historial a 180 días y microcopia motivacional no punitiva."
    - icon: "Vibrate"
      title: "Notificaciones y Vibración"
      text: "Recibe alertas discretas e interactivas con soporte para vibración y auto-cierre, para que no pierdas tu enfoque."
    - icon: "Smartphone"
      title: "Superposición en Pantalla"
      text: "Aparece sobre otras aplicaciones recordándote descansar, forzándote positivamente a cuidar tus ojos."
  screenshots:
    - src: "/product-screenshots/rest-your-eyes/mobile.jpeg"
      alt: "Captura de pantalla de Rest Your Eyes en un dispositivo Android"
  faq:
    - question: "¿El temporizador sigue corriendo cuando apago la pantalla?"
      answer: "No. Solo cuenta el tiempo con la pantalla encendida y se pausa automáticamente al bloquear el teléfono, sin gastar batería en reposo."
    - question: "¿Puedo personalizar la duración del trabajo y del descanso?"
      answer: "Sí. Viene configurado por defecto con la regla 20-20-20 (20 segundos cada 20 minutos), pero puedes ajustar ambos intervalos a tu medida."
    - question: "¿Cómo me avisa cuando es momento de descansar la vista?"
      answer: "Muestra un aviso suave superpuesto sobre la app que estés usando, con sonido o vibración opcional y estadísticas de tu constancia semanal."
  platforms: ["Android"]
  downloadUrl: "https://github.com/AnaCataVC/rest-your-eyes/releases/latest"
  downloadLabel: "Descargar APK"
---

### Arquitectura y Monitoreo en Segundo Plano

**Rest Your Eyes** implementa la regla oftalmológica **20-20-20** (descansar la vista 20 segundos cada 20 minutos de uso) mediante un servicio de fondo en Android altamente eficiente:

*   **Foreground Service & BroadcastReceivers:** Rastreo en tiempo real del estado de la pantalla (`ACTION_SCREEN_ON`, `ACTION_SCREEN_OFF`) para acumular únicamente el tiempo de uso visual efectivo.
*   **Overlay Proactivo (`SYSTEM_ALERT_WINDOW`):** Despliegue de una superposición visual translúcida y no intrusiva con Jetpack Compose que recuerda al usuario relajar el enfoque ocular sin interrumpir bruscamente sus tareas.
*   **Analítica de Adherencia y Métricas de Hábito:** Monitoreo reactivo con `StatsRepository` sobre Jetpack DataStore que calcula descansos completados vs. saltados en una ventana rodante de 7 días y retención histórica a 180 días con microcopia empática.

### Optimización Energética

*   **Cero Consumo con Pantalla Apagada:** El temporizador se pausa automáticamente cuando la pantalla se bloquea, liberando bloqueos de activación (*WakeLocks*) y preservando la batería del dispositivo móvil.
*   **Compatibilidad Android 14+ (`FOREGROUND_SERVICE_HEALTH`):** El Foreground Service declara el tipo `health` para cumplir con las restricciones de background más estrictas de Android 14 y versiones posteriores, garantizando que el sistema no lo mate durante el monitoreo continuo.

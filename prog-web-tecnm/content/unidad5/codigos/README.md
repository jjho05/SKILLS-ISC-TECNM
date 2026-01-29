# ☁️ Ejemplos de Código - Unidad 5: Cloud Computing

## Descripción
Ejemplos de conceptos "Cloud Native": Microservicios, APIs y Contenedores.

## Archivos Incluidos

### 1. `01_microservicio_mock.js` (Serverless)
*   **Concepto:** AWS Lambda / Azure Functions.
*   **Qué hace:** Simula un "Handler" de función serverless. Recibe un evento (JSON), procesa y retorna respuesta. No hay servidor escuchando puertos.

### 2. `02_consumo_api.js` (Integración)
*   **Concepto:** Microservicios comunicándose.
*   **Qué hace:** Realiza una petición HTTPS real a una API pública (`jsonplaceholder`) usando streams nativos de Node.js.

### 3. `Dockerfile` (Contenedores)
*   **Concepto:** Empaquetado de aplicaciones.
*   **Qué hace:** Define paso a paso cómo crear una imagen de Linux Alpine con Node.js y tu aplicación dentro.

## 🚀 Tutorial de Ejecución

### Scripts JS
```bash
node 01_microservicio_mock.js
node 02_consumo_api.js
```

### Docker (Requiere tener Docker Desktop instalado)
1. Construir la imagen:
   ```bash
   docker build -t mi-api-nube .
   ```
2. Correr el contenedor:
   ```bash
   docker run -p 3000:3000 mi-api-nube
   ```

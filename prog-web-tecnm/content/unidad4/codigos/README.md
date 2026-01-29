# 🔙 Ejemplos de Código - Unidad 4: Servidor (Backend)

## Descripción
Scripts para el desarrollo Backend usando Node.js y Express.

## Archivos Incluidos

### 1. `01_servidor_http.js`
*   **Tecnología:** Node.js Nativo (sin librerías).
*   **Qué hace:** Levanta un servidor web en el puerto 3000 que responde HTML y JSON.

### 2. `02_hola_express.js`
*   **Tecnología:** Express.js (Framework).
*   **Qué hace:** Servidor profesional con rutas simplificadas.
*   **Nota:** Incluye un "Simulador" por si no tienes `express` instalado, para que el código no falle.

### 3. `03_acceso_datos_mock.js`
*   **Tecnología:** JavaScript Async/Await (Simulación DB).
*   **Qué hace:** Simula operaciones CRUD (Crear, Leer) con retardos artificiales, imitando una Base de Datos real.

## 🚀 Tutorial de Ejecución

1. Abre tu terminal en esta carpeta.
2. (Opcional) Instala Express para la experiencia real:
   ```bash
   npm init -y
   npm install express
   ```
3. Ejecuta los servidores:
   ```bash
   node 01_servidor_http.js
   ```
   *(Abre http://localhost:3000 en tu navegador)*.
   
   Para detener el servidor, presiona `Ctrl + C` en la terminal.

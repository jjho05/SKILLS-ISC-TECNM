/**
 * 03_arquitectura_cliente_servidor.js
 * 
 * Este script simula el ciclo de vida de una petición web (Arquitectura Cliente-Servidor).
 * Usa Node.js básico para crear un servidor HTTP real.
 * 
 * Instrucciones:
 * 1. Ejecuta: node 03_arquitectura_cliente_servidor.js
 * 2. Abre tu navegador en: http://localhost:3000
 */

const http = require('http');

// 1. EL SERVIDOR (Backend)
// Esta función "escucha" las peticiones del Cliente
const server = http.createServer((req, res) => {

    console.log(`[SERVIDOR] Petición recibida: ${req.method} ${req.url}`);

    // Configurar cabeceras de respuesta (Metadata)
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'TecNM-Server');

    // Simular un "Router" básico
    if (req.url === '/') {
        res.statusCode = 200;
        const respuesta = {
            mensaje: "¡Hola desde el Servidor!",
            arquitectura: "Cliente-Servidor",
            fecha: new Date().toISOString()
        };
        res.end(JSON.stringify(respuesta, null, 2));
    }
    else if (req.url === '/usuarios') {
        res.statusCode = 200;
        const usuarios = [
            { id: 1, nombre: "Jesús", rol: "Admin" },
            { id: 2, nombre: "María", rol: "Estudiante" }
        ];
        res.end(JSON.stringify(usuarios, null, 2));
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Ruta no encontrada" }));
    }
});

// 2. INICIAR LA ESCUCHA
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`\n=== SERVIDOR INICIADO ===`);
    console.log(`📡 Escuchando en http://localhost:${PORT}`);
    console.log(`Prueba a entrar a las URLs arriba o usa 'curl' en otra terminal.\n`);
});

/**
 * 02_consumo_api.js
 * 
 * En la arquitectura de Microservicios, tu Backend llama a otros Backends.
 * Aquí simulamos consumir una API externa (Weather API ficticia).
 */

const https = require('node:https'); // Módulo nativo (o usar 'axios' en prod)

// URL real de prueba (JSONPlaceholder)
const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

console.log(`🌐 Conectando a servicio externo: ${API_URL} ...`);

https.get(API_URL, (res) => {
    let data = '';

    // Recibir fragmentos de datos (Streams)
    res.on('data', (chunk) => {
        data += chunk;
    });

    // Al terminar de recibir toda la respuesta
    res.on('end', () => {
        try {
            const usuario = JSON.parse(data);
            console.log("\n✅ Datos recibidos del Microservicio:");
            console.log(`   - ID: ${usuario.id}`);
            console.log(`   - Nombre: ${usuario.name}`);
            console.log(`   - Email: ${usuario.email}`);
            console.log(`   - Empresa: ${usuario.company.name}`);
        } catch (e) {
            console.error("❌ Error al parsear JSON:", e.message);
        }
    });

}).on('error', (err) => {
    console.error("❌ Error de conexión:", err.message);
});

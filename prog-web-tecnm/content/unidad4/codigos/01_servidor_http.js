/**
 * 01_servidor_http.js
 * 
 * El servidor web más básico posible en Node.js (sin librerías extra).
 * Usa el módulo nativo 'http'.
 */

const http = require('node:http');

// Configuración
const PORT = 3000;

// Crear el servidor
const server = http.createServer((req, res) => {
    // req: Request (Lo que pide el navegador)
    // res: Response (Lo que le contestamos)

    console.log(`📢 Petición recibida: ${req.method} ${req.url}`);

    // Rutas básicas
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>¡Hola Mundo desde Node.js! 🚀</h1><p>Esto es puro backend.</p>');

    } else if (req.url === '/api/fecha') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            fecha: new Date().toISOString(),
            mensaje: "API funcionando"
        }));

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error 404: Ruta no encontrada');
    }
});

// Arrancar el servidor
server.listen(PORT, () => {
    console.log(`\n🚀 Servidor escuchando en http://localhost:${PORT}`);
    console.log('   Prueba: Abre tu navegador en esa URL.');
    console.log('   (Presiona Ctrl+C para detenerlo)\n');
});

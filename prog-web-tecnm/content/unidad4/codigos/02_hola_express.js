/**
 * 02_hola_express.js
 * 
 * Un servidor moderno usando Express.js.
 * Mucho más limpio y fácil que el módulo nativo 'http'.
 * 
 * REQUISITO:
 * Antes de correr esto, necesitas instalar express:
 * > npm install express
 * (Ojo: Si no quieres instalar nada, solo mira el código).
 */

// Simulación para que el código corra sin instalar nada (Mock)
// Si tienes express real, cámbialo a: const express = require('express');
const express = (() => {
    try {
        return require('express');
    } catch (e) {
        console.log("⚠️  Express no está instalado. Usando modo simulación.");
        return () => ({
            get: (path, cb) => console.log(`   [Ruta GET registrada]: ${path}`),
            listen: (port, cb) => {
                console.log(`\n🚀 [SIMULADOR] Servidor Express corriendo en puerto ${port}`);
                cb && cb();
            }
        });
    }
})();

const app = express();
const PORT = 3000;

// Ruta Inicio
app.get('/', (req, res) => {
    res.send('Hola desde Express! 🚂');
});

// Ruta API
app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nombre: "Juan" },
        { id: 2, nombre: "Ana" }
    ]);
});

// Arrancar
app.listen(PORT, () => {
    console.log(`Escuchando en http://localhost:${PORT}`);
});

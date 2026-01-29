/**
 * 01_microservicio_mock.js
 * 
 * Simulación de una "Serverless Function" (Lambda).
 * En la nube, tú solo escribes la función `handler`, no el servidor.
 */

// Esto es lo que escribes en AWS Lambda:
exports.handler = async (event) => {
    console.log("⚡ Evento recibido:", JSON.stringify(event, null, 2));

    const nombre = event.nombre || "Desconocido";

    // Simular proceso (ej. redimensionar imagen)
    await new Promise(r => setTimeout(r, 200));

    return {
        statusCode: 200,
        body: JSON.stringify({
            mensaje: `Hola ${nombre}, he procesado tu petición en la nube.`,
            tiempo: new Date().toISOString()
        })
    };
};

/* 
 * ---------------------------------------------------------
 * SIMULADOR LOCAL (Para que puedas correrlo en tu PC)
 * En AWS esto no existe, lo pone la nube.
 * ---------------------------------------------------------
 */
if (require.main === module) {
    (async () => {
        console.log("☁️  Simulando ejecución Serverless...");
        const resultado = await exports.handler({ nombre: "Estudiante" });
        console.log("\n📬 Respuesta de la Lambda:");
        console.log(resultado);
    })();
}

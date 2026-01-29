/**
 * 04_fetch_api.js
 * 
 * Cómo pedir datos a un servidor moderno usando Promesas y Async/Await.
 * (Ejecuta esto en tu navegador o en Node 18+)
 */

// URL de prueba gratuita (JSONPlaceholder)
const URL = 'https://jsonplaceholder.typicode.com/users/1';

// FORMA 1: Promesas (.then) - Estilo 2016
// ----------------------------------------
console.log("1. Pidiendo datos con .then()...");

fetch(URL)
    .then(response => {
        if (!response.ok) throw new Error("Error de red");
        return response.json(); // Parsea el JSON
    })
    .then(data => {
        console.log("✅ Datos recibidos (.then):", data.name);
    })
    .catch(error => {
        console.error("❌ Error:", error);
    });


// FORMA 2: Async / Await - Estilo Moderno (Mucho más limpio)
// ----------------------------------------------------------
async function obtenerUsuario() {
    console.log("2. Pidiendo datos con Async/Await...");

    try {
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("🚀 Datos recibidos (Await):", data.name);
        console.log("   Email:", data.email);

    } catch (error) {
        console.error("❌ Error capturado:", error);
    }
}

// Ejecutamos la función asíncrona
obtenerUsuario();

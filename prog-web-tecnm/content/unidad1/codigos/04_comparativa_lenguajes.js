/**
 * 04_comparativa_lenguajes.js
 * 
 * Demostración de la evolución de JavaScript (Tecnología Web Principal).
 * Compara cómo se escribía código "Antiguo" (ES5) vs "Moderno" (ES6+).
 * 
 * Instrucciones:
 * 1. Ejecuta: node 04_comparativa_lenguajes.js
 */

console.log("=== EVOLUCIÓN DE JAVASCRIPT ===\n");

// ---------------------------------------------------------
// 1. VARIABLES
// ---------------------------------------------------------

// Antiguo (ES5) - 'var' tiene scope de función y causa bugs
var antiguo = "Soy variable antigua";

// Moderno (ES6+) - 'const' y 'let' tienen scope de bloque (más seguro)
const moderno = "Soy constante moderna";
let cambiante = "Puedo cambiar de valor";

console.log("1. Variables:", moderno);


// ---------------------------------------------------------
// 2. CONCATENACIÓN DE TEXTO
// ---------------------------------------------------------
const nombre = "TecNM";
const anio = 2024;

// Antiguo
const mensajeAntiguo = "Bienvenido al " + nombre + " (" + anio + ")";

// Moderno (Template Literals) - Mucho más limpio
const mensajeModerno = `Bienvenido al ${nombre} (${anio})`;

console.log("\n2. Strings Modernos:", mensajeModerno);


// ---------------------------------------------------------
// 3. FUNCIONES
// ---------------------------------------------------------

// Antiguo
function sumarAntiguo(a, b) {
    return a + b;
}

// Moderno (Arrow Functions)
const sumarModerno = (a, b) => a + b;

console.log("\n3. Funciones:", sumarModerno(10, 5));


// ---------------------------------------------------------
// 4. OBJETOS
// ---------------------------------------------------------
const id = 101;
const carrera = "Sistemas";

// Antiguo
const estudianteAntiguo = {
    id: id,
    carrera: carrera,
    saludar: function () { return "Hola"; }
};

// Moderno (Shorthand properties)
const estudianteModerno = {
    id,          // No hace falta poner id: id
    carrera,
    saludar() { return "Hola"; } // Método corto
};

console.log("\n4. Objetos:", estudianteModerno);
console.log("\n✅ Conclusión: El JS Moderno es más limpio y legible.");

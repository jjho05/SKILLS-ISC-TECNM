/**
 * 02_arrow_functions.js
 * 
 * Las funciones flecha (=>) no son solo azucar sintáctica.
 * Cambian cómo funciona 'this'.
 */

// ---------------------------------------------------------
// 1. Sintaxis Más Corta
// ---------------------------------------------------------

// Antes (ES5)
const sumarViejo = function (a, b) {
    return a + b;
};

// Ahora (ES6)
// Si es una sola línea, el 'return' y las '{ }' son implícitos.
const sumarNuevo = (a, b) => a + b;

console.log(sumarNuevo(5, 10)); // 15


// ---------------------------------------------------------
// 2. El misterio de 'this'
// ---------------------------------------------------------

const objeto = {
    nombre: "Objeto Alien",

    // Función normal: 'this' es quien la llama (el objeto)
    saludarNormal: function () {
        console.log("Normal:", this.nombre);
    },

    // Arrow Function: 'this' es heredado del contexto padre (Lexical this)
    // En Node.js, el padre es un objeto vacío {}, no este objeto.
    saludarFlecha: () => {
        console.log("Flecha:", this.nombre);
    }
};

objeto.saludarNormal(); // "Normal: Objeto Alien"
objeto.saludarFlecha(); // "Flecha: undefined" (¡Cuidado con esto!)

// Moraleja: No uses Arrow Functions para métodos de objetos.
// Úsalas para Callbacks y programación funcional (map, filter).

const numeros = [1, 2, 3];
const dobles = numeros.map(n => n * 2);
console.log(dobles); // [2, 4, 6]

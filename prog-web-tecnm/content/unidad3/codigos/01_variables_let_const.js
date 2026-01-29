/**
 * 01_variables_let_const.js
 * 
 * En 2015, JavaScript recibió su mayor actualización (ES6).
 * Lo más importante: DEJAMOS de usar 'var'.
 */

// 1. EL PROBLEMA DE 'VAR' (Function Scope)
// ----------------------------------------
// 'var' "fuga" variables fuera de los bloques if/for.
if (true) {
    var dinosaurio = "T-Rex";
}
console.log(dinosaurio); // "T-Rex" (¡Esto es peligroso! Debería dar error)


// 2. LA SOLUCIÓN: 'LET' (Block Scope)
// -----------------------------------
// 'let' respeta las llaves { }.
if (true) {
    let mamut = "Manny";
    console.log("Dentro del bloque:", mamut);
}
// console.log(mamut); // Error: mamut is not defined (¡Correcto!)


// 3. LA CONSTANTE: 'CONST'
// ------------------------
// Úsala para valores que NO van a ser re-asignados.
const PI = 3.1416;
// PI = 4; // Error: Assignment to constant variable.

// ¡OJO! En objetos/arrays, 'const' no congela el contenido, solo la referencia.
const usuario = { nombre: "Juan" };
usuario.nombre = "Pedro"; // Esto SÍ se puede.
// usuario = { nombre: "Ana" }; // Esto NO se puede.

console.log("Todo OK.");

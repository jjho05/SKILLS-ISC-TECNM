/**
 * 03_dom_manipulation.js
 * 
 * Este script manipuló el HTML que estás viendo.
 * (Cópialo y pégalo en la consola del navegador para probarlo).
 */

// 1. Selector Moderno (adiós getElementById)
// Selecciona el primer h1 que encuentre
const titulo = document.querySelector('h1');

if (titulo) {
    // 2. Modificar Contenido
    titulo.textContent = "¡Hackeado por JS!";

    // 3. Modificar Estilos Directos
    titulo.style.color = "red";
    titulo.style.transform = "rotate(-5deg)";
}

// 4. Crear Elementos
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = "Este párrafo no existía hace 1 milisegundo.";
nuevoParrafo.style.backgroundColor = "yellow";

// 5. Inyectar en el DOM
document.body.appendChild(nuevoParrafo);

// 6. Event Listeners (La forma correcta de manejar clics)
// No uses onclick="funcion()" en el HTML. Ensucia.
document.addEventListener('click', () => {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === 'black' ? 'white' : 'black';

    document.body.style.color =
        document.body.style.backgroundColor === 'black' ? 'white' : 'black';
});

console.log("Haz clic en cualquier lado de la página para activar el modo oscuro.");

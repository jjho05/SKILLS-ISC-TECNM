/**
 * 05_react_component.jsx
 * 
 * Ejemplo de un componente funcional moderno en React.
 * (Este código requiere un entorno con Babel/Webpack o Vite).
 */

import React, { useState } from 'react';

export default function Contador() {
    // 1. Hook de Estado (State)
    // count es la variable, setCount es la función para cambiarla.
    const [count, setCount] = useState(0);

    // 2. Función manejadora
    const incrementar = () => {
        setCount(count + 1);
    };

    // 3. JSX (HTML dentro de JS)
    return (
        <div className="card">
            <h1>Contador React: {count}</h1>

            <button onClick={incrementar}>
                Sumar +1
            </button>

            {count > 10 && <p>¡Wow, vas muy rápido!</p>}
        </div>
    );
}

// Ventaja de React:
// No manipulamos el DOM manualmente (no document.getElementById).
// Solo cambiamos el ESTADO (count) y React actualiza la UI mágicamente.

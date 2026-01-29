# ⚡ Ejemplos de Código - Unidad 3: Cliente (Frontend)

## Descripción
Codebase para dominar JavaScript Moderno, manipulación del DOM y Frameworks.

## Archivos Incluidos

### JavaScript Moderno (Vanilla)
*   `01_variables_let_const.js`: Aprende a dejar de usar `var`. Scope de bloque.
*   `02_arrow_functions.js`: Sintaxis `=>` y el binding léxico de `this`.
*   `03_dom_manipulation.js`: Cómo cambiar el HTML desde JS (`querySelector`, `addEventListener`). **(Copiar y pegar en consola del navegador)**.
*   `04_fetch_api.js`: Peticiones HTTP asíncronas (`async/await`) a APIs reales.

### Frameworks (Conceptos)
*   `05_react_component.jsx`: Ejemplo de un componente funcional de **React** con Hooks.
*   `06_angular_component.ts`: Ejemplo de una clase Componente de **Angular** con TypeScript.

## 🚀 Tutorial de Ejecución

### Para los archivos `.js` (01, 02, 04):
Ejecutar con Node.js en terminal:
```bash
node 01_variables_let_const.js
```

### Para `03_dom_manipulation.js`:
Este script manipula el DOM, por lo que **necesita un navegador**.
1. Abre cualquier página web (ej. Google.com).
2. Abre la Consola de Desarrollador (F12 o Clic Derecho -> Inspeccionar -> Consol).
3. Copia el contenido del archivo y pégalo ahí.

### Para React y Angular (05, 06):
Estos son **snippets de componentes**. Para correrlos "de verdad" necesitas un entorno de build:
*   **React:** `npm create vite@latest mi-app -- --template react`
*   **Angular:** `npm install -g @angular/cli && ng new mi-app`
*   **Nota:** El archivo `06_angular_component.ts` incluye un "Simulador" al final para que puedas correrlo con `node` y ver cómo funciona la lógica de la clase sin instalar Angular.

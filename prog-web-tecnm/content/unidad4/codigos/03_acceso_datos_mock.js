/**
 * 03_acceso_datos_mock.js
 * 
 * Simulación de una clase de acceso a datos (DAO) como si fuera una base de datos real.
 * En la vida real usarías 'mongoose', 'sequelize' o 'pg'.
 */

class BaseDeDatos {
    constructor() {
        this.datos = [
            { id: 1, producto: "Laptop", precio: 15000 },
            { id: 2, producto: "Mouse", precio: 500 }
        ];
        console.log("💿 Base de Datos Conectada (En Memoria)");
    }

    // Simula una operación asíncrona (como ir al disco duro)
    async obtenerTodos() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.datos);
            }, 500); // Tarda 500ms artificialmente
        });
    }

    async crear(item) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const nuevo = { id: this.datos.length + 1, ...item };
                this.datos.push(nuevo);
                console.log("💾 Guardado en DB:", nuevo);
                resolve(nuevo);
            }, 300);
        });
    }
}

// Uso del DAO
async function main() {
    const db = new BaseDeDatos();

    console.log("\n1. Obteniendo productos...");
    const productos = await db.obtenerTodos();
    console.table(productos);

    console.log("\n2. Insertando nuevo producto...");
    await db.crear({ producto: "Teclado", precio: 1200 });

    console.log("\n3. Verificando actualización...");
    const actualizados = await db.obtenerTodos();
    console.table(actualizados);
}

main();

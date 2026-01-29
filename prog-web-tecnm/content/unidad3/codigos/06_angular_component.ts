/**
 * 06_angular_component.ts
 * 
 * Ejemplo de un componente en Angular con TypeScript.
 * Observa el uso de Decoradores (@Component) y Tipado fuerte.
 * 
 * NOTA: Para ejecutar esto sin instalar Angular, hemos incluido
 * una simulación simple de la función @Component al final.
 */

// Simulación de Angular (Para que este archivo compile y corra solo)
function Component(metadata: any) {
    return function (constructor: Function) {
        (constructor as any).metadata = metadata;
        console.log(`✅ Componente '${metadata.selector}' registrado correctamente.`);
    }
}

// import { Component } from '@angular/core'; // (Comentado para ejecución standalone)

@Component({
    selector: 'app-contador',
    template: `
    <div class="card">
      <h1>Contador Angular: {{ count }}</h1>
      <button (click)="incrementar()">Sumar +1</button>
      
      <p *ngIf="count > 10">¡Wow, vas muy rápido!</p>
    </div>
  `,
    styles: ['.card { border: 1px solid blue; padding: 20px; }']
})
export class ContadorComponent {
    // 1. Propiedades tipadas
    count: number = 0;

    // 2. Métodos
    incrementar(): void {
        this.count++;
    }
}

// Ventaja de Angular:
// Es un Framework completo. Trae todo incluido (Router, HTTP, Forms).
// Usa TypeScript por defecto para evitar errores de tipos.

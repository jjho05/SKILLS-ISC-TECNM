"""
Unidad 1 - Ejemplo 02: Cliente Web Simple
Ilustra el concepto de CLIENTE y petición HTTP.

Requiere: pip install requests
"""

import requests

def consultar_web():
    url = "https://www.google.com"
    print(f"📡 Conectando a {url}...")
    
    try:
        # Hacemos una petición GET (como si escribiéramos la URL en el navegador)
        respuesta = requests.get(url)
        
        print("\n✅ Conexión Exitosa!")
        print("-" * 40)
        
        # Verificamos el código de estado (200 = OK)
        print(f"Status Code: {respuesta.status_code}")
        print(f"Headers (Cabeceras): {respuesta.headers['Content-Type']}")
        print("-" * 40)
        
        # Mostramos los primeros 500 caracteres del HTML recibido
        print("Contenido recibido (HTML parcial):")
        print(respuesta.text[:500])
        print("...\n")
        
    except Exception as e:
        print(f"❌ Error al conectar: {e}")

if __name__ == "__main__":
    consultar_web()

"""
Unidad 1 - Ejemplo 01: Servidor Web Simple
Ilustra el concepto de SERVIDOR en la arquitectura Cliente-Servidor.

Autor: Skills ISC TecNM
"""

from http.server import HTTPServer, BaseHTTPRequestHandler

class MiServidor(BaseHTTPRequestHandler):
    """
    Clase que define cómo responder a las peticiones del cliente (Navegador).
    """
    
    def do_GET(self):
        """Maneja las peticiones GET (cuando alguien entra a la página)"""
        
        # 1. Enviar código de respuesta 200 (OK)
        self.send_response(200)
        
        # 2. Definir que enviamos HTML
        self.send_header("Content-type", "text/html; charset=utf-8")
        self.end_headers()
        
        # 3. El contenido de la respuesta (HTML)
        html = """
        <html>
            <head>
                <title>Mi Primer Servidor</title>
                <style>
                    body { font-family: sans-serif; text-align: center; padding: 50px; }
                    h1 { color: #2c3e50; }
                    p { font-size: 1.2em; }
                </style>
            </head>
            <body>
                <h1>¡Hola Mundo Web! 🌐</h1>
                <p>Este HTML fue generado por un servidor Python.</p>
                <p>Estás viendo la arquitectura <b>Cliente-Servidor</b> en acción.</p>
            </body>
        </html>
        """
        
        # 4. Enviar los bytes
        self.wfile.write(html.encode('utf-8'))

def ejecutar(host="localhost", port=8000):
    server = HTTPServer((host, port), MiServidor)
    print(f"🚀 Servidor corriendo en http://{host}:{port}")
    print("Presiona Ctrl+C para detenerlo.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Servidor detenido.")
        server.server_close()

if __name__ == "__main__":
    ejecutar()

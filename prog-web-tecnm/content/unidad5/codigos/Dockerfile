# Dockerfile
# Este archivo es la "Receta" para construir tu servidor.

# 1. Usar una imagen base (Node.js oficial versión 18 en Linux Alpine)
# Alpine es una versión super ligera de Linux (5MB).
FROM node:18-alpine

# 2. Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar archivos de dependencias
COPY package*.json ./

# 4. Instalar dependencias (solo producción)
RUN npm install --production

# 5. Copiar el resto del código fuente
COPY . .

# 6. Exponer el puerto 3000 al mundo exterior
EXPOSE 3000

# 7. Comando para arrancar el servidor
CMD ["node", "server.js"]

# ----------------------------------------------------
# Cómo usar esto:
# 1. Construir: docker build -t mi-servidor-nodejs .
# 2. Correr:    docker run -p 3000:3000 mi-servidor-nodejs
# ----------------------------------------------------

# 1. Imagen Base (Node.js versión ligera)
FROM node:18-alpine

# 2. Directorio de trabajo dentro del container
WORKDIR /app

# 3. Copiar archivos de dependencias
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install --production

# 5. Copiar código fuente
COPY . .

# 6. Exponer puerto
EXPOSE 3000

# 7. Crear usuario no-privilegiado (Seguridad)
USER node

# 8. Comando de inicio
CMD ["node", "app.js"]

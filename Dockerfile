# Use official Node.js image as base
# Set working directory to /app
FROM node:24.21
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Build NestJS application
RUN npm run build

# Expose application port
EXPOSE 3000

# Start application
CMD ["node", "dist/main.js"]
FROM node:18-alpine

# App directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy app
COPY . .

# Expose and default env
ENV PORT=3000
EXPOSE 3000

# Start
CMD ["node", "index.js"]
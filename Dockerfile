FROM node:20-alpine
# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite project
RUN npm run build

# Install serve to serve the built files
RUN npm install -g serve

# Expose port 8080
EXPOSE 8080

# Start the application
CMD ["serve", "-s", "dist", "-l", "8080"]
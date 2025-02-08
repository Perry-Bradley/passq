# Use the official Next.js image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy the package*.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port
EXPOSE 3000

# Run the command to start the development server
CMD ["npm", "run", "start"]
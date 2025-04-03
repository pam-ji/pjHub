# Use an official Node.js image as a base
FROM node:14-slim

# Set the working directory to /app
WORKDIR /apps/slay-the-spire/app

# Copy the package.json file
COPY package*.json ./

# Install the dependencies
RUN bun install

# Copy the application code
COPY . .

# Expose the port
EXPOSE 3001

# Run the command to start the application
CMD ["bun", "run", "start"]
# Use an official Node.js runtime as a parent image
FROM node:8

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight web server to serve the React application
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

COPY ./assets/ /usr/share/nginx/html/assets/
# Expose port 80 to the outside world
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]
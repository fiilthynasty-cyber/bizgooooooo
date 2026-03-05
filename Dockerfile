# Stage 1: Build the React frontend
FROM node:16 AS build

WORKDIR /app

# Copy package files and install dependencies
COPY ./frontend/package.json ./frontend/package-lock.json ./frontend/
RUN npm install

# Copy the rest of the frontend files and build the React app
COPY ./frontend /app
RUN npm run build

# Stage 2: Set up the backend (Express API)
FROM node:16

WORKDIR /app

# Copy package files for backend
COPY ./backend/package.json ./backend/package-lock.json ./backend/
RUN npm install

# Copy the backend files
COPY ./backend /app

# Copy the built React app from the build stage into the backend's public folder
COPY --from=build /app/build /app/frontend/build

# Set the environment variable for the backend to run
ENV PORT=5000

EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]

# Stage 1: Build the React app
FROM node:lts AS build-stage
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:stable-alpine AS production-stage
# Copy the built files from the build-stage to the Nginx static file directory
COPY --from=build-stage /src/dist /usr/share/nginx/html
# Copy a custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80, which Nginx listens on by default
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


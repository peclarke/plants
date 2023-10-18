# Compile the react project
FROM node as web-build
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
RUN npm run build

# Run the project
# FROM node as runner
# COPY --from=web-build /app/dist .
# COPY --from=web-build /app/vite.config.ts .
# COPY --from=web-build /app/package.json .
# RUN npm install --omit=dev
CMD ["npm", "run", "preview"]





# FROM nginx as nginx
# COPY --from=web-build /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
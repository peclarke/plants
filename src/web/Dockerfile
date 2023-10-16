# Compile the react project
FROM node as web-build
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
RUN npm run build

FROM nginx as nginx
COPY --from=web-build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
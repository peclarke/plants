# Compile the react project
FROM node as web-build
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
RUN rm -rf ./src

CMD ["npm", "run", "dev"]

# RUN npm run build
# CMD ["npm", "run", "preview"]
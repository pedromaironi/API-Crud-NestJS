# Dockerfile

FROM mongo:latest
ENV MONGO_INITDB_ROOT_USERNAME pedromaironi
ENV MONGO_INITDB_ROOT_PASSWORD 2171983
COPY init-mongo.js /docker-entrypoint-initdb.d/

FROM node:latest

WORKDIR /pedromaironi/src/app

COPY package.json .

RUN npm install

COPY . .

COPY .env ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

WORKDIR /pedromaironi/src/bff

COPY package.json .

RUN npm install

COPY . .

# COPY .env ./

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]
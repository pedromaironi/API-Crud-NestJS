FROM node:latest

WORKDIR /pedromaironi/src/app

COPY package.json .

RUN npm install

COPY . .

COPY .env ./

RUN npm run build
RUN npm install class-validator class-transformer

EXPOSE 4000

CMD ["npm", "start"]

LABEL name="nestjs-bff"

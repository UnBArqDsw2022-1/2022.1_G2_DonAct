FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn add nodemon
RUN npm install --save sequelize
RUN npm install --save mysql2
RUN npm i dotenv

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
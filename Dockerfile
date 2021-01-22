FROM node:13.7

WORKDIR /api-fastify-graphQL

COPY package*.json /api-fastify-graphQL/

RUN npm install

COPY . .

CMD ["npm", "start"]
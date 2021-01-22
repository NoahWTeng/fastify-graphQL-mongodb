const path = require('path');
const logPath = path.join(__dirname, '../logs/development.log');
const artifactDetails = require('../artifactDetails.json');

require('dotenv').config();

module.exports = {
  web: {
    artifact: artifactDetails,
    name: artifactDetails.name,
    version: artifactDetails.version,
    port: process.env.SERVER_PORT || 4000,
  },
  database: {
    url: process.env.DB_URL || 'mongodb://127.0.0.1/fastify-graphql',
  },
  logger: {
    // file: logPath,
    prettyPrint: {
      levelFirst: true,
      colorize: false,
      ignore: 'hostname',
      translateTime: 'yyyy-mm-dd HH:MM:ss',
    },
  },
  version: 'v1',
  swagger: {
    routePrefix: '/docs',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'Fastify API',
        description: 'Building a minimalist fast API with Node.js, GraphQL, Fastify',
        version: '1.0.0',
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'Login', description: 'Login related end-points' },
        { name: 'Users', description: 'Users related end-points' },
      ],
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    sign: {
      expiresIn: '10h',
    },
  },
};

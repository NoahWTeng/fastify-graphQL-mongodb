require('colors');
const fastify = require('fastify');
const mercurius = require('mercurius');

const plugins = require('../contents/plugins');
const { schema } = require('../graphql');

class Server {
  constructor({ config, router, mongodb, container }) {
    this.config = config;
    this.mongodb = mongodb;
    this.fastify = fastify({
      logger: config.logger,
    });

    this.fastify
      .register(require('fastify-cors'), {
        origin: '*',
        allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization'],
        methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
      })
      .register(require('fastify-helmet'))
      .register(require('fastify-jwt'), config.jwt)
      .register(require('fastify-swagger'), config.swagger)
      .register(router);

    this.fastify.register(mercurius, {
      schema,
      context: (request, reply) => ({ request, reply, container }),
    });

    //Register plugins
    Object.values(plugins).forEach((plugin) => this.fastify.register(plugin));
  }

  async start() {
    this.fastify.ready((err) => {
      if (err) throw err;
    });

    this.fastify.listen(this.config.web.port, '0.0.0.0', (err) => {
      if (err) {
        console.log('Error starting server:'.red, err);
        process.exit(1);
      }
      console.log(
        `Server start on: ${this.fastify.server.address().address}:${this.config.web.port}`.green
      );
    });
    await this.mongodb.start();
  }
}

function createServer(container) {
  return function create({ config, router, mongodb }) {
    return new Server({ config, router, mongodb, container });
  };
}

module.exports = createServer;

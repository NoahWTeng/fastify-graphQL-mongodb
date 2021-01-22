const { createContainer, asClass, asFunction, asValue } = require('awilix');
const { pipe, toPairs, map, fromPairs } = require('ramda');
const { camelCase } = require('change-case');

const config = require('../config');
const { mongodb, createServer, router } = require('./contents');
const { app, controllers, routes, models, services } = require('./app');

const container = createContainer();

// DB
container.register({
  mongodb: asFunction(mongodb).singleton(),
});

// Services
container.register(
  pipe(
    toPairs,
    map(([key, value]) => [camelCase(key), asClass(value).scoped()]),
    fromPairs
  )(services)
);

// Routes
container.register(
  pipe(
    toPairs,
    map(([key, value]) => [camelCase(key), asFunction(value).scoped()]),
    fromPairs
  )(routes)
);

// Controllers
container.register(
  pipe(
    toPairs,
    map(([key, value]) => [camelCase(key), asFunction(value).scoped()]),
    fromPairs
  )(controllers)
);

// Models
container.register(
  pipe(
    toPairs,
    map(([key, value]) => [key, asValue(value)]),
    fromPairs
  )(models)
);

// System
container.register({
  app: asClass(app).singleton(),
  server: asClass(createServer(container)).singleton(),
  config: asValue(config),
});

container.register({
  router: asFunction(router).singleton(),
});

module.exports = container;

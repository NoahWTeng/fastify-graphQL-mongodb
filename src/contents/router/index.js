module.exports = ({ config, filmsRouter, vehiclesRouter, planetsRouter, peopleRouter }) =>
  async function (fastify, _, next) {
    fastify
      .register(filmsRouter, {
        prefix: `/api/${config.version}/films`,
      })
      .register(vehiclesRouter, {
        prefix: `/api/${config.version}/vehicles`,
      })
      .register(planetsRouter, {
        prefix: `/api/${config.version}/planets`,
      })
      .register(peopleRouter, {
        prefix: `/api/${config.version}/people`,
      });

    next();
  };

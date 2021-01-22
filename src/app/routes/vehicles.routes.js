module.exports = function VehiclesRoutes({ vehiclesControllers }) {
  function ctrl(method) {
    return function (req, res) {
      return vehiclesControllers[method](req, res);
    };
  }

  return async function (fastify) {
    fastify.get('/', ctrl('search'));
  };
};

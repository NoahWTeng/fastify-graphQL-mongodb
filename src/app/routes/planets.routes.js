module.exports = function PlanetsRoutes({ planetsControllers }) {
  function ctrl(method) {
    return function (req, res) {
      return planetsControllers[method](req, res);
    };
  }

  return async function (fastify) {
    fastify.get('/', ctrl('search'));
  };
};

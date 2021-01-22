module.exports = function FilmsRouter({ filmsControllers }) {
  function ctrl(method) {
    return function (req, res) {
      return filmsControllers[method](req, res);
    };
  }

  return async function (fastify) {
    fastify.get('/', ctrl('search'));
  };
};

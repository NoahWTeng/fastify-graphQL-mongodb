module.exports = function PeopleRoutes({ peopleControllers }) {
  function ctrl(method) {
    return function (req, res) {
      return peopleControllers[method](req, res);
    };
  }

  return async function (fastify) {
    fastify.get('/', ctrl('search'));
  };
};

module.exports = function PlanetsControllers({ planetsServices }) {
  return {
    search: async (req, reply) => {
      const resp = await planetsServices.search();

      return resp;
    },
    getOne: async (id) => {
      const resp = await planetsServices.get(id);
      return resp;
    },
  };
};

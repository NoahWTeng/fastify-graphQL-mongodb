module.exports = function FilmsControllers({ filmsServices }) {
  return {
    search: async (req, reply) => {
      const resp = await filmsServices.search();

      return resp;
    },
    getOne: async (ids) => {
      const resp = await filmsServices.get(ids);

      return resp;
    },
  };
};

module.exports = function FilmsControllers({ filmsServices }) {
  return {
    search: async (req, reply) => {
      const resp = await filmsServices.search();

      return resp;
    },
    getOne: async (id) => {
      const resp = await filmsServices.get(id);

      return resp;
    },
    getByIds: async (ids) => {
      const resp = await filmsServices.getByIds(ids);
      return resp;
    },
    addOne: async (body) => {
      const resp = await filmsServices.create(body);

      return resp;
    },
    editOne: async (body) => {
      const resp = await filmsServices.update(body);

      return resp;
    },
    deleteOne: async (id) => {
      const resp = await filmsServices.delete(id);

      return resp;
    },
  };
};

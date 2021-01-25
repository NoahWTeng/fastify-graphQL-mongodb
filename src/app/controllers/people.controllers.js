module.exports = function PeopleControllers({ peopleServices }) {
  return {
    search: async (req, reply) => {
      const resp = await peopleServices.search();

      return resp;
    },
    getOne: async (ids) => {
      const resp = await peopleServices.get(ids);

      return resp;
    },
  };
};

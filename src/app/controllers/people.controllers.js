module.exports = function PeopleControllers({ peopleServices }) {
  return {
    search: async (req, reply) => {
      const resp = await peopleServices.search();

      return resp;
    },
  };
};

module.exports = function VehiclesControllers({ vehiclesServices }) {
  return {
    search: async (req, reply) => {
      const resp = await vehiclesServices.search();
      return resp;
    },
    getOne: async (ids) => {
      const resp = await vehiclesServices.get(ids);

      return resp;
    },
  };
};

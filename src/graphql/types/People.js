const { GraphQLID, GraphQLString, GraphQLObjectType, GraphQLList } = require('graphql');
const PlanetsTypes = require('./Planets');
const FilmsTypes = require('./Films');
const VehiclesTypes = require('./Vehicles');

module.exports = new GraphQLObjectType({
  name: 'People',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    height: { type: GraphQLString },
    mass: { type: GraphQLString },
    hair_color: { type: GraphQLString },
    skin_color: { type: GraphQLString },
    eye_color: { type: GraphQLString },
    birth_year: { type: GraphQLString },
    gender: { type: GraphQLString },
    planet_id: {
      type: PlanetsTypes,
      async resolve(parent, _, { container }) {
        const planetsControllers = container.resolve('planetsControllers');
        return await planetsControllers['getOne'](parent.planet_id);
      },
    },
    films: {
      type: GraphQLList(FilmsTypes),
      async resolve(parent, _, { container }) {
        const filmsControllers = container.resolve('filmsControllers');

        return await filmsControllers['getByIds'](parent.films);
      },
    },
    vehicles: {
      type: GraphQLList(VehiclesTypes),
      async resolve(parent, _, { container }) {
        const vehiclesControllers = container.resolve('vehiclesControllers');

        return await vehiclesControllers['getOne'](parent.vehicles);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

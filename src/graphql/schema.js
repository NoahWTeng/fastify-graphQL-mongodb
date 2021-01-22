const { GraphQLObjectType, GraphQLList, GraphQLSchema } = require('graphql');
const { FilmsTypes, PeopleTypes, PlanetsTypes, VehiclesTypes } = require('./types');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    films: {
      type: new GraphQLList(FilmsTypes),
      async resolve(parent, args, { container }) {
        const filmsControllers = container.resolve('filmsControllers');
        return await filmsControllers['search']();
      },
    },
    people: {
      type: new GraphQLList(PeopleTypes),
      async resolve(parent, args, { container }) {
        const peopleControllers = container.resolve('peopleControllers');
        return await peopleControllers['search']();
      },
    },
    planets: {
      type: new GraphQLList(PlanetsTypes),
      async resolve(parent, args, { container }) {
        const planetsControllers = container.resolve('planetsControllers');
        return await planetsControllers['search']();
      },
    },
    vehicles: {
      type: new GraphQLList(VehiclesTypes),
      async resolve(parent, args, { container }) {
        const vehiclesControllers = container.resolve('vehiclesControllers');
        return await vehiclesControllers['search']();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

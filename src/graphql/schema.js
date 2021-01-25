const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const { FilmsTypes, PeopleTypes, PlanetsTypes, VehiclesTypes } = require('./types');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    film: {
      type: FilmsTypes,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args, { container }) {
        const filmsControllers = container.resolve('filmsControllers');
        return await filmsControllers['getOne'](args.id);
      },
    },
    films: {
      type: new GraphQLList(FilmsTypes),
      async resolve(parent, args, { container }) {
        const filmsControllers = container.resolve('filmsControllers');
        return await filmsControllers['search']();
      },
    },
    person: {
      type: PeopleTypes,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args, { container }) {
        const peopleControllers = container.resolve('peopleControllers');

        return await peopleControllers['getOne'](args.id);
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

const RootMutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addFilm: {
      type: FilmsTypes,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        episode_id: { type: new GraphQLNonNull(GraphQLInt) },
        opening_crawl: { type: new GraphQLNonNull(GraphQLString) },
        director: { type: new GraphQLNonNull(GraphQLString) },
        producer: { type: new GraphQLNonNull(GraphQLString) },
        release_date: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args, { container }) {
        const filmsControllers = container.resolve('filmsControllers');
        return await filmsControllers['addOne'](args);
      },
    },
    editFilm: {
      type: FilmsTypes,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        episode_id: { type: GraphQLInt },
        opening_crawl: { type: GraphQLString },
        director: { type: GraphQLString },
        producer: { type: GraphQLString },
        release_date: { type: GraphQLString },
      },
      async resolve(parent, args, { container }) {
        const filmsControllers = container.resolve('filmsControllers');

        return await filmsControllers['editOne'](args);
      },
    },
    deleteFilm: {
      type: FilmsTypes,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args, { container }) {
        const filmsControllers = container.resolve('filmsControllers');

        return await filmsControllers['deleteOne'](args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

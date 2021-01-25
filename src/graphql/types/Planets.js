const { GraphQLID, GraphQLString, GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Planets',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    rotation_period: { type: GraphQLString },
    orbital_period: { type: GraphQLString },
    diameter: { type: GraphQLString },
    climate: { type: GraphQLString },
    gravity: { type: GraphQLString },
    terrain: { type: GraphQLString },
    surface_water: { type: GraphQLString },
    population: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

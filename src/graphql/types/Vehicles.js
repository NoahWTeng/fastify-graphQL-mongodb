const { GraphQLID, GraphQLString, GraphQLInt, GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Vehicles',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    model: { type: GraphQLString },
    manufacturer: { type: GraphQLString },
    cost_in_credits: { type: GraphQLString },
    length: { type: GraphQLString },
    max_atmosphering_speed: { type: GraphQLString },
    crew: { type: GraphQLString },
    passengers: { type: GraphQLString },
    cargo_capacity: { type: GraphQLString },
    consumables: { type: GraphQLString },
    vehicle_class: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

const { GraphQLID, GraphQLString, GraphQLInt, GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Films',
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    episode_id: { type: GraphQLInt },
    opening_crawl: { type: GraphQLString },
    director: { type: GraphQLString },
    producer: { type: GraphQLString },
    release_date: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const articleUpdateInput = new GraphQLInputObjectType({
  name: 'ArticleUpdateInput',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

export default articleUpdateInput;

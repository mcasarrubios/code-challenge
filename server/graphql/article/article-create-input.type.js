import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

const articleCreateInput = new GraphQLInputObjectType({
  name: 'ArticleCreateInput',
  fields: () => ({
    author: {
      type: new GraphQLNonNull(GraphQLString),
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
    excerpt: {
      type: new GraphQLNonNull(GraphQLString),
    },
    published: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

export default articleCreateInput;

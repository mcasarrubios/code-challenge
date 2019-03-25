import { GraphQLSchema } from 'graphql';
import Query from './article/article.query';
import Mutation from './article/article.mutation';

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;

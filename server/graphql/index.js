import { GraphQLSchema } from 'graphql';
import Query from './article/article.query';

const Schema = new GraphQLSchema({
  query: Query,
});

export default Schema;

import GraphHTTP from 'express-graphql';
import Schema from '../graphql/index';

const AppController = GraphHTTP({
  schema: Schema,
  graphiql: true,
  pretty: true,
});

export default AppController;

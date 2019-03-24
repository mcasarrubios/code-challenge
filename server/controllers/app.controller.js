import GraphHTTP from 'express-graphql';
import Schema from '../graphql/index';

class AppController {

  constructor(app) {

    this.register(app);

  }

  register(app) {
    app.use('/graphql', GraphHTTP({
      schema: Schema,
      graphiql: true,
      pretty: true,
    }));
  }

}

export default AppController;

import bodyParser from 'body-parser';
import AppController from './controllers/app.controller';
import config from './config/env/all';
import Mongoose from './mongoose';

class ServerApp {

  constructor(expressApp) {
    this.app = expressApp;
  }

  async start(debug) {
    
    Mongoose.connect(debug);
    await Mongoose.feedDB();

    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      if (req.method === 'OPTIONS') {
        res.end();
      }
      next();
    });

    new AppController(this.app);

    const listen = async () => {
      return new Promise(resolve => {
        this.server = this.app.listen(config.port, () => {
          console.log(`App listening on port ${config.port}`); // eslint-disable-line no-console
          resolve();
        });
      });
    }
    
    await listen(); 
  }

  async stop() {
    await this.server.close();
  }

  getExpressApp() {
    return this.app;
  }

}

export default ServerApp;
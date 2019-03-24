import Express from 'express';
import bodyParser from 'body-parser';
import AppController from './controllers/app.controller';
import config from './config/env/all';

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.end();
  }
  next();
});

new AppController(app);

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`); // eslint-disable-line no-console
});

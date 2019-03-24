import configDevelopment from './development';
import configStaging from './staging';
import configProduction from './production';

// common config
const configAll = {

};

const env = process.env.NODE_ENV;
let configuration;

switch (env) {
  case 'production':
    configuration = configProduction;
    break;
  case 'staging':
    configuration = configStaging;
    break;
  case 'test':
    configuration = configDevelopment;
    break;
  default:
    configuration = configDevelopment;
}

const config = Object.assign({}, configAll, configuration);

export default config;

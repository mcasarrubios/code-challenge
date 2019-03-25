const config = {
  port: process.env.APP_PORT || 4000,
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost/billin',
    options: {

    }
  }
};

export default config;

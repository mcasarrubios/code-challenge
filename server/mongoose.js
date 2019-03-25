import _ from 'lodash';
import Faker from 'faker';
import mongoose from 'mongoose';
import config from './config/env/all';
import db from './entities/db';

class Mongoose {

  static connect(debug) {
    mongoose.connect(config.mongo.uri);
    mongoose.set('debug', debug);
  }

  static async feedDB() {
    await db.Article.remove({});
    await _.times(10, async () => {
      const content = `
    ${Faker.lorem.paragraphs()}
    ${Faker.lorem.paragraphs()}
    ${Faker.lorem.paragraphs()}
    ${Faker.lorem.paragraphs()}
    ${Faker.lorem.paragraphs()}
    `;
      return await db.Article.create({
        author: Faker.name.findName(),
        content,
        excerpt: content.slice(0, 350),
        published: Faker.random.boolean(),
        tags: [Faker.random.words(), Faker.random.words()],
        title: Faker.name.title(),
      });
    });

  }

}

export default Mongoose;

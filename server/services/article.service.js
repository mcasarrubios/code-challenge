import db from '../entities/db';

class ArticleService {

  async findMany({conditions, projection, options} = {}) {
    conditions = conditions || {};
    projection = projection || '';
    options = options || {};
    const articles = await db.Article.find(conditions, projection, options).exec();
    return articles;
  }

  async findById(id, projection) {
    projection = projection || '';
    return db.Article.findById(id, projection).exec();
  }

  async create(data) {
    return db.Article.create(data);
  }

  async update(id, data) {
    return db.Article.findByIdAndUpdate(id,data, {new: true}).exec();
  }

  async deleteById(id) {
    return db.Article.findByIdAndRemove(id).exec();
  }
}

export default ArticleService;

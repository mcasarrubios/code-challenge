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
}

export default ArticleService;

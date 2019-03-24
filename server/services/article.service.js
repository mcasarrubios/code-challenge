import db from '../entities/db';

class ArticleService {

  async findMany({conditions, select, options} = {}) {
    conditions = conditions || {};
    select = select || '';
    options = options || {};
    const articles = await db.Article.find(conditions, select, options);
    return articles;
  }

  async findById(id) {
    return db.Article.findById(id);
  }
}

export default ArticleService;

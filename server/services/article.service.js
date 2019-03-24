import db from '../entities/db';

class ArticleService {

  async findMany({conditions, projections, options} = {}) {
    conditions = conditions || {};
    projections = projections || '';
    options = options || {};
    const articles = await db.Article.find(conditions, projections, options);
    return articles;
  }

  async findById(id, projections) {
    projections = projections || '';
    return db.Article.findById(id, projections);
  }
}

export default ArticleService;

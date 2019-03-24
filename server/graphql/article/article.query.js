import {
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';
import articleType from './article.type';
import ArticleService from '../../services/article.service';

const articleService = new ArticleService();

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      async resolve() {
        return articleService.findMany();
      },
    },
  }),
});

export default Query;

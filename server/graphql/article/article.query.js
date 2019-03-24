import {
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';
import articleType from './article.type';
import ArticleService from '../../services/article.service';
import { getProjection } from '../helpers';

const articleService = new ArticleService();

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve: async (source, args, context, info)=> {
        const projections = getProjection(info);
        const articles = await articleService.findMany({projections: projections});
        return articles;
      },
    },
    articleById: {
      type: new GraphQLObjectType(articleType),
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (source, args, context, info)=> {
        const projections = getProjection(info);
        const articles = await articleService.findById(args.id, projections);
        return articles;
      },
    },
  }),
});

export default Query;


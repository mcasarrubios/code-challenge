import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
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
        const projection = getProjection(info);
        return await articleService.findMany({projection: projection});
      },
    },
    articleById: {
      type: articleType,
      args: {
        id: {
          name: 'id',
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (source, args, context, info)=> {
        const projection = getProjection(info);
        return await articleService.findById(args.id, projection);
      },
    },
  }),
});

export default Query;


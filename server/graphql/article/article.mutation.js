import {
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql';
import articleType from './article.type';
import articleCreateInputType from './article-create-input.type';
import ArticleService from '../../services/article.service';

const articleService = new ArticleService();

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'This is a root mutation',
  fields: () => ({
    articleCreate: {
      type: articleType,
      args: {
        article: {
          name: 'article',
          type: new GraphQLNonNull(articleCreateInputType)
        },
      },
      resolve: async (source, args, context, info) => {
        return articleService.create({...args.article});
      },
    },
  }),
});

export default Mutation;


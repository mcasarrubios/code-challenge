import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import articleType from './article.type';
import articleCreateInputType from './article-create-input.type';
import articleUpdateInputType from './article-update-input.type';
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
    articleUpdate: {
      type: articleType,
      args: {
        id: {
          name: 'id',
          type: new GraphQLNonNull(GraphQLString),
        },
        article: {
          name: 'article',
          type: new GraphQLNonNull(articleUpdateInputType)
        },
      },
      resolve: async (source, args, context, info) => {
        return articleService.update(args.id, {...args.article});
      },
    },
    articleDelete: {
      type: articleType,
      args: {
        id: {
          name: 'id',
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (source, args, context, info)=> {
        return articleService.deleteById(args.id);
      },
    },
  }),
});

export default Mutation;


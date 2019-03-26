import { articleReducer } from './reducers/article.reducer';

export const reducer = ({ article }, action) => ({
  article: articleReducer(article, action)
});

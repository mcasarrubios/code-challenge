import { articleReducer } from './reducers/article.reducer';

export const reducer = ({ articleState }, action) => ({
  articleState: articleReducer(articleState, action)
});

import React, { useEffect } from 'react';
import { ARTICLES_QUERY } from '../../queries';
import ArticleList from '../articles/articles-list/article-list.component';
import WithLoading from '../core/loading/with-loading.component';
import { useStateValue } from '../../state/provider';
import { requestingArticles, setArticles } from '../../state/actions/article.action';

const Home = ({ requestProvider }) => {
  const [{ articleState }, dispatch] = useStateValue();

  async function requestArticles() {
    dispatch(requestingArticles());
    const response = await requestProvider(ARTICLES_QUERY);
    dispatch(setArticles({ articles: response.data.articles }));
  }

  async function getArticles() {
    return articleState.listItems.length === 0 ?
      requestArticles() :
      dispatch(setArticles({ articles: articleState.listItems }));
  }

  useEffect(() => {
    getArticles()
  },[]);

  return (
    <div>
      {WithLoading(ArticleList)({articles: articleState.listItems,  isLoading: articleState.isRequestingItems})}
    </div>
  );
};

export default Home;

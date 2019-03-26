import React, { useEffect } from 'react';
import { ARTICLES_QUERY } from '../../queries';
import ArticleList from '../articles/articles-list/article-list.component';
import WithLoading from '../core/loading/with-loading.component';
import { useStateValue } from '../../state/provider';

const Home = ({ requestProvider }) => {
  const [{ article }, dispatch] = useStateValue();

  async function requestArticles() {
    dispatch({
      type: '[articleList] requestItems'
    });

    const response = await requestProvider(ARTICLES_QUERY);
    dispatch({
      type: '[articleList] itemsRequested',
      payload: { items: response.data.articles }
    });

  }

  async function getArticles() {
    return article.listItems.length === 0 ? 
      requestArticles() : 
      dispatch({
        type: '[articleList] itemsRequested',
        payload: { items: article.listItems }
      });
  }

  useEffect(() => {
    getArticles()
  },[]);

  return (
    <div>
      {WithLoading(ArticleList)({articles: article.listItems,  isLoading: article.isRequestingItems})}
    </div>
  );
};

export default Home;

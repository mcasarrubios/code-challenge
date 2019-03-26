import React, { useEffect } from 'react';
import { ARTICLES_QUERY } from '../../queries';
import ArticleList from '../articles/articles-list/article-list.component';
import WithLoading from '../core/loading/with-loading.component';
import { useStateValue } from '../../state/provider';
import { requestingArticles, setArticles } from '../../state/actions/article.action';

const Home = ({ requestProvider }) => {
  const [{ article }, dispatch] = useStateValue();

  async function requestArticles() {
    dispatch(requestingArticles());
    const response = await requestProvider(ARTICLES_QUERY);
    dispatch(setArticles({ items: response.data.articles }));
  }

  async function getArticles() {
    return article.listItems.length === 0 ?
      requestArticles() :
      dispatch(setArticles({ items: article.listItems }));
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

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    return articleState.itemList.length === 0 ?
      requestArticles() :
      dispatch(setArticles({ articles: articleState.itemList }));
  }

  useEffect(() => {
    getArticles()
  },[]);

  return (
    <div>

        <Link to={'/new'} className="btn overlay-btn btn-secondary">
          +
        </Link>
      {WithLoading(ArticleList)({articles: articleState.itemList,  isLoading: articleState.isRequestingItems})}
    </div>
  );
};

export default Home;

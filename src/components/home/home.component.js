import React, { useEffect } from 'react';
import { ARTICLES_QUERY } from '../../queries';
import ArticleList from '../articles/articles-list/article-list.component';
import Loading from '../core/loading/loading.component';
import { useStateValue } from '../../state/provider';

const Home = ({ requestProvider }) => {
  const [{ article }, dispatch] = useStateValue();

  useEffect(() => {

    dispatch({
      type: '[articleList] requestItems'
    });

    requestProvider(ARTICLES_QUERY).then(response => {
      dispatch({
        type: '[articleList] itemsRequested',
        payload: { items: response.data.articles }
      });
    });

  }, []);

  return (
    <div>
      {article.isRequestingItems ?
        <Loading /> :
        <ArticleList articles={article.listItems}/>
      }
    </div>
  );
};

export default Home;

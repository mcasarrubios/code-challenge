import React, { useEffect, useState } from 'react';
import { ARTICLES_QUERY } from '../../queries';
import ArticleList from '../articles/articles-list/article-list.component';

const Home = ({requestProvider}) => {
  const [state, setState] = useState({ articles: [] });

  useEffect(() => {
    requestProvider(ARTICLES_QUERY).then(response => {
      setState({ articles: response.data.articles });
    });
  }, []);

  return <ArticleList {...state}></ArticleList>

};

export default Home;

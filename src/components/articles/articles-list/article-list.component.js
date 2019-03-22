import React from 'react';
import ArticleListItem from '../article-list-item/article-list-item.component';
import './article-list.component.css';

const ArticleList = ({articles}) => (
  <div className="article-list">{articles.map(article => {
    return <ArticleListItem key={article.id} article={article}> </ArticleListItem>
  })}
  </div>
);

export default ArticleList;

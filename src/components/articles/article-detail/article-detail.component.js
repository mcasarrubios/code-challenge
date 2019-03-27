import React from 'react';

const ArticleDetail = ({ article }) => (
  <div className="article-detail">
    <h1 className="article-title">{article.title}</h1>
    <h2 className="article-author">{article.author}</h2>
    <div className="article-tags"> {article.tags && article.tags.map(tag =>
      <span className="article-tag" key={tag}> {tag} </span>
    )}
    </div>
    <input type="checkbox" checked={article.published} readOnly className="article-published"></input>
    <p className="article-content">
      {article.content}
    </p>
  </div>
);

export default ArticleDetail;

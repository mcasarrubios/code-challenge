import React from 'react';

const ArticleDetail = ({ articleShowed }) => (
  <div className="article-detail">
    <h1 className="article-title">{articleShowed.title}</h1>
    <h2 className="article-author">{articleShowed.author}</h2>
    <div className="article-tags"> {articleShowed.tags && articleShowed.tags.map(tag =>
      <span className="article-tag" key={tag}> {tag} </span>
    )}
    </div>
    <input type="checkbox" checked={articleShowed.published} readOnly className="article-published"></input>
    <p className="article-content">
      {articleShowed.content}
    </p>
  </div>
);

export default ArticleDetail;

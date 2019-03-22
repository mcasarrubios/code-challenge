import React from 'react';

const ArticleListItem = ({article}) => (
  <div className="card">
    <div className="card-header">
      <h4>{article.author}</h4>
    </div>
    <div className="card-body">
      <p>
        {article.excerpt}
      </p>
    </div>
    <div className="card-footer">

    </div>
  </div>
);

export default ArticleListItem;

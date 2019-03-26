import React from 'react';
import { Link } from 'react-router-dom';
import './article-list-item.component.css';

const ArticleListItem = ({article}) => (
  <div className="card">
    <Link to={'/' + article.id}>
      <div className="card-header">
        <h4>
          {article.title}
          <div className="card-header-subtitle">{article.author}</div>
        </h4>
      </div>
      <div className="card-body">
        <p>
          {article.excerpt}
        </p>
      </div>
    </Link>
    <div className="card-footer">

    </div>
  </div>
);

export default ArticleListItem;

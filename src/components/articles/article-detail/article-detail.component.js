import React, { useEffect } from 'react';
import { ARTICLE_BY_ID_QUERY } from '../../../queries';
import WithLoading from '../../core/loading/with-loading.component';
import { useStateValue } from '../../../state/provider';

const ArticleDetail = ({requestProvider, match}) => {
  const [{ article }, dispatch] = useStateValue();
  const articleId = match.params.id;
  const articleShowed = article.itemsShowed.find(item => item.id === articleId) || {};

  async function requestArticle() {
    dispatch({
      type: '[showedArticles] requestItem'
    });
    const response = await requestProvider(ARTICLE_BY_ID_QUERY(articleId));
    dispatch({
      type: '[showedArticles] itemRequested',
      payload: { item: response.data.articleById }
    });
  }

  async function getArticle() {
    return articleShowed.id === undefined ? 
      requestArticle() : 
      dispatch({
        type: '[showedArticles] itemRequested',
        payload: { item: articleShowed }
      });
  }

  useEffect(() => {
    getArticle()
  }, []);

  const articleDetail = ({articleShowed}) => (
    <div className="article-detail">
      <h1 className="article-title">{articleShowed.title}</h1>
      <h2 className="article-author">{articleShowed.author}</h2>
      <div className="article-tags"> {articleShowed.tags && articleShowed.tags.map(tag => 
        <span className="article-tag" key={tag}> {tag} </span>
      )}
      </div>
      <input type="checkbox" checked={articleShowed.published} readOnly className="article-published"></input>
      <p>
        { articleShowed.content }
      </p>
    </div>
  );

  return (
    <div>
      { WithLoading (articleDetail)({articleShowed: articleShowed,  isLoading: article.isRequestingItem})}
    </div>
  );
}

export default ArticleDetail;

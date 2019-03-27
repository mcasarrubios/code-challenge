import React, { useEffect } from 'react';
import apiService from '../../../services/api.service';
import { ARTICLE_BY_ID_QUERY } from '../../../queries';
import WithLoading from '../../core/loading/with-loading.component';
import ArticleDetail from '../article-detail/article-detail.component';
import ArticleDetailEdit from '../article-detail-edit/article-detail-edit.component';
import ArticleBtnActions from '../article-btn-actions/article-btn-actions.component'
import { useStateValue } from '../../../state/provider';
import { requestingArticle, setArticle, editingArticle } from '../../../state/actions/article.action';

const ArticleDetailPage = ({requestProvider, match, history}) => {
  const [{ articleState }, dispatch] = useStateValue();
  const articleId = match.params.id;
  const article = articleState.itemsShowed.find(item => item.id === articleId) || {};

  console.log('.....', articleId, article);

  async function requestArticle() {
    dispatch(requestingArticle());
    const response = await requestProvider(ARTICLE_BY_ID_QUERY, {id: articleId});
    dispatch(setArticle({ article: response.data.articleById }));
  }

  async function getArticle() {
    article.id === undefined ?
      requestArticle() :
      dispatch(setArticle({ article: article }));
  }

  useEffect(() => {
    articleId === 'new' ?
      dispatch(editingArticle({isEditing: true, article: {} })) :
      getArticle();
  }, []);

  const onDelete = () => history.goBack();

  const ArticleReadOnly = () => (
    <div>
      <div className="action-btn pull-right">
        <ArticleBtnActions article={article} requestProvider={requestProvider} onDelete={onDelete}></ArticleBtnActions>
      </div>
      {WithLoading (ArticleDetail)({article: article,  isLoading: articleState.isRequestingItem})}
    </div>
  );

  return (
    <div className="article-detail-page">
      { articleState.isEditing ?
        <ArticleDetailEdit article={article} requestProvider={apiService} /> :
        <ArticleReadOnly />
      }
    </div>
  );
}

export default ArticleDetailPage;

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
  let article = articleState.itemsShowed.find(item => item.id === articleId) || {};

  async function requestArticle() {
    dispatch(requestingArticle());
    const response = await requestProvider(ARTICLE_BY_ID_QUERY, {id: articleId});
    article = response.data.articleById;
    dispatch(setArticle({ article: article }));
  }

  async function getArticle() {
    article.id === undefined ?
      requestArticle() :
      dispatch(setArticle({ article: article }));
  }

  useEffect(() => {
    getArticle();
  }, []);

  const onModified = () => history.goBack();
  const setReadonly = () => dispatch(editingArticle({isEditing: false, article: article }));

  const ArticleReadOnly = () => (
    <div>
      <div className="action-btn pull-right">
        <ArticleBtnActions article={articleState.itemSelected} requestProvider={requestProvider} onDelete={onModified}></ArticleBtnActions>
      </div>
      {WithLoading (ArticleDetail)({article: articleState.itemSelected,  isLoading: articleState.isRequestingItem})}
    </div>
  );

  const ArticleEdit = () => (
    <div>
      <div className="action-btn pull-right">
        <button onClick={setReadonly} className="btn btn-secondary"> Readonly </button>
      </div>
      <ArticleDetailEdit article={articleState.itemSelected} requestProvider={apiService} onSave={onModified}/>
    </div>
  );

  return (
    <div className="article-detail-page">
      { articleState.isEditing ?
        <ArticleEdit /> :
        <ArticleReadOnly />
      }
    </div>
  );
}

export default ArticleDetailPage;

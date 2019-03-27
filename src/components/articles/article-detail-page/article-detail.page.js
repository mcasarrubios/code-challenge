import React, { useEffect } from 'react';
import apiService from '../../../services/api.service';
import { ARTICLE_BY_ID_QUERY } from '../../../queries';
import WithLoading from '../../core/loading/with-loading.component';
import ArticleDetail from '../article-detail/article-detail.component';
import ArticleDetailEdit from '../article-detail-edit/article-detail-edit.component';
import ArticleBtnActions from '../article-btn-actions/article-btn-actions.component'
import { useStateValue } from '../../../state/provider';
import { requestingArticle, setArticle, editingArticle } from '../../../state/actions/article.action';

const ArticleDetailPage = ({requestProvider, match}) => {
  const [{ articleState }, dispatch] = useStateValue();
  const articleId = match.params.id;
  const article = articleState.itemsShowed.find(item => item.id === articleId) || {};

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

  const ArticleReadOnly = () => (
    <div>
      <ArticleBtnActions article={article}></ArticleBtnActions>
      {WithLoading (ArticleDetail)({article: article,  isLoading: articleState.isRequestingItem})}
    </div>
  );

  return (
    <div>
      { articleState.isEditing ?
        <ArticleDetailEdit article={article} requestProvider={apiService} /> :
        <ArticleReadOnly />
      }
    </div>
  );
}

export default ArticleDetailPage;

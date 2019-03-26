import React, { useEffect } from 'react';
import { ARTICLE_BY_ID_QUERY } from '../../../queries';
import WithLoading from '../../core/loading/with-loading.component';
import ArticleDetail from '../article-detail/article-detail.component';
import { useStateValue } from '../../../state/provider';
import { requestingArticle, setArticle } from '../../../state/actions/article.action';


const ArticleDetailPage = ({requestProvider, match}) => {
  const [{ article }, dispatch] = useStateValue();
  const articleId = match.params.id;
  const articleShowed = article.itemsShowed.find(item => item.id === articleId) || {};

  async function requestArticle() {
    dispatch(requestingArticle());
    const response = await requestProvider(ARTICLE_BY_ID_QUERY(articleId));
    dispatch(setArticle({ item: response.data.articleById }));
  }

  async function getArticle() {
    return articleShowed.id === undefined ?
      requestArticle() :
      dispatch(setArticle({ item: articleShowed }));
  }

  useEffect(() => {
    getArticle()
  }, []);

  return (
    <div>
      { WithLoading (ArticleDetail)({articleShowed: articleShowed,  isLoading: article.isRequestingItem})}
    </div>
  );
}

export default ArticleDetailPage;

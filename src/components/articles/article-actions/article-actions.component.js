import React from 'react';
import { editingArticle, deletingArticle } from '../../../state/actions/article.action';
import { useStateValue } from '../../../state/provider';

const ArticleActions = ({article}) => {
  const dispatch = useStateValue().pop();

  const editArticle = () => dispatch(editingArticle({isEditing: true, article}));
  const createArticle = () => dispatch(editingArticle({isEditing: true, article: {} }));
  const deleteArticle = () => dispatch(deletingArticle({article}));

  // const saveArticle = () => {
  //   dispatch(savingArticle({article}));
  //   const response = await requestProvider(ARTICLES_UPDATE(article.id));
  //   dispatch(articleSaved({ article }));
  // };

  return (
    <div>
      <button onClick={editArticle}>
        Edit
      </button>
      <button onClick={deleteArticle}>
        Delete
      </button>
      <button onClick={createArticle}>
        New
      </button>
    </div>
  )
}

export default ArticleActions;

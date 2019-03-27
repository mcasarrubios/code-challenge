import React from 'react';
import { editingArticle, deletingArticle } from '../../../state/actions/article.action';
import { useStateValue } from '../../../state/provider';

const ArticleBtnActions = ({article}) => {
  const dispatch = useStateValue().pop();

  const editArticle = () => dispatch(editingArticle({isEditing: true, article}));
  const deleteArticle = () => dispatch(deletingArticle({article}));

  return (
    <div>
      <button onClick={editArticle}>
        Edit
      </button>
      <button onClick={deleteArticle}>
        Delete
      </button>
    </div>
  )
}

export default ArticleBtnActions;

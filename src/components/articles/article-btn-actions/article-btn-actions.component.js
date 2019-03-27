import React from 'react';
import {
  editingArticle,
  deletingArticle,
  askForDeletingArticle,
  articleDeleted,
  invalidateArticle
} from '../../../state/actions/article.action';
import { useStateValue } from '../../../state/provider';
import Modal from '../../core/modal/modal.component';
import { ARTICLES_DELETE } from '../../../mutations';


const ArticleBtnActions = ({ article, requestProvider, onDelete }) => {
  const [{articleState}, dispatch] = useStateValue();

  const editArticle = () => dispatch(editingArticle({ isEditing: true, article }));
  const deleteArticle = () => dispatch(askForDeletingArticle({ askDeleteItem: true }));

  const cancelHandler = () => dispatch(askForDeletingArticle({ askDeleteItem: false }));
  const deleteHandler = async () => {
    dispatch(deletingArticle({ isDeletingItem: true }));
    const response = await requestProvider(ARTICLES_DELETE, article);
    dispatch(articleDeleted({ id: response.data.articleDelete.id }));
    dispatch(invalidateArticle());
    onDelete();
  };

  const props = {
    header: 'Delete article',
    body: 'You are going to delete this article. Are you sure?',
    confirmText: 'Yes, delete it',
    cancelText: 'Don\'t delete',
    onCancel: cancelHandler,
    onConfirm: deleteHandler
  };

  return (
    <div>

      <button onClick={deleteArticle} className="btn btn-secondary">
        Delete
      </button>

      <button onClick={editArticle} className="btn btn-primary">
        Edit
      </button>

     { articleState.askDeleteItem ? <Modal {...props} /> : null }
    </div>
  )
}

export default ArticleBtnActions;

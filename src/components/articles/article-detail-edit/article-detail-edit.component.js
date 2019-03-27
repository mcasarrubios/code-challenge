import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './article-detail-edit.component.css';
import { ARTICLES_UPDATE, ARTICLES_CREATE } from '../../../mutations';
import { savingArticle, articleSaved, invalidateArticle, editingArticle } from '../../../state/actions/article.action';
import { useStateValue } from '../../../state/provider';

const ArticleDetailEdit = ({ article, requestProvider }) => {

  const [localState, setState] = useState(initialState(article));
  const [articleState, dispatch] = useStateValue();

  function initialState(article) {
    return {
      id: article.id || '',
      title: article.title || '',
      author: article.author || '',
      content: article.content || '',
      excerpt: article.excerpt || '',
      tags: article.tags || [],
      published: article.published || false,
    }
  }

  const handleInputChanges = (event) => {
    const target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === 'tags') {
      value = value.trim().split(' ').filter(tag => tag);
    }

    setState({
      ...localState,
      [name]: value
    });
  }

  const createArticle = async (article) => {
    const response = await requestProvider(ARTICLES_CREATE, article);
    return response.data.articleCreate;
  }

  const updateArticle = async (article) => {
    // const { id, ...article } = updateData;
    const response = await requestProvider(ARTICLES_UPDATE, article);
    return response.data.articleUpdate;
  }

  const saveArticle = async () => {

    dispatch(savingArticle({localState}));
    const data = await article.id ?
      updateArticle(localState) :
      createArticle(localState);
    dispatch(articleSaved({ article: data }));
    dispatch(invalidateArticle());
  };

  const cancel = () => dispatch(editingArticle({isEditing: false, article}));

  return (
    <div className="article-detail-edit">
      <div className="form-group">
        <label>Title</label>
        <input className="form-control" type="text" name="title" value={localState.title} onChange={handleInputChanges} />
      </div>

      <div className="form-group">
        <label>Author</label>
        <input className="form-control" type="text" name="author" value={localState.author} onChange={handleInputChanges} />
      </div>

      <div className="form-group">
        <label>Tags</label>
        <input className="form-control" type="text" name="tags" value={localState.tags && localState.tags.join(' ')} onChange={handleInputChanges} />
      </div>

      <div className="form-group published">
        <label>
          <input className="form-control" type="checkbox" name="published" checked={localState.published} onChange={handleInputChanges} />
          &nbsp;Published
        </label>
      </div>

      <div className="form-group col-span">
        <label>Excerpt</label>
        <textarea className="form-control" rows="5" type="text" name="excerpt" value={localState.excerpt} onChange={handleInputChanges} ></textarea>
      </div>

      <div className="form-group col-span">
        <label>Content</label>
        <textarea className="form-control" rows="30" type="text" name="content" value={localState.content} onChange={handleInputChanges} ></textarea>
      </div>

      <div className="col-span article-actions">
        <div className="action-btn pull-right">
          <Link to="/" className="btn btn-secondary" onClick={cancel}>
            Cancelar
          </Link>
          <button className="btn btn-primary" onClick={saveArticle}>
            { !articleState.isSavingItem ? 'Guardar    ' : 'Guardando...'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetailEdit;

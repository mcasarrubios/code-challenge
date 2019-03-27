import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './article-detail-edit.component.css';
import { ARTICLES_UPDATE, ARTICLES_CREATE } from '../../../mutations';
import { savingArticle, articleSaved, invalidateArticle } from '../../../state/actions/article.action';
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

  return (
    <div className="article-detail-edit">
      <div className="form-control">
        <label>Title</label>
        <input type="text" name="title" value={localState.title} onChange={handleInputChanges} />
      </div>

      <div className="form-control">
        <label>Author</label>
        <input type="text" name="author" value={localState.author} onChange={handleInputChanges} />
      </div>

      <div className="form-control">
        <label>Tags</label>
        <input type="text" name="tags" value={localState.tags && localState.tags.join(' ')} onChange={handleInputChanges} />
      </div>

      <div className="form-control published">
        <label>
          <input type="checkbox" name="published" checked={localState.published} onChange={handleInputChanges} />
          &nbsp;Published
        </label>
      </div>

      <div className="form-control content">
        <label>Excerpt</label>
        <textarea rows="5" type="text" name="excerpt" value={localState.excerpt} onChange={handleInputChanges} ></textarea>
      </div>

      <div className="form-control content">
        <label>Content</label>
        <textarea rows="30" type="text" name="content" value={localState.content} onChange={handleInputChanges} ></textarea>
      </div>

      <div className="article-actions">
        <Link to="/"> 
          Cancelar
        </Link>
        <button className="primary-button" onClick={saveArticle}> 
          { !articleState.isSavingItem ? 'Guardar    ' : 'Guardando...'}
        </button>
      </div>
    </div>    
  );
}

export default ArticleDetailEdit;

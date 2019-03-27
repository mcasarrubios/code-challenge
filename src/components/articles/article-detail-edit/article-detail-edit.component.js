import React, { useState } from 'react';
import './article-detail-edit.component.css';
import { ARTICLES_UPDATE, ARTICLES_CREATE } from '../../../mutations';
import { savingArticle, articleSaved } from '../../../state/actions/article.action';
import { useStateValue } from '../../../state/provider';

const ArticleDetailEdit = ({ article, requestProvider }) => {

  const [localState, setState] = useState(article);
  const [articleState, dispatch] = useStateValue();

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

  const createArticle = async (data) => {
    const response = await requestProvider(ARTICLES_CREATE(data));
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
        <input type="text" name="tags" value={localState.tags.join(' ')} onChange={handleInputChanges} />
      </div>

      <div className="form-control published">
        <label>
          <input type="checkbox" checked={localState.published} onChange={handleInputChanges} />
          &nbsp;Published
        </label>
      </div>

      <div className="form-control content">
        <label>Content</label>
        <textarea rows="30" type="text" name="content" value={localState.content} onChange={handleInputChanges} ></textarea>
      </div>

      <div className="article-actions">
        <button className="primary-button" onClick={saveArticle}> 
          { !articleState.isSavingItem ? 'Guardar    ' : 'Guardando...'}
        </button>
      </div>
    </div>    
  );
}

export default ArticleDetailEdit;

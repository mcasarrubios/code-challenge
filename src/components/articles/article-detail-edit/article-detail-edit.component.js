import React, { useState } from 'react';
import './article-detail-edit.component.css';

const ArticleDetailEdit = ({ article }) => {

  const [state, setState] = useState(article);

  const handleInputChanges = (event) => {
    const target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === 'tags') {
      value = value.trim().split(' ').filter(tag => tag);
    }

    setState({
      ...state,
      [name]: value
    });
  }

  return (
    <div className="article-detail-edit">
      <div className="form-control">
        <label>Title</label>
        <input type="text" name="title" value={state.title} onChange={handleInputChanges} />
      </div>

      <div className="form-control">
        <label>Author</label>
        <input type="text" name="author" value={state.author} onChange={handleInputChanges} />
      </div>

      <div className="form-control">
        <label>Tags</label>
        <input type="text" name="tags" value={state.tags.join(' ')} onChange={handleInputChanges} />
      </div>

      <div className="form-control published">
        <label>
          <input type="checkbox" checked={state.published} onChange={handleInputChanges} />
          &nbsp;Published
        </label>
      </div>

      <div className="form-control content">
        <label>Content</label>
        <textarea rows="30" type="text" name="content" value={state.content} onChange={handleInputChanges} ></textarea>
      </div>

    </div>
  );
}

export default ArticleDetailEdit;

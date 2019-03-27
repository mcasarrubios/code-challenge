import React from 'react';
import Modal from '../../core/modal';

const ArticleDelete = () => {

  const props = {
    header: 'Delete article',
    body: 'You are going to delete this article. Are you sure?',
    okText: 'Yes, delete it',
    cancelText: 'Don\'t delete'
  };

  return (
    <Modal {...props}/>
  );

}
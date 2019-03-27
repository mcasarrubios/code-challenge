import React from 'react';
import './modal.component.css';

const Header = ({header}) => (
  <div className="modal-header">
    <h4> {header} </h4>
  </div>
);

const Body = ({body}) => (
  <div className="modal-body">
    <p> {body} </p>
  </div>
);

const Footer = ({okText, cancelText}) => (
  <div className="modal-footer">
    { cancelText ? <button onClick={cancel}> {cancelText} </button> : null }
    { okText ? <button onClick={cancel}> {okText} </button> : null }
  </div>
);

const Modal = ({header, body, okText, cancelText }) => (
  <div className="modal">
    <div className="modal-content">
      { header ? <Header /> : null }
      { body ? <Body /> : null }
      <Footer />
    </div>
  </div>
);  

export default Modal;
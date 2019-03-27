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

const Footer = ({confirmText, cancelText, onCancel, onConfirm}) => (
  <div className="modal-footer">
    <div className="action-btn pull-right">
      { cancelText ? <button onClick={() => onCancel()} className="btn btn-secondary"> {cancelText} </button> : null }
      { confirmText ? <button onClick={() => onConfirm()} className="btn btn-primary"> {confirmText} </button> : null }
    </div>
  </div>
);

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        { props.header ? <Header {...props} /> : null }
        { props.body ? <Body {...props} /> : null }
        <Footer {...props} />
      </div>
    </div>
  )
};

export default Modal;

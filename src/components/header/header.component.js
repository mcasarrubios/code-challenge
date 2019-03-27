import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.css';

const Header = ({title}) => {


  return (<section className="header">
    <div className="action-btn pull-right">
      <Link to={'/new'} className="btn btn-secondary">
        New article
      </Link>
    </div>

    <h1 className="header-title">
      <Link to={'/'}>
        {title}
      </Link>
    </h1>
  </section>
)};

export default Header;

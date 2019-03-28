import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.css';

const Header = ({title}) => (
  <section className="header">
    <h1 className="header-title">
      <Link to={'/'}>
        {title}
      </Link>
    </h1>
  </section>
);

export default Header;

import React from 'react';
import './header.component.css';

const Header = ({title}) => (
  <section className="header">
    <h1 className="header-title">{title}</h1>
  </section>
);

export default Header;

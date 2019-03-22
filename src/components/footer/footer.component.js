import React from 'react';
import './footer.component.css';

const Footer = ({slogan}) => (
  <section className="footer">
    <p className="footer-slogan">{slogan}</p>
  </section>
);

export default Footer;

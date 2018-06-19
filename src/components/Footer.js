import React from 'react';
import Link from 'gatsby-link';
import Navbar from './Navbar';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content">
        <Link className="has-text-primary has-text-weight-bold" to="/">
          Arkiv.
        </Link>{' '}
        Works from the Interaction Design bachelor programme at Malmö
        University.
      </div>
      <div className="navbar">
        <div
          className="navbar-menu is-shadowless is-active"
          role="navigation"
          aria-label="footer navigation"
        >
          <Navbar />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

import React from 'react';
import { Link } from 'gatsby';

const Navbar = ({ className }) => (
  <div className={className}>
    <Link to="/about" className="navbar-item">
      About
    </Link>
    <Link to="/collaborate" className="navbar-item">
      Collaborate
    </Link>
    <Link to="/students" className="navbar-item">
      Students &amp; alumni
    </Link>
  </div>
);

export default Navbar;

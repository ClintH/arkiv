import React from 'react';
import Link from 'gatsby-link';

import logo from '../img/logo.svg';

export default class NavbarFull extends React.Component {
  burgerClick(e) {
    document.getElementById('navMenuBurger').classList.toggle('is-active');
    document.getElementById('navMenu').classList.toggle('is-active');
  }

  renderLocation() {
    console.log(this.props);
    console.log(this.props.location.pathname.substr(0, 3));
    if (this.props.location.pathname.substr(0, 3) === '/p/')
      return (
        <Link to="/p" className="has-text-grey navbar-item">
          Projects
        </Link>
      );
    else return '';
  }

  render() {
    return (
      <nav
        aria-label="main navigation"
        role="navigation"
        className="navbar is-transparent"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className="has-text-weight-bold has-text-primary navbar-item"
            >
              Arkiv.
            </Link>
            {this.renderLocation()}
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              id="navMenuBurger"
              onClick={this.burgerClick}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className="navbar-menu" id="navMenu">
            <div className="navbar-end">
              <Link to="/about" className="navbar-item">
                About
              </Link>
              <Link to="/p" className="navbar-item">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

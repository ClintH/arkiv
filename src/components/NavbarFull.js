import React from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar';

export default class NavbarFull extends React.Component {
  burgerClick(e) {
    document.getElementById('navMenuBurger').classList.toggle('is-active');
    document.getElementById('navMenu').classList.toggle('is-active');
  }

  renderLocation() {
    if (this.props.location === 'projects')
      return (
        <Link to="/projects/" className="has-text-grey navbar-item">
          Projects
        </Link>
      );
    if (this.props.location === 'tags')
      return (
        <ol className="navbar-item">
          <li>
            <Link to="/projects/" className="has-text-grey navbar-item">
              Projects
            </Link>
          </li>
          -
          <li>
            <Link to="/tags/" className="has-text-grey navbar-item">
              Tags
            </Link>
          </li>
        </ol>
      );
    else return '';
  }

  render() {
    return (
      <nav aria-label="main navigation" role="navigation" className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className="has-text-weight-bold has-text-primary navbar-item"
            >
              Arkixd.
            </Link>
            {this.renderLocation()}
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              id="navMenuBurger"
              href="#ignored"
              onClick={this.burgerClick}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className="navbar-menu" id="navMenu">
            <Navbar className="navbar-end" />
          </div>
        </div>
      </nav>
    );
  }
}

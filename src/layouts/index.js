import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import NavbarFull from '../components/NavbarFull';

import './all.sass';

//const client = require('./client');
require('typeface-nunito');

// const TemplateWrapper = ({ children }) => (
class TemplateWrapper extends React.Component {
  renderNav() {
    if (this.props.location.pathname !== '/') {
      return <NavbarFull location={this.props.location} />;
    }
  }

  render() {
    return (
      <div>
        <Helmet title="Arkiv.">
          <link
            href="https://fonts.googleapis.com/css?family=Nunito"
            rel="stylesheet"
          />
          <html lang="en" />
          <meta
            name="Description"
            content="Works from the Interaction Design bachelor programme at Malmö University"
          />
        </Helmet>
        {this.renderNav()}
        <div>{this.props.children()}</div>
      </div>
    );
    // if (this.props.location.pathname == '/') {
    //   return (
    //     <div>
    //       <Helmet title="Arkiv. Works from the Interaction Design bachelor programme at Malmö University">
    //         <link
    //           href="https://fonts.googleapis.com/css?family=Nunito"
    //           rel="stylesheet"
    //         />
    //       </Helmet>
    //       <div>{this.props.children()}</div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <Helmet title="!Arkiv. Works from the Interaction Design bachelor programme at Malmö University">
    //         <link
    //           href="https://fonts.googleapis.com/css?family=Nunito"
    //           rel="stylesheet"
    //         />
    //       </Helmet>
    //       <NavbarFull />
    //       <div>{this.props.children()}</div>
    //     </div>
    //   );
    // }
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

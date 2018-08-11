import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NavbarFull from '../components/NavbarFull';
import './all.sass';

require('typeface-nunito');

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
          <html lang="en" />
          <meta
            name="Description"
            content="Works from the Interaction Design bachelor programme at Malmö University"
          />
        </Helmet>
        {this.renderNav()}
        <div>{this.props.children()}</div>
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const projectThumbFragment = graphql`
  fragment ProjectThumbFragment on MarkdownRemark {
    excerpt(pruneLength: 200)
    id
    fields {
      slug
    }
    frontmatter {
      templateKey
      title
      subTitle
      year
      creators
      image {
        childImageSharp {
          sizes(maxWidth: 760) {
            srcSet
          }
          responsiveResolution(
            width: 500
            duotone: { highlight: "#e4788c", shadow: "#e4022d", opacity: 40 }
          ) {
            base64
            aspectRatio
            width
            height
            src
            srcSet
            originalName
          }
        }
      }
    }
  }
`;

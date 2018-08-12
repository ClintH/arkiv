import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Footer from '../components/Footer';
import NavbarFull from '../components/NavbarFull';
import './all.sass';

require('typeface-nunito');

class TemplateWrapper extends React.Component {
  renderNav(location) {
    if (location !== 'main') {
      return <NavbarFull location={location} />;
    }
  }

  render() {
    return (
      <div>
        <Helmet title="Arkixd.">
          <html lang="en" />
          <meta
            name="Description"
            content="Works from the Interaction Design bachelor programme at Malmö University"
          />
        </Helmet>
        {this.renderNav(this.props.location)}
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

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
          fluid(maxWidth: 760) {
            srcSet
          }
          fixed(
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

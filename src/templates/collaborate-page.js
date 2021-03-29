import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { HTMLContent } from '../components/Content';
import {CollaboratePageTemplate} from './collaborate-page-template';

const CollaboratePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <CollaboratePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

CollaboratePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default CollaboratePage;

export const collaboratePageQuery = graphql`
  query CollaboratePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

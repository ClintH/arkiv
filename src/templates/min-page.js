
import React from 'react';
import PropTypes from 'prop-types';
import { HTMLContent } from '../components/Content';
import {MinPageTemplate} from './min-page-template';
import { graphql } from 'gatsby';

export const minPageQuery = graphql`
  query MinPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
const MinPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <MinPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

MinPage.propTypes = {
  data: PropTypes.object.isRequired
};
export default MinPage;



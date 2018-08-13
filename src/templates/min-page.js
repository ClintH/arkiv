import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';

export const MinPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Layout>
      <Helmet title={'Arkixd.' + title} />
      <PageContent content={content} />
    </Layout>
  );
};

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

import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ProjectGrid from '../components/ProjectGrid';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout location="main">
        <section className="section">
          <div className="container">
            <div className="content is-size-3">
              <span className="has-text-weight-bold has-text-primary">
                {siteTitle}
              </span>
              . Works from the{' '}
              <span className="has-background-light">
                &nbsp;
                <Link className="has-text-danger" to="/about">
                  interaction design bachelor programme
                </Link>{' '}
              </span>
              at Malmö University.
            </div>
            <div className="content is-size-4">
              Browse <a href="projects">projects</a>,
              <a href="about">read about the programme</a> or&nbsp;
              <a href="collaborate">how to collaborate</a>.
            </div>
          </div>
        </section>
        <section className="section">
          <ProjectGrid projects={posts} />
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery2 {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___year] }
      filter: { frontmatter: { templateKey: { eq: "project-post" } } }
    ) {
      edges {
        node {
          ...ProjectThumbFragment
        }
      }
    }
  }
`;

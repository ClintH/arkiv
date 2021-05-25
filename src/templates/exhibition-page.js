import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import ExhibitionGrid from '../components/ExhibitionGrid';

class ExhibitionPageHead extends React.Component {
  render() {
    return (
      <div className="container content">
        <h1>{this.props.exhibition.frontmatter.title}</h1>
        <div className="section tile is-ancestor">
          <div className="is-parent is-6" >
            <div className="tile is-child" dangerouslySetInnerHTML={{ __html: this.props.exhibition.html }} />
          </div>
        </div>
      </div>
    );
  }
}

class ExhibitionPage extends React.Component {
  render() {
    const exhibition = this.props.data.exhibition;
    const head       = <ExhibitionPageHead exhibition={exhibition}/>;
    const projects   = this.props.data.projects.edges.filter(project =>
      project.node.frontmatter.year === exhibition.frontmatter.year
        && project.node.frontmatter.course === exhibition.frontmatter.course
    )

    return (
      <Layout>
        <section className="section">
          <Helmet title={`Arkixd.Exhibition. ${exhibition.frontmatter.title}.${exhibition.frontmatter.year}.`} />
          {head}
          <ExhibitionGrid live={exhibition.frontmatter.live} projects={projects} />
        </section>
      </Layout>
    );
  }
}

export default ExhibitionPage;

export const pageQuery = graphql`
query ExhibitionQuery($id: String!) {
  exhibition: markdownRemark(id: {eq: $id}) {
    id
    html
    frontmatter {
      year
      course
      title
    }
  }
  projects: allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___priority]}, filter: {frontmatter: {templateKey: {eq: "exhibition-post"}}}) {
    edges {
      node {
        id
        html
        frontmatter {
          year
          course
          title
          priority
          creators
          image {
            childImageSharp {
              fluid(maxWidth: 1000) {
                 ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`;


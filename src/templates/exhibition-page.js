import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import ExhibitionGrid from '../components/ExhibitionGrid';

// NOTE
/* An exhibition page features a header with an introduction and then a grid of projects.
   These projects do not have their own pages. If a 'visitor' wants to see a project, it has
   to do so via a link to a student's Zoom. Very 2014-ephemeral.
 
   — LLA 200528 */

class ExhibitionPageHeadLive extends React.Component {
  render() {
    return (
      <div className="container content">
        <h1>{this.props.exhibition.frontmatter.title}</h1>
        <div className="section tile is-ancestor">
          <div className="is-parent is-6" >
            <div className="tile is-child" dangerouslySetInnerHTML={{ __html: this.props.exhibition.html }} />
          </div>
          <div className="tile is-6 is-vertical" >
            <div className="tile">
              <div className="tile is-child is-4" >  </div>
              <div className="tile is-child is-8 box" >
                <p className="is-small" >
                  To visit a student, check their avalible times and click the zoom button! There are links to student's Miro boards, some of which require you to be logged in. A free account should be enough, if that is the case. 
                </p>

                <div className="buttons" >
                  <button className="button is-small" title="Zoom" disabled>Zoom</button>
                  <button className="button is-small" title="Miro" disabled>Miro</button>
                </div>
                <p className="is-small has-text-weight-semibold" >
                </p>
              </div>
            </div>
            <div className="tile is-child" ></div>
          </div>
        </div>
      </div>
    );
  }
}

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
    const projects = this.props.data.projects.edges;

    console.log(exhibition);
    let head;
    if (exhibition.frontmatter.live)
      head = <ExhibitionPageHeadLive exhibition={exhibition} />
    else
      head =<ExhibitionPageHead exhibition={exhibition} />

      return (
      <Layout>
        <section className="section">
          <Helmet title={`Arkixd. ${exhibition.frontmatter.title}`} />
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
      live
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
          tags
          priority
          links {
            miro
            zoom
          }
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

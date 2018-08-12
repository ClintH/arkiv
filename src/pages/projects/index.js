import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import _ from 'lodash';
import Layout from '../../components/Layout';
//import ProjectThumb from '../../components/ProjectThumb';
import ProjectGrid from '../../components/ProjectGrid';

class ProjectsPage extends React.Component {
  renderMap(map) {
    // Order projects in descending order (by year)
    const keys = Object.keys(map)
      .sort()
      .reverse();

    // Generate a snippet for a project
    // const items = function(list) {
    //   return list.map(n => (
    //     <ProjectThumb key={n.node.id + '-thumb'} data={n.node} />
    //   ));
    // };

    // Process each group
    // const groups = keys.map(key => (
    //   <div key={key + '-container'} className="container content">
    //     <h2>{key}</h2>
    //     <div className="tile is-ancestor">
    //       <div key={key + '-tile'} className="c tile is-parent">
    //         {items(map[key])}
    //       </div>
    //     </div>
    //   </div>
    // ));

    // Render each group as a grid
    const groups = keys.map(key => {
      return (
        <div key={key + '-container'} className="container content">
          <h2>{key}</h2>
          <ProjectGrid projects={map[key]} />
        </div>
      );
    });
    return groups;
  }

  render() {
    const projects = this.props.data.allMarkdownRemark.edges;
    const byYear = _.groupBy(projects, x => {
      return x.node.frontmatter.year;
    });

    return (
      <Layout>
        <section className="section">
          <Helmet title={`Arkiv. Projects`} />
          <div className="container content">
            <h1>Projects</h1>
          </div>
          {this.renderMap(byYear)}
        </section>
      </Layout>
    );
  }
}
export default ProjectsPage;

export const pageQuery = graphql`
  query AllProjectsQuery {
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

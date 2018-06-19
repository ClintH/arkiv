import React from 'react';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import _ from 'lodash';

import ProjectThumb from '../../components/ProjectThumb';

class ProjectsPage extends React.Component {
  renderMap(map) {
    const keys = Object.keys(map);
    const items = function(list) {
      return list.map(n => (
        <ProjectThumb key={n.node.id + '-thumb'} data={n.node} />
      ));
    };
    const groups = keys.map(key => (
      <div key={key + '-container'} className="container content">
        <h2>{key}</h2>
        <div className="tile is-ancestor">
          <div key={key + '-tile'} className="c tile is-parent">
            {items(map[key])}
          </div>
        </div>
      </div>
    ));
    return groups;
  }

  render() {
    const projects = this.props.data.allMarkdownRemark.edges;
    const byYear = _.groupBy(projects, x => {
      return x.node.frontmatter.date;
    });
    const years = Object.keys(byYear);
    return (
      <section className="section">
        <Helmet title={`Arkiv. Projects`} />
        <div className="container content">
          <h1>Projects</h1>
        </div>
        {this.renderMap(byYear)}
      </section>
    );
  }
}
export default ProjectsPage;

export const pageQuery = graphql`
  query AllProjectsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
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

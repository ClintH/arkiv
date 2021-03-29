// Original skeleton by LLA 200528
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
import _ from 'lodash';
import ExhibitionAggregateGrid from '../../components/ExhibitionAggregateGrid';

class ExhibitionsAggregate extends React.Component {
  renderMap(map) {
    // Order exhibitions in descending order (by year)
    const keys = Object.keys(map)
      .sort()
      .reverse();

    // Render each group as a grid
    const groups = keys.map(key => {
      return (
        <div key={key + '-container'} className="container content">
          <h2>{key}</h2>
          <ExhibitionAggregateGrid projects={map[key]} />
        </div>
      );
    });
    return groups;
  }

  render() {
    const exhibitions = this.props.data.allMarkdownRemark.edges;
    const byYear = _.groupBy(exhibitions, x => {
      return x.node.frontmatter.year;
    });

    return (
      <Layout>
        <section className="section">
          <Helmet title={`Arkixd. Exhibitions`} />
          <div className="container content">
            <h1>Exhibitions</h1>
          </div>
          {this.renderMap(byYear)}
        </section>
      </Layout>
    );
  }
}

export default ExhibitionsAggregate;

export const exhibitionThumbFragment = graphql`
  fragment ExhibitionThumbFragment on MarkdownRemark {
    excerpt(pruneLength: 200)
    id
    fields {
      slug
    }
    frontmatter {
      templateKey
      year
      course
      title
      subTitle
      tags
      image {
        childImageSharp {
          gatsbyImageData(
            width: 500,
            transformOptions: { fit: COVER, duotone: { highlight: "#e4788c", shadow: "#e4022d", opacity: 70 } }
          )
        }
      }
    }
  }
`;

export const pageQuery = graphql`
  query AllExhibitionsQuery {
      allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___year] }
          filter: { frontmatter: { templateKey: { eq: "exhibition-page" } } }
      ) {
          edges {
              node {
                ...ExhibitionThumbFragment
              }
          }
      }
  }
`;
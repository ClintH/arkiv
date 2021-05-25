import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import Layout from '../components/Layout';

class ExhibitionPostHead extends React.Component {
  render() {
    const { title, year, image, creators, course } = this.props.frontmatter;
    const credits = [creators + ",", year, course ].join(" ");

    return (
      <section>
        <div className="hero">
          <GatsbyImage className="hero-body"
                       formats={["auto", "webp", "avif"]}
                       alt={title}
                       image={image.childImageSharp.gatsbyImageData}
          />
        </div>

        <div className="section container" style={{paddingBottom: "0"}}>
          <h1 className="is-size-2 has-text-weight-bold">
            {title}
          </h1>
          <h3 className="is-size-6 is-uppercase" style={{paddingTop: "0"}}>
            {credits}
          </h3>
        </div>
      </section>
    )
  }
}

class ExhibitionPost extends React.Component {
  render() {
    const project = this.props.data.markdownRemark;

    return (
      <Layout>
        <Helmet title={`Arkixd.${project.frontmatter.title}`} />
        <ExhibitionPostHead frontmatter={project.frontmatter} />
        <section className="section container">
          <div dangerouslySetInnerHTML={{ __html: project.html }} />

        </section>
      </Layout>
    );
  }
}

export default ExhibitionPost;

export const pageQuery = graphql`
  query ExhibitionPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        year
        course
        title
        subTitle
        tags
        creators
        image {
          childImageSharp {
            gatsbyImageData(
              quality: 90
              formats: [AUTO, WEBP, AVIF]
              transformOptions: { fit: COVER }
            )
          }
        }
      }
    }
  }
`;

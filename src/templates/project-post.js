import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { HTMLContent } from '../components/Content';

import {ProjectPostTemplate} from './project-post-template';

const ProjectPost = ({ data }) => {
  const post = data.markdownRemark;
  const fm = data.markdownRemark.frontmatter;

  return (
    <ProjectPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      title={fm.title}
      subTitle={fm.subTitle}
      tags={fm.tags}
      year={fm.year}
      course={fm.course}
      /*contributions={fm.contributions}*/
      creators={fm.creators}
      image={fm.image}
      helmet={<Helmet title={`Arkixd. ${fm.title}`} />}
    />
  );
};

ProjectPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default ProjectPost;

/*
contributions {
  description
  creators
  title
}
*/
export const pageQuery = graphql`
  query ProjectPostById($id: String!) {
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
              width: 760
              formats: [AUTO, WEBP, AVIF]
              transformOptions: { fit: COVER, duotone: { highlight: "#d93f5c", shadow: "#400d16", opacity: 70 } }
            )
          }
        }
      }
    }
  }
`;

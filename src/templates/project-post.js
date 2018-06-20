import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Content, { HTMLContent } from '../components/Content';

export const ProjectPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  image,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <section className="hero has-text-white">
        <div
          className="hero-body"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          {helmet || ''}
          <div className="container content">
            <h1 className="title is-size-2 has-text-weight-bold has-text-white">
              {title}
            </h1>
            <div className="is-size-6 is-uppercase">creators</div>
            <div className="is-size-4">{description}</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container content">
          <PostContent content={content} />
          {tags && tags.length ? (
            <div style={{ marginTop: `4rem` }}>
              <h4>Tags</h4>
              <ul className="taglist">
                {tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

ProjectPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string
};

const ProjectPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ProjectPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      image={post.frontmatter.image.childImageSharp.responsiveResolution.src}
      helmet={<Helmet title={`Arkiv. ${post.frontmatter.title}`} />}
    />
  );
};

ProjectPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default ProjectPost;

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY")
        title
        description
        tags
        image {
          childImageSharp {
            sizes(maxWidth: 760) {
              srcSet
            }
            responsiveResolution(
              width: 600
              duotone: { highlight: "#e4788c", shadow: "#e4022d", opacity: 70 }
            ) {
              base64
              aspectRatio
              width
              height
              src
              srcSet
              originalName
            }
          }
        }
      }
    }
  }
`;

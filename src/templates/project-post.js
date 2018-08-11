import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Content, { HTMLContent } from '../components/Content';

export const ProjectPostTemplate = ({
  content,
  contentComponent,
  subTitle,
  tags,
  title,
  year,
  image,
  course,
  helmet,
  contributions
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
            <div className="is-size-6 is-uppercase">
              {year} {course}
            </div>
            <div className="is-size-4">{subTitle}</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container content">
          <PostContent content={content} />
        </div>
      </section>

      {contributions && contributions.length ? (
        <section className="section">
          {contributions.map(contrib => (
            <div
              key={contrib.title.replace(' ', '') + `Contrib`}
              className="container content"
            >
              <h2>{contrib.title}</h2>
              <div className="h2Sub">{contrib.creators.join(', ')}</div>
              <div dangerouslySetInnerHTML={{ __html: contrib.description }} />
            </div>
          ))}
        </section>
      ) : null}

      <section className="section">
        <div className="container content">
          {tags && tags.length ? (
            <div style={{ marginTop: `4rem` }}>
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
  title: PropTypes.string,
  subTitle: PropTypes.string,
  year: PropTypes.number,
  course: PropTypes.string,
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  image: PropTypes.string,
  contributions: PropTypes.array
};

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
      contributions={fm.contributions}
      image={fm.image.childImageSharp.responsiveResolution.src}
      helmet={<Helmet title={`Arkiv. ${fm.title}`} />}
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
        contributions {
          description
          creators
          title
        }
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

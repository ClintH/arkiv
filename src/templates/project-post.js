import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';

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
  creators
}) => {
  const PostContent = contentComponent || Content;

  let credits = '';
  if (creators) credits = creators + ', ';
  if (year) credits += year;
  if (course) credits += ' ' + course;
  /*
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
      */
  return (
    <Layout location="projects">
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
            <div className="subtitle is-size-4 has-text-white">{subTitle}</div>
            <div className="is-size-6 is-uppercase ">{credits}</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container content is-size-5">
          <PostContent content={content} />
        </div>
      </section>

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
    </Layout>
  );
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
      /*contributions={fm.contributions}*/
      creators={fm.creators}
      image={fm.image.childImageSharp.fixed.src}
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
            fluid(maxWidth: 760) {
              srcSet
            }
            fixed(
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

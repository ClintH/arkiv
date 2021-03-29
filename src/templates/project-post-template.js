import React from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import Content from '../components/Content';
import Layout from '../components/Layout';

import { GatsbyImage } from "gatsby-plugin-image"
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
      <section style={{
        position:"relative",
        width:"100%"
        }}
        className="hero has-text-white">
        <div style={{ }}>
          <GatsbyImage
            className="hero-body"
            style={{
              gridArea:"1/1",
              maxHeight: 600,
              display:"grid"
            }}
            alt=""
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
            image={image.childImageSharp.gatsbyImageData}
          />
        </div>
        <div style={{
          bottom:0,
          paddingBottom:"1rem",
          left:0,
          width:"inherit",
          position:"absolute",
          placeItems:"center",
        }}>
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
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

        <div className="section container"
             style={{paddingBottom: "0"}}>
          <h1 className="is-size-2 has-text-weight-bold">
            {title}
          </h1>
          <h3 className="is-size-6 is-uppercase"
              style={{paddingTop: "0"}}>
            {credits}
          </h3>
        </div>
      </section>
    )
  }
}

class ExhibitionPostVideoEmbed extends React.Component {
  render() {
    return (
      <div className="column is-half">
        <div style={{position:      "relative",
                     paddingBottom: "56.25%",
                     height:        "0"}}>
          <iframe className="has-ratio"
                  width="640"
                  height="360"
                  src={"https://www.youtube.com/embed/" + this.props.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style={{position: "absolute",
                    top:      "0",
                    bottom:   "0",
                    width:    "100%",
                    height:   "100%"}}>
          </iframe>
        </div>
      </div>
    )
  }
}

class ExhibitionPostBody extends React.Component {
  render() {
    const { frontmatter: { youtubeID, year, imagePrefix, gifs }, html } = this.props.project;
    const imagePathBase = "/images/uploads/" + year.toString().substring(0, 4) + "/" + imagePrefix + "-";

    return (
      <section className="section content container">
        <div className="columns is-multiline">
          <div className="column is-half"
               dangerouslySetInnerHTML={{ __html: html }} />
          {youtubeID
           ? <ExhibitionPostVideoEmbed video={youtubeID} />
           : <div className="column is-half" />}
          {gifs
           ? [1, 2, 3, 4].map(i =>
             <div className="column is-half">
              <img alt={""}
                   src={imagePathBase + i.toString() + (gifs.includes(i) ? ".gif" : ".jpg")} />
            </div>)
           : null }
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
        <ExhibitionPostBody project={project} />
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
        youtubeID
        imagePrefix
        gifs
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

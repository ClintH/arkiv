import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../../components/Layout';

// TODO
/* Thinking this page could be a portal with all of the "exhibitions".
   I modeled an exhibition as a sub-folder with all of the exhibition
   projects and an `index.md` with exhibition metadata.
   Than sort of implies that this page should aggregate all of the `index.md`s, 
   maybe with an image teaser. That is, one wants to keep exhibitions up after the fact.
  
   Obviously, it does none of these things now.
  
   — LLA 200528 */

class ExhibitionsAggregate extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <Helmet title={`Arkixd. Exhibitions`} />
          <div className="container content"> </div>
        </section>
      </Layout>
    );
  }
}

export default ExhibitionsAggregate;

// export const pageQuery = graphql`
//     query AllExhibitionsQuery {
//         allMarkdownRemark(
//             sort: { order: DESC, fields: [frontmatter___year] }
//             filter: { frontmatter: { templateKey: { eq: "exhibition-post" } } }
//         ) {
//             edges {
//                 node {
//                     id
//                     html
//                     frontmatter {
//                         year
//                         course
//                         title
//                         subTitle
//                         tags
//                         creators
//                         image {
//                             childImageSharp {
//                                 fluid(maxWidth: 760) {
//                                     srcSet
//                                 }
//                                 fixed(
//                                     width: 600
//                                 ) {
//                                     base64
//                                     aspectRatio
//                                     width
//                                     height
//                                     src
//                                     srcSet
//                                     originalName
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `;

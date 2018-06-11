import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <section className="section">
        <div className="container">
          <div className="content is-size-3">
            <span className="has-text-weight-bold has-text-primary">Arkiv</span>.
            Works from the{' '}
            <span className="has-background-light">
              &nbsp;
              <Link className="has-text-danger" to="/about">
                interaction design bachelor programme
              </Link>{' '}
            </span>
            at Malmö University.
          </div>
        </div>
        <br />
        <br />
        <main role="main" className="tile is-ancestor">
          {posts.map(({ node: post }) => (
            <div className="tile is-parent" key={post.id}>
              <div className="tile is-child">
                <div
                  className=""
                  style={{
                    height: '20em',
                    backgroundImage: `url(${
                      post.frontmatter.image.childImageSharp
                        .responsiveResolution.src
                    })`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    top: '0',
                    padding: '1em',
                    backgroundColor: 'black',
                    color: 'white',
                    display: 'inline-block',
                    width: '100%'
                  }}
                >
                  <Link
                    aria-hidden="true"
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'block'
                    }}
                    to={post.fields.slug}
                  />
                </div>
                <div className="tile is-child">
                  <p>
                    <Link
                      className="has-text-dark is-size-3 has-text-weight-semibold"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  <div>
                    {post.frontmatter.creators}, {post.frontmatter.date}
                  </div>
                  <br />
                  <br />

                  <p>
                    {post.frontmatter.description}
                    &nbsp;
                    <Link
                      title="Read more"
                      className="button is-small"
                      to={post.fields.slug}
                    >
                      →
                    </Link>
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </main>
      </section>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            date(formatString: "YYYY")
            enrolmentYear
            image {
              childImageSharp {
                sizes(maxWidth: 760) {
                  srcSet
                }
                responsiveResolution(
                  width: 600
                  duotone: {
                    highlight: "#e4788c"
                    shadow: "#e4022d"
                    opacity: 40
                  }
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
            creators
          }
        }
      }
    }
  }
`;

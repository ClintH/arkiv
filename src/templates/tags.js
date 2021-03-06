import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
//import ProjectThumb from '../components/ProjectThumb';
import Layout from '../components/Layout';
import ProjectGrid from '../components/ProjectGrid';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    // const postLinks2 = posts.map(post => (
    //   <li key={post.node.fields.slug}>
    //     <Link to={post.node.fields.slug}>
    //       <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
    //     </Link>
    //   </li>
    // ));

    // const postLinks = posts.map(n => (
    //   <ProjectThumb key={n.node.id + '-thumb'} data={n.node} />
    // ));
    const tag = this.props.pageContext.tag;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    // const tagHeader = `${totalCount} post${
    //   totalCount === 1 ? '' : 's'
    // } tagged with “${tag}”`;
    return (
      <Layout>
        <section className="section">
          <Helmet title={`${siteTitle}. ${tag}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h1>
                  {tag} ({totalCount})
                </h1>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                  <span> or </span>
                  <Link to="/projects/">all projects</Link>.
                </p>
              </div>
            </div>
          </div>
          <ProjectGrid projects={posts} />
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___year], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          ...ProjectThumbFragment
        }
      }
    }
  }
`;

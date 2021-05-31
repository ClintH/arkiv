import { Link } from 'gatsby';
import Img from "gatsby-image"
import React from 'react';

function capitalize(s) {
  return s.replace(s[0], s[0].toUpperCase());
}

function titleCase(s) {
  const stopWords = new Set(["a", "the", "of", "in", "and", "for", "as", "an", "from", "when", "to"]);
  return s.split(" ").map(word => (stopWords.has(word)) ? word : capitalize(word)).join(" ");
}

class ExhibitionItemImage extends React.Component {
  render() {
    return (
      <div className="tile is-child"
           style={{flexGrow: '0',}}> {/* HACK! */}
        <figure className="image is-3-by-2">
          <Img fluid={this.props.image.childImageSharp.fluid} />
        </figure>
      </div>
    );
  }
}

class ExhibitionItemHead extends React.Component {
  render() {
    return (
      <>
        <p className="title has-text-dark is-4 has-text-weight-semibold" >
          {titleCase(this.props.title)}
        </p>
        <p className="subtitle is-6">
          {this.props.creators ? this.props.creators : ``}{' '}
        </p>
      </>
    );
  }
}

class ExhibitionItem extends React.Component {
  render() {
    const p = this.props.project;
    return (
      <div key={p.frontmatter.id} className="column tile is-parent is-vertical is-4" >
        <Link to={p.fields.slug} className="tile is-parent is-vertical" >
          <ExhibitionItemImage image={p.frontmatter.image} />
          <div className="tile is-child">
            <ExhibitionItemHead creators={p.frontmatter.creators} title={p.frontmatter.title} />
            {/* <div dangerouslySetInnerHTML={{ __html: p.html }} /> */} 
            </div>
            </Link>
            </div>
    );
  }
}

export default class ExhibitionGrid extends React.Component {
  render() {
    return (
      <main role="main" className="columns is-multiline is-desktop">
        {this.props.projects.map(({ node: project }) =>
          <ExhibitionItem live={this.props.live} key={project.id} project={project} />)}
      </main>
    );
  }
}

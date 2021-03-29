import Img from "gatsby-image"
import React from 'react';

function capitalize(s) {
  return s.replace(s[0], s[0].toUpperCase());
}

function titleCase(s) {
  const stopWords = new Set(["a", "the", "of", "in", "and", "for", "as", "an", "from", "to"]);
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


class ExhibitionItemButton extends React.Component {
  render() {
    return (
      
      <a className="button is-small"
        style={{marginTop: "1rem"}} 
        href={this.props.link}
         target="_blank" rel="noopener noreferrer"
         title={this.props.label} >
        {this.props.label}
      </a>
    );
  }
}

class ExhibitionItemButtons extends React.Component {
  render() {
    return (
      <div className="buttons are-small" >
        <ExhibitionItemButton label="Zoom" link={this.props.links.zoom} />
        <ExhibitionItemButton label="Miro" link={this.props.links.miro} />
      </div>
    );
  }
}

class ExhibitionItemTags extends React.Component {
  render() {
    const categories = new Set(["aesthetics", "material", "method"]);
    return (
      <div className="tags">
        {this.props.tags.map(tag => <span key={tag} className="tag">
                                      {categories.has(tag.toLowerCase())
                                       ? <strong>{tag.toLowerCase()}</strong>
                                         : tag.toLowerCase() }</span>)}
      </div>
    );
  }
}

class ExhibitionItem extends React.Component {
  render() {
    const p = this.props.project;
    let extended;
    if (this.props.live) {
      extended = <>
        <ExhibitionItemButtons links={p.frontmatter.links} />
        <ExhibitionItemTags tags={p.frontmatter.tags} />
        </>
    }
    return (
      <div key={p.frontmatter.id} className="column tile is-parent is-vertical is-4" >
        <div className="tile is-parent is-vertical" >
          <ExhibitionItemImage image={p.frontmatter.image} />
          <div className="tile is-child">
            <ExhibitionItemHead creators={p.frontmatter.creators} title={p.frontmatter.title} />
            <div dangerouslySetInnerHTML={{ __html: p.html }} /> {/* body */}
            {extended}
          </div>
        </div>
      </div>
    );
  }
}

export default class ExhibitionGrid extends React.Component {
  render() {
    return (
      <main role="main" className="columns is-multiline is-desktop">
        {this.props.projects.map(({ node: project }) => <ExhibitionItem live={this.props.live} key={project.id} project={project} />)}
      </main>
    );
  }
}

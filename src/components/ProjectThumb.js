import React from 'react';
import Link from 'gatsby-link';

export default class ProjectThumb extends React.Component {
  render() {
    const p = this.props.data;
    return (
      <div className="tile is-parent is-vertical">
        <div
          className="tile is-child"
          style={{
            height: '20em',
            backgroundImage: `url(${
              p.frontmatter.image.childImageSharp.responsiveResolution.src
            })`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            top: '0',
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
            to={p.fields.slug}
          />
        </div>
        <div className="tile is-child">
          <p>
            <Link
              className="has-text-dark is-size-4 has-text-weight-semibold"
              to={p.fields.slug}
            >
              {p.frontmatter.title}
            </Link>
          </p>
          <div>
            {p.frontmatter.creators}, {p.frontmatter.date}
          </div>
          <br />

          <p>
            {p.frontmatter.description}
            &nbsp;
            <Link
              title="Read more"
              className="button is-small"
              to={p.fields.slug}
            >
              →
            </Link>
            <br />
            <br />
          </p>
        </div>
      </div>
    );
  }
}
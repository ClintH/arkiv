import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import {MoreLink} from './MoreLink'

/**
 * Renders a thumbnail component of the exhibition in the list of exhibitions
 *
 * @export
 * @class ExhibitionThumb
 * @extends {React.Component}
 */
export default class ExhibitionThumb extends React.Component {
  render() {
    const p = this.props.data;
    const fm = this.props.data.frontmatter;
   
    return (
      <div className="tile is-parent is-vertical">
        <div
          className="tile is-child"
          style={{}}
        >
          <Link
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              display: 'block'
            }}
            to={p.fields.slug}>
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
              image={fm.image.childImageSharp.gatsbyImageData}
          />
        </Link>
        </div>
        <div className="tile is-child">
          <p>
            <Link
              className="has-text-dark title is-4 has-text-weight-semibold"
              to={p.fields.slug}
            >
              {p.frontmatter.title}
            </Link>
          </p>
          <p>
            {p.frontmatter.subTitle}
            &nbsp;
            <MoreLink page={p} />
            <br />
            <br />
          </p>
        </div>
      </div>
    );
  }
}

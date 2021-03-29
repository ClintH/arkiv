import React from 'react';
import { Link } from 'gatsby';
export class MoreLink extends React.Component {
  render() {
    const p = this.props.page;
    return (      
        <Link
          style={{bottom:0}}
          title="Read more"
          className="button is-small"
          to={p.fields.slug}
        >
          →
        </Link>
    );
  }
}
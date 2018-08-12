import CMS from 'netlify-cms';
import React from 'react';

import ProjectPagePreview from './preview-templates/ProjectPagePreview';

class TagsControl extends React.Component {
  handleChange = e => {
    this.props.onChange(e.target.value.split(',').map(e => e.trim()));
  };

  render() {
    var value = this.props.value;
    return (
      <input
        type="text"
        value={value ? value.join(', ') : ''}
        onChange={this.handleChange}
      />
    );
  }
}

class TagsPreview extends React.Component {
  render() {
    return (
      <ul>
        {this.props.value.map(function(val, index) {
          return <li key={index} value={val} />;
        })}
      </ul>
    );
  }
}

CMS.registerWidget('tags', TagsControl, TagsPreview);
CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('project', ProjectPagePreview);

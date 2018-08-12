import React from 'react';
import PropTypes from 'prop-types';
import { ProjectPostTemplate } from '../../templates/project-post';

const ProjectPagePreview = ({ entry, widgetFor }) => {
  const entryContribs = entry.getIn(['data', 'contributions']);
  const contribs = entryContribs ? entryContribs.toJS() : [];

  const entryTags = entry.getIn(['data', 'tags']);
  let tags = [];
  try {
    tags = entryTags ? entryTags : [];
  } catch (e) {
    console.log(e);
    console.dir(entryTags);
  }

  return (
    <ProjectPostTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      subTitle={entry.getIn(['data', 'subTitle'])}
      content={widgetFor('body')}
      tags={tags}
      year={entry.getIn(['data', 'year'])}
      course={entry.getIn(['data', 'course'])}
      contributions={contribs}
    />
  );
};

ProjectPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ProjectPagePreview;

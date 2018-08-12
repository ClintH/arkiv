import React from 'react';
import PropTypes from 'prop-types';
import { ProjectPostTemplate } from '../../templates/project-post';

/*
    <ProjectPostTemplate
        content={post.html}
      contentComponent={HTMLContent}
        title={fm.title}
        subTitle={fm.subTitle}
        tags={fm.tags}
        year={fm.year}
        course={fm.course}
        contributions={fm.contributions}
        image={fm.image.childImageSharp.responsiveResolution.src}
      helmet={<Helmet title={`Arkiv. ${fm.title}`} />}
    */

const ProjectPagePreview = ({ entry, widgetFor }) => {
  const entryContribs = entry.getIn(['data', 'contributions']);
  const contribs = entryContribs ? entryContribs.toJS() : [];

  const entryTags = entry.getIn(['data', 'tags']);
  let tags = [];
  try {
    tags = entryTags ? entryTags.toJS() : [];
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

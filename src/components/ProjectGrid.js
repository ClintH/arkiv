import React from 'react';
import ProjectThumb from '../components/ProjectThumb';

class ProjectGridRow extends React.Component {
  render() {
    return this.props.projects.map(({ node: project }) => {
      return (
        <div className="tile is-4 is-parent" key={project.id}>
          <ProjectThumb data={project} />
        </div>
      );
    });
  }
}

export default class ProjectGrid extends React.Component {
  render() {
    let chunk = function(arr, size) {
      let chunked = [];
      for (let ele of arr) {
        let last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
          chunked.push([ele]);
        } else {
          last.push(ele);
        }
      }
      return chunked;
    };
    let projects = chunk(this.props.projects, 3);

    const chunks = projects.map((chunk, index) => {
      return (
        <main
          role="main"
          key={index.toString() + 'Grid'}
          className="tile is-ancestor"
        >
          <ProjectGridRow key={index.toString() + 'GridRow'} projects={chunk} />
        </main>
      );
    });

    return chunks;
  }
}

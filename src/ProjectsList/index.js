import React, { Component } from 'react';

import './ProjectsList.css';

import { projects } from './data';

export default class ProjectsList extends Component {
  render() {
    return (
      <div className="projectsList">
        {projects.map(project =>
          <div key={project.id}>
            <h2>{project.name} <span>{project.type}</span></h2>
            <p dangerouslySetInnerHTML={ {__html: project.description} }></p>
            <span>{project.tools}</span>
            <a rel="noopener noreferrer" target="_blank" href={project.external_url}>— project link</a>
          </div>
        )}
      </div>
    );
  }
}

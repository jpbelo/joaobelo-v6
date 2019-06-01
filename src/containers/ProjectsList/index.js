import React, { Component } from 'react'

import ProjectCard from 'components/ProjectCard'
import './ProjectsList.css'

import { projects } from './data'

export default class ProjectsList extends Component {
  render() {
    return (
      <div className="projectsList">
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    )
  }
}

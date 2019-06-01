import React, { Component } from 'react'

class ProjectCard extends Component {
  render() {
    const { id, name, type, description, tools, external_url } = this.props
    return (
      <div key={id}>
        <h2>
          {name} <span>{type}</span>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <span>{tools}</span>
        <a rel="noopener noreferrer" target="_blank" href={external_url}>
          — project link
        </a>
      </div>
    )
  }
}

export default ProjectCard

import React, { Component } from 'react'
import styled from 'styled-components'

import ProjectCard from 'components/ProjectCard'

const Container = styled.div``

export default class ProjectsList extends Component {
  render() {
    const { projects } = this.props
    return (
      <Container>
        {projects.map((project) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </Container>
    )
  }
}

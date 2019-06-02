import React, { Component } from 'react'
import styled from 'styled-components'

import ProjectCard from 'components/ProjectCard'

const Container = styled.div`
  .title {
    height: 80px;
    width: 100%;
    vertical-align: center;
    line-height: 80px;
    padding: 0 40px;
  }
  h1 {
    font-size: 18px;
  }
`

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

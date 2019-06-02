import React, { Component } from 'react'
import styled from 'styled-components'

import ExperienceCard from 'components/ExperienceCard'

const Container = styled.div`
`

export default class Experience extends Component {
  render() {
    const { experiences } = this.props
    return (
      <Container>
        {experiences.map((experience) => (
          <ExperienceCard {...experience} />
        ))}
      </Container>
    )
  }
}

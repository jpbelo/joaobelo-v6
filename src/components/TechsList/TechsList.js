import React, { Component } from 'react'
import styled from 'styled-components'

import TagButton from 'components/TagButton'

const TechsListContainer = styled.div`
  margin-top: 10px;
`

export default class TechsList extends Component {
  render() {
    const { techsList } = this.props
    return (
      <TechsListContainer>
        {techsList.map((tech, index) => (
          <TagButton {...tech} index={index} />
        ))}
      </TechsListContainer>
    )
  }
}

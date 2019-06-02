import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
          <TagButton {...tech} key={index} />
        ))}
      </TechsListContainer>
    )
  }
}

TechsList.propTypes = {
  techsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

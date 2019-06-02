import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TagButton from 'components/TagButton'

const ToolsListContainer = styled.div`
  margin-top: 10px;
`

export default class ToolsList extends Component {
  render() {
    const { toolsList } = this.props
    return (
      <ToolsListContainer>
        {toolsList.map((tool, index) => (
          <TagButton {...tool} key={index} modifiers="asText" />
        ))}
      </ToolsListContainer>
    )
  }
}

ToolsList.propTypes = {
  toolsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
    }),
  ).isRequired,
}

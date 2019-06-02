import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TagButtonContainer = styled.a`
  font-size: 11px;
  display: inline-block;
  border-radius: 6px;
  padding: 0 10px;
  margin-right: 6px;
  margin-bottom: 6px;
  line-height: 2;
  background-color: ${(props) => props.theme.colors.grey.light};
  transition: background-color 250ms ease-in-out;
  &[href^='http'] {
    background-color: ${(props) => props.theme.colors.secondary.bgAlt};
    &:hover {
      background: ${(props) => props.theme.colors.primary.bgAlt};
    }
  }
`

export default class TagButton extends Component {
  render() {
    const { url, name } = this.props
    return (
      <TagButtonContainer target="_blank" href={url}>
        {name}
      </TagButtonContainer>
    )
  }
}

TagButton.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

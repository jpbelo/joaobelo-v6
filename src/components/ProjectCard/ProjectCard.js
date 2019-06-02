import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 30px;
  h2 {
    margin-bottom: 7px;
    font-size: 15px;
    span {
      font-size: 12px;
      color: grey;
      vertical-align: top;
      margin-left: 5px;
    }
  }
  p {
    line-height: 1.6;
    font-size: 13px;
  }
  & > a {
    display: inline-block;
    margin-top: 10px;
    font-size: 13px;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #fc3c3c;
      opacity: 1;
    }
  }
  & > span {
    font-size: 11px;
    display: block;
    color: grey;
  }
`

class ProjectCard extends Component {
  render() {
    const { name, type, description, tools, external_url } = this.props
    return (
      <Container>
        <h2>
          {name} <span>{type}</span>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <span>{tools}</span>
        <a rel="noopener noreferrer" target="_blank" href={external_url}>
          — project link
        </a>
      </Container>
    )
  }
}

export default ProjectCard

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import TechsList from 'components/TechsList'

const ExperienceCardContainer = styled.div`
  ${space}
  h2 {
    margin-bottom: 10px;
  }
  h3 {
    font-size: 12px;
    margin-bottom: 4px;
  }
  p {
    margin-bottom: 15px;
  }
`

export default class ExperienceCard extends Component {
  render() {
    const { company, dateStart, dateEnd, info, techs } = this.props
    return (
      <ExperienceCardContainer mb={4}>
        <h2>{company}</h2>
        <h3>
          {dateStart} to {dateEnd}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: info }} />
        <TechsList techsList={techs} />
      </ExperienceCardContainer>
    )
  }
}

ExperienceCard.propTypes = {
  id: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  dateStart: PropTypes.string.isRequired,
  dateEnd: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired,
}

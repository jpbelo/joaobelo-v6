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

const PositionCardContainer = styled.div`
  border-left: 1px solid #999;
  padding-left: 10px;
`

export default class ExperienceCard extends Component {
  render() {
    const { company, positions, techs } = this.props
    return (
      <ExperienceCardContainer mb={4}>
        <h2>{company}</h2>
        {positions.map((position) => (
          <PositionCardContainer key={position.id}>
            <h3>
              {position.dateStart} to {position.dateEnd}
            </h3>
            <p dangerouslySetInnerHTML={{ __html: position.info }} />
          </PositionCardContainer>
        ))}
        <TechsList techsList={techs} />
      </ExperienceCardContainer>
    )
  }
}

ExperienceCard.propTypes = {
  id: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      info: PropTypes.string.isRequired,
      dateStart: PropTypes.string.isRequired,
      dateEnd: PropTypes.string.isRequired,
    }),
  ),
  techs: PropTypes.array.isRequired,
}

ExperienceCard.defaultProps = {
  positions: [],
}

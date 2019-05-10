import React, { Component } from 'react'
import styled from 'styled-components'

import experiences from './data'

const ExperiencesContainer = styled.div`
  border-radius: 6px;
  padding: 20px 40px;
`

const ExperienceCard = styled.div`
  margin-bottom: 40px;
  h2 {
    margin-bottom: 5px;
  }
  h3 {
    margin-bottom: 5px;
  }
`

const TechsContainer = styled.div`
  margin-top: 10px;
`

const TechCard = styled.span`
  font-size: 11px;
  display: inline-block;
  border-radius: 6px;
  padding: 0 10px;
  margin-right: 6px;
  margin-bottom: 6px;
  line-height: 2;
  background-color: ${(props) => props.theme.colors.grey.light};
`

export default class Experience extends Component {
  render() {
    return (
      <ExperiencesContainer>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id}>
            <h2>{experience.company}</h2>
            <h3>
              {experience.dateStart} to {experience.dateEnd}
            </h3>
            <p dangerouslySetInnerHTML={{ __html: experience.info }} />
            <TechsContainer>
              {experience.techs.map((tech) => (
                <TechCard>{tech}</TechCard>
              ))}
            </TechsContainer>
          </ExperienceCard>
        ))}
      </ExperiencesContainer>
    )
  }
}

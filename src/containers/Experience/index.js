import React, { Component } from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import experiences from './data'

const ExperiencesContainer = styled.div`
  border-radius: 6px;
  padding: 20px 40px;
`

const ExperienceCard = styled.div`
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

const TechsContainer = styled.div`
  margin-top: 10px;
`

const TechCard = styled.a`
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

export default class Experience extends Component {
  render() {
    return (
      <ExperiencesContainer>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} mb={4}>
            <h2>{experience.company}</h2>
            <h3>
              {experience.dateStart} to {experience.dateEnd}
            </h3>
            <p dangerouslySetInnerHTML={{ __html: experience.info }} />
            <TechsContainer>
              {experience.techs.map((tech, index) => (
                <TechCard target="_blank" href={tech.url} key={index}>
                  {tech.name}
                </TechCard>
              ))}
            </TechsContainer>
          </ExperienceCard>
        ))}
      </ExperiencesContainer>
    )
  }
}

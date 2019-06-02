import React from 'react'
import 'jest-styled-components'

import { renderWithTheme } from 'helpers/renderWithTheme'
import ExperienceCard from './ExperienceCard'

const mockProps = {
  id: 4,
  dateStart: '2019-04-19',
  dateEnd: 'present',
  company: 'Waitrose',
  url: 'https://waitrose.com',
  info:
    '(<a href="https://mindera.com" target="_blank">Mindera</a>) Working as FE developer on <a href="https://waitrose.com" target="_blank">Waitrose‘s website</a>.',
  techs: [{ name: 'ReactJS', url: 'https://reactjs.org/' }, { name: 'Redux', url: 'https://redux.js.org/' }],
}

test('Experience Card display correctly', () => {
  let tree = renderWithTheme(<ExperienceCard {...mockProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})

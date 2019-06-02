import React from 'react'
import 'jest-styled-components'

import { renderWithTheme } from 'helpers/renderWithTheme'
import ProjectCard from './ProjectCard'

const mockProps = {
  id: 35,
  name_id: 'joaobelo',
  name: 'joaobelo.pt (v6)',
  tags: 'João Belo',
  type: 'website',
  external_url: 'https://github.com/jpbelo/joaobelo-v6',
  tools: 'ReactJS, styled components',
  description: '(this actual website) project designed and developed by myself',
  date: '2019-03-01',
}

test('Project Card display correctly', () => {
  let tree = renderWithTheme(<ProjectCard {...mockProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})

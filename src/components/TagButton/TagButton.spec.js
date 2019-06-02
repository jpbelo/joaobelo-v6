import React from 'react'
import 'jest-styled-components'

import { renderWithTheme } from 'helpers/renderWithTheme'
import TagButton from './TagButton'

const mockProps = {
  url: 'http://google.com',
  name: 'Google',
}

test('Button changes color when hovered', () => {
  let tree = renderWithTheme(<TagButton {...mockProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})

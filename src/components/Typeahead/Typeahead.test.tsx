import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Typeahead.stories'

const { Default, Preselected } = composeStories(stories)

test('component renders', () => {
  render(<Default />)
  const element = screen.getByTestId('Typeahead')
  expect(element).toBeInTheDocument()
})

test('component can have a preselected option', () => {
  render(<Preselected value={{ name: 'Red' }} />)
  const input = screen.getByRole('textbox')
  expect(input).toBeInTheDocument()
  expect(input).toHaveDisplayValue('Red')
})

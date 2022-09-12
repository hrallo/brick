import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './GeoSearch.stories'

const { Default } = composeStories(stories)

test('GeoSearch renders', () => {
  render(<Default />)
  const input = screen.getByRole('textbox')
  expect(input).toBeInTheDocument()
})

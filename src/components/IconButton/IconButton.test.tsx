import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './IconButton.stories'

const { Primary } = composeStories(stories)

test('component renders', () => {
  render(<Primary />)
  const element = screen.getByTestId('IconButton')
  expect(element).toBeInTheDocument()
})

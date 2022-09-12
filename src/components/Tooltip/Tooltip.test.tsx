import React from 'react'
import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Tooltip.stories'

const { Default, WithTitle, WithCustomColor } = composeStories(stories)

test('component renders', () => {
  render(<Default coordinates={{ top: 0, left: 0 }} />)
  const element = screen.getByTestId('Tooltip')
  expect(element).toBeInTheDocument()
})

test('component renders with title', () => {
  render(<WithTitle coordinates={{ top: 0, left: 0 }} />)
  const element = screen.getByTestId('Tooltip')
  const { getByText } = within(element)
  expect(getByText('Title')).toBeInTheDocument()
})

test('component renders with custom title color', () => {
  render(<WithCustomColor coordinates={{ top: 0, left: 0 }} />)
  const element = screen.getByText('Title')
  expect(element).toHaveClass('color-pink-700')
})

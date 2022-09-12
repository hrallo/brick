import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './MenuButton.stories'

const { Default } = composeStories(stories)

test('component renders', () => {
  render(<Default />)
  const element = screen.getByTestId('MenuButton')
  expect(element).toBeInTheDocument()
})

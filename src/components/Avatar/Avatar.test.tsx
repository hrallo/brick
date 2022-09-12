import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Avatar.stories'

const { Default } = composeStories(stories)

test('component renders', () => {
  render(<Default />)
  const element = screen.getByTestId('Avatar')
  expect(element).toBeInTheDocument()
})

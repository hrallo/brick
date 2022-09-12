import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './StepTracker.stories'

const { Row } = composeStories(stories)

test('component renders', () => {
  render(<Row />)
  const element = screen.getByTestId('StepTracker')
  expect(element).toBeInTheDocument()
})

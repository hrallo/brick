import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './StepTrackerStep.stories'

const { Incomplete, Complete } = composeStories(stories)

test('component renders incomplete step', () => {
  render(<Incomplete />)
  const element = screen.getByTestId('StepTrackerStep')
  expect(element).toBeInTheDocument()
//   expect(element).toHaveClass('background-color-navy-100')
})

test('component renders complete step', () => {
  render(<Complete />)
  const element = screen.getByTestId('StepTrackerStep')
  expect(element).toBeInTheDocument()
//   expect(element).toHaveClass('background-color-navy-100')
})

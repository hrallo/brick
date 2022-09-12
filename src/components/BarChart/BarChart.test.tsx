import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './BarChart.stories'

const { Default, ManyBars, WithCustomColors } = composeStories(stories)

test('component renders', () => {
  render(<Default />)
  const element = screen.getByTestId('BarChart')
  expect(element).toBeInTheDocument()
})

test('component renders with many bars', () => {
  render(<ManyBars />)
  const element = screen.getByTestId('BarChart')
  expect(element).toBeInTheDocument()
})

test('component renders with custom colors', () => {
  render(<WithCustomColors />)
  const element = screen.getByTestId('BarChart')
  expect(element).toBeInTheDocument()
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './DonutChart.stories'

const { ManyDataPoints, ManyDataPointsDefault, SingleDataPoint, SingleDataPointDefault } = composeStories(stories)

test('component renders with many data points', () => {
  render(<ManyDataPointsDefault />)
  const element = screen.getByTestId('DonutChart')
  expect(element).toBeInTheDocument()
})

test('component renders with many data points and custom colors', () => {
  render(<ManyDataPoints />)
  const element = screen.getByTestId('DonutChart')
  expect(element).toBeInTheDocument()
})

test('component renders with one data point', () => {
  render(<SingleDataPointDefault />)
  const element = screen.getByTestId('DonutChart')
  expect(element).toBeInTheDocument()
})

test('component renders with one data point and a custom color', () => {
  render(<SingleDataPoint />)
  const element = screen.getByTestId('DonutChart')
  expect(element).toBeInTheDocument()
})

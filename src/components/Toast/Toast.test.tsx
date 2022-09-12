import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import * as stories from './Toast.stories'

const { Info, Error, Warn, Success } = composeStories(stories)

test('component renders', () => {
  render(<Info />)
  const element = screen.getByRole('alert')
  expect(element).toBeInTheDocument()
})

test('component renders type info', () => {
  render(<Info />)
  const element = screen.getByRole('alert')
  expect(element).toBeInTheDocument()
  expect(element).toHaveClass('background-color-navy-100')
})

test('component renders type error', () => {
  render(<Error />)
  const element = screen.getByRole('alert')
  expect(element).toBeInTheDocument()
  expect(element).toHaveClass('background-color-red-100')
})

test('component renders type warn', () => {
  render(<Warn />)
  const element = screen.getByRole('alert')
  expect(element).toBeInTheDocument()
  expect(element).toHaveClass('background-color-yellow-100')
})

test('component renders type success', () => {
  render(<Success />)
  const element = screen.getByRole('alert')
  expect(element).toBeInTheDocument()
  expect(element).toHaveClass('background-color-green-100')
})

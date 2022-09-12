import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Accordion.stories'

const { Default } = composeStories(stories)

test('accordion renders', () => {
  render(<Default />)
  const element = screen.getByTestId('Accordion')
  expect(element).toBeInTheDocument()
})

test('accordion renders closed', () => {
  render(<Default />)
  const trigger = screen.getByRole('button')
  expect(trigger).toBeInTheDocument()
  expect(trigger).toHaveAttribute('aria-expanded', 'false')
})

test('accordion renders open', () => {
  render(<Default open={true} />)
  const trigger = screen.getByRole('button')
  expect(trigger).toBeInTheDocument()
  expect(trigger).toHaveAttribute('aria-expanded', 'true')
})

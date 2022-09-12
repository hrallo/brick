import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Loader.stories'

const { Default } = composeStories(stories)

test('loader renders', () => {
  render(<Default />)
  const loader = screen.getByRole('alert')
  expect(loader).toBeInTheDocument()
  expect(loader).toBeVisible()
})

test('loader is accessible', () => {
  render(<Default />)
  const accessibleText = screen.queryByText('loading...')
  expect(accessibleText).not.toBeNull()
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Errors.stories'

const { Default } = composeStories(stories)

test('errors renders each error', () => {
  render(<Default />)
  const element = screen.getByTestId('Errors')
  expect(element).toBeInTheDocument()
  expect(element.childElementCount).toBe(2)
})

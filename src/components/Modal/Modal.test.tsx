import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Modal.stories'
import Modal from './Modal'

const { Default } = composeStories(stories)

test('hidden when open is false', () => {
  render(<Default />)
  expect(() => screen.getByTestId('Modal')).toThrow()
})

test('shows when open is true', () => {
  render(<Modal title='test' open={true} />)
  const element = screen.getByTestId('Modal')
  expect(element).toBeInTheDocument()
})

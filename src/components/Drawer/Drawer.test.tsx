import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Drawer.stories'
import Drawer from './Drawer'

const { Default } = composeStories(stories)

test('hidden when open is false', () => {
  render(<Default open={false} />)
  expect(() => screen.getByTestId('Drawer')).toThrow()
})

test('shows when open is true', () => {
  render(<Drawer title='test' open={true} />)
  const element = screen.getByTestId('Drawer')
  expect(element).toBeInTheDocument()
})

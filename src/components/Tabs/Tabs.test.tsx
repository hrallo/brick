import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Tabs.stories'

const { Default } = composeStories(stories)

test('component renders', () => {
  render(<Default />)
  const element = screen.getByTestId('Tabs')
  expect(element).toBeInTheDocument()
})

test('First tab is initially active', () => {
  render(<Default />)
  const tabContent = screen.getByText('Test 1 Content')
  expect(tabContent).toBeInTheDocument()
})

test('active tabs update on click', () => {
  render(<Default />)
  const tabButton = screen.getByText('test3')
  expect(tabButton).toBeInTheDocument()
  fireEvent.click(tabButton)
  const tabContent = screen.getByText('Test 3 Content')
  expect(tabContent).toBeInTheDocument()
})

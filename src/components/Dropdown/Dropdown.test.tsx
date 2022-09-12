import React from 'react'
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Dropdown.stories'

const { Default } = composeStories(stories)

test('component renders', () => {
  render(<Default />)
  const element = screen.getByTestId('Dropdown')
  expect(element).toBeInTheDocument()
})

test('menu closed by default', () => {
  render(<Default />)
  expect(() => screen.getByRole('menu')).toThrow()
})

test('opens on click', () => {
  render(<Default />)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  const menu = screen.getByRole('menu')
  expect(menu).toBeInTheDocument()
})

test('closes on external click', async () => {
  render(
    <>
      <Default title='test' />
      <button data-testid='external-button'>Click me!</button>
    </>
  )

  const dropdownTrigger = screen.getByLabelText('open test dropdown')
  const externalButton = screen.getByTestId('external-button')
  fireEvent.click(dropdownTrigger)
  const menu = screen.queryByRole('menu')
  expect(menu).toBeInTheDocument()
  fireEvent.click(externalButton)
  await waitForElementToBeRemoved(menu)
  expect(menu).not.toBeInTheDocument()
})

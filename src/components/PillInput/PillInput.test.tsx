import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './PillInput.stories'

const { Default } = composeStories(stories)

test('component renders', () => {
  render(<Default />)
  const element = screen.getByTestId('PillInput')
  expect(element).toBeInTheDocument()
})

test('Pill is created on user typed ","', async () => {
  render(<Default />)
  const input = screen.getByRole('textbox')
  fireEvent.change(input, { target: { value: 'myPill,' } })
  const button = screen.getByRole('button')
  expect(button).toHaveTextContent('myPill')
})

test('Pill is created on keyboard "enter"', async () => {
  render(<Default />)
  const input = screen.getByRole('textbox')
  fireEvent.change(input, { target: { value: 'myPill' } })
  fireEvent.keyDown(input, {
    key: 'Enter',
    code: 'Enter',
    keyCode: 13,
  })
  const button = screen.getByRole('button')
  expect(button).toHaveTextContent('myPill')
})

test('Pill is removed on keyboard "backspace"', async () => {
  render(<Default />)
  const input = screen.getByRole('textbox')
  fireEvent.change(input, { target: { value: 'myPill,' } })
  const button = screen.getByRole('button')
  expect(button).toHaveTextContent('myPill')
  fireEvent.keyDown(input, {
    key: 'Backspace',
    code: 'Backspace',
    keyCode: 8,
  })
  expect(button).not.toBeInTheDocument()
})

test('Pill is removed on click', async () => {
  render(<Default />)
  const input = screen.getByRole('textbox')
  fireEvent.change(input, { target: { value: 'myPill,' } })
  const button = screen.getByRole('button')
  expect(button).toHaveTextContent('myPill')
  fireEvent.click(button)
  expect(button).not.toBeInTheDocument()
})

test('Component returns pills', async () => {
  const handleChange = jest.fn()
  render(<Default onChange={handleChange} />)
  const input = screen.getByRole('textbox')
  fireEvent.change(input, { target: { value: 'myPill,' } })
  const button = screen.getByRole('button')
  expect(button).toHaveTextContent('myPill')
  expect(handleChange).toHaveBeenCalled()
  expect(handleChange).lastCalledWith(['myPill'])
})

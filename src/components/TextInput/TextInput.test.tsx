import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './TextInput.stories'

const { Default, ExternalControl, Disabled, Invalid } = composeStories(stories)

test('Input renders with type text', () => {
  render(<Default />)
  const input = screen.getByRole('textbox')
  expect(input).toBeInTheDocument()
  expect(input).toHaveAttribute('type', 'text')
})

test('Input renders with a prefilled value', () => {
  render(<ExternalControl />)
  const input = screen.getByRole('textbox')
  expect(input).toHaveValue('My value')
})

test('Input accepts user text', () => {
  render(<ExternalControl />)
  const input = screen.getByRole('textbox')
  fireEvent.input(input, { target: { value: 'updated value' } })
  expect(input).toHaveValue('updated value')
})

test('input can be disabled', () => {
  render(<Disabled />)
  const input = screen.getByRole('textbox')
  expect(input).toBeDisabled()
})

test('Input renders with type email', () => {
  render(<Invalid />)
  const input = screen.getByRole('textbox')
  expect(input).toBeInTheDocument()
  expect(input).toHaveAttribute('type', 'email')
})

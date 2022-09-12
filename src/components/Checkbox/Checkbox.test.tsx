import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Checkbox.stories'

const { Default, Checked, Disabled } = composeStories(stories)

const mockCallBack = jest.fn()

test('Checkbox renders unchecked', () => {
  render(<Default onChange={mockCallBack} />)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).toBeInTheDocument()
})

test('Checkbox renders checked', () => {
  render(<Checked onChange={mockCallBack} />)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).toBeInTheDocument()
})

test('checkbox can be disabled', () => {
  render(<Disabled onChange={mockCallBack} />)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).toBeDisabled()
})

test('Checkbox accepts user input', () => {
  render(<Default onChange={mockCallBack} />)
  const checkbox = screen.getByRole('checkbox')

  fireEvent.click(checkbox, { target: { checked: true } })
  expect(mockCallBack).toHaveBeenCalled()
})

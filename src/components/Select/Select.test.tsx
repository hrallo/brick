import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Select.stories'

const { Default, SelectedValue, Disabled } = composeStories(stories)

test('select renders with options', () => {
  render(<Default onChange={() => console.log('on change')} />)
  const select = screen.getByRole('combobox')
  expect(select).toBeInTheDocument()
  expect(screen.getAllByRole('option').length).toBe(2)
})

test('select renders with a selected value', () => {
  render(<SelectedValue onChange={() => console.log('on change')} />)
  const select = screen.getByRole('combobox')
  expect(select).toBeInTheDocument()
  expect(select).toHaveValue('option2')
})

test('select can be disabled', () => {
  render(<Disabled />)
  const select = screen.getByRole('combobox')
  expect(select).toBeDisabled()
})

test('select handles change', () => {
  const mockCallBack = jest.fn()
  render(<Default onChange={mockCallBack} />)
  const select = screen.getByRole('combobox')
  fireEvent.change(select, { target: { value: 'option2' } })
  expect(mockCallBack).toHaveBeenCalled()
})

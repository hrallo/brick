import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Button.stories'

const { Primary, PrimaryOutline, Disabled } = composeStories(stories)

test('button renders as primary', () => {
  render(<Primary />)
  const buttonElement = screen.getByTestId('Button')
  expect(buttonElement).not.toBeNull()
  expect(buttonElement).toBeInstanceOf(HTMLButtonElement)
})

test('button renders as primary-outlined', () => {
  render(<PrimaryOutline />)
  const buttonElement = screen.getByTestId('Button')
  expect(buttonElement).not.toBeNull()
  expect(buttonElement).toBeInstanceOf(HTMLButtonElement)
})

test('button renders as secondary', () => {
  render(<Disabled />)
  const buttonElement = screen.getByTestId('Button')
  expect(buttonElement).toBeDisabled()
})

test('button has label', () => {
  render(<Primary label='Hello' />)
  const buttonElement = screen.getByText('Hello')
  expect(buttonElement).not.toBeNull()
})

test('button handles click', () => {
  const mockCallBack = jest.fn()
  render(<Primary onClick={mockCallBack} />)
  const buttonElement = screen.getByTestId('Button')
  fireEvent.click(buttonElement)
  expect(mockCallBack).toHaveBeenCalled()
})

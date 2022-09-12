import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Pill.stories'
import Pill from './Pill'

const { Default, Tag, Icon } = composeStories(stories)

test('component renders', () => {
  render(<Default />)
  const element = screen.getByTestId('Pill')
  expect(element).toBeInTheDocument()
})

test('component renders with tag styling', () => {
  render(<Tag />)
  const element = screen.getByTestId('Pill')
  expect(element).toBeInTheDocument()
})

test('component renders with icon', () => {
  render(<Icon />)
  const element = screen.getByTestId('Pill')
  const icon = element.querySelector('i')
  expect(icon).toBeInTheDocument()
})

test('component renders as non-clickable', () => {
  render(<Pill label='Test' />)
  const element = screen.getByTestId('Pill')
  expect(element.nodeName).toBe('DIV')
})

test('component renders as clickable', () => {
  render(<Pill label='Test' onClick={() => console.log('click')} />)
  const element = screen.getByTestId('Pill')
  expect(element.nodeName).toBe('BUTTON')
})

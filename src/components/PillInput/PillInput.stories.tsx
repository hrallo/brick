import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import PillInput from './PillInput'
import { range } from 'd3'
import { map } from 'ramda'

export default {
  title: 'Components/PillInput',
  component: PillInput,
  argTypes: {
    required: { control: { type: 'boolean' } },
    placeholder: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    value: { control: { type: 'object' } },
    onChange: { control: { type: 'function' } },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
    pillVariant: {
      control: { type: 'radio' },
      options: ['pill', 'tag'],
      defaultValue: 'pill',
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof PillInput>

const Template: ComponentStory<typeof PillInput> = (args) => (
  <PillInput {...args} />
)

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

export const Prefilled = Template.bind({})
Prefilled.args = {
  value: map((x: number) => x.toString(), range(0, 20)),
}
Prefilled.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

export const Errors = Template.bind({})
Errors.args = { errors: ['Error 1', 'Error 2'] }
Errors.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

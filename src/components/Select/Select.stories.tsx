import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Select from './Select'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
}
Default.parameters = {
  design: {
    type: 'figma',
    // TODO: Replace with actual Figma component design when they are ready
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  },
}

export const SelectedValue = Template.bind({})
SelectedValue.args = {
  name: 'Select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
  value: 'option2',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  name: 'Select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
}

export const Invalid = Template.bind({})
Invalid.args = {
  name: 'Select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
  errors: [
    loremIpsum({ count: 1, units: 'sentence' }),
    loremIpsum({ count: 1, units: 'sentence' }),
  ],
}

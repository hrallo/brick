import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Checkbox from './Checkbox'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' }, defaultValue: false },
    name: { control: { type: 'text' } },
    onChange: { control: { type: 'function' } },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return <Checkbox {...args} />
}

export const Default = Template.bind({})
Default.args = {}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/27vLhsCnaqs9hKZmASl3HS/EveryNetwork?node-id=974%3A38063',
  },
}

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
  label: loremIpsum({ count: 3, units: 'words' }),
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

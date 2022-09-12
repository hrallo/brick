import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import IconButton from './IconButton'
import { loremIpsum } from 'lorem-ipsum'
import { IconOptsArr } from '../Icon/Icon.types'

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    onClick: {
      type: 'function',
      action: 'onClick',
      table: {
        disable: true,
      },
    },
    disabled: { type: 'boolean', defaultValue: false },
    label: {
      type: 'string',
      defaultValue: loremIpsum({ count: 2, units: 'words' }),
    },
    ariaLabel: {
      type: 'string',
    },
    icon: {
      options: IconOptsArr,
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'transparent'],
      control: { type: 'select' },
      defaultValue: 'primary',
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  icon: 'user',
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

export const Transparent = Template.bind({})
Transparent.args = {
  icon: 'user',
  variant: 'transparent',
}
Transparent.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import MenuButton from './MenuButton'
import { loremIpsum } from 'lorem-ipsum'
import { IconOptsArr } from '../Icon/Icon.types'

export default {
  title: 'Components/MenuButton',
  component: MenuButton,
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
    iconSize: {
      control: {
        type: 'select',
        options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      },
      defaultValue: 'md',
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof MenuButton>

const Template: ComponentStory<typeof MenuButton> = (args) => (
  <MenuButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  icon: 'user',
}
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

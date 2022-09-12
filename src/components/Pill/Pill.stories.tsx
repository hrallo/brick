import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { loremIpsum } from 'lorem-ipsum'

import Pill from './Pill'
import { IconOptsArr } from '../Icon/Icon.types'

export default {
  title: 'Components/Pill',
  component: Pill,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['pill', 'email'] },
      defaultValue: 'pill',
    },
    icon: {
      control: { type: 'select', options: IconOptsArr },
      description:
        'Pills can contain icons. All options inhert from the icon component.',
    },
    onClick: {
      control: { type: 'function' },
      action: 'onClick',
      table: {
        disable: true,
      },
      description:
        'If an onClick is added, the pill wrapper will be a button tag.',
    },
    label: {
      defaultValue: loremIpsum({ count: 2, units: 'words' }),
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Pill>

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

export const Tag = Template.bind({})
Tag.args = {
  variant: 'tag',
}
Tag.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uEW0L1mGWkyLkyUw1hVYpp/NetX-Design-System?node-id=1158%3A2273',
  },
}

export const Icon = Template.bind({})
Icon.args = {
  variant: 'tag',
  icon: 'x',
}
Icon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uEW0L1mGWkyLkyUw1hVYpp/NetX-Design-System?node-id=1158%3A2273',
  },
}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Avatar from './Avatar'
import { color } from '../../utils/shared'
import { IconOptsArr } from '../Icon/Icon.types'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      defaultValue: 'medium',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
    color: {
      defaultValue: 'monochrome-700',
      control: {
        type: 'select',
        options: color,
      },
    },
    backgroundColor: {
      defaultValue: 'monochrome-400',
      control: {
        type: 'select',
        options: color,
      },
    },
    icon: {
      defaultValue: 'user',
      control: {
        type: 'select',
        options: IconOptsArr,
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/27vLhsCnaqs9hKZmASl3HS/EveryNetwork?node-id=976%3A36275',
  },
}

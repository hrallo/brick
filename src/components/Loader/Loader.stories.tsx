import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Loader from './Loader'
import { color } from '../../utils/shared'

export default {
  title: 'Components/Loader',
  component: Loader,
  decorators: [withDesign],
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
      defaultValue: 'large',
    },
    color: {
      options: color,
      control: { type: 'select' },
      defaultValue: 'navy-700',
    },
  },
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {}

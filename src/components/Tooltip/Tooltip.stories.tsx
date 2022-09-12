import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Tooltip from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    coordinates: {
      control: 'object',
      defaultValue: { top: 100, left: 100 },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div style={{ position: 'relative' }}>
    <Tooltip {...args} />
  </div>
)
export const Default = Template.bind({})
Default.args = {
  data: { content: 'Here is some stuff' },
}

Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  data: {
    content: 'Here is some stuff',
    title: 'Title',
  },
}

export const WithCustomColor = Template.bind({})
WithCustomColor.args = {
  data: {
    content: 'Here is some stuff',
    title: 'Title',
  },
  titleColor: 'pink-700',
}

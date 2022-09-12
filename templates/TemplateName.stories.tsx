import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import TemplateName from './TemplateName'

export default {
  title: 'Components/TemplateName',
  component: TemplateName,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof TemplateName>

const Template: ComponentStory<typeof TemplateName> = args => (
  <TemplateName {...args} />
)

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

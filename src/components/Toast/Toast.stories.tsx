import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Toast from './Toast'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />

export const Info = Template.bind({})
Info.args = {
  children: loremIpsum({ count: 1 }),
}
Info.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uEW0L1mGWkyLkyUw1hVYpp/NetX-Design-System?node-id=1158%3A2029',
  },
}

export const Error = Template.bind({})
Error.args = {
  type: 'error',
  children: loremIpsum({ count: 1 }),
}

export const Warn = Template.bind({})
Warn.args = {
  type: 'warn',
  children: loremIpsum({ count: 1 }),
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  children: loremIpsum({ count: 1 }),
}

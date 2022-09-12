import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Errors from './Errors'

export default {
  title: 'Components/Errors',
  component: Errors,
  argTypes: {
    errorClassName: {
      control: {
        type: 'text',
      },
      defaultValue: 'body1',
      description: 'The classes to apply to the individual errors.'
    }
  }
} as ComponentMeta<typeof Errors>

const Template: ComponentStory<typeof Errors> = args => (
  <Errors {...args} />
)

export const Default = Template.bind({})
Default.args = {
  errors: ['Error 1', 'Error 2'],
  errorClassName: 'body1',
}
Default.parameters = {}

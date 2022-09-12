import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import StepTrackerStep from './StepTrackerStep'

export default {
  title: 'Components/StepTrackerStep',
  component: StepTrackerStep,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof StepTrackerStep>

const Template: ComponentStory<typeof StepTrackerStep> = args => (
  <StepTrackerStep {...args} />
)

export const Incomplete = Template.bind({})
Incomplete.args = {
    color: 'green-500',
    completed: false,
    stepNumber: 1,
    title: 'Account Creation'
}
Incomplete.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uEW0L1mGWkyLkyUw1hVYpp/NetX-Design-System?node-id=1158%3A2273',
  },
}

export const Complete = Template.bind({})
Complete.args = {
    color: 'green-500',
    completed: true,
    stepNumber: 2,
    title: 'Account Creation'
}
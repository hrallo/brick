import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { StepTrackerStep } from '../StepTrackerStep/StepTrackerStep'

import StepTracker from './StepTracker'

export default {
  title: 'Components/StepTracker',
  component: StepTracker,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof StepTracker>

const Template: ComponentStory<typeof StepTracker> = args => (
  <StepTracker {...args} />
)

export const Row = Template.bind({})
Row.args = {
    children: (
        <>
            <StepTrackerStep completed={true} stepNumber={1} title='Account Creation'/>
            <StepTrackerStep completed={false} stepNumber={2} title='Organization Info'/>
        </>
    )
}

Row.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uEW0L1mGWkyLkyUw1hVYpp/NetX-Design-System?node-id=1158%3A2273',
  },
}


export const Column = Template.bind({})
Column.args = {
    layout: 'column',
    children: (
        <>
            <StepTrackerStep completed={true} stepNumber={1} title='Account Creation'/>
            <StepTrackerStep completed={false} stepNumber={2} title='Organization Info'/>
        </>
    )
}
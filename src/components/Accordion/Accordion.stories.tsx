import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Accordion from './Accordion'
import { loremIpsum } from 'lorem-ipsum'
import { IconOptsArr } from '../Icon/Icon.types'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    heading: {
      control: { type: 'string' },
      defaultValue: 'Trigger Heading',
    },
    openIcon: {
      control: { type: 'select' },
      options: IconOptsArr,
      defaultValue: 'minus',
    },
    closeIcon: {
      control: { type: 'select' },
      options: IconOptsArr,
      defaultValue: 'plus',
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: loremIpsum({ count: 10 }),
}
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

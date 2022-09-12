import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { loremIpsum } from 'lorem-ipsum'

import Tabs from './Tabs'
import { map, range } from 'ramda'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

const paragraphs = (count: number) =>
  map(
    (idx) => <p key={idx}>{loremIpsum({ count: 1, units: 'paragraph' })}</p>,
    range(0, count)
  )

export const Default = Template.bind({})
Default.args = {
  accessibleLabel: 'storybook-tabs',
  panels: [
    {
      label: 'test1',
      children: (
        <div>
          <h1>Test 1 Content</h1>
          {paragraphs(5)}
        </div>
      ),
    },
    {
      label: 'test2',
      zeroStateText: 'zero state text',
    },
    {
      label: 'test3',
      children: (
        <div>
          <h1>Test 3 Content</h1>
          <div>{paragraphs(2)}</div>
        </div>
      ),
    },
  ],
}

Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

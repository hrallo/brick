import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Grid from './Grid'
import { loremIpsum } from 'lorem-ipsum'
import { map, range } from 'ramda'

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    column: {
      type: 'number',
      control: {
        type: 'select',
        options: range(1, 24),
        default: 1,
      },
    },
    gap: {
      type: 'number',
      control: {
        type: 'number',
        default: 0,
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid
    {...args}
    column={1}
    columnXs={2}
    columnSm={3}
    columnMd={4}
    columnLg={5}
  />
)

const children = (count: number) =>
  map(
    (idx) => (
      <div
        className='background-color-monochrome-400 padding-xl body1'
        key={idx}
      >
        {loremIpsum({ count: 1, units: 'sentences' })}
      </div>
    ),
    range(0, count)
  )

export const Default = Template.bind({})
Default.args = {
  children: children(12),
}
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

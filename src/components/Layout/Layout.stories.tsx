import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import * as R from 'ramda'

import Layout from './Layout'

const directions = ['row', 'column', 'row-reverse', 'column-reverse']

export default {
  title: 'Components/Layout',
  component: Layout,
  argTypes: {
    direction: {
      options: directions,
      control: { type: 'radio' },
    },
    directionXs: {
      options: directions,
      control: { type: 'radio' },
    },
    directionSm: {
      options: directions,
      control: { type: 'radio' },
    },
    directionMd: {
      options: directions,
      control: { type: 'radio' },
    },
    directionLg: {
      options: directions,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Layout>

const gridBlocks = () => {
  return R.map(
    (range) => (
      <div
        key={range}
        style={{
          backgroundColor: '#eeeeee',
          border: '1px solid #ffffff',
          padding: '10px',
          fontFamily: 'sans-serif',
        }}
      >
        {range}
      </div>
    ),
    R.range(1, 4)
  )
}

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>{gridBlocks()}</Layout>
)

export const Default = Template.bind({})
Default.args = {
  align: 'center',
}

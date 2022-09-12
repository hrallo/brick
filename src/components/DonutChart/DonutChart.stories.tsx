import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import DonutChart from './DonutChart'
import { color } from '../../utils/shared'

export default {
  title: 'Components/DonutChart',
  component: DonutChart,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'large'],
      },
      defaultValue: 'small',
    },
    dataType: {
      control: {
        type: 'select',
        options: ['single', 'multi'],
      },
      defaultValue: 'multi',
    },
    showPercentage: {
      type: 'boolean',
    },
    centerLabelColor: {
      options: color,
      control: { type: 'select' },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof DonutChart>

const Template: ComponentStory<typeof DonutChart> = (args) => (
  <DonutChart {...args} />
)

export const ManyDataPointsDefault = Template.bind({})
ManyDataPointsDefault.args = {
  data: [
    { name: '1-99', value: 50 },
    { name: '100-199', value: 40 },
    { name: '200-299', value: 15 },
    { name: '300-399', value: 12 },
    { name: '400-499', value: 8 },
    { name: '500-599', value: 10 },
    { name: '600+', value: 10 },
  ],
  dataType: 'multi',
  centerLabel: 'Church Size',
  size: 'large',
}
ManyDataPointsDefault.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

export const ManyDataPoints = Template.bind({})
ManyDataPoints.args = {
  data: [
    {
      name: 'This is a long name to test how the tooltip is centered',
      value: 50,
      color: 'green-500',
    },
    { name: '100-199', value: 40, color: 'blue-400' },
    { name: '200-299', value: 15, color: 'pink-400' },
    { name: '300-399', value: 12, color: 'monochrome-800' },
    { name: '400-499', value: 8, color: 'yellow-900' },
    { name: '500-599', value: 10, color: 'navy-700' },
    { name: '600+', value: 10, color: 'red-700' },
  ],
  dataType: 'multi',
  centerLabel: 'Church Size',
  size: 'large',
}

export const SingleDataPointDefault = Template.bind({})
SingleDataPointDefault.args = {
  data: [
    {
      name: 'Financial Score',
      value: 80,
    },
  ],
  dataType: 'single',
  centerLabel: 'Score',
}

export const SingleDataPoint = Template.bind({})
SingleDataPoint.args = {
  data: [
    {
      name: 'Financial Score',
      value: 60,
      color: 'pink-400',
    },
  ],
  dataType: 'single',
  centerLabel: 'Score',
}

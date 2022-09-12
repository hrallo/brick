import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import BarChart from './BarChart'

export default {
  title: 'Components/BarChart',
  component: BarChart,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof BarChart>

const Template: ComponentStory<typeof BarChart> = args => (
  <BarChart {...args} />
)

export const Default = Template.bind({})
Default.args = {
    barData:{
        categoryTitle: 'Categories',
        valueTitle: 'Values',
        data: [
            {category: 'Category 1', value: 12},
            {category: 'Category 2', value: 40},
            {category: 'Category 3', value: 15},
            {category: 'Category 4', value: 50},
        ]
    },
}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/27vLhsCnaqs9hKZmASl3HS/EveryNetwork?node-id=1445%3A55888',
  },
}

export const ManyBars = Template.bind({})
ManyBars.args = {
    barData:{
        categoryTitle: 'Categories',
        valueTitle: 'Values',
        data: [
            {category: 'Category 1', value: 12},
            {category: 'Category 2', value: 40},
            {category: 'Category 3', value: 15},
            {category: 'Category 4', value: 50},
            {category: 'Category 5', value: 12},
            {category: 'Category 6', value: 40},
            {category: 'Category 7', value: 15},
            {category: 'Category 8', value: 50},
        ]
    },
}

export const WithCustomColors = Template.bind({})
WithCustomColors.args = {
    barData:{
        categoryTitle: 'Categories',
        valueTitle: 'Values',
        data: [
            {category: 'Category 11', value: 50, color: 'green-400'},
            {category: 'Category 12', value: 40, color: 'pink-500'},
            {category: 'Category 13', value: 15, color: 'yellow-900'},
            {category: 'Category 14', value: 12, color: 'blue-400'},
        ]
    },
}

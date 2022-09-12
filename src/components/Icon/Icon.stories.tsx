import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { IconOptsArr, IconOpts } from './Icon.types'
import Icon from './Icon'
import { color } from '../../utils/shared'
import * as R from 'ramda'
import Layout from '../Layout'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: IconOptsArr,
      control: { type: 'select' },
      defaultValue: IconOptsArr[0],
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    color: {
      options: color,
      control: { type: 'select' },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'primaryBlack',
  icon: 'activity',
  size: 'md',
}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/09dxVwTZFc98FTk1o9vZkZ/Gloo%2F-Thryve-Design-System?node-id=1116%3A5392',
  },
}

export const all: ComponentStory<typeof Icon> = (args) => (
  <Layout wrap='wrap'>
    {R.map((icon: IconOpts) => {
      return (
        <Layout
          align='center'
          justify='flex-start'
          key={icon}
          style={{ flex: '0 0 20%', padding: '20px 5px', minWidth: '200px' }}
        >
          <Icon icon={icon} />
          <div className='body1' style={{ padding: '0 0 0 10px' }}>
            {icon}
          </div>
        </Layout>
      )
    }, IconOptsArr)}
  </Layout>
)

all.args = {
  color: 'primaryBlack',
  icon: 'activity',
  size: 'md',
}
all.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/09dxVwTZFc98FTk1o9vZkZ/Gloo%2F-Thryve-Design-System?node-id=1116%3A5392',
  },
}

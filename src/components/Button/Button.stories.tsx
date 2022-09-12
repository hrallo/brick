import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { loremIpsum } from 'lorem-ipsum'
import { IconOptsArr } from '../Icon/Icon.types'

import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'primary-outline',
          'secondary',
          'secondary-outline',
        ],
      },
      defaultValue: 'primary',
    },
    size: {
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'large'],
      },
      defaultValue: 'small',
    },
    onClick: {
      type: 'function',
      action: 'onClick',
      table: {
        disable: true,
      },
    },
    disabled: { type: 'boolean', defaultValue: false },
    label: {
      type: 'string',
      defaultValue: loremIpsum({ count: 2, units: 'words' }),
    },
    ariaLabel: {
      type: 'string',
    },
    icon: {
      options: IconOptsArr,
      control: { type: 'select' },
    },
    iconSize: {
      control: {
        type: 'select',
        options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      },
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'select' },
      defaultValue: 'left',
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uEW0L1mGWkyLkyUw1hVYpp/?node-id=1158%3A2235',
  },
}

export const PrimaryOutline = Template.bind({})
PrimaryOutline.args = {
  variant: 'primary-outline',
}
PrimaryOutline.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uEW0L1mGWkyLkyUw1hVYpp/?node-id=1158%3A2235',
  },
}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uEW0L1mGWkyLkyUw1hVYpp/?node-id=1158%3A2235',
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}
Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uEW0L1mGWkyLkyUw1hVYpp/?node-id=1158%3A2235',
  },
}

export const SecondaryOutline = Template.bind({})
SecondaryOutline.args = {
  variant: 'secondary-outline',
}
SecondaryOutline.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uEW0L1mGWkyLkyUw1hVYpp/?node-id=1158%3A2235',
  },
}

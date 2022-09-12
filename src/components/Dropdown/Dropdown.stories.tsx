import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { loremIpsum } from 'lorem-ipsum'

import Dropdown from './Dropdown'
import Button from '../Button'
import { IconOptsArr } from '../Icon/Icon.types'
import MenuButton from '../MenuButton'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    title: {
      control: { type: 'text' },
      description:
        'When using the default trigger element, providing a title will customize the aria-label for better accessibility.',
    },
    toggleIcon: {
      options: IconOptsArr,
      control: { type: 'select' },
      defaultValue: 'more-horizontal',
      description:
        'If you are not using a custom trigger element, you can provide an icon for the default button.',
    },
    toggleElement: {
      description:
        'Provide any element to trigger a dropdown menu. Providing a custom element will make the menu state external, meaning it will need to be controlled via the `open` prop.',
    },
    open: {
      description:
        'If a toggleElement is provided, the menu state must be controlled via this prop.',
    },
    children: {
      description: 'Included children will be contained in the dropdown menu.',
    },
    onEsc: {
      description:
        'If a toggleElement is provided, this function will trigger when the escape key is pressed.',
    },
    onExternalClick: {
      description:
        'If a toggleElement is provided, this function will trigger when the escape key is pressed.',
    },
    anchorHorizontal: {
      options: ['left', 'right'],
      control: { type: 'select' },
      defaultValue: 'left',
    },
    anchorVertical: {
      options: ['top', 'bottom'],
      control: { type: 'select' },
      defaultValue: 'bottom',
    },
    closeOnClick: {
      description:
        'When true, the dropdown will close on any click if it it open, regardless of click location. Set this to false if the dropdown includes multi-step interactive content.',
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Dropdown>

const children = () => {
  return (
    <>
      <div className='subheading2 color-navy-700 padding-bottom-lg margin-bottom-md border-bottom-monochrome-500'>
        {loremIpsum({ count: 5, units: 'words' })}
      </div>
      <MenuButton
        icon='link'
        label={loremIpsum({ count: 1, units: 'words' })}
      />
      <MenuButton
        icon='share'
        label={loremIpsum({ count: 3, units: 'words' })}
      />
      <MenuButton
        icon='user'
        label={loremIpsum({ count: 2, units: 'words' })}
      />
    </>
  )
}

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args}>{children()}</Dropdown>
)

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

export const AnchorRight = Template.bind({})
AnchorRight.args = {
  anchorHorizontal: 'right',
}
AnchorRight.decorators = [
  (Story) => (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Story />
    </div>
  ),
]
AnchorRight.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

export const AnchorTop = Template.bind({})
AnchorTop.args = {
  anchorVertical: 'top',
}
AnchorTop.decorators = [
  (Story) => (
    <div style={{ margin: '400px 0 0' }}>
      <Story />
    </div>
  ),
]
AnchorTop.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

const ExternalStateTemplate: ComponentStory<typeof Dropdown> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <Dropdown
      {...args}
      open={open}
      toggleElement={
        <Button label='Open Me!' onClick={() => setOpen(!open)}></Button>
      }
      onEsc={() => setOpen(false)}
      onExternalClick={() => setOpen(false)}
    >
      {children()}
    </Dropdown>
  )
}

export const CustomTriggerElement = ExternalStateTemplate.bind({})
CustomTriggerElement.args = {}
CustomTriggerElement.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

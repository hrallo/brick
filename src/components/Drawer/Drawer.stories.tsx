import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { loremIpsum } from 'lorem-ipsum'

import Drawer from './Drawer'
import Button from '../Button/'
import IconButton from '../IconButton'

export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

export const Default: ComponentStory<typeof Drawer> = (args) => {
  const [defaultOpen, setDefaultOpen] = useState(false)

  return (
    <div>
      <Button label='Open' onClick={() => setDefaultOpen(true)}></Button>
      <Drawer
        {...args}
        open={defaultOpen}
        onEsc={() => setDefaultOpen(false)}
        onExternalClick={() => setDefaultOpen(false)}
        closeEl={
          <IconButton
            ariaLabel='close'
            onClick={() => setDefaultOpen(false)}
            variant='transparent'
            icon={'x'}
          ></IconButton>
        }
      />
    </div>
  )
}

Default.args = {
  title: 'My drawer',
  children: <div>{loremIpsum({ count: 100 })}</div>,
}

Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

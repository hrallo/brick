import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { loremIpsum } from 'lorem-ipsum'

import Modal from './Modal'
import Button from '../Button/'
import Layout from '../Layout'

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Default: ComponentStory<typeof Modal> = (args) => {
  const [defaultOpen, setDefaultOpen] = useState(false)

  return (
    <div>
      <Button label='Open' onClick={() => setDefaultOpen(true)}></Button>
      <Modal
        {...args}
        open={defaultOpen}
        onEsc={() => setDefaultOpen(false)}
        onExternalClick={() => setDefaultOpen(false)}
      />
    </div>
  )
}

Default.args = {
  title: 'My modal',
  children: (
    <>
      <div className='heading3 margin-bottom-lg'>
        {loremIpsum({ count: 3, units: 'words' })}
      </div>
      <div className='body1'>
        {loremIpsum({ count: 2, units: 'paragraph' })}
      </div>
      <Layout justify='flex-end' className='margin-top-lg'>
        <Button
          label='Cancel'
          variant='primary-outline'
          className='margin-right-sm'
        ></Button>
        <Button label='Confirm'></Button>
      </Layout>
    </>
  ),
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uEW0L1mGWkyLkyUw1hVYpp/NetX-Design-System?node-id=1201%3A2067',
  },
}

import React, { useEffect, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import ProgressBar from './ProgressBar'
import IconButton from '../IconButton'

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof ProgressBar>

const Template: ComponentStory<typeof ProgressBar> = (args) => {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      const updated = progress + Math.floor(Math.random() * (12 - 1 + 1) + 1)
      setProgress(updated < 100 ? updated : 100)
    }, 1000)

    if (progress === 100) {
      clearInterval(timer)
    }

    return () => {
      clearInterval(timer)
    }
  })

  return (
    <>
      <ProgressBar {...args} progress={progress} />
      <IconButton
        icon='rewind'
        onClick={() => setProgress(0)}
        className='margin-top-xxl'
      />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

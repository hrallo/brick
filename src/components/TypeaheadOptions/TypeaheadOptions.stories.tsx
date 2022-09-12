import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import * as R from 'ramda'

import TypeaheadOptions from './TypeaheadOptions'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: 'Components/TypeaheadOptions',
  component: TypeaheadOptions,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof TypeaheadOptions>

const Template: ComponentStory<typeof TypeaheadOptions> = (args) => (
  <TypeaheadOptions {...args} style={{ position: 'static' }} />
)

const description = loremIpsum({ count: 1, units: 'sentence' })

export const Default = Template.bind({})
Default.args = {
  options: R.map((idx) => {
    return {
      name: `Option ${idx}`,
      description: description,
    }
  }, R.range(1, 11)),
  visible: true,
  onSelectOption: (option) => console.log(option),
}
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

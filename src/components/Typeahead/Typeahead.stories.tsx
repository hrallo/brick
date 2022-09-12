import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { loremIpsum } from 'lorem-ipsum'
import Typeahead from './Typeahead'
import { TypeaheadOption } from '../TypeaheadOptions/TypeaheadOptions.types'
import { IconOptsArr } from '../Icon/Icon.types'
import { color } from '../../utils/shared'

const options = [
  {
    id: 'red',
    name: 'Red',
    description: loremIpsum({ count: 1, units: 'sentence' }),
  },
  {
    id: 'yellow',
    name: 'Yellow',
    description: loremIpsum({ count: 1, units: 'sentence' }),
  },
  {
    id: 'Blue',
    name: 'Blue',
  },
  {
    id: 'Orange',
    name: 'Orange',
  },
  {
    id: 'Green',
    name: 'Green',
    description: loremIpsum({ count: 1, units: 'sentence' }),
  },
  {
    id: 'Violet',
    name: 'Violet',
  },
  {
    id: 'Red-Orange',
    name: 'Red-Orange',
  },
  {
    id: 'Yellow-Orange',
    name: 'Yellow-Orange',
    description: loremIpsum({ count: 1, units: 'sentence' }),
  },
  {
    id: 'Yellow-Green',
    name: 'Yellow-Green',
    description: loremIpsum({ count: 1, units: 'sentence' }),
  },
  {
    id: 'Blue-Green',
    name: 'Blue-Green',
    description: loremIpsum({ count: 1, units: 'sentence' }),
  },
  {
    id: 'Blue-Violet',
    name: 'Blue-Violet',
  },
  {
    id: 'Red-Violet',
    name: 'Red-Violet',
  },
]

export default {
  title: 'Components/Typeahead',
  component: Typeahead,
  argTypes: {
    dataOptions: {
      control: 'object',
      defaultValue: options,
      description:
        'An array of options for string matches in the typeahead. Each object should contain a name. Id and description are optional.',
    },
    value: {
      control: 'object',
      description:
        'An object containing a name. Id and description are optional.',
    },
    minFilterChars: {
      control: 'number',
      defaultValue: 2,
    },
    icon: {
      options: IconOptsArr,
      control: 'select',
    },
    iconColor: {
      options: color,
      control: 'select',
    },
    showOptionsOnFocus: {
        control: 'boolean',
        defaultValue: false,
    }
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Typeahead>

const Template: ComponentStory<typeof Typeahead> = (args) => {
  const [value, setValue] = useState<TypeaheadOption | undefined>(
    args?.value || undefined
  )

  return (
    <>
      <Typeahead
        {...args}
        value={value}
        dataOptions={options}
        onSelectOption={(value) => setValue(value)}
      />
      {value && <div className='body1'>You've selected {value.name}</div>}
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/27vLhsCnaqs9hKZmASl3HS/EveryNetwork?node-id=1121%3A44559',
  },
}

export const OptionsOnFocus = Template.bind({})
OptionsOnFocus.args = {
    showOptionsOnFocus: true
}

export const Preselected = Template.bind({})
Preselected.args = {
  value: options[0],
}
Preselected.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/27vLhsCnaqs9hKZmASl3HS/EveryNetwork?node-id=1121%3A44559',
  },
}

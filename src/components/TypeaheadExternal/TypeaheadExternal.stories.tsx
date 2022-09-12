import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import * as R from 'ramda'

import TypeaheadExternal from './TypeaheadExternal'
import { loremIpsum } from 'lorem-ipsum'
import { TypeaheadOption } from '../TypeaheadOptions/TypeaheadOptions.types'

export default {
  title: 'Components/TypeaheadExternal',
  component: TypeaheadExternal,
  argTypes: {
    dataOptions: {
      control: 'object',
      defaultValue: [],
      description:
        'An array of options for in the typeahead. Each object should contain a name. Id and description are optional.',
    },
    value: {
      control: 'object',
      description:
        'An object containing a name. Id and description are optional.',
    },
    placeholder: {
      control: 'text',
    },
    onChange: {
      description:
        'Returns the string value as the user types. This can be used to perform a search query and provide dataOptions.',
    },
    onSelectOption: {
      description: 'Returns the the dataOption chosen by the user.',
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof TypeaheadExternal>

const description = loremIpsum({ count: 1, units: 'sentence' })

const Template: ComponentStory<typeof TypeaheadExternal> = (args) => {
  const [selected, setSelected] = useState<TypeaheadOption | undefined>(
    args?.value || undefined
  )

  const [options, setOptions] = useState<TypeaheadOption[] | []>(
    args?.dataOptions || []
  )

  const minSearchChars = 2

  const getOptions = (data: string) => {
    if (data.length >= minSearchChars) {
      setOptions(
        R.map((idx) => {
          return {
            name: `Option ${idx}`,
            description: description,
          }
        }, R.range(1, 11))
      )
    } else {
      setOptions([])
    }
  }

  return (
    <>
      <TypeaheadExternal
        {...args}
        value={selected}
        dataOptions={options}
        onChange={(data) => getOptions(data)}
        onSelectOption={(data) => setSelected(data)}
      />
      {selected && <div className='body1'>You've selected {selected.name}</div>}
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

export const Selected = Template.bind({})
Selected.args = {
  value: {
    name: 'Option 1',
    description: description,
  },
}

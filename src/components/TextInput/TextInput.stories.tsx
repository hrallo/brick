import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import TextInput from './TextInput'
import { loremIpsum } from 'lorem-ipsum'

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    value: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    onChange: { control: { type: 'function' } },
    autoComplete: {
      control: { type: 'select' },
      options: [
        'off',
        'on',
        'name',
        'honorific-prefix',
        'given-name',
        'additional-name',
        'family-name',
        'honorific-suffix',
        'nickname',
        'email',
        'username',
        'new-password',
        'current-password',
        'one-time-code',
        'organization-title',
        'organization',
        'street-address',
        'address-line1',
        'address-line2',
        'address-line3',
        'address-level4',
        'address-level3',
        'address-level2',
        'address-level1',
        'country',
        'country-name',
        'postal-code',
        'cc-name',
        'cc-given-name',
        'cc-additional-name',
        'cc-family-name',
        'cc-number',
        'cc-exp',
        'cc-exp-month',
        'cc-exp-year',
        'cc-csc',
        'cc-type',
        'transaction-currency',
        'transaction-amount',
        'language',
        'bday',
        'bday-day',
        'bday-month',
        'bday-year',
        'sex',
        'tel',
        'tel-country-code',
        'tel-national',
        'tel-area-code',
        'tel-local',
        'tel-extension',
        'impp',
        'url',
        'photo',
      ],
      defaultValue: 'on',
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Name',
  disabled: false,
  value: '',
  type: 'text',
  name: 'Name',
}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uEW0L1mGWkyLkyUw1hVYpp/NetX-Design-System?node-id=1158%3A2273',
  },
}

export const ExternalControl: ComponentStory<typeof TextInput> = (args) => {
  const [value, setValue] = useState(args.value)
  return (
    <TextInput
      {...args}
      onChange={(data) => {
        args?.onChange && args.onChange(data)
        setValue(data)
      }}
      value={value}
    />
  )
}
ExternalControl.args = {
  placeholder: 'Placeholder Text',
  value: 'My value',
}

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Placeholder Text',
  disabled: true,
}

export const Invalid = Template.bind({})
Invalid.args = {
  placeholder: 'Placeholder Text',
  type: 'email',
  errors: [
    loremIpsum({ count: 1, units: 'sentence' }),
    loremIpsum({ count: 1, units: 'sentence' }),
  ],
}

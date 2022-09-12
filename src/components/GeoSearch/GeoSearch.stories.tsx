import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import GeoSearch from './GeoSearch'

export default {
  title: 'Components/GeoSearch',
  component: GeoSearch,
  argTypes: {
    placeholder: {
      description: 'Optionally include placeholder text. Not required.',
    },
    types: {
      description:
        'Filter search results by geographic feature. Defaults to `address,postcode,place`. All options can be found at [mapbox geocoding documentation](https://docs.mapbox.com/api/search/geocoding/#data-types) ',
    },
    country: {
      description:
        'Limit results to one or more countries. Permitted values are [ISO 3166 alpha 2 country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) separated by commas.',
    },
    onSelectResult: {
      type: 'function',
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof GeoSearch>

const Template: ComponentStory<typeof GeoSearch> = (args) => (
  <GeoSearch {...args} />
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Search',
}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/27vLhsCnaqs9hKZmASl3HS/EveryNetwork?node-id=912%3A34716',
  },
}

export const Countries = Template.bind({})
Countries.args = {
  placeholder: 'Search in US',
  country: 'US',
}
Countries.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

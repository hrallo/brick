import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import * as R from 'ramda'

import Table from './Table'
import IconButton from '../IconButton'

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {},
  decorators: [withDesign],
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

const getTableData = () => {
  return R.map((count) => {
    return {
      col1: `Person ${count}`,
      col2: 'role',
      col3: (
        <IconButton
          variant='transparent'
          icon='trash-2'
          className='color-monochrome-600'
        />
      ),
    }
  }, R.range(1, 50))
}

export const Default = Template.bind({})
Default.args = {
  columns: [
    {
      Header: 'Name',
      accessor: 'col1',
    },
    {
      Header: 'Role',
      accessor: 'col2',
    },
    {
      Header: '',
      accessor: 'col3',
      width: 10,
    },
  ],
  data: getTableData(),
}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/27vLhsCnaqs9hKZmASl3HS/EveryNetwork?node-id=1226%3A44315',
  },
}

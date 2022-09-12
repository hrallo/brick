import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Link from './Link'

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {

},
  decorators: [withDesign],
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = args => (
  <Link {...args} />
)

export const Default = Template.bind({})
Default.args = {
    link: '/?path=/story/introduction--page',
    text: 'Want to go to the Introduction page?',
    className: 'link-small color-green-500'
}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uEW0L1mGWkyLkyUw1hVYpp/NetX-Design-System?node-id=1158%3A2273',
  },
}

import React from 'react'

import { TemplateName } from './TemplateName'

export default {
  title: 'TemplateName',
  component: TemplateName,
  parameters: {
    controls: {
      include: [],
      exclude: []
    }
  },
  argTypes: {
  }
}

export const Default = ({}) => <TemplateName />

Default.story = {
  name: 'default'
}

Default.args = {}

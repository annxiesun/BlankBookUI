import React from 'react'
import './DEMO.scss'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  label: 'Button'
}

export const SlideIn = Template.bind({})
SlideIn.args = {
  label: 'Button',
  animation: 'slide',
  hoverColor: 'black',
  hoverBorderColor: 'white',
  size: 'large'
}

export const Underline = Template.bind({})
Underline.args = {
  label: 'Button',
  size: 'small',
  hoverColor: 'dodgerblue',
  hoverSize: '2px',
  hoverAlign: 'end',
  animation: 'slide',
  hoverDirection: 'left',
  border: false
}
export const RightSelectSlide = Template.bind({})
RightSelectSlide.args = {
  label: 'Button',
  hoverColor: 'dodgerblue',
  hoverSize: '2px',
  hoverAlign: 'end',
  animation: 'fade',
  hoverDirection: 'down',
  border: false
}

export const Custom = Template.bind({})
Custom.args = {
  label: 'Button',
  hoverColor: 'dodgerblue',
  hoverSize: '2px',
  hoverAlign: 'start',
  animation: 'fade',
  hoverDirection: 'down',
  border: false,
  hoverNode: <div className='custom-overlay' />
}

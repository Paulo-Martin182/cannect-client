import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    title: 'Teste Heading',
    color: 'primary',
    size: 'medium'
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

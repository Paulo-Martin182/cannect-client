import { Story, Meta } from '@storybook/react'
import Services, { ServicesProps } from '.'
import { mockServices } from './mockServices'

export default {
  title: 'Services',
  component: Services,
  args: {
    attributes: mockServices.map((item) => ({
      text_services: item.attributes.text_services,
      name: item.attributes.name
    }))
  }
} as Meta

export const Default: Story<ServicesProps> = (args) => <Services {...args} />

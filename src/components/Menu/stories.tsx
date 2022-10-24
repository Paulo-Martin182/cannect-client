import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'
import { mockMenu } from './mockMenu'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    menuList: mockMenu
  },
  argTypes: {
    menuList: ''
  }
} as unknown as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

import { Story, Meta } from '@storybook/react'
import theme from 'styles/theme'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: {
    color: 'white',
    fullWidth: true
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: `${theme.colors.mainBg}` },
        { name: 'dark', value: '#041409e6' }
      ]
    }
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />

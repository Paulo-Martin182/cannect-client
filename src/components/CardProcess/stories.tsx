import { Story, Meta } from '@storybook/react'
import CardProcess from '.'

export default {
  title: 'CardProcess',
  component: CardProcess
} as Meta

export const Default: Story = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100%'
    }}
  >
    <CardProcess />
  </div>
)

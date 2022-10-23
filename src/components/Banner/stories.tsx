import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://cdn.pixabay.com/photo/2019/09/11/21/23/cbd-4469987_960_720.jpg',
    title: 'Seu caminho para uma vida melhor',
    subtitle:
      'Ajudamos você a iniciar seu tratamento com <strong>cannabis</strong>  medicinal',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<BannerProps>

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

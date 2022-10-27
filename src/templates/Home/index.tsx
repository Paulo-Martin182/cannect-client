import AboutUs from 'components/AboutUs'
import Banner from 'components/Banner'
import CardProcess from 'components/CardProcess'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import Services, { ServicesDataProps } from 'components/Services'
import WhatCannabis from 'components/WhatCannabis'
import { AboutUsProps } from '../../components/AboutUs'
import { BannerProps } from '../../components/Banner'
import { MenuLinks } from '../../components/Menu'
import Testimonial from '../../components/Testimonial'
import { WhatCannabisProps } from '../../components/WhatCannabis'

import * as S from './styles'

export type HomeTemplateProps = {
  menuItems: MenuLinks[]
  bannerItem: BannerProps
  aboutItem: AboutUsProps
  whatCannabisItem: WhatCannabisProps
  servicesItem: ServicesDataProps[]
}

const Home = ({
  menuItems,
  bannerItem,
  aboutItem,
  whatCannabisItem,
  servicesItem
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu menuList={menuItems} />
      <S.SectionBanner>
        <Banner {...bannerItem} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container className="processo">
        <Heading title="Cuidamos de você em todo processo" />
        <CardProcess />
      </Container>
    </S.SectionNews>

    <Container withPadding>
      <AboutUs {...aboutItem} />
    </Container>

    <S.SectionCannabis>
      <Container>
        <WhatCannabis {...whatCannabisItem} />
      </Container>
    </S.SectionCannabis>

    <S.SectionServices>
      <Container>
        <Services attributes={servicesItem} />
      </Container>
    </S.SectionServices>

    <S.SectionNotice>
      <Container withPadding>
        <Testimonial />
      </Container>
    </S.SectionNotice>

    <Footer />
  </section>
)

export default Home

import AboutUs from 'components/AboutUs'
import { mockAbout } from 'components/AboutUs/mockAbout'
import Banner from 'components/Banner'
import { mockBanner } from 'components/Banner/mockBanner'
import CardProcess from 'components/CardProcess'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import { mockMenu } from 'components/Menu/mockMenu'
import WhatCannabis from 'components/WhatCannabis'
import { mockCannabis } from 'components/WhatCannabis/mockCannabis'

import * as S from './styles'

const Home = () => (
  <section>
    <Container>
      <Menu menuList={mockMenu} />
      <S.SectionBanner>
        <Banner {...mockBanner} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container className="processo">
        <Heading title="Cuidamos de você em todo processo" />
        <CardProcess />
      </Container>
    </S.SectionNews>

    <Container>
      <AboutUs {...mockAbout.attributes} />
    </Container>

    <S.SectionCannabis>
      <Container>
        <WhatCannabis {...mockCannabis.attributes} />
      </Container>
    </S.SectionCannabis>
  </section>
)

export default Home

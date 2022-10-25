import Banner from 'components/Banner'
import { mockBanner } from 'components/Banner/mockBanner'
import CardProcess from 'components/CardProcess'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import { mockMenu } from 'components/Menu/mockMenu'

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
  </section>
)

export default Home

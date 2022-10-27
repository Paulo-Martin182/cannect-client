import AnimatedIcon from '../animations'
import { mockServices } from './mockServices'
import * as S from './styles'

export type ServicesDataProps = {
  text_services: string
  name: string
}

export type ServicesProps = {
  attributes: ServicesDataProps[]
}

const mock = mockServices.map((item) => ({
  text_services: item.attributes.text_services,
  name: item.attributes.name
}))

const Services = ({ attributes = [] }: ServicesProps) => (
  <S.Wrapper>
    <h3 className="title">Serviços</h3>
    <div className="content">
      {attributes.map((item, index) => (
        <div key={index} className="card">
          <AnimatedIcon name={item.name} />
          <S.Text dangerouslySetInnerHTML={{ __html: item.text_services }} />
        </div>
      ))}
    </div>
    <div className="content-link"></div>
  </S.Wrapper>
)

export default Services

import AnimatedIcon from '../animations'
import { mockServices } from './mockServices'
import * as S from './styles'

const Services = () => (
  <S.Wrapper>
    <h3 className="title">Serviços</h3>
    <div className="content">
      {mockServices.map((item) => (
        <div key={item.id} className="card">
          <AnimatedIcon name={item.attributes.name} />
          <S.Text
            dangerouslySetInnerHTML={{ __html: item.attributes.text_services }}
          />
        </div>
      ))}
    </div>
    <div className="content-link"></div>
  </S.Wrapper>
)

export default Services

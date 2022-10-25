/* eslint-disable @next/next/no-img-element */
import { mockProcess } from './mockProcess'
import * as S from './styles'

const CardProcess = () => (
  <S.Wrapper>
    <div className="process-cardBox">
      {mockProcess.map((item) => (
        <div className="process-card" key={item.id}>
          <div className="process-imgBx">
            <img src="design.png" />
          </div>
          <div className="process-content">
            <S.Text
              dangerouslySetInnerHTML={{ __html: item.attributes.text }}
            />
          </div>
        </div>
      ))}
    </div>

    <div className="process-linkBox">
      <p>
        Quer saber mais? Mande uma mensagem para alguém do
        <a href="#">time cannect.</a>
      </p>
    </div>
  </S.Wrapper>
)

export default CardProcess

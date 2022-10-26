import * as S from './styles'
import { mockFooter } from './mockFooter'
import { SelectIcon } from 'utils/selectIcons'

const Footer = () => (
  <S.Wrapper>
    <div className="footer-basic">
      <footer>
        <div className="social">
          {mockFooter.map((item) => (
            <a key={item.id} href="#">
              {SelectIcon(item.attributes.icon)}
            </a>
          ))}
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Services</a>
          </li>
          <li className="list-inline-item">
            <a href="#">About</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p className="copyright">Company Name © 2018</p>
      </footer>
    </div>
  </S.Wrapper>
)

export default Footer

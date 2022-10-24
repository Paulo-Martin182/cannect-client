import Logo from 'components/Logo'
import { mockMenu } from './mockMenu'
import * as S from './styles'

export type MenuLinks = {
  title: string
  link: string
}

export type MenuProps = {
  menuList: MenuLinks[]
}

const Menu = ({ menuList = mockMenu }: MenuProps) => (
  <S.Wrapper>
    <div className="menu-logoContainer">
      <Logo color="white" fullWidth />
    </div>
    <ul className="menu-list">
      {menuList.map((item) => (
        <li className="menu-list-item" key={item.title}>
          {item.title}
        </li>
      ))}
    </ul>
  </S.Wrapper>
)

export default Menu

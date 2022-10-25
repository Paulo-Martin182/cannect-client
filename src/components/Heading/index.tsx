import * as S from './styles'

export type HeadingProps = {
  title: string
  size?: 'small' | 'medium' | 'xxlarge'
  color?: 'primary' | 'black' | 'white'
}

const Heading = ({
  title,
  color = 'primary',
  size = 'xxlarge'
}: HeadingProps) => (
  <S.Wrapper color={color} size={size}>
    <h2 className="title"> {title} </h2>
  </S.Wrapper>
)

export default Heading

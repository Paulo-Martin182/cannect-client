/* eslint-disable @next/next/no-img-element */
import { mockCannabis } from './mockCannabis'
import * as S from './styles'

export type WhatCannabisProps = {
  title: string
  text: string
  image?: string
  asLink: string
  linkText: string
}

const WhatCannabis = ({
  title = mockCannabis.attributes.title,
  text = mockCannabis.attributes.text,
  image = '/bgs/cannabis.png',
  asLink,
  linkText
}: WhatCannabisProps) => (
  <S.Wrapper>
    <div className="content">
      <h3 className="title">{title}</h3>
      <S.Text dangerouslySetInnerHTML={{ __html: text }} />
      <S.TextLink onClick={() => console.log(asLink)}>{linkText}</S.TextLink>
    </div>
    <div className="imageBox">
      <img src={image} aria-label={title} />
    </div>
  </S.Wrapper>
)

export default WhatCannabis

import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

type headingStyleProps = Pick<HeadingProps, 'color' | 'size'>

export const Wrapper = styled.main<headingStyleProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};

    .title {
      position: relative;
      font-size: calc(${theme.font.sizes.large} * 2);
    }
    .title:after {
      content: '';
      position: absolute;
      width: 5px;
      height: 25px;
      border-radius: 20px;
      background: ${theme.colors.primary};
      top: 27%;
      left: -15px;
    }

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
    `}
  `}
`

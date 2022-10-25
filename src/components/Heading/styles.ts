import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

type headingStyleProps = Pick<HeadingProps, 'color' | 'size'>

export const Wrapper = styled.main<headingStyleProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes[size!]};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
    `}
  `}
`

import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const WrapperModifier = {
  fullWidth: () => css`
    width: 100%;
    height: 100%;
    padding-top: 15px;
  `
}

export const Wrapper = styled.main<LogoProps>`
  ${({ theme, color, fullWidth }) => css`
    color: ${theme.colors[color!]};
    display: flex;
    justify-content: center;
    align-items: center;

    ${!!fullWidth && WrapperModifier.fullWidth}
  `}
`

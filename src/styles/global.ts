import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  ${({ theme, removeBg = false }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      margin: 0;
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      ${!removeBg &&
      css`
        background: ${theme.colors.primary};
      `}
    }
  `}
`

export default GlobalStyles

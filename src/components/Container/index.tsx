import styled, { css, DefaultTheme } from 'styled-components'

export type ContainerProps = {
  withMargin?: boolean
  withPadding?: boolean
}

const wrapperModifiers = {
  withPadding: (theme: DefaultTheme) => css`
    padding-top: ${theme.spacings.xlarge};
    padding-bottom: ${theme.spacings.xlarge};
  `
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, withPadding }) => css`
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
    ${!!withPadding && wrapperModifiers.withPadding(theme)};
  `}
`

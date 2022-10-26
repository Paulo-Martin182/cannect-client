import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .content {
      width: 60%;
    }

    .imageBox {
      padding-top: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .title {
      font-size: calc(${theme.font.sizes.xlarge} * 2);
      font-weight: ${theme.font.bold};
      color: ${theme.colors.primary};
    }
  `}
`
export const Text = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};
    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xxlarge};
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const TextLink = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    text-decoration: underline;
    cursor: pointer;
  `}
`

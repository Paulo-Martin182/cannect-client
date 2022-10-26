import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    .title {
      font-size: calc(${theme.font.sizes.large} * 2);
      color: ${theme.colors.primary};
      position: relative;
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

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 350px;
      height: 200px;
      background: ${theme.colors.mainBg};
      box-shadow: 11px 10px 9px -1px rgba(0, 0, 0, 0.08);
      padding: 15px;
    }
  `}
`

export const Text = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};

    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

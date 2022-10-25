import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;

    .process-cardBox {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    .process-card {
      padding: 0 ${theme.spacings.xxsmall};
      max-width: 300px;
    }

    .process-card .process-imgBx {
      background: ${theme.colors.primary};
      padding: 20px;
      height: 80px;
      width: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .process-card .process-imgBx:after {
      content: '';
      width: 180%;
      height: 1.5px;
      position: absolute;
      top: 45%;
      right: -180%;
      background: black;
    }

    .process-card:last-child .process-imgBx:after {
      width: 0;
    }

    .process-linkBox {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: ${theme.spacings.large};
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};

      a {
        margin-left: 5px;
        text-decoration: none;
        color: ${theme.colors.primary};
      }
    }

    ${media.lessThan('medium')`
      .process-cardBox {
        flex-direction: column;
      }

      .process-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .process-card .process-imgBx:after {
        width: 0;
      }
    `}
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
    }
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

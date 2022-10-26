import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;

    .contentBox {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      min-height: 300px;
      color: ${theme.colors.white};
    }

    .about-leftBox {
      width: 50%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      h3 {
        width: 450px;
        font-size: calc(${theme.font.sizes.xlarge} * 2);
        font-weight: ${theme.font.normal};
      }
    }

    .about-rightBox {
      width: 50%;
    }

    .about-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .about-title {
      font-size: calc(${theme.font.sizes.xlarge} * 2);
      margin: 0;
    }

    .about-text {
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.lightGray};
    }

    .about-link {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      a {
        font-size: ${theme.font.sizes.large};
        color: ${theme.colors.mainBg};
      }
    }
  `}
`

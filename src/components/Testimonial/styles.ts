import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
  svg {
        fill: ${theme.colors.black};
        margin-right: 20px;
      }

    .heading-title{
      color: ${theme.colors.primary};
      font-size:calc( ${theme.font.sizes.large} * 2);
      position: relative;
    }

    .heading-title:after {
      content: '';
      position: absolute;
      width: 5px;
      height: 25px;
      border-radius: 20px;
      background: ${theme.colors.primary};
      top: 27%;
      left: -15px;
    }

    .card {
      background: ${theme.colors.white};
      border-radius: 8px;
      margin-bottom: ${theme.spacings.xsmall};
      width: 90% !important;
      overflow: hidden;
      box-shadow: 11px 10px 9px -10px rgba(0,0,0,0.57);


    }

    .imageBox {
      width: 100%;
      img {
        width: 100%;
      }
    }

    .content {
      padding: 10px 20px;
    }

    .content-title{
      color: ${theme.colors.primary};
    }

    .content-text {
      max-height: 150px; /* fallback */
      min-height: 150px;
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      display: -webkit-box;
      &::-webkit-line-clamp: 2; // Quantidade de linhas
      &::-webkit-box-orient: vertical;
    }
  `}
`

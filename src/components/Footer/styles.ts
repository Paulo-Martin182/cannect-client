import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    .footer-basic {
      padding: 40px 0;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    .footer-basic ul {
      padding: 0;
      list-style: none;
      text-align: center;
      font-size: 18px;
      line-height: 1.6;
      margin-bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .footer-basic li {
      padding: 0 10px;
    }

    .footer-basic ul a {
      color: inherit;
      text-decoration: none;
      opacity: 0.8;
    }

    .footer-basic ul a:hover {
      opacity: 1;
    }

    .footer-basic .social {
      text-align: center;
      padding-bottom: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .footer-basic .social {
      a {
        font-size: 16px;
        width: 30px;
        height: 30px;
        line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 50%;
        border: 1px solid #ccc;
        margin: 0 8px;
        color: inherit;
        opacity: 0.75;
        padding: 5px;
      }
    }

    .footer-basic .social > a:hover {
      opacity: 0.9;
    }

    .footer-basic .copyright {
      margin-top: 15px;
      text-align: center;
      font-size: 13px;
      color: ${theme.colors.white};
      margin-bottom: 0;
    }
  `}
`

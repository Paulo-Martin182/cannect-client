import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 4px 12px;

    .menu-logoContainer {
      width: 250px;
    }

    .menu-list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .menu-list-item {
      color: ${theme.colors.white};
      list-style: none;
      margin: 0 16px;
      font-size: ${theme.font.sizes.medium};
      position: relative;
      cursor: pointer;
    }

    .menu-list-item:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: -5px;
      left: 0;
      background-color: ${theme.colors.secondary};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    .menu-list-item:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    ${media.lessThan('medium')`
      justify-content: center;
      .menu-logoContainer {
        width: 150%;
        padding-left: 100px;
      }
      .menu-list {
        display: none;
      }
    `}
  `}
`

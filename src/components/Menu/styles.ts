import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0;

    .menu-logoContainer {
      width: 300px;
    }

    .menu-list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .menu-list-item {
      color: ${theme.colors.mainBg};
      list-style: none;
      margin: 0 16px;
      font-size: ${theme.font.sizes.medium};
      position: relative;
      cursor: pointer;
    }

    .menu-list-item:last-child {
      margin-right: 0;
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

    .menu-list-item:hover {
      color: ${theme.colors.white};
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

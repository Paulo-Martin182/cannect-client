import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

const Sections = styled.section`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);
    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large} 0;
      margin-bottom: -25px;
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionNews = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);
    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}
    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 18rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
    `}
  `}
`
export const SectionCannabis = styled(Sections)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: ${theme.spacings.medium};
      padding-bottom: 10rem;
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(100% 8%, 100% 100%, 0 100%, 0 0);

    `}
  `}
`

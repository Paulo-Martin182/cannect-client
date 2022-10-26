import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

const Sections = styled.section`
  padding: 50px 0;
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
    ${media.greaterThan('medium')`
      padding-top: 12rem;
      padding-bottom: 12rem;
      background-color: ${theme.colors.lightBg};
    `}
  `}
`
export const SectionCannabis = styled(Sections)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-bottom: 0;

      background-color: ${theme.colors.lightBg};
    `}
  `}
`

export const SectionNotice = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: 0;
    background-color: ${theme.colors.lightBg};
  `}
`

export const SectionServices = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: 0;
    background-color: ${theme.colors.lightBg};
  `}
`

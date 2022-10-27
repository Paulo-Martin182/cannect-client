import { gql } from '@apollo/client'

export const getMenus = gql`
  fragment getMenus on MenuEntityResponseCollection {
    data {
      attributes {
        menu_title
        menu_link
      }
    }
  }
`

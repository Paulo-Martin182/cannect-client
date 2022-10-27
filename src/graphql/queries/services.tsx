import { gql } from '@apollo/client'

export const GET_SERVICE = gql`
  query GET_SERVICE {
    services {
      data {
        attributes {
          text_services
          name
        }
      }
    }
  }
`

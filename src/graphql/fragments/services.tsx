import { gql } from '@apollo/client'

export const getServices = gql`
  fragment getServices on ServiceEntityResponseCollection {
    data {
      attributes {
        text_services
        name
      }
    }
  }
`

import { gql } from '@apollo/client'
import { getServices } from '../fragments/services'
import { getMenus } from '../fragments/menu'

export const GET_HOME = gql`
  query queryHome {
    services {
      ...getServices
    }

    menus {
      ...getMenus
    }
  }

  ${getServices}
  ${getMenus}
`

/* eslint-disable @typescript-eslint/no-explicit-any */
import Home from 'templates/Home'
import { GET_HOME } from '../graphql/queries/home'
import { mockBanner } from 'components/Banner/mockBanner'
import { mockAbout } from 'components/AboutUs/mockAbout'
import { mockCannabis } from 'components/WhatCannabis/mockCannabis'
import { HomeTemplateProps } from '../templates/Home'
import { initializeApollo } from '../utils/apollo'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: GET_HOME
  })

  return {
    props: {
      revalidade: 60,
      menuItems: data.menus.data.map((menu: any) => ({
        title: menu.attributes.menu_title,
        link: menu.attributes.menu_link
      })),
      bannerItem: mockBanner,
      aboutItem: mockAbout,
      whatCannabisItem: mockCannabis,
      servicesItem: data.services.data.map((service: any) => ({
        text_services: service.attributes.text_services,
        name: service.attributes.name
      }))
    }
  }
}

import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Facebook } from '@styled-icons/feather/Facebook'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { Twitter } from '@styled-icons/feather/Twitter'
import { Linkedin } from '@styled-icons/feather/Linkedin'
import * as list from 'components/animations/animationFiles/list.json'
import * as suport from 'components/animations/animationFiles/suport.json'
import * as article from 'components/animations/animationFiles/article.json'

export const SelectIcon = (name: string) => {
  if (name === 'instagram') return <Instagram />
  if (name === 'facebook') return <Facebook />
  if (name === 'whatsapp') return <Whatsapp />
  if (name === 'twitter') return <Twitter />
  if (name === 'linkedin') return <Linkedin />
}

export const animationSelected = (item: string) => {
  if (item === 'listagem') return list
  else if (item === 'suporte') return suport
  else if (item === 'conteudo') return article
}

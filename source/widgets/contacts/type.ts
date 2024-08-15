import { DetailedHTMLProps, HTMLAttributes } from 'react'
// import { personListItem } from '@/shared/ui/person-list/types'

export interface contactsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  //   expertList: personListItem[]
  // item: any
  contactInfo: {
    bgname: string
    link: string
    text: string
  }[]
  documents: {
    name: string
    link: string
  }[]
}

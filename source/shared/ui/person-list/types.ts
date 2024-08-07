import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { StaticImageData } from 'next/image'

export interface personListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  listItems: personListItem[]
}

export interface personListItem {
  photo: string | StaticImageData
  name: string
  info: string
}

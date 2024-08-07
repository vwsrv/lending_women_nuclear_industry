import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { StaticImageData } from 'next/image';

export interface personListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
    listItems: personListItem[]
    // listItems: Array<object>,
    // variant?: 'violet' | 'blue' | 'white'
  }

export interface personListItem {
  photo: string | StaticImageData,
  name: string,
  info: string,
}
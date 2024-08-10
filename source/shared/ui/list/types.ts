import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  points: string[]
  textAlign?: 'left' | 'right'
}

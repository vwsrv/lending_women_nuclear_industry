import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IBulletListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  points: string[]
}

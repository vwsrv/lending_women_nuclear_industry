import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface INominationsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  nominations: string[]
  specNomination: string
}

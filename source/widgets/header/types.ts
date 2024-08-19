import { HTMLAttributes, DetailedHTMLProps } from 'react'

export interface headerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  description: string
}

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export interface buttonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'violet' | 'blue' | 'white'
}

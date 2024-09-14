import { InputHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react'

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string
  type?: 'email' | string
  value: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

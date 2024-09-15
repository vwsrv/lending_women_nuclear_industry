import { InputHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react'

export interface typeInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  name: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  type?: 'email' | string
}

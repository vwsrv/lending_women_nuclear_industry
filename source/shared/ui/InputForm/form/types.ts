import { DetailedHTMLProps, FormEvent, HTMLAttributes, ReactNode } from 'react'

export interface FormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  children: ReactNode
}

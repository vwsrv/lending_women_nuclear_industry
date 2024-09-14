import { ChangeEvent, FormEvent } from 'react'

export interface inputProps {
  name: string
  type?: 'email' | string
  value: string
  placeholder: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

import { ChangeEvent, FormEvent } from 'react'

export interface inputProps {
  name: string
  type?: 'email' | string
  value: string
  placeholder: string
  emailContent: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit:  (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

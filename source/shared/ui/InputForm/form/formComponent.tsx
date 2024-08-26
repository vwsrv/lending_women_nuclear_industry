import React, { FormEvent } from 'react'
import { FormProps } from './types'
import { Button } from '../../button'

export const FormComponent: React.FC<FormProps> = ({ onSubmit, children }) => {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(event)
  }

  return (
    <form
      className="text-black rounded-lg px-4 py-1 max-w-sm min-h-16 shadow-inner bg-gray flex items-center space-between m-20"
      onSubmit={handleFormSubmit}
    >
      {children}
      <Button className="btn btn-small btn-violet" disabled={false}>
        Подписаться
      </Button>
    </form>
  )
}

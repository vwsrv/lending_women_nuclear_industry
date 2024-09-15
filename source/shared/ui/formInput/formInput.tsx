import { Button } from '../button'
import React from 'react'
import { inputProps } from './types'

export const formInput: React.FC<inputProps> = ({
  name,
  type = 'email',
  placeholder,
  value,
  onSubmit,
  onChange
}) => {
  return (
    <form
      className="text-black rounded-lg px-4 py-1 max-w-sm min-h-16 shadow-inner bg-gray flex items-center space-between"
      onSubmit={onSubmit}
    >
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent w-full focus:outline-none overflow-hidden text-ellipsis whitespace-nowrap"
      />
      <Button>Подписаться</Button>
    </form>
  )
}

'use client'

import { InputProps } from './types'

export const InputComponent: React.FC<InputProps> = ({
  name,
  type = 'email',
  value,
  required,
  placeholder,
  onChange
}) => {
  return (
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-transparent w-full focus:outline-none overflow-hidden text-ellipsis whitespace-nowrap"
    />
  )
}

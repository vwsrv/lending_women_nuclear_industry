'use client'

import { Button } from '../../shared/ui/button'
import React from 'react'
import { inputProps } from './types'

export const Form: React.FC<inputProps> = ({
  name,
  type = 'email',
  placeholder,
  value,
  emailContent, // Когда данные отправлены на сервер - компонент не отрисовывается
  onSubmit,
  onChange
}) => {
  return (
    !emailContent && (
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
        <Button className="btn btn-indigo">Подписаться</Button>
      </form>
    )
  )
}

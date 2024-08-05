'use client'

import React from 'react'
import { IListProps } from './types'

export const List: React.FC<IListProps> = ({ points, textAlign = 'left' }) => {
  return (
    <ul className={`list-none flex flex-col`}>
      {points.map((point, index) => {
        return (
          <li
            key={index}
            className={`text-white text-xl font-bold leading-10 uppercase ${textAlign === 'right' ? 'ml-auto' : ''}`}
          >
            {point}
          </li>
        )
      })}
    </ul>
  )
}

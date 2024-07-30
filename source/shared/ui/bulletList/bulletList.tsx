'use client'

import React from 'react'
import { IBulletListProps } from './types'

export const BulletList: React.FC<IBulletListProps> = ({ points }) => {
  return (
    <ul className="list-none flex flex-col gap-2">
      {points.map((point, index) => {
        return (
          <li
            key={index}
            className="
            text-indigo-950
            text-xl font-normal leading-10
            center
            before:content-['']
            before:inline-block
            before:w-2.5
            before:h-2.5
            before:rounded-full
            before:bg-indigo-900
            before:mr-2"
          >
            {point}
          </li>
        )
      })}
    </ul>
  )
}

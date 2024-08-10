'use client'

import React from 'react'
import { List } from '@/source/shared/ui/list'
import { INominationsProps } from './types'

export const Nominations: React.FC<INominationsProps> = ({
  nominations,
  specNomination
}) => {
  const mid =
    nominations.length % 2 === 0
      ? Math.ceil(nominations.length / 2)
      : Math.floor(nominations.length / 2)

  const firstHalf = nominations.slice(0, mid)
  const secondHalf = nominations.slice(mid)

  return (
    <div
      className="bg-indigo pt-14 pr-20 pl-20 pb-20 relative overflow-hidden
    after:content-[url('/nominee.svg')]
            after:inline-block
            after:w-100
            after:h-100
            after:mr-2
            after:absolute
            after:-bottom-10
            after:-right-11
    "
    >
      <h2 className="uppercase text-6xl font-bold leading-10 mb-10 text-gray text-opacity-50">
        {nominations.length + (!!specNomination ? 1 : 0)} НОМИНАЦИЙ
      </h2>
      <div className="flex flex-wrap">
        <div>
          <List points={firstHalf} />
          <p className="uppercase text-2xl font-bold leading-10 text-magenta">
            {specNomination}
          </p>
        </div>
        <div className="-ml-80">
          <List points={secondHalf} textAlign="right" />
        </div>
      </div>
    </div>
  )
}

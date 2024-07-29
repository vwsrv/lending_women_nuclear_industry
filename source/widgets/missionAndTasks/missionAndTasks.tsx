'use client'

import React from 'react'
import { BulletList } from '@/source/shared/ui/bulletList'
import { IMissionAndTasksProps } from './types'

export const MissionAndTasks: React.FC<IMissionAndTasksProps> = ({
  missions,
  tasks
}) => {
  return (
    <div className="flex gap-14 w-full flex-wrap justify-center">
      <div>
        <h2 className="uppercase text-6xl font-bold leading-10 mb-10 text-indigo-950">
          Миссия
        </h2>
        <BulletList points={missions}></BulletList>
      </div>
      <div>
        <h2 className="uppercase text-6xl font-bold leading-10 mb-10 text-indigo-950">
          Задачи
        </h2>
        <BulletList points={tasks}></BulletList>
      </div>
    </div>
  )
}

import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IMissionAndTasksProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  missions: string[]
  tasks: string[]
}

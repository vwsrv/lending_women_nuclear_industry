import { StaticImageData } from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface projectResultsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string
  subtitle: string
  items: {
    number: string
    text: string
  }[]
  img: StaticImageData
}

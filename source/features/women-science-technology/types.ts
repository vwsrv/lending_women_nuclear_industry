import { StaticImageData } from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface womenScienceTechnologyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string
  subtitle: string
  paragraph: string
  img: StaticImageData
}

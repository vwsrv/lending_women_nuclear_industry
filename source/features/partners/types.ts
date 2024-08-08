import { StaticImageData } from 'next/image'
import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react'

export interface partnersProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement> {
  partners: {
    title: string
    images: StaticImageData[]
  }
  info: {
    title: string
    images: StaticImageData[]
  }
}

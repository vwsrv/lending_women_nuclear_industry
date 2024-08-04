import { StaticImageData } from 'next/image'
import { HTMLAttributes, DetailedHTMLProps } from 'react'

export interface headerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  titleImage: StaticImageData
  cloudMoleculeImage: StaticImageData
  womenImage: StaticImageData
  description: string
  colbaImage: StaticImageData
}

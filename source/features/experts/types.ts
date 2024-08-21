import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { personListItem } from '@/shared/ui/person-list/types'

export interface expertsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  // expertList: personListItem[]
}

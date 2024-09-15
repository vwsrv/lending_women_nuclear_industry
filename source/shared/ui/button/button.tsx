'use client'

import { buttonProps } from './types'

export const Button: React.FC<buttonProps> = ({
  variant = 'violet',
  children,
  disabled,
  ...otherProps
}) => {
  return (
    <button disabled={disabled} className="btn" {...otherProps}>
      {children}
    </button>
  )
}

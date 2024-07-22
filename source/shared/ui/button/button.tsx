import { buttonProps } from './types'

export const Button: React.FC<buttonProps> = ({
  variant = 'violet',
  children,
  disabled,
  className,
  ...otherProps
}) => {
  return (
    <button disabled={disabled} className={className} {...otherProps}>
      {children}
    </button>
  )
}

import { typeInputProps } from './types'

export const InputComponent: React.FC<typeInputProps> = ({
  label,
  name,
  type = 'email',
  required,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <label className="bg-gray-default rounded text-gray-dark">
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="px-8 py-16"
      />
    </label>
  )
}

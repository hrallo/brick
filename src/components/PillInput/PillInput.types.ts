import { PillProps } from '../Pill/Pill.types'

export interface PillInputProps {
  variant?: 'primary' | 'secondary'
  pillVariant?: PillProps['variant']
  value?: string[]
  placeholder?: string
  errors?: string[]
  required?: boolean
  className?: string
  style?: React.CSSProperties
  name?: string
  onChange?: (pills: string[]) => void
  onBlur?: (pills: string[], value: string) => void
}

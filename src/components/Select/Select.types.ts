import { AutoCompleteOpts } from '../TextInput/TextInput.types'

export type SelectOption = {
  value: string
  label?: string
  disabled?: boolean
  selected?: boolean
}
export interface SelectProps {
  disabled?: boolean
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: SelectOption[]
  value?: string
  className?: string
  errors?: string[]
  variant?: 'primary' | 'secondary'
  autoComplete?: AutoCompleteOpts
}

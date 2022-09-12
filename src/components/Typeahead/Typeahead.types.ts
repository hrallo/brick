import { IconProps } from './../Icon/Icon.types'
import { TextInputProps } from './../TextInput/TextInput.types'
import { TypeaheadOption } from '../TypeaheadOptions/TypeaheadOptions.types'

export interface TypeaheadProps {
  dataOptions: TypeaheadOption[]
  placeholder?: string
  value?: TypeaheadOption
  minFilterChars?: number
  showOptionsOnFocus?: boolean
  onSelectOption?: (data: TypeaheadOption) => void
  inputVariant?: TextInputProps['variant']
  className?: string
  icon?: IconProps['icon']
  iconColor?: IconProps['color']
}

import { TypeaheadOption } from '../TypeaheadOptions/TypeaheadOptions.types'

export interface TypeaheadExternalProps {
  dataOptions: TypeaheadOption[]
  placeholder?: string
  value?: TypeaheadOption
  onSelectOption?: (data: TypeaheadOption) => void
  onChange?: (data: string) => void
}

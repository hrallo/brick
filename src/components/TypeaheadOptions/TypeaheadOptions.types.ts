import { MouseEvent } from 'react'

export type TypeaheadOption = {
  id?: string
  name: string
  description?: string
  selected?: boolean
}

export interface TypeaheadOptionsProps {
  options: TypeaheadOption[]
  onSelectOption: (data: TypeaheadOption) => void
  onMouseOut?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseOver?: (e: MouseEvent<HTMLDivElement>) => void
  visible: boolean
  style?: React.CSSProperties
}

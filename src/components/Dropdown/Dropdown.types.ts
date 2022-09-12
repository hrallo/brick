import { IconOpts } from './../Icon/Icon.types'
export interface DropdownProps {
  title?: string
  toggleElement?: React.ReactNode
  children: React.ReactNode
  toggleIcon?: IconOpts
  open?: boolean
  onEsc?: () => void
  onExternalClick?: () => void
  anchorHorizontal?: 'left' | 'right'
  anchorVertical?: 'top' | 'bottom'
  className?: string
  closeOnClick: boolean
}

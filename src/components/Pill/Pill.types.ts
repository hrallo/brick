import { IconOpts } from './../Icon/Icon.types'
export interface PillProps {
  label: string
  onClick?: () => void
  variant?: 'pill' | 'tag'
  icon?: IconOpts
  className?: string
}

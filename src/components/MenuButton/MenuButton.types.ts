import { IconOpts, IconProps } from './../Icon/Icon.types'

export interface MenuButtonProps {
  label?: string
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
  icon?: IconOpts
  iconSize?: IconProps['size']
  iconColor?: string
  className?: string
}

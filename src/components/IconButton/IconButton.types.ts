import { IconOpts, IconProps } from './../Icon/Icon.types'

export interface IconButtonProps {
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
  icon: IconOpts
  iconSize?: IconProps['size']
  className?: string
  variant?: 'primary' | 'transparent'
  style?: React.CSSProperties
  size?: 'small' | 'medium'
}

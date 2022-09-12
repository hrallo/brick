import { IconOpts, IconProps } from './../Icon/Icon.types'

export interface ButtonProps {
  variant?: 'primary' | 'primary-outline' | 'secondary' | 'secondary-outline'
  label?: string
  onClick?: () => void
  disabled?: boolean
  children?: React.ReactNode
  ariaLabel?: string
  size?: 'xsmall' | 'small' | 'large'
  icon?: IconOpts
  iconSize?: IconProps['size']
  iconColor?: string
  iconPosition?: 'left' | 'right'
  className?: string
  type?: 'submit' | 'reset' | 'button'
  style?: React.CSSProperties
}

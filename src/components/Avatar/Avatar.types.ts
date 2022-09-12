import { IconOpts } from '../Icon/Icon.types'

export interface AvatarProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
  children?: React.ReactNode
  backgroundColor?: string
  color?: string
  icon?: IconOpts
}

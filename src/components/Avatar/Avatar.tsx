import React, { FC } from 'react'
import styles from './Avatar.module.scss'
import '../../styles/paver.scss'
import { AvatarProps } from './Avatar.types'
import Icon from '../Icon'
import Layout from '../Layout'

export const Avatar: FC<AvatarProps> = ({
  size = 'medium',
  className,
  children,
  backgroundColor = 'monochrome-400',
  color = 'monochrome-700',
  icon = 'user',
}) => {
  enum iconSize {
    small = 'sm',
    medium = 'md',
    large = 'lg',
  }

  return (
    <Layout
      justify='center'
      align='center'
      className={[
        styles.Avatar,
        styles[size],
        `background-color-${backgroundColor}`,
        `color-${color}`,
        'border-radius-full',
        className,
      ].join(' ')}
      data-testid='Avatar'
    >
      {children ? children : <Icon icon={icon} size={iconSize[size]}></Icon>}
    </Layout>
  )
}

export default Avatar

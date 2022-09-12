import React, { FC } from 'react'
import styles from './Icon.module.scss'
import '../../styles/paver.scss'
import { IconProps } from './Icon.types'

export const Icon: FC<IconProps> = ({
  icon = 'activity',
  size,
  color,
  className,
}) => (
  <i
    data-testid='Icon'
    className={[
      styles.Icon,
      styles[icon],
      color && `color-${color}`,
      size && styles[size],
      className,
    ].join(' ')}
  ></i>
)

export default Icon

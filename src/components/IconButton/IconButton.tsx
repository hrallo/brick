import React, { FC } from 'react'
import styles from './IconButton.module.scss'
import '../../styles/paver.scss'
import { IconButtonProps } from './IconButton.types'
import Icon from '../Icon'

export const IconButton: FC<IconButtonProps> = ({
  onClick,
  variant = 'primary',
  disabled,
  ariaLabel,
  icon,
  iconSize = 'sm',
  className,
  style,
  size = 'medium',
  ...props
}) => {
  return (
    <button
      data-testid='IconButton'
      type='button'
      style={style}
      className={[
        styles.IconButton,
        styles[variant],
        styles[size],
        'button',
        'text-align-center',
        className,
      ].join(' ')}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {icon && <Icon icon={icon} size={iconSize} />}
    </button>
  )
}

export default IconButton

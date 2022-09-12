import React, { FC } from 'react'
import Icon from '../Icon'
import { IconOpts } from '../Icon/Icon.types'

import styles from './Button.module.scss'
import { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  label,
  onClick,
  disabled,
  children,
  ariaLabel,
  size = 'small',
  icon,
  iconColor,
  iconSize,
  iconPosition = 'left',
  className,
  type = 'button',
  style,
  ...props
}) => {
  const getIcon = (icon: IconOpts) => {
    return <Icon icon={icon} color={iconColor} size={iconSize} />
  }

  const getIconSpacing = () => {
    return icon && (label || children) && `margin-${iconPosition}-md`
  }

  return (
    <button
      type={type}
      className={[
        styles.button,
        styles[variant],
        styles[size],
        'button',
        'text-align-center',
        className,
      ].join(' ')}
      {...props}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || label}
      data-testid='Button'
      style={style}
    >
      {icon && iconPosition === 'left' && getIcon(icon)}
      <div className={getIconSpacing() || ''}>
        {label}
        {children}
      </div>
      {icon && iconPosition === 'right' && getIcon(icon)}
    </button>
  )
}

export default Button

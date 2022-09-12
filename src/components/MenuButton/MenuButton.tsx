import React, { FC } from 'react'
import styles from './MenuButton.module.scss'
import '../../styles/paver.scss'
import { MenuButtonProps } from './MenuButton.types'
import Icon from '../Icon'

export const MenuButton: FC<MenuButtonProps> = ({
  label,
  onClick,
  disabled,
  ariaLabel,
  icon,
  iconColor,
  iconSize = 'md',
  className,
  ...props
}) => {
  return (
    <button
      data-testid='MenuButton'
      type='button'
      className={[styles.MenuButton, 'button', 'text-align-center'].join(' ')}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || label}
      {...props}
    >
      {icon && <Icon icon={icon} color={iconColor} size={iconSize} />}
      <div className={'margin-left-lg'}>{label}</div>
    </button>
  )
}

export default MenuButton

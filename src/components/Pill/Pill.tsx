import React, { FC } from 'react'
import Icon from '../Icon'
import styles from './Pill.module.scss'
import { PillProps } from './Pill.types'

export const Pill: FC<PillProps> = ({
  label,
  onClick,
  variant = 'pill',
  icon,
  className,
}) => {
  const Wrapper = onClick ? `button` : `div`

  return (
    <Wrapper
      className={[
        styles.pillContainer,
        styles[variant],
        className,
        onClick && styles.clickable,
        variant === 'pill'
          ? 'padding-top-sm padding-bottom-sm padding-left-md padding-right-md'
          : 'padding-top-sm padding-bottom-sm padding-left-lg padding-right-lg',
        variant === 'pill' ? 'pill' : 'body1',
        variant === 'pill' ? 'color-white' : 'color-monochrome-800',
        variant === 'pill'
          ? 'background-color-monochrome-800'
          : 'background-color-monochrome-400',
      ].join(' ')}
      data-testid='Pill'
      onClick={onClick}
    >
      {label}
      {icon && <Icon className={'margin-left-md'} icon={icon} size='xxs' />}
    </Wrapper>
  )
}

export default Pill

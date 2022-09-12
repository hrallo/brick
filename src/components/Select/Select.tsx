import React, { FC, useState } from 'react'
import Icon from '../Icon'
import styles from './Select.module.scss'
import { SelectOption, SelectProps } from './Select.types'
import * as R from 'ramda'

export const Select: FC<SelectProps> = ({
  disabled,
  name,
  onChange,
  value,
  options,
  className,
  errors = [],
  variant = 'primary',
  autoComplete = 'on',
  ...props
}) => {
  const [selectValue, setSelectValue] = useState(value || '')
  const iconColor = variant === 'secondary' ? 'color-monochrome-800' : undefined
  const iconSize = variant === 'primary' ? 'md' : 'sm'

  const getValue = () => {
    return value != undefined ? value : selectValue
  }

  return (
    <div className={styles.componentWrapper}>
      <div className={[styles.selectWrapper, className].join(' ')}>
        <select
          autoComplete={autoComplete}
          data-testid='Select'
          aria-label={name}
          name={name}
          disabled={disabled}
          onChange={onChange}
          {...props}
          value={getValue()}
          className={[
            styles.Select,
            styles[variant],
            'body1',
            errors.length > 0 ? styles.invalid : styles.valid,
          ].join(' ')}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label || option.value}
            </option>
          ))}
        </select>
        <Icon
          icon='chevron-down'
          color={iconColor}
          className={styles.icon}
          size={iconSize}
        ></Icon>
      </div>
      {R.map((error) => {
        return (
          <div
            className='body1 color-red-700 margin-top-md'
            key={R.indexOf(error, errors)}
          >
            {error}
          </div>
        )
      }, errors)}
    </div>
  )
}

export default Select

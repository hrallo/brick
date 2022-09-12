import React, { FC, useState } from 'react'
import styles from './TextInput.module.scss'
import { TextInputProps } from './TextInput.types'
import * as R from 'ramda'

export const TextInput: FC<TextInputProps> = ({
  disabled,
  name,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  value,
  className,
  style,
  type = 'text',
  errors = [],
  autoComplete = 'on',
  step,
  variant = 'primary',
  required,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || '')
  const setValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)
    return onChange && onChange(event.currentTarget.value)
  }

  const getValue = () => {
    return value != undefined ? value : inputValue
  }

  return (
    <div className={[styles.inputWrapper, className].join(' ')}>
      <input
        className={[
          styles.TextInput,
          styles[variant],
          'body1',
          errors.length > 0 ? styles.invalid : styles.valid,
        ].join(' ')}
        data-testid='TextInput'
        aria-label={name}
        name={name}
        disabled={disabled}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event)
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        type={type}
        value={getValue()}
        style={style}
        autoComplete={autoComplete}
        step={step}
        required={required}
        {...props}
      />
      {required && (
        <div className='body2 margin-top-xxs color-monochrome-600'>
          Required Field<sup>*</sup>
        </div>
      )}
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

export default TextInput

import React, { FC, useState } from 'react'
import Icon from '../Icon'
import Layout from '../Layout'
import styles from './Checkbox.module.scss'
import { CheckboxProps } from './Checkbox.types'

export const Checkbox: FC<CheckboxProps> = ({
  checked = false,
  className,
  disabled,
  name,
  onChange,
  required,
  label,
  style,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  const setChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.currentTarget.checked)
    onChange && onChange(event)
  }

  const getChecked = () => {
    return checked !== undefined ? checked : isChecked
  }

  return (
    <label
      style={style}
      className={[
        styles.Checkbox,
        disabled ? styles.checkboxDisabled : styles.checkboxAbled,
        className,
      ].join(' ')}
      {...props}
    >
      <Layout
        align='center'
        justify='center'
        className={[
          styles.sham,
          disabled ? styles.shamDisabled : styles.shamAbled,
          getChecked() ? 'background-color-black' : 'background-color-white',
        ].join(' ')}
      >
        {getChecked() && <Icon icon='check' color='white' />}
      </Layout>
      <input
        className={styles.input}
        checked={getChecked()}
        disabled={disabled}
        name={name}
        onChange={(e) => setChecked(e)}
        required={required}
        type='checkbox'
      />
      <div
        className={[
          'body2',
          styles.label,
          disabled ? styles.labelDisabled : styles.labelAbled,
        ].join(' ')}
      >
        {label}
      </div>
    </label>
  )
}

export default Checkbox

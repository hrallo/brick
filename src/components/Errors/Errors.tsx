import React, { FC } from 'react'
import styles from './Errors.module.scss'
import '../../styles/paver.scss'
import { ErrorsProps } from './Errors.types'

export const Errors: FC<ErrorsProps> = ({
  errors = [],
  className,
  errorClassName = 'body1',
  ...props
}) => (
  <ul 
    className={[styles.Errors, className].join(' ')} 
    data-testid='Errors' {...props}>
    {errors.map((error, idx) => (
      <li key={idx} className={errorClassName}>{error}</li>
    ))}
  </ul>
)

export default Errors

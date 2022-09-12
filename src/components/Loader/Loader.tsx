import React, { FC } from 'react'
import styles from './Loader.module.scss'
import { LoaderProps } from './Loader.types'

export const Loader: FC<LoaderProps> = ({
  color = 'navy-700',
  size = 'large',
}) => (
  <div
    className={[styles.Loader, styles[size]].join(' ')}
    role='alert'
    aria-live='assertive'
    data-testid='Loader'
  >
    <div
      className={[
        styles.circle,
        styles.first,
        `background-color-${color}`,
      ].join(' ')}
    ></div>
    <div
      className={[
        styles.circle,
        styles.second,
        `background-color-${color}`,
      ].join(' ')}
    ></div>
    <div className='screen-reader'>loading...</div>
  </div>
)

export default Loader

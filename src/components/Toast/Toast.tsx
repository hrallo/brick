import React, { FC } from 'react'
import styles from './Toast.module.scss'
import '../../styles/paver.scss'
import { ToastProps } from './Toast.types'
import Layout from '../Layout'
import IconButton from '../IconButton'

enum ToastBackground {
  error = 'red-100',
  info = 'navy-100',
  success = 'green-100',
  warn = 'yellow-100',
}

enum ToastColor {
  error = 'red-1000',
  info = 'navy-900',
  success = 'green-1000',
  warn = 'yellow-1000',
}

enum ToastBorder {
  error = 'red-700',
  info = 'navy-700',
  success = 'green-1000',
  warn = 'yellow-900',
}

export const Toast: FC<ToastProps> = ({
  type = 'info',
  autoClose = false,
  children,
  onClickClose,
}) => (
  <Layout
    className={[
      styles.Toast,
      `background-color-${ToastBackground[type]}`,
      `color-${ToastColor[type]}`,
      `border-${ToastBorder[type]}`,
      'padding-top-md',
      'padding-bottom-md',
      'padding-left-xl',
      'padding-right-xl',
      'subheading3',
      'border-radius-sm',
    ].join(' ')}
    data-testid='Toast'
    align='center'
    justify='space-between'
    aria-live='polite'
    role='alert'
  >
    <div
      className={[styles.toastInfo, 'padding-top-md', 'padding-bottom-md'].join(
        ' '
      )}
    >
      {children}
    </div>
    {!autoClose && (
      <IconButton
        icon='x'
        variant='transparent'
        iconSize='md'
        onClick={onClickClose}
      />
    )}
  </Layout>
)

export default Toast

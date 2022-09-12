import { ReactNode } from 'react'

export interface ToastProps {
  type?: 'error' | 'warn' | 'info' | 'success'
  autoClose?: boolean
  children?: ReactNode
  onClickClose?: () => void
}

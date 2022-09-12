import { ReactNode } from 'react'

export interface FadeInOutProps {
  visible: boolean
  children: ReactNode
  delayOut?: number
  delayIn?: number
  className?: string
  id?: string
  role?: string
}

import { AriaRole } from 'react'

export interface GridProps {
  column?: number
  columnXs?: number
  columnSm?: number
  columnMd?: number
  columnLg?: number
  gap?: number
  gapXs?: number
  gapSm?: number
  gapMd?: number
  gapLg?: number
  style?: React.CSSProperties
  className?: string
  children?: React.ReactNode
  role?: AriaRole
}

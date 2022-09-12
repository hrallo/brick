import React, { ReactNode } from 'react'

export interface AccordionProps {
  open?: boolean
  heading: string
  openIcon?: string
  closeIcon?: string
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  onToggle?: (heading: string, open: boolean) => void
}

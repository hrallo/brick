import { CSSProperties, ReactNode } from 'react'

export type Panel = {
  label: string
  children?: ReactNode
  zeroStateText?: string
  className?: string
  style?: CSSProperties
}

export interface TabsProps {
  accessibleLabel: string
  activeTab?: string
  onSelectTab?: (tab: string) => void
  panels: Panel[]
  style?: CSSProperties
  className?: string
}

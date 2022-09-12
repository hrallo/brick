export interface ModalProps {
  title: string
  children?: React.ReactNode
  open?: boolean
  onEsc?: () => void
  className?: string
  onExternalClick?: () => void
  size?: 'small' | 'large'
  style?: React.CSSProperties
}

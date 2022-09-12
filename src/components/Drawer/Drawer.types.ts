export interface DrawerProps {
  title: string
  displayTitle?: React.ReactNode | HTMLElement | string
  children?: React.ReactNode
  open?: boolean
  closeEl?: React.ReactNode
  onEsc?: () => void
  onExternalClick?: () => void
}

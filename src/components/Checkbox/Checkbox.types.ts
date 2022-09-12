export interface CheckboxProps {
  checked?: boolean
  className?: React.HTMLAttributes<HTMLDivElement>['className']
  disabled?: boolean
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  label?: string
  style?: React.CSSProperties
}

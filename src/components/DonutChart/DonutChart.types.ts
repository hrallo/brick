export interface DonutChartDataItem {
  name?: string
  value: number
  color?: string
}
export interface DonutChartProps {
  data: DonutChartDataItem[]
  centerLabel?: string
  centerLabelColor?: string
  showPercentage?: boolean
  size?: 'xsmall' | 'small' | 'large'
  dataType: 'single' | 'multi'
}

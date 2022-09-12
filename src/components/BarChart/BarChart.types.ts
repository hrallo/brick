export interface BarChartDataItem {
    category: string
    value: number
    color?: string
}

export interface BarChartProps {
    barData: { 
        categoryTitle?: string,
        valueTitle?: string,
        data: BarChartDataItem[]
    }
    height?: number
    width?: number
}

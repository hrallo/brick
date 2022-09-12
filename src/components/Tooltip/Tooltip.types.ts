export interface TooltipProps {
    data: {
        title?: string
        content?: string
    }
    titleColor?: string
    coordinates?: { top: number, left: number}
}

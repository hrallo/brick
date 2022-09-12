import { AriaRole } from 'react'

type DirectionOpts = 'row' | 'row-reverse' | 'column' | 'column-reverse'
type AlignOpts = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
type JustifyOpts =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
type WrapOpts = 'nowrap' | 'wrap' | 'wrap-reverse'

export interface LayoutProps {
  style?: React.CSSProperties
  className?: string
  children?: React.ReactNode
  direction?: DirectionOpts
  directionXs?: DirectionOpts
  directionSm?: DirectionOpts
  directionMd?: DirectionOpts
  directionLg?: DirectionOpts
  align?: AlignOpts
  alignXs?: AlignOpts
  alignSm?: AlignOpts
  alignMd?: AlignOpts
  alignLg?: AlignOpts
  justify?: JustifyOpts
  justifyXs?: JustifyOpts
  justifySm?: JustifyOpts
  justifyMd?: JustifyOpts
  justifyLg?: JustifyOpts
  wrap?: WrapOpts
  wrapXs?: WrapOpts
  wrapSm?: WrapOpts
  wrapMd?: WrapOpts
  wrapLg?: WrapOpts
  role?: AriaRole
}

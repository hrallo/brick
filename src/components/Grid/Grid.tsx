import React, { FC, useEffect, useState } from 'react'
import styles from './Grid.module.scss'
import '../../styles/paver.scss'
import { GridProps } from './Grid.types'
import { propForScreenSize, PropSet, ScreenWidth } from '../../utils/helpers'

export const Grid: FC<GridProps> = ({
  column = 1,
  columnXs = column,
  columnSm = columnXs,
  columnMd = columnSm,
  columnLg = columnMd,
  gap = 0,
  gapXs = gap,
  gapSm = gapXs,
  gapMd = gapSm,
  gapLg = gapMd,
  children,
  style,
  className,
  role,
  ...props
}) => {
  const [size, setSize] = useState<number>(0)

  const columns: PropSet = {
    default: { value: column },
    xs: { value: columnXs },
    sm: { value: columnSm },
    md: { value: columnMd },
    lg: { value: columnLg },
  }

  const gaps: PropSet = {
    default: { value: gap },
    xs: { value: gapXs },
    sm: { value: gapSm },
    md: { value: gapMd },
    lg: { value: gapLg },
  }

  const getColumnClass = () =>
    styles[`column-${propForScreenSize(size, columns)}`]

  const getGapValue = () => propForScreenSize(size, gaps)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateSize = () => setSize(ScreenWidth(window))
      window.addEventListener('resize', updateSize)
      return () => window.removeEventListener('resize', updateSize)
    }
  }, [])

  useEffect(() => {
    return window && setSize(ScreenWidth(window))
  })

  return (
    <div
      data-testid='Grid'
      className={[styles.Grid, getColumnClass(), className].join(' ')}
      style={{ ...style, gap: `${getGapValue()}px` }}
      role={role}
      {...props}
    >
      {children}
    </div>
  )
}

export default Grid

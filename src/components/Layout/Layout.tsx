import React, { FC, useEffect, useState } from 'react'
import styles from './Layout.module.scss'
import { LayoutProps } from './Layout.types'
import { propForScreenSize, ScreenWidth } from '../../utils/helpers'

export const Layout: FC<LayoutProps> = ({
  direction = 'row',
  directionXs = direction,
  directionSm = directionXs,
  directionMd = directionSm,
  directionLg = directionMd,
  align = 'flex-start',
  alignXs = align,
  alignSm = alignXs,
  alignMd = alignSm,
  alignLg = alignMd,
  justify = 'flex-start',
  justifyXs = justify,
  justifySm = justifyXs,
  justifyMd = justifySm,
  justifyLg = justifyMd,
  wrap = 'nowrap',
  wrapXs = wrap,
  wrapSm = wrapXs,
  wrapMd = wrapSm,
  wrapLg = wrapMd,
  children,
  style,
  className,
  role,
  ...props
}) => {
  const [size, setSize] = useState<number>(0)
  const directions = {
    default: { value: direction },
    xs: { value: directionXs },
    sm: { value: directionSm },
    md: { value: directionMd },
    lg: { value: directionLg },
  }
  const alignments = {
    default: { value: align },
    xs: { value: alignXs },
    sm: { value: alignSm },
    md: { value: alignMd },
    lg: { value: alignLg },
  }
  const justifications = {
    default: { value: justify },
    xs: { value: justifyXs },
    sm: { value: justifySm },
    md: { value: justifyMd },
    lg: { value: justifyLg },
  }
  const wraps = {
    default: { value: wrap },
    xs: { value: wrapXs },
    sm: { value: wrapSm },
    md: { value: wrapMd },
    lg: { value: wrapLg },
  }

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

  const getDirectionClass = () => {
    return styles[propForScreenSize(size, directions)]
  }

  const getAlignmentClass = () => {
    return styles[`align--${propForScreenSize(size, alignments)}`]
  }

  const getJustificationClass = () => {
    return styles[`justify--${propForScreenSize(size, justifications)}`]
  }

  const getWrapClass = () => {
    return styles[`wrap--${propForScreenSize(size, wraps)}`]
  }

  return (
    <div
      style={style}
      className={[
        styles.Layout,
        getDirectionClass(),
        getAlignmentClass(),
        getJustificationClass(),
        getWrapClass(),
        className,
      ].join(' ')}
      data-testid='Layout'
      role={role}
      {...props}
    >
      <>{children}</>
    </div>
  )
}

export default Layout

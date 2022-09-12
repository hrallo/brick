import React, { FC, useRef, useLayoutEffect, useState, useEffect } from 'react'

import '../../styles/paver.scss'

import styles from './Tooltip.module.scss'
import { TooltipProps } from './Tooltip.types'

const Tooltip: FC<TooltipProps> = ({
  data,
  titleColor = 'navy-700',
  coordinates = { top: 0, left: 0 },
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState(coordinates)

  useEffect(() => {
    const left =
      coordinates?.left -
      (ref?.current?.clientWidth ? ref.current?.clientWidth / 2 : 70)
    const top = coordinates?.top - (ref?.current?.clientHeight ?? 90) - 8

    !isNaN(left) && !isNaN(top) && setCoords({ top, left })
  }, [coordinates])

  return (
    <div
      className={[
        styles.Tooltip,
        'shadow-elevation-1 border-radius-md padding-lg padding-right-xl padding-left-xl',
      ].join(' ')}
      data-testid='Tooltip'
      ref={ref}
      style={{ top: coords.top, left: coords.left }}
    >
      {data?.title && (
        <div
          className={[
            styles.title,
            `caps text-align-center border-bottom-monochrome-500 padding-bottom-sm color-${titleColor}`,
          ].join(' ')}
        >
          {data.title}
        </div>
      )}
      <div
        className={[
          styles.content,
          'subheading3 text-align-center color-monochrome-1100',
          data?.title ? 'padding-top-lg' : '',
        ].join(' ')}
      >
        {data?.content}
      </div>
    </div>
  )
}

export default Tooltip

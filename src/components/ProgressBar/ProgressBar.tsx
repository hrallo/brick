import React, { FC } from 'react'
import styles from './ProgressBar.module.scss'
import '../../styles/paver.scss'
import { ProgressBarProps } from './ProgressBar.types'
import Layout from '../Layout'
import { useSpring, animated } from 'react-spring'

export const ProgressBar: FC<ProgressBarProps> = ({
  className,
  progress = 0,
}) => {
  const transition = useSpring({ width: `${progress}%` })

  return (
    <div className={className}>
      <Layout
        className={[styles.ProgressBar, 'background-color-white'].join(' ')}
        data-testid='ProgressBar'
        align='stretch'
      >
        <animated.div
          className={[
            styles.bar,
            'background-color-navy-700',
            'color-white',
            'caps-small',
            'padding-right-md',
          ].join(' ')}
          style={{ ...transition }}
        >
          {progress}%
        </animated.div>
      </Layout>
    </div>
  )
}

export default ProgressBar

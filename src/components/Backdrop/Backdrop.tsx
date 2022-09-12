import React, { FC } from 'react'
import styles from './Backdrop.module.scss'
import '../../styles/paver.scss'
import { BackdropProps } from './Backdrop.types'
import { useTransition, animated } from 'react-spring'

export const Backdrop: FC<BackdropProps> = ({ open, onClick }) => {
  const transitions = useTransition(open, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return transitions(
    (style, open) =>
      open && (
        <animated.div
          style={style}
          className={styles.Backdrop}
          onClick={onClick}
        />
      )
  )
}

export default Backdrop

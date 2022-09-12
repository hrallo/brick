import React, { FC, useEffect, useState } from 'react'
import '../../styles/paver.scss'
import { FadeInOutProps } from './FadeInOut.types'
import { useTransition, animated } from 'react-spring'

export const FadeInOut: FC<FadeInOutProps> = ({
  visible,
  children,
  delayOut,
  delayIn,
  className,
  id,
  role,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(visible)

  /**
   * Simple fade in/out transition definition
   */
  const transitions = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  /**
   * Timeout to trigger a fadeout
   */
  const delayFadeOut = () =>
    setTimeout(() => {
      setIsVisible(false)
    }, delayOut)

  /**
   * Timeout to trigger a fadein
   */
  const delayFadeIn = () =>
    setTimeout(() => {
      setIsVisible(true)
    }, delayIn)

  /**
   * Triggers a delayed or immediate fadeIn
   */
  const fadeIn = () => (delayIn ? delayFadeIn() : setIsVisible(true))

  /**
   * Triggers a delayed or immediate fadeOut
   */
  const fadeOut = () => (delayOut ? delayFadeOut() : setIsVisible(false))

  useEffect(() => {
    visible ? fadeIn() : fadeOut()
  }, [visible])

  return transitions(
    (style, visible) =>
      visible && (
        <animated.div
          style={style}
          className={className}
          id={id}
          role={role}
          {...props}
        >
          {children}
        </animated.div>
      )
  )
}

export default FadeInOut

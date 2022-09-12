import React, { FC, useEffect, useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import Backdrop from '../Backdrop'
import styles from './Modal.module.scss'
import { ModalProps } from './Modal.types'

export const Modal: FC<ModalProps> = ({
  title,
  children,
  open = false,
  className,
  onEsc,
  onExternalClick,
  size,
  style,
}) => {
  useEffect(() => {
    document.addEventListener('keyup', handleKeydown, false)
    return () => {
      document.removeEventListener('keyup', handleKeydown, false)
    }
  }, [open])

  const handleKeydown = (e: KeyboardEvent) => {
    if (!open) {
      return
    }

    // trigger on esc function if provided
    if (e.key === 'Escape') {
      return onEsc && onEsc()
    }

    // return focus to modal
    if (!el.current?.contains(document.activeElement)) {
      return el.current?.focus()
    }
  }

  const el = useRef<HTMLDivElement>(null)

  const modalTransitions = useTransition(open, {
    from: { opacity: 0, transform: 'translateY(-40px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-40px)' },
  })

  return (
    <>
      <Backdrop open={open} onClick={onExternalClick} />

      {modalTransitions(
        (transitions, open) =>
          open && (
            <animated.div
              style={{ ...transitions, ...style }}
              ref={el}
              className={[styles.Modal].join(' ')}
              data-testid='Modal'
              aria-labelledby={`${title}`}
              tabIndex={open ? 0 : -1}
              role='dialog'
              aria-modal='true'
            >
              <div
                className={[
                  styles.content,
                  'shadow-elevation-1',
                  'border-radius-lg',
                  'padding-xxl',
                  'background-color-white',
                  className,
                  size && styles[size],
                ].join(' ')}
              >
                {children}
              </div>
            </animated.div>
          )
      )}
    </>
  )
}

export default Modal

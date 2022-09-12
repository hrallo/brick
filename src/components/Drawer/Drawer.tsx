import React, { FC, useEffect, useRef } from 'react'
import Layout from '../Layout'
import styles from './Drawer.module.scss'
import { DrawerProps } from './Drawer.types'
import IconButton from '../IconButton'
import Backdrop from '../Backdrop'
import { animated, useTransition } from 'react-spring'

export const Drawer: FC<DrawerProps> = ({
  title,
  displayTitle,
  children,
  open = false,
  closeEl = (
    <IconButton ariaLabel='close' variant='transparent' icon='x'></IconButton>
  ),
  onEsc,
  onExternalClick,
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

    // return focus to drawer
    if (!el.current?.contains(document.activeElement)) {
      return el.current?.focus()
    }
  }

  const el = useRef<HTMLDivElement>(null)

  const drawerTransitions = useTransition(open, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(100%)' },
  })

  return (
    <>
      <Backdrop open={open} onClick={onExternalClick} />

      {drawerTransitions(
        (transitions, open) =>
          open && (
            <animated.div
              style={transitions}
              ref={el}
              className={[styles.Drawer].join(' ')}
              data-testid='Drawer'
              aria-labelledby={`${title}`}
              tabIndex={open ? 0 : -1}
              role='dialog'
              aria-modal='true'
            >
              <Layout
                className={styles.titleBar}
                justify={displayTitle ? 'space-between' : 'flex-end'}
              >
                {displayTitle}
                {closeEl}
              </Layout>
              <div className={styles.scroller}>{children}</div>
            </animated.div>
          )
      )}
    </>
  )
}

export default Drawer

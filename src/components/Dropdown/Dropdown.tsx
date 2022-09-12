import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.scss'
import '../../styles/paver.scss'
import { DropdownProps } from './Dropdown.types'
import IconButton from '../IconButton'
import FadeInOut from '../FadeInOut'

export const Dropdown: FC<DropdownProps> = ({
  title,
  toggleElement,
  toggleIcon = 'more-horizontal',
  children,
  open = false,
  onEsc,
  onExternalClick,
  anchorHorizontal = 'left',
  anchorVertical = 'bottom',
  className,
  closeOnClick = true,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const menuState = () => (toggleElement ? open : isOpen)
  const el = useRef<HTMLDivElement>(null)

  const handleKeydown = (e: KeyboardEvent) => {
    if (!menuState()) {
      return
    }

    if (e.key === 'Escape') {
      if (toggleElement) {
        onEsc && onEsc()
      } else {
        setIsOpen(false)
      }
    }
  }

  const handleClick = (event: MouseEvent) => {
    if (!menuState()) {
      return
    }

    if (closeOnClick) {
      setIsOpen(false)
    } else {
      if (el?.current && !el?.current.contains(event?.target as HTMLElement)) {
        if (toggleElement) {
          onExternalClick && onExternalClick()
        } else {
          setIsOpen(false)
        }
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [handleClick])

  useEffect(() => {
    document.addEventListener('keyup', handleKeydown, false)
    return () => {
      document.removeEventListener('keyup', handleKeydown, false)
    }
  }, [handleKeydown])

  return (
    <div
      ref={el}
      className={[styles.Dropdown, className].join(' ')}
      data-testid='Dropdown'
    >
      {toggleElement ? (
        toggleElement
      ) : (
        <IconButton
          aria-haspopup={'menu'}
          ariaLabel={`open ${title} dropdown`}
          icon={toggleIcon}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={menuState() ? 'true' : 'false'}
        />
      )}
      <FadeInOut visible={menuState()}>
        <div
          role='menu'
          className={[
            styles.dropdownMenu,
            styles[anchorHorizontal],
            styles[anchorVertical],
            'border-monochrome-500',
            'border-radius-lg',
            'background-color-white',
            'padding-xl',
          ].join(' ')}
        >
          {children}
        </div>
      </FadeInOut>
    </div>
  )
}

export default Dropdown

import React, { FC, useState } from 'react'
import styles from './Accordion.module.scss'
import '../../styles/paver.scss'
import { AccordionProps } from './Accordion.types'
import Icon from '../Icon'

export const Accordion: FC<AccordionProps> = ({
  heading,
  open,
  openIcon = 'minus',
  closeIcon = 'plus',
  children,
  style,
  className,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(open || false)
  const getIcon = isOpen ? openIcon : closeIcon

  return (
    <div
      className={[styles.Accordion, className].join(' ')}
      data-testid='Accordion'
      style={style}
    >
      <>
        <button
          aria-expanded={isOpen ? 'true' : 'false'}
          className={styles.trigger}
          aria-controls={heading}
          onClick={() => {
            setIsOpen(!isOpen)
            onToggle && onToggle(heading, isOpen)
          }}
        >
          <div className='body2'>{heading}</div>
          <Icon size='sm' icon={getIcon} />
        </button>
        <div
          aria-labelledby={heading}
          hidden={!isOpen}
          style={{ display: isOpen ? 'block' : 'none' }}
          className={'margin-top-sm'}
        >
          {children}
        </div>
      </>
    </div>
  )
}

export default Accordion

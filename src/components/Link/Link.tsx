import React, { FC } from 'react'
import styles from './Link.module.scss'
import { LinkProps } from './Link.types'

export const Link: FC<LinkProps> = ({
    className,
    link,
    text,
}) => (
  <a
    data-testid='Link'
    href={link}
    className={[styles.Link, 'link', className].join(' ')}
  >
    {text}
  </a>
)

export default Link

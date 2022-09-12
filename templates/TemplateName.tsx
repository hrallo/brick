import React, { FC } from 'react'
import styles from './TemplateName.module.scss'
import '../../styles/paver.scss'
import { TemplateNameProps } from './TemplateName.types'

export const TemplateName: FC<TemplateNameProps> = () => (
  <div className={styles.TemplateName} data-testid='TemplateName'></div>
)

export default TemplateName

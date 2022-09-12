import React, { FC } from 'react'
import styles from './StepTracker.module.scss'
import '../../styles/paver.scss'
import Layout from '../Layout'
import { StepTrackerProps } from './StepTracker.types'

export const StepTracker: FC<StepTrackerProps> = ({
    children,
    layout = 'row'
}) => (
    <Layout className={styles.StepTracker} justify='center' data-testid='StepTracker'>
        <Layout justify='space-evenly' className={[styles.stepTrackerStepContainer, styles[layout]].join(' ')} direction={layout}>{children}</Layout>
    </Layout>

)

export default StepTracker

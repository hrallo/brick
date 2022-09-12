import React, { FC } from 'react'
import styles from './StepTrackerStep.module.scss'
import '../../styles/paver.scss'
import { StepTrackerStepProps } from './StepTrackerStep.types'

export const StepTrackerStep: FC<StepTrackerStepProps> = ({
    color = 'green-500',
    completed,
    stepNumber,
    title
}) => {
    const getColors = () => completed ? `color-white background-color-${color} border-${color}` : `color-${color} background-color-white border-${color}`

    return (
        <div className={[styles.StepTrackerStep, 'subheading1'].join(' ')} data-testid='StepTrackerStep'>
            <div className={[styles.stepIndicator, 'border-radius-full button text-align-center', getColors()].join(' ')}>{stepNumber}</div>
            <div className='padding-left-md'>{title}</div>
        </div>
    )
} 

export default StepTrackerStep

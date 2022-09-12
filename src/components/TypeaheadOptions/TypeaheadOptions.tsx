import React, { FC } from 'react'
import styles from './TypeaheadOptions.module.scss'
import '../../styles/paver.scss'
import { TypeaheadOptionsProps } from './TypeaheadOptions.types'
import * as R from 'ramda'

export const TypeaheadOptions: FC<TypeaheadOptionsProps> = ({
  options = [],
  onSelectOption,
  onMouseOut,
  onMouseOver,
  visible,
  style,
}) => (
  <div
    data-testid='TypeaheadOptions'
    className={[
      styles.TypeaheadOptions,
      'background-color-white',
      'border-radius-md',
      'border-monochrome-600',
    ].join(' ')}
    style={{
      display: visible ? 'block' : 'none',
      ...style,
    }}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
  >
    {R.map((option) => {
      return (
        <button
          className={[
            styles.option,
            option.selected ? styles.selected : styles.unselected,
            'padding-top-md',
            'padding-bottom-md',
            'padding-right-lg',
            'padding-left-lg',
          ].join(' ')}
          key={R.indexOf(option, options)}
          onClick={() => onSelectOption(option)}
        >
          <div className='body1 color-monochrome-700'>{option.name}</div>
          {option?.description && (
            <div className='body2 color-monochrome-600'>
              {option.description}
            </div>
          )}
        </button>
      )
    }, options)}
  </div>
)

export default TypeaheadOptions

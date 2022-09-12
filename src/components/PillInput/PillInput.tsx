import React, { FC, useEffect, useState } from 'react'
import styles from './PillInput.module.scss'
import '../../styles/paver.scss'
import { PillInputProps } from './PillInput.types'
import Pill from '../Pill/Pill'
import { indexOf, isEmpty, map, reject, split, trim } from 'ramda'

export const PillInput: FC<PillInputProps> = ({
  variant = 'primary',
  pillVariant,
  value = [],
  className,
  style,
  required,
  errors = [],
  onChange,
  placeholder,
  name,
  onBlur,
}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [pillList, setPillList] = useState<Array<string>>(value)

  /**
   * @param list string[]
   * @returns string[] with empty string values removed
   */
  const rejectEmpty = (list: string[]) => reject((x) => isEmpty(x), list)

  /**
   * Depending on the last char, a new pill is added or the input value is changed
   * @param event Input event
   */
  const updatePillList = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    value.indexOf(',') > -1 ? addPill(value) : setInputValue(value)
  }

  /**
   * Updates the pill list with any number of strings separated by a comma
   * Clears the current input value
   * @param value string
   */
  const addPill = (value: string) => {
    setPillList((currentValue) => [...currentValue, ...pillsFromString(value)])
    setInputValue('')
  }

  /**
   * @param value string
   * @returns a string array separated by commas
   */
  const pillsFromString = (value: string) => {
    const list = split(',', trim(value))
    return rejectEmpty(list)
  }

  /**
   * Removes a pill at the provided idx of the pillList
   * @param idx index of pill to be removed
   */
  const removePill = (idx: number) => {
    const updated = [...pillList.slice(0, idx), ...pillList.slice(idx + 1)]
    setPillList(updated)
  }

  /**
   * Remove pill on delete, add pill on enter
   * @param event KeyboardEvent
   */
  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.code === 'Backspace' &&
      inputValue === '' &&
      removePill(pillList.length - 1)
    event.code === 'Enter' && addPill(inputValue)
  }

  /**
   * When the pillList changes, send that value to the consumer
   */
  useEffect(() => {
    onChange && onChange(pillList)
  }, [pillList])

  return (
    <div
      className={[styles.PillInput, className].join(' ')}
      style={style}
      data-testid='PillInput'
    >
      <div
        className={[
          styles.falseInput,
          styles[`input-${variant}`],
          errors.length > 0 ? styles.invalid : styles.valid,
          'body1',
        ].join(' ')}
      >
        {pillList.map((pill, idx) => (
          <Pill
            key={idx}
            label={pill}
            icon={'x'}
            className={'margin-right-xs margin-bottom-xs'}
            onClick={() => removePill(idx)}
            variant={pillVariant}
          />
        ))}
        <input
          placeholder={placeholder}
          value={inputValue}
          className={[styles.hiddenInput, 'body1'].join(' ')}
          onChange={updatePillList}
          onKeyDown={keyDownHandler}
          aria-label={name || placeholder || 'Tag Input'}
          name={name || placeholder}
          onBlur={(e) => onBlur && onBlur(pillList, e.target.value)}
        />
      </div>
      {required && (
        <div className='body2 margin-top-xxs color-monochrome-600'>
          Required Field<sup>*</sup>
        </div>
      )}
      {map((error) => {
        return (
          <div
            className='body1 color-red-700 margin-top-md'
            key={indexOf(error, errors)}
          >
            {error}
          </div>
        )
      }, errors)}
    </div>
  )
}

export default PillInput

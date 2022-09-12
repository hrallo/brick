import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Typeahead.module.scss'
import '../../styles/paver.scss'
import { TypeaheadProps } from './Typeahead.types'
import TextInput from '../TextInput'
import * as R from 'ramda'
import { TypeaheadOption } from '../TypeaheadOptions/TypeaheadOptions.types'
import TypeaheadOptions from '../TypeaheadOptions'
import Icon from '../Icon'

export const Typeahead: FC<TypeaheadProps> = ({
  dataOptions = [],
  placeholder,
  value,
  minFilterChars = 2,
  showOptionsOnFocus,
  onSelectOption,
  inputVariant,
  className,
  icon,
  iconColor,
}) => {
  const el = useRef<HTMLDivElement>(null)
  const [searchString, setSearchString] = useState<string>(value?.name || '')
  const [optionsOpen, setOptionsOpen] = useState(false)

  useEffect(() => {
    document.addEventListener('keyup', handleKeydown, false)
    return () => {
      document.removeEventListener('keyup', handleKeydown, false)
    }
  }, [optionsOpen])

  const handleKeydown = (e: KeyboardEvent) => {
    if (!optionsOpen) {
      return
    }

    const input = el.current?.querySelector('input')

    // return focus to input
    if (!el.current?.contains(document.activeElement)) {
      setOptionsOpen(false)
      return input?.focus()
    }

    // hide options
    if (e.key === 'Escape') {
      setOptionsOpen(false)
      return input?.focus()
    }
  }

  const getOptions = () => {
    return !searchString ? R.uniq(dataOptions) : filteredOptions(searchString)
  }

  const filteredOptions = (searchString: string) => {
    const stringMatch = (option: TypeaheadOption) => {
      return R.includes(searchString.toLowerCase(), option.name.toLowerCase())
    }
    
    return (searchString?.length >= minFilterChars || showOptionsOnFocus)
        ? R.filter(stringMatch, R.uniq(dataOptions))
        : []  
  }

  return (
    <div
      ref={el}
      className={[styles.Typeahead, className].join(' ')}
      data-testid='Typeahead'
    >
      <div className={icon ? styles.iconWrapper : styles.wrapper}>
        <TextInput
          onChange={(value) => {
            getOptions().length > 0 && setOptionsOpen(true)
            setSearchString(value)
          }}
          onFocus={(e) => showOptionsOnFocus && setOptionsOpen(true)}
          style={{
            paddingRight: icon && '40px',
          }}
          value={searchString}
          placeholder={placeholder}
          variant={inputVariant}
        />
        {icon && <Icon icon={icon} className={styles.icon} color={iconColor} />}
      </div>
      <TypeaheadOptions
        options={getOptions()}
        visible={getOptions().length > 0 && optionsOpen}
        onSelectOption={(option) => {
          setSearchString(option.name)
          onSelectOption && onSelectOption(option)
          setOptionsOpen(false)
        }}
        onMouseOver={(e) => showOptionsOnFocus && setOptionsOpen(true)}
        onMouseOut={(e) => showOptionsOnFocus && setOptionsOpen(false)}
      />
    </div>
  )
}

export default Typeahead

import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './TypeaheadExternal.module.scss'
import '../../styles/paver.scss'
import { TypeaheadExternalProps } from './TypeaheadExternal.types'
import TextInput from '../TextInput'
import * as R from 'ramda'
import TypeaheadOptions from '../TypeaheadOptions'

export const TypeaheadExternal: FC<TypeaheadExternalProps> = ({
  dataOptions = [],
  placeholder,
  value,
  onSelectOption,
  onChange,
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

  return (
    <div
      ref={el}
      className={styles.TypeaheadExternal}
      data-testid='TypeaheadExternal'
    >
      <TextInput
        style={{ position: 'relative', zIndex: 1 }}
        onChange={(data) => {
          setOptionsOpen(true)
          setSearchString(data)
          onChange && onChange(data)
        }}
        value={searchString}
        placeholder={placeholder}
      />
      <TypeaheadOptions
        visible={dataOptions.length > 0 && optionsOpen}
        options={dataOptions}
        onSelectOption={(option) => {
          setSearchString(option.name)
          onSelectOption && onSelectOption(option)
          setOptionsOpen(false)
        }}
      />
    </div>
  )
}

export default TypeaheadExternal

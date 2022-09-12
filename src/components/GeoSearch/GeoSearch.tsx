import React, { FC, useState } from 'react'
import styles from './GeoSearch.module.scss'
import '../../styles/paver.scss'
import { GeoSearchProps } from './GeoSearch.types'
import TextInput from '../TextInput'
import * as R from 'ramda'
import { Result } from '@mapbox/mapbox-gl-geocoder'
import Icon from '../Icon'

export const GeoSearch: FC<GeoSearchProps> = ({
  onSelectResult,
  placeholder,
  types = 'address,postcode,place',
  country,
}) => {
  const [value, setValue] = useState('')
  const [results, setResults] = useState<Result[]>([])

  const getCoordinates = async (query: string) => {
    const res = await fetch(
      `https://api.tiles.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        query
      )}.json?access_token=${
        process.env.MAPBOX_ACCESS_TOKEN
      }${typeParams()}${countryParams()}`
    )

    try {
      const json = await res.json()
      return setResults(json?.features)
    } catch (error) {
      console.error(error)
    }
  }

  const typeParams = () => {
    return types ? `&types=${types}` : ''
  }

  const countryParams = () => {
    return country ? `&country=${country}` : ''
  }

  const setResult = (result: Result) => {
    setValue(result.place_name)
    setResults([])
    onSelectResult && onSelectResult(result)
  }

  return (
    <div className={styles.GeoSearch} data-testid='GeoSearch'>
      <div className={styles.GeoSeachInputContainer}>
        <TextInput
          className={styles.GeoSearchInput}
          placeholder={placeholder}
          onChange={(data) => {
            setValue(data)
            data.length > 3 ? getCoordinates(data) : setResults([])
          }}
          value={value}
        />
        {!value ? (
          <Icon
            icon='search'
            size='md'
            color='monochrome-600'
            className={styles.GeoSearchInputIcon}
          ></Icon>
        ) : (
          <button
            className={styles.GeoSearchInputIcon}
            onClick={() => {
              setValue('')
              setResults([])
            }}
          >
            <Icon icon='x' size='md' color='monochrome-600'></Icon>
          </button>
        )}
      </div>
      {results.length > 0 && (
        <div className={styles.results}>
          {R.map((result) => {
            return (
              <button
                className={styles.result}
                key={result.id}
                onClick={() => setResult(result)}
              >
                {result.place_name}
              </button>
            )
          }, results)}
        </div>
      )}
    </div>
  )
}

export default GeoSearch

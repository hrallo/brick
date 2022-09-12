import { Result } from '@mapbox/mapbox-gl-geocoder'

export interface GeoSearchProps {
  placeholder?: string
  onSelectResult?: (result: Result) => void
  types?: string
  country?: string
}

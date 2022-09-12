import { MapboxEvent } from 'mapbox-gl'
import React from 'react';
import { ViewStateChangeEvent } from 'react-map-gl'
import { MapLayer } from './MapLayer'

export type Viewport = { longitude?: any; latitude?: any; zoom?: any }

export type MapBounds = {
  northWestLat: number
  northWestLng: number
  southEastLat: number
  southEastLng: number
}

export interface MapMarker<DataType = any> {
  id: string
  data: DataType
  position: [number, number]
}

export interface MapRef {
  fitBounds: (bounds: {
    northWestLat: number,
    northWestLng: number,
    southEastLat: number,
    southEastLng: number,
  }) => void
  fitMarkerBounds: (layerId?: string) => void
  getLayer: (layerId: string) => MapLayer | undefined
  redrawLayer: (layerId?: string) => void
}

export interface MapProps {
  ref: React.Ref<MapRef>
  aspectRatio?: '1-1' | '16-9'
  onMarkerClick?: (e: MapboxEvent<MouseEvent>, m: any) => void
  onMoveEnd?: (e: ViewStateChangeEvent) => void
  onPopupClose?: () => void
  onPopupClick?: () => void
  onUpdateDataToMap?: (bounds: MapBounds) => void
  focusLocation?: {
    latitude: number
    longitude: number
  }
  className?: string
  initialZoom?: number
  mapboxToken?: string
  loading?: boolean
  progress?: {
    total: number,
    loaded: number,
  },
  layers: MapLayer[],
  activeMarker?: MapMarker,
}

import React, { FC, Ref, useEffect, useRef, useState } from 'react'
import styles from './Map.module.scss'
import '../../styles/paver.scss'
import {
  MapBounds,
  MapMarker,
  MapProps,
  MapRef as PaverMapRef,
  Viewport,
} from './Map.types'
import {
  Map as ReactMapGL,
  NavigationControl,
  MapRef,
  ViewStateChangeEvent,
  ViewState,
  MapboxMap,
  Popup,
} from 'react-map-gl'
import { Button, Layout, Loader } from '..'
import { MapView, WebMercatorViewport } from '@deck.gl/core/typed'
import 'mapbox-gl/dist/mapbox-gl.css'
import { MapboxOverlay, MapboxOverlayProps } from '@deck.gl/mapbox/typed'
import { useControl } from 'react-map-gl'
import { find, flatten } from 'ramda'
import ProgressBar from '../ProgressBar'
import FadeInOut from '../FadeInOut'

function DeckGLOverlay(props: MapboxOverlayProps) {
  const overlay = useControl<MapboxOverlay>(() => new MapboxOverlay(props))
  overlay.setProps({
    ...props,
    views: new MapView({ orthographic: true }),
  })
  return null
}

const Map: FC<MapProps> = React.forwardRef(
  (
    {
      aspectRatio,
      onMarkerClick,
      onMoveEnd,
      onPopupClose,
      onPopupClick,
      onUpdateDataToMap,
      focusLocation,
      className,
      initialZoom = 3.8,
      mapboxToken,
      loading = true,
      progress = { total: 0, loaded: 0 },
      layers = [],
      activeMarker,
    },
    ref: Ref<PaverMapRef>
  ) => {
    const [mapLoading, setMapLoading] = useState(true)
    const [viewState] = useState<ViewState>({
      latitude: focusLocation?.latitude || 37.0902,
      longitude: focusLocation?.longitude || -95.7129,
      zoom: initialZoom,
      bearing: 0,
      pitch: 0,
      padding: { top: 0, bottom: 0, left: 0, right: 0 },
    })
    const mapRef = useRef<MapRef>(null)
    const [viewPort, setViewPort] = useState<Viewport>()

    /**
     * Updates the map to view all provided markers
     * @param markers
     */
    const fitMarkerBounds = () => {
      const allMarkers = flatten(
        layers.map((layer) => Object.values(layer.markers))
      )
      if (!allMarkers.length) return

      setViewPort(getMarkerViewPort(allMarkers))
    }

    const fitBounds = ({
      northWestLat,
      northWestLng,
      southEastLat,
      southEastLng,
    }: {
      northWestLat: number
      northWestLng: number
      southEastLat: number
      southEastLng: number
    }) => {
      const viewport = new WebMercatorViewport({
        width: getMapWidth(),
        height: getMapHeight(),
      }).fitBounds(
        [
          [northWestLng, northWestLat],
          [southEastLng, southEastLat],
        ],
        { padding: 100 }
      )
      setViewPort(viewport)
    }

    const redrawLayer = (layerId?: string) => {
      const layer = getLayer(layerId)
      if (!layer) return

      layer.setNeedsUpdate()
    }

    const getLayer = (layerId?: string) => {
      if (layerId) return find((layer) => layer.id === layerId, layers)
      else if (layers.length) return layers[0]
      else return undefined
    }

    React.useImperativeHandle(ref, () => ({
      // appendMarkers,
      fitBounds,
      fitMarkerBounds,
      getLayer,
      redrawLayer,
    }))

    /**
     *
     * @returns the current mapbox object
     */
    const getMap = () => mapRef.current?.getMap() as MapboxMap

    /**
     *
     * @returns the current map container
     */
    const getMapContainer = () => getMap()?.getContainer()

    /**
     * Checks to see if the map is rendering within the component or if data is loading external to the component via prop
     * @param internalLoading
     * @param externalLoading
     * @returns boolean
     */
    const getLoading = (
      internalLoading: boolean,
      externalLoading: boolean
    ): boolean => {
      return internalLoading || externalLoading
    }

    /**
     * Checks to see if any provided marker is visible in the map bounds
     * @param marker
     * @returns boolean
     */
    const inBounds = (marker: MapMarker): boolean =>
      getMap().getBounds().contains(marker.position)

    /**
     * Will update the map view to a specified marker
     * @param marker
     */
    const zoomToMarker = (marker: MapMarker) => {
      marker &&
        getMap().easeTo({
          center: marker.position,
        })
    }

    /**
     *
     * @returns the map width needed for boundary updates
     */
    const getMapWidth = () => {
      return getMapContainer()?.clientWidth || 800
    }

    /**
     *
     * @returns the map height needed for boundar updates
     */
    const getMapHeight = () => {
      return getMapContainer()?.clientHeight || 800
    }

    /**
     *
     * @param points Marker[]
     * @returns a new viewport object with boundaries drawn around provided markers
     */
    const getMarkerViewPort = (points?: MapMarker[]) => {
      if (!points) {
        if (!layers.length) return
        points = Object.values(layers[0].markers)
      }

      const pointsLong: number[] = points.map((point) => point.position[0])
      const pointsLat: number[] = points.map((point) => point.position[1])
      const cornersLongLat: [[number, number], [number, number]] = [
        [Math.min(...pointsLong), Math.min(...pointsLat)],
        [Math.max(...pointsLong), Math.max(...pointsLat)],
      ]

      const viewport = new WebMercatorViewport({
        width: getMapWidth(),
        height: getMapHeight(),
      }).fitBounds(cornersLongLat, { padding: 100 })
      const { longitude, latitude, zoom } = viewport
      return { longitude, latitude, zoom }
    }

    /**
     *
     * @returns current NW and SW lat and long
     */
    const getBoxBounds = (): MapBounds => {
      const bounds = getMap()?.getBounds()
      const northWest = bounds.getNorthWest()
      const southEast = bounds.getSouthEast()
      return {
        northWestLat: northWest.lat,
        northWestLng: northWest.lng,
        southEastLat: southEast.lat,
        southEastLng: southEast.lng,
      }
    }

    /**
     *
     * @param markers
     * @returns a boolean if markers are supplied via props
     */
    const hasMarkers = (markers: MapMarker[]): boolean => markers?.length > 0

    const onDeckClick = (info: any, e: any) => {
      onMarkerClick && onMarkerClick(e, info.object)
    }

    const getProgress = () => {
      let percentage = 0
      if (progress.loaded < progress.total) {
        percentage = Math.floor((progress.loaded / progress.total) * 100)
      } else {
        percentage = 100
      }
      return percentage
    }

    useEffect(() => {
      // Zoom the map view to the active marker when it's outside the map bounds
      activeMarker && !inBounds(activeMarker) && zoomToMarker(activeMarker)
    }, [activeMarker])

    return (
      <div className={[styles.wrapper, className].join(' ')}>
        <div
          className={[
            styles.Map,
            aspectRatio ? styles[`aspect-${aspectRatio}`] : styles.fill,
          ].join(' ')}
          data-testid='Map'
        >
          <ReactMapGL
            initialViewState={viewState}
            {...viewPort}
            ref={mapRef}
            mapboxAccessToken={mapboxToken || process.env.MAPBOX_ACCESS_TOKEN}
            style={{ width: '100%', height: '100%' }}
            mapStyle='mapbox://styles/mapbox/light-v9'
            attributionControl={false}
            onMove={(e: ViewStateChangeEvent) => setViewPort(e.viewState)}
            onMoveEnd={(e: ViewStateChangeEvent) => onMoveEnd && onMoveEnd(e)}
            onLoad={() => {
              setMapLoading(false)
            }}
            pitchWithRotate={false}
          >
            <DeckGLOverlay layers={layers} onClick={onDeckClick} />
            {activeMarker && (
              <Popup
                latitude={activeMarker.position[1] || 0}
                longitude={activeMarker.position[0] || 0}
                closeButton={true}
                closeOnClick={false}
                onClose={onPopupClose}
                style={{
                  padding: 0,
                  zIndex: 999,
                }}
                offset={5}
              >
                <button
                  className={[
                    styles.popUpContent,
                    'button',
                    'text-transform-uppercase',
                  ].join(' ')}
                  onClick={onPopupClick}
                >
                  {activeMarker?.data?.data?.name}
                </button>
              </Popup>
            )}

            <NavigationControl
              style={{ marginTop: '20px', marginRight: '20px' }}
            />
          </ReactMapGL>

          <Layout className={styles.mapButtonWrapper}>
            <Button
              icon='pie-chart'
              iconSize='md'
              variant='primary-outline'
              className={[styles.mapUpdateButton, 'margin-right-sm'].join(' ')}
              label='Update Data to Map'
              onClick={() => {
                onUpdateDataToMap && onUpdateDataToMap(getBoxBounds())
              }}
            />
            <Button
              disabled={
                layers?.length
                  ? Object.keys(layers[0].markers).length <= 0
                  : true
              }
              icon='crosshair'
              iconSize='md'
              variant='primary-outline'
              className={styles.mapUpdateButton}
              label='Zoom Map To Data'
              onClick={() => {
                setViewPort(getMarkerViewPort())
              }}
            />
          </Layout>

          {getLoading(mapLoading, loading) && (
            <Layout
              className={styles.MapLoader}
              align='center'
              justify='center'
              style={{ backgroundColor: 'rgba(255, 255, 255, .8)', zIndex: 10 }}
            >
              <Loader />
            </Layout>
          )}

          <FadeInOut
            className={styles.loader}
            visible={progress.loaded < progress.total}
            delayOut={800}
          >
            <ProgressBar progress={getProgress()} />
          </FadeInOut>
        </div>
      </div>
    )
  }
)

export default Map
